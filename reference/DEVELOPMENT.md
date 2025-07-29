# FoundersFleet Development Guide (Single Source of Truth)

Welcome aboard!  
This document explains **everything you need to get a local instance of FoundersFleet running** the same way it will run in CI / production.  Treat it as canonical—any missing or outdated information should be updated here first.

---

## TL;DR (Happy-Path)

```bash
git clone git@github.com:your-org/foundersfleet.git
cd foundersfleet

# **one-liner** that fixes creds, wipes previous artefacts, rebuilds containers, seeds DB, starts stack
./rebuild_all.sh

# first time only – add hosts to /etc/hosts
./setup_hosts.sh           # writes 127.0.0.1 foundersfleet.test *.foundersfleet.test
```

Browse to:

* http://foundersfleet.test (nginx reverse proxy)
* http://localhost:3000      (Rails directly – bypasses nginx)

---

## 1. Prerequisites

| Tool | Why | Minimum Version |
|------|-----|-----------------|
| **Docker Desktop** | Container engine & docker-compose v2 | 4.18 |
| **Git**            | Source control                     | 2.41 |
| **GNU Make** (optional) | Quality-of-life wrappers        | 4.3 |

### Optional (when **not** using Docker)

| Tool | Why |
|------|-----|
| `rbenv` / `asdf` | Match Ruby version (`3.3.8`) locally |
| `PostgreSQL 16`  | Service DB                           |
| `Redis 7`        | Caching layer                        |

> **Recommendation:** do **not** run Rails natively.  Staying in Docker removes 90 % of “works-on-my-machine” issues.

---

## 2. Repo Tour

```
/
├ bin/                — helper scripts (entrypoint, wrapper)
├ docker/             — per-service Dockerfiles & nginx conf
├ rebuild_all.sh      — canonical “destroy & rebuild” script
├ docker-wrapper.sh   — convenience wrapper around compose
├ config/             — Rails config
└ DEVELOPMENT.md      — you are here
```

---

## 3. Docker Stack

Service | Image                     | Port | Volume
--------|---------------------------|------|------------------------
`app`   | `foundersfleet-app`       | 3000 | `gem_cache`, `node_modules`
`db`    | `postgres:16`             | 5432 | `db_data`
`redis` | `redis:7.2-alpine`        | 6379 | `redis_data`
`nginx` | `nginx:1.25-alpine`       | 80   | _(stateless)_

### Persistent Volumes

Volume            | Purpose                 | Safe to delete?
------------------|-------------------------|-----------------
`db_data`         | Postgres clusters       | NO – drops data
`gem_cache`       | Bundler gems            | Yes (slow rebuild)
`node_modules`    | Yarn/JS deps            | Yes (slow rebuild)
`redis_data`      | Redis RDB dump          | Yes

---

## 4. Common Commands

Action | Command
-------|---------
Start stack | `./docker-wrapper.sh compose up -d`
Stop stack  | `./docker-wrapper.sh compose down`
Tail logs   | `./docker-wrapper.sh compose logs -f app`
Full nuke & rebuild | `./rebuild_all.sh`
Run one-off Rails cmd | `./docker-wrapper.sh exec app bin/rails c`
Open DB psql | `./docker-wrapper.sh exec db psql -U postgres ff_master_development`
Precompile assets | `./docker-wrapper.sh exec app bin/rails assets:precompile`

---

### Docker-First Mind-Set  🚢

> **⚠️  WARNING:** _Do **not** run `bin/rails`, `bundle`, `rake`, or any other app command directly on your host Ruby._  
> Always execute them **inside** the running container:
>
> ```bash
> ./docker-wrapper.sh exec app <command>
> # e.g.
> ./docker-wrapper.sh exec app bin/rails db:migrate
> ```
>
> This guarantees the exact Ruby 3.3.8 runtime, gems, and system libraries that CI / production use.  
> Skipping Docker is the #1 cause of “works-on-my-machine” errors.

#### Quick Docker Reference

Action | Wrapper command
-------|----------------
One-off Rails console | `./docker-wrapper.sh exec app bin/rails c`
Run *any* shell inside app  | `./docker-wrapper.sh exec app bash`
Rebuild app image only | `./docker-wrapper.sh compose build app`
View **full** app logs | `./docker-wrapper.sh compose logs -f app`
Stop everything | `./docker-wrapper.sh compose down`

Keep this table handy; nine times out of ten one of these commands is all you need.

---

## 5. Environment Management

### Ruby Version

* **Canonical** version lives in `Gemfile` (`ruby "3.3.8"`) and `.ruby-version`.
* **Local use:** `rbenv install 3.3.8 && rbenv global 3.3.8`.
* **Inside Docker:** The `app` image is built from `ruby:3.3-slim`.

### Bundler

Gems install into `/usr/local/bundle` (persisted via `gem_cache`).  
After editing the Gemfile:

```bash
./docker-wrapper.sh compose build --no-cache app
```

### Node / Yarn

Yarn is installed in the image.  `node_modules` is a named volume so host OS differences do not break native builds.

---

## 6. Database Management

Command | Purpose
--------|---------
`bin/rails db:create`  | Create default databases
`bin/rails db:migrate` | Run migrations
`bin/rails db:reset`   | **DESTROYS** and recreates DB
`bin/rails db:seed`    | Seed reference data

> All of the above should be executed **inside** the app container (use `docker-wrapper.sh exec app …`).

### Multi-Tenancy (Apartment)

The legacy Apartment setup is temporarily **disabled** (initializer renamed).  
When re-enabled each startup will live in its OWN schema (`<subdomain>`).  
Until then every table lives in `public`.

---

## 7. Assets & Front-End

Workflow (inside container):

```bash
# During active dev, recompilation is automatic via importmap-rails
bin/rails assets:precompile             # production / test
bin/rails assets:clean assets:precompile
```

Symptoms & Fixes:

| Error | Typical Cause | Fix |
|-------|---------------|-----|
| `The asset "application.js" is not present` | JS entrypoint missing or not precompiled | `bin/rails assets:precompile` or comment out include |
| 404 on CSS | Wrong fingerprint | `assets:clean assets:precompile` |
| Source map warnings (`.map`) | Upstream library missing maps | Harmless; ignore or add maps |

---

## 8. Troubleshooting Cookbook

Problem | Resolution
--------|------------
`Gem::LoadError` / gem not found | `./docker-wrapper.sh compose build --no-cache app`
Ruby mismatch (`3.1.0` vs `3.3.8`) | Ensure you run commands **inside Docker** or install Ruby 3.3.8 locally
`ActiveRecord::DuplicateMigrationNameError` | Rename conflicting migration class; `db:migrate:status`
`Host Authorization Error` | Add host to `config/environments/development.rb` (`config.hosts << ...`)
Stale `tmp/pids/server.pid` | `rm tmp/pids/server.pid` (handled automatically in entrypoint)
Assets missing | `docker-wrapper.sh exec app bin/rails assets:precompile`
Postgres version mismatch | Rebuild `app` after updating `postgresql-client` version in `docker/app/Dockerfile`
Container won't start, loops | `docker-wrapper.sh compose logs app` then fix root cause, `./rebuild_all.sh`

---

## 9. Daily Workflow Cheat-Sheet

```bash
# 1. Pull latest code
git pull origin main

# 2. Sync your .env (copy .env.example → .env, adjust)
cp .env.example .env

# 3. Start stack
./docker-wrapper.sh compose up -d

# 4. View logs while coding
./docker-wrapper.sh compose logs -f app

# 5. Run tests
./docker-wrapper.sh run --rm app bin/rails test

# 6. Stop stack when done
./docker-wrapper.sh compose down
```

---

## 10. FAQ

**Q: Rails complains about missing gems / Ruby version.**  
A: You’re probably on host Ruby.  Prefix commands with `./docker-wrapper.sh exec app`.

**Q: `wrong number of arguments (given 2, expected 1)` after bundle update**  
A: Check gem versions; regenerate `Gemfile.lock`, rebuild image.

**Q: How do I reset EVERYTHING?**  
A: `./rebuild_all.sh` – deletes volumes, images, containers. Use only when desperate.

**Q: Assets 404 in production?**  
A: Ensure CI runs `bin/rails assets:precompile` and that the nginx `public/` folder is copied in the final image.

---

## 11. Contributing

1. Branch off `main`, commit small, descriptive commits.
2. Keep `DEVELOPMENT.md` up-to-date with any environment change.
3. PRs trigger GitHub Actions → Docker build + test run.

Happy hacking!  
— _FoundersFleet Engineering_  

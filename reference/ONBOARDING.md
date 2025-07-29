# FoundersFleet – Engineering Onboarding Guide 🚀

Welcome to the Fleet!  
This document is the **first stop for every new engineer**. By the time you finish it you should be able to:

* run the full stack locally (inside Docker)  
* know where the major pieces of code live  
* understand the high-level multi-tenant architecture  
* feel confident making your first change & PR

---

## 1 · Big-Picture Architecture

```
┌────────────┐     HTTP     ┌──────────────┐
│  Browser    │ ───────────▶│   Nginx       │ 80
└────────────┘              │ (reverse-proxy)│
                            │      │        │
                            └─┬───┬─────────┘
                              │   │
             WebSocket 6379   │   │  HTTP 3000
                     ┌────────┘   └────────┐
             ┌───────▼───────┐   ┌────────▼────────┐
             │   Redis 7.2   │   │ Rails 7.1 app   │
             └───────────────┘   │  (Puma cluster) │
                                 │  Ruby 3.3.8     │
                                 └─────┬───────────┘
                                       │ SQL 5432
                                 ┌─────▼───────────┐
                                 │ Postgres 16     │
                                 └─────────────────┘
```

Key ideas

| Layer | Why it matters |
|-------|----------------|
| **Rails 7.1 API-plus-views** | Core business logic, Hotwire front-end, future REST/GraphQL endpoints. |
| **Multi-tenancy (future)** | We’ll use schema-per-startup (Apartment/ros-apartment) for data isolation. Currently disabled during MVP. |
| **Redis** | Caching, ActionCable websockets, Sidekiq jobs. |
| **Docker** | Every service is containerised; your laptop acts like production. No local Ruby/Postgres installations required. |

---

## 2 · Codebase Tour

Path | What lives there
-----|-----------------
`app/` | Rails MVC code. Notables:<br>• `controllers/` – REST + Hotwire endpoints<br>• `models/` – business objects<br>• `javascript/` – Importmap, Stimulus controllers<br>• `views/` – HTML (ERB) + partials
`config/` | Environment, routes, credentials. **Start here when tracing request flow.**
`db/` | Migrations (`migrate/`) and `seed` data. Tenant templates in `migrate/tenant_templates/`.
`docker/` | Service-specific Dockerfiles (`app/`, `nginx/`) & nginx config.
`bin/` | Project binstubs (`rails`, `rake`, `docker-entrypoint.sh`).
`scripts/` | Ad-hoc utilities (rebuild, data import, etc.).
`DEVELOPMENT.md` | Hands-on “how to run/build/debug” cookbook.
`ONBOARDING.md` | *this file* – conceptual tour.

---

## 3 · Why Docker-First?

Problem | Docker Solution
--------|----------------
“Works on my machine” | Container pinning: Ruby 3.3.8, Node/Yarn, PG client 16, identical everywhere.
Slow ramp-up | `./rebuild_all.sh` sets up DB, seeds, precompiles assets in one go.
Host pollution | Nothing installed globally except Docker + Git.
Multi-service orchestration | `docker-compose` boots Rails, Postgres, Redis, nginx with one command.

> **Rule #1:** **Never** run `bin/rails`, `bundle`, etc. on your host.  
> Always prefix with the wrapper:  
> `./docker-wrapper.sh exec app <command>`  

---

## 4 · Docker Stack Details

Service | Image | Port | Purpose | Volume
--------|-------|------|---------|--------
`app`   | `foundersfleet-app` | 3000 | Rails server (Puma), asset compiler, Sidekiq | `gem_cache`, `node_modules`
`db`    | `postgres:16` | 5432 | Primary relational DB | `db_data`
`redis` | `redis:7.2-alpine` | 6379 | Cache, websocket backend | `redis_data`
`nginx` | `nginx:1.25-alpine` | 80 | Reverse proxy + static assets | –

Named volumes persist between container recreations, so bundle/yarn installs & DB data survive.

---

## 5 · Everyday Workflow

Action | Command
-------|---------
Start stack (in background) | `./docker-wrapper.sh compose up -d`
View live logs | `./docker-wrapper.sh compose logs -f app`
Rails console | `./docker-wrapper.sh exec app bin/rails c`
DB shell | `./docker-wrapper.sh exec db psql -U postgres ff_master_development`
Run tests | `./docker-wrapper.sh run --rm app bin/rails test`
Full reset | `./rebuild_all.sh` (drops volumes, rebuilds images, reseeds)

---

## 6 · Key Concepts in the Code

Concept | Where to look | TL;DR
--------|---------------|------
**Multi-tenant scaffolding** | `config/initializers/apartment.rb.disabled` | Currently off; illustrates future sub-domain schema switching.  
**Quest Engine** | `app/models/quest*`, `db/migrate/tenant_templates` | Gamified milestones – Quests, Paths, Arcs, Progress tables.  
**Hotwire (Turbo + Stimulus)** | `app/javascript/controllers/` | Reactive UI with minimal JS.  
**Sidekiq jobs** | `app/jobs/` | Background processing (email, data import).  
**API** | `app/controllers/api/v1/*` | JSON endpoints; versioned routing under `/api/v1`.

---

## 7 · Troubleshooting FAQ

Symptom | Likely Cause | Fix
--------|--------------|----
`Gem::LoadError` | Host running `bundle` | Use wrapper + rebuild image.
“Blocked hosts” page | Rails Host Authorization | Add host in `config/environments/development.rb`.
`pg_dump version mismatch` | Wrong PG client in image | Ensure Dockerfile installs `postgresql-client-16` (already handled).
Assets 404 / fingerprint mismatch | Didn’t precompile after changes | `docker-wrapper.sh exec app bin/rails assets:clean assets:precompile`.

---

## 8 · Making Your First Commit

1. Fork/branch from `main`.
2. Run `./docker-wrapper.sh exec app bin/rails test` – ensure green.
3. Commit small, descriptive messages.
4. Push and open a PR; GitHub Actions will build & run the test suite in CI.
5. Keep this guide and `DEVELOPMENT.md` updated with any environment tweaks you discover.

---

## 9 · Appendix A: Glossary

Term | Meaning
-----|--------
**Dock** | Unified founder dashboard (feature).
**Drops** | Public milestone announcements.
**Dispatch** | Weekly digest & notifications system.
**Flightplan** | Narrative journey map for startups.
**Intel** | Macro/micro-economic insights engine.

---

### Welcome Aboard!

Pull the code, run the stack, grab a ☕, and start shipping.  
If anything here feels wrong or unclear, your first contribution can be improving **ONBOARDING.md**.  
Happy hacking!


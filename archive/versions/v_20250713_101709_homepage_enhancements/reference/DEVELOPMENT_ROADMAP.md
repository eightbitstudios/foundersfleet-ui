# FoundersFleet – Development Roadmap

_Last updated: 2025-06-11_

## 1. Purpose & Vision
FoundersFleet is a founder-first, gamified platform that pairs **startup visibility** (public profile + milestones) with **execution tools** (auto-provisioned infra, journey mapping, market intel).  
Goal: enable early-stage builders to “Join the Ranks”, showcase progress, and ship faster.

## 2. Core Feature Matrix (from PRD)

| ID | Feature / Module | Description | Build Tier |
|----|------------------|-------------|------------|
| F-01 | **Dock** | Unified dashboard & launcher for each startup | Free |
| F-02 | **Flightplan** | Visual journey map, milestones, stage diagnostics | Free |
| F-03 | **Drops** | Public releases / milestone announcements | Free |
| F-04 | **Dispatch** | Weekly digest & system notifications | Free |
| F-05 | **Intel** | Macro & micro-economic dashboards (paid reports) | Freemium |
| F-06 | **Mission Writer** | AI assistant for mission / goal writing | Free |
| F-07 | **Resource Directory** | Curated external links & perks | Free |
| P-01 | **Intel Reports** | Deep paid analysis & economist leaderboards | Premium |
| P-02 | **Verified Drops** | PR-boosted release highlighting | Premium |
| Infra | **Multi-Tenant Build Layer** | Automatic demo/staging/prod envs via subdomains | Core |

## 3. Build Priorities & Sequence

1. **Foundational Infrastructure**
   - Multi-tenant Rails setup (Apartment) & Postgres isolation  
   - Auth (Devise + JWT) & basic roles (User, Startup, Membership)  
   - **Social Authentication (Google, LinkedIn, X/Twitter, Apple) via OmniAuth**  
   - Dockerized dev environment & CI skeleton  

2. **MVP Feature Set**
   - Dock (startup dashboard) ✅
   - Flightplan (journey map + milestones) ✅ *web/API views pending DB migration*
   - Drops (CRUD + public pages)
   - Basic onboarding “Join the Ranks” flow

3. **Engagement & Visibility**
   - Dispatch (scheduled digest emails / in-app notifications)
   - Public profile pages and search directory
   - Social share images & OpenGraph tags

4. **Data & Insights**
   - Intel free dashboards (macro indicators)
   - Intel paid report purchase flow

5. **Premium & Growth**
   - Subscription / billing (Stripe)
   - Verified Drops, partner perks marketplace
   - Advanced analytics export

## 4. Current Implementation Status

| Component | Status | Notes |
|-----------|--------|-------|
| Rails project scaffold, Docker & scripts | **Done** | Working dev env, CI scaffold |
| Multi-tenant (Apartment) wiring | **Partial** | Tenant switcher in ApplicationController; migrations per tenant TBD |
| Auth (Devise, JWT) | **Partial** | User model & routes wired; API sessions controller stubbed |
| **Social Authentication (Google, LinkedIn, X/Twitter, Apple)** | **Not started** | Requires app registration & OmniAuth setup |
| Models: User, Startup, Membership | **Done** | Roles & enums set |
| Models: JourneyStage, Milestone | **Created** | Migrations written; need to run + seed |
| Dock (web + `/api/v1/dock`) | **Done** | Dashboard view, JSON output |
| Flightplan (web + `/api/v1/flightplan`) | **Implemented** | Uses placeholder in-memory stages; pending DB |
| Layout/UI (Bootstrap 5 + Icons) | **Done** | Global navbar, footer |
| Drops | **Not started** | — |
| Dispatch | **Not started** | — |
| Intel dashboards | **Not started** | — |
| Seed data & fixtures | **Pending** | Create default JourneyStages, etc. |
| Tests (RSpec) | **Not started** | — |

## 5. Immediate Next Steps

1. **Run migrations & seed default JourneyStages**  
   `rails db:migrate && rails db:seed`
2. **Scaffold Social Authentication**  
   - Add `omniauth`, `omniauth-rails_csrf_protection`, and provider gems  
   - Generate Devise OmniAuth callbacks controller  
   - Register FoundersFleet app on Google, LinkedIn, X/Twitter, Apple; store client IDs/secrets as ENV vars  
   - Update `devise.rb` with provider configs and callback URLs
3. CRUD for Drops (model, controller, views, API).
4. Implement Dispatch scheduler (Sidekiq + ActionMailer).
5. Replace placeholder journey data with DB-backed Milestones.
6. Add RSpec + FactoryBot; cover Dock & Flightplan controllers.
7. CI: run specs & RuboCop on PR.
8. Public profile routing (`/:subdomain` to marketing site).
9. Plan Intel MVP (data sources, charts).

## 6. How to Maintain This Roadmap

1. **Update after each dev session**  
   - Adjust “Current Implementation Status”.  
   - Move items between “Next Steps” and “Done”.
2. **Document significant decisions** in **Decision Log** below.
3. Keep commit messages referencing roadmap line numbers when possible.

### Decision Log

| Date | Author | Summary |
|------|--------|---------|
| 2025-06-11 | FactoryAI | Initial roadmap created; Dock & Flightplan logged as done. |
| 2025-06-11 | FactoryAI | Added Social Authentication feature across priorities, status, and next steps. |

---

Happy shipping!  
_Add new sections (e.g., Technical Debt, Nice-to-Have) as the project evolves._

# Phase 2 - Development Plan

## 🎯 Sprint 1: Multi-Tenant Dashboards (Current)

**Branch:** `phase-2/multi-tenant`  
**Status:** 🔄 In Progress  
**Target:** 8-12 hours  

### Task Breakdown

#### Task 1.1: Refactor Config Structure ⏳
- [ ] Create `config/organizations.ts` with new structure
- [ ] Define `Organization` interface with `slug`, `name`, `projects[]`
- [ ] Move existing projects to organizations
- [ ] Keep backward-compatible `TRACKED_PROJECTS` export

#### Task 1.2: Create Dynamic Routes 
- [ ] Create `app/org/[slug]/page.tsx`
- [ ] Add `generateStaticParams()` for all orgs
- [ ] Implement org-specific data fetching
- [ ] Add org selector to landing page

#### Task 1.3: Update Components
- [ ] Refactor dashboard to support org context
- [ ] Update metrics calculations (per org)
- [ ] Add org header/title to dashboard
- [ ] Create breadcrumb navigation

#### Task 1.4: Landing Page
- [ ] Create org selector on `/`
- [ ] Show all available organizations
- [ ] Link to each org dashboard

#### Task 1.5: API Updates
- [ ] Update `/api/projects` to accept `?org=slug`
- [ ] Filter projects by organization
- [ ] Cache per organization

#### Task 1.6: Testing & Deployment
- [ ] Build and test locally
- [ ] Verify all org routes work
- [ ] Deploy to Cloudflare Pages
- [ ] Commit to GitHub

---

## 📅 Sprint 2: Dark Theme Support (After Sprint 1)
- Light/dark mode toggle
- System theme detection
- LocalStorage persistence

## 📅 Sprint 3: Multi-Language i18n (After Sprint 1)
- English + Spanish
- URL structure: `/es/org/grupo-z5`
- Translation system

---

## 🔗 Issue References
- #7 Multi-Tenant Dashboards
- #8 Dark Theme Support (queued)
- #9 Multi-Language i18n (queued)

---

**Started:** 2026-03-06 15:30 GMT-5

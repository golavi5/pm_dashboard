# PM Dashboard - Improvements Roadmap

## 🎯 Overview

Three major improvements planned for PM Dashboard, following SDD workflow.

**Created:** 2026-03-05  
**Status:** Specifications phase

---

## 📋 Improvement List

### 1. Multi-Tenant Dashboards (#7)

**Problem:** All organizations see all projects in one dashboard.

**Solution:** Organization-specific views with clean URLs.

**Impact:**
- Privacy: Each org only sees their projects
- Clarity: No confusion from irrelevant projects
- Scalability: Easy to add new organizations

**URLs:**
- `/org/grupo-z5` - Only Grupo-Z5 projects
- `/org/golavi5` - Only personal projects

**Priority:** 🔴 High  
**Effort:** 8-12 hours

---

### 2. Dark Theme Support (#8)

**Problem:** Dashboard only has light theme.

**Solution:** Toggle between light/dark modes with system detection.

**Impact:**
- UX: Reduced eye strain
- Modern: Standard feature expectation
- Accessibility: Better in low-light

**Features:**
- Theme toggle button
- System theme detection
- LocalStorage persistence
- All components support both modes

**Priority:** 🟡 Medium  
**Effort:** 4-6 hours

---

### 3. Multi-Language Support (#9)

**Problem:** Dashboard is English-only.

**Solution:** i18n with Spanish + English, extensible to more.

**Impact:**
- Accessibility: Non-English stakeholders can use it
- Global: Works for international teams
- Professional: Expected for enterprise software

**Languages (Phase 1):**
- 🇺🇸 English
- 🇪🇸 Spanish

**URLs:**
- `/en/org/grupo-z5` - English
- `/es/org/grupo-z5` - Spanish

**Priority:** 🟡 Medium  
**Effort:** 6-10 hours

---

## 🔄 Development Workflow

Following **SDD (Specification-Driven Development)**:

### Phase 0: Specification ✅
- [x] Issue #7 created (Multi-tenant)
- [x] Issue #8 created (Dark theme)
- [x] Issue #9 created (i18n)
- [ ] Review and approval

### Phase 1: Design
- [ ] Technical design documents
- [ ] Architecture decisions
- [ ] UI mockups (optional)

### Phase 2: Task Breakdown
- [ ] Break into implementation tasks
- [ ] Estimate each task
- [ ] Identify dependencies

### Phase 3: Implementation
- [ ] Create feature branches
- [ ] Develop in cycles
- [ ] PR review after each feature

### Phase 4: Testing & Deployment
- [ ] Test all features
- [ ] Update documentation
- [ ] Deploy to production

---

## 📊 Priority Order (Recommended)

**Sprint 1:** Multi-Tenant (#7)
- Most impactful
- Blocks other features
- Foundation for organization-specific themes/languages

**Sprint 2:** Dark Theme (#8)
- Quick win
- Independent feature
- Improves UX immediately

**Sprint 3:** i18n (#9)
- Requires multi-tenant URLs
- More complex
- Can be developed in parallel

**OR:** Combine all in one large sprint (2-3 weeks)

---

## 🔗 Integration Points

These features integrate well:

**Multi-Tenant + i18n:**
- URL structure: `/es/org/grupo-z5`
- Locale per organization (optional)

**Dark Theme + i18n:**
- Theme toggle label translated
- Consistent UX across languages

**All Three:**
- Complete professional dashboard
- Organization-specific, translated, themed views

---

## ✅ Prerequisites

### 1. GitHub Token Access
- [ ] Update token with `read:org` scope
- [ ] Grant access to Grupo-Z5 projects
- [ ] Test locally first
- [ ] Update in Cloudflare

### 2. Current Dashboard
- [x] Working deployment
- [x] Static export functional
- [x] Cloudflare Pages configured
- [x] Base features complete

---

## 📈 Estimated Timeline

**Full implementation:**
- Multi-tenant: 8-12 hours
- Dark theme: 4-6 hours
- i18n: 6-10 hours
- Testing & polish: 4-6 hours

**Total:** 22-34 hours (~3-5 days of focused work)

**Recommended approach:**
- Sprint 1 (Week 1): Multi-tenant
- Sprint 2 (Week 2): Dark theme + i18n
- Sprint 3 (Week 3): Polish & deploy

---

## 🎯 Success Metrics

**Multi-Tenant:**
- [ ] Grupo-Z5 CEO can access `/org/grupo-z5`
- [ ] No cross-org data visible
- [ ] Easy to add new orgs

**Dark Theme:**
- [ ] Toggle works instantly
- [ ] All components readable
- [ ] Preference persists

**i18n:**
- [ ] Spanish translation complete
- [ ] Language switcher works
- [ ] Dates/numbers formatted correctly

---

## 📝 Next Steps

1. **Review specifications** (Issues #7, #8, #9)
2. **Approve specs** (comment on issues)
3. **Fix GitHub token** (Grupo-Z5 access)
4. **Start development cycle**

---

## 🔗 Links

- Issue #7: Multi-Tenant Dashboards
- Issue #8: Dark Theme Support
- Issue #9: Multi-Language i18n
- Project Board: https://github.com/users/golavi5/projects/3
- Dashboard: https://pm-dashboard.pages.dev

---

**Status:** ✅ Specifications created, ready for review and approval

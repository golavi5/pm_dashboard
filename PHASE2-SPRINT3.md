# Phase 2 Sprint 3 - Multi-Language Support (i18n)

**Branch:** `phase-2/i18n`  
**Status:** 🔄 In Progress  
**Issue:** #9  
**Target:** 6-10 hours  

---

## 🎯 Sprint Goal

Add English + Spanish language support with URL-based routing (`/en/org/grupo-z5`, `/es/org/grupo-z5`).

---

## 📋 Task Breakdown

### Task 3.1: Setup & Dependencies ⏳
- [ ] Install `next-intl` package
- [ ] Update `next.config.ts` with next-intl plugin
- [ ] Create `i18n.ts` configuration
- [ ] Test setup works

### Task 3.2: Create Translation Files
- [ ] Create `messages/en.json` - English translations
- [ ] Create `messages/es.json` - Spanish translations
- [ ] Define ~50-80 translation keys
- [ ] Test file loading

### Task 3.3: Middleware & Routing
- [ ] Create `middleware.ts` for locale detection
- [ ] Update routing to `app/[locale]/...`
- [ ] Test locale-based routes
- [ ] Verify fallback behavior

### Task 3.4: Component Updates - Layout & Header
- [ ] Update `app/[locale]/layout.tsx` with locale wrapper
- [ ] Add language switcher to Header
- [ ] Integrate with existing ThemeToggle
- [ ] Test language switching

### Task 3.5: Component Updates - Pages
- [ ] Update `app/[locale]/page.tsx` (landing)
- [ ] Update `app/[locale]/org/[slug]/page.tsx`
- [ ] Replace hardcoded strings with `useTranslations()`
- [ ] Test both pages

### Task 3.6: Component Updates - Dashboard Components
- [ ] Update `components/DashboardContent.tsx`
- [ ] Update `components/ProjectCard.tsx`
- [ ] Update `components/MetricCard.tsx`
- [ ] Update `components/StatusBadge.tsx`

### Task 3.7: Component Updates - Other Components
- [ ] Update `components/Header.tsx`
- [ ] Update `components/LanguageSwitcher.tsx`
- [ ] Update error/loading components
- [ ] Test all translations

### Task 3.8: Date & Number Formatting
- [ ] Implement locale-based date formatting
- [ ] Implement locale-based number formatting
- [ ] Test both languages
- [ ] Verify output format

### Task 3.9: Static Export & Build
- [ ] Test `npm run build` with i18n
- [ ] Verify all locales pre-rendered
- [ ] Check bundle size
- [ ] Test language switching in built output

### Task 3.10: Testing & Deployment
- [ ] Build succeeds
- [ ] All translation keys used
- [ ] Both languages work
- [ ] No missing translations
- [ ] Static export works
- [ ] Commit and create PR

---

## 🌐 Locale Structure

**URL Pattern:**
```
/en/                               → English
/en/org/grupo-z5                  → English Grupo-Z5 dashboard
/es/                               → Spanish
/es/org/grupo-z5                  → Spanish Grupo-Z5 dashboard
```

**Default:**
- Browser language preference (en/es)
- Fallback: English

---

## 📚 Translation Keys

**Dashboard:**
- `dashboard.title` - "PM Dashboard" → "Panel de Gestión"
- `dashboard.subtitle` - Description text

**Metrics:**
- `metrics.tasksThisWeek` - "Tasks This Week"
- `metrics.avgVelocity` - "Avg Velocity"
- `metrics.onTime` - "On Time"
- `metrics.activeProjects` - "Active Projects"

**Status:**
- `status.onTrack` - "On Track"
- `status.attention` - "Needs Attention"
- `status.blocked` - "Blocked"

**Projects:**
- `project.recentWins` - "Recent Wins"
- `project.inProgress` - "In Progress"
- `project.blockers` - "Blockers"
- `project.velocity` - "Velocity"
- `project.thisWeek` - "This Week"
- `project.estComplete` - "Est. Complete"

**Common:**
- `common.selectOrg` - "Select Your Organization"
- `common.realTimeTracking` - "Real-Time Tracking"
- `common.orgSpecific` - "Organization-Specific"
- `common.lightningFast` - "Lightning Fast"
- `common.backToDashboard` - "Back to Dashboard"
- `common.tryAgain` - "Try Again"

---

## ✅ Acceptance Criteria

- [ ] English and Spanish translations complete
- [ ] Language switcher works instantly
- [ ] URLs reflect current language
- [ ] Date formatting per locale
- [ ] All components using translations
- [ ] No hardcoded strings remain
- [ ] Build succeeds with i18n
- [ ] All locales pre-rendered
- [ ] Static export works

---

## 🛠️ Installation Command

```bash
npm install next-intl
```

---

**Started:** 2026-03-06 17:07 GMT-5

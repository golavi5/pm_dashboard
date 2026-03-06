# Phase 2 Sprint 2 - Dark Theme Support

**Branch:** `phase-2/dark-theme`  
**Status:** 🔄 In Progress  
**Issue:** #8  
**Target:** 4-6 hours  

---

## 🎯 Sprint Goal

Add light/dark theme support with system theme detection and localStorage persistence.

---

## 📋 Task Breakdown

### Task 2.1: Theme Setup & Configuration ⏳
- [ ] Enable Tailwind dark mode (`darkMode: 'class'`)
- [ ] Create `context/ThemeContext.tsx` with theme state
- [ ] Test Tailwind dark mode classes work

### Task 2.2: ThemeToggle Component
- [ ] Create `components/ThemeToggle.tsx` (client)
- [ ] Add localStorage persistence
- [ ] Add system theme detection
- [ ] Add smooth transitions
- [ ] Test toggle functionality

### Task 2.3: Header Integration
- [ ] Update `app/layout.tsx` with ThemeProvider
- [ ] Add ThemeToggle to header
- [ ] Test provider initialization
- [ ] Prevent flash of wrong theme

### Task 2.4: Component Updates - Global
- [ ] Update `app/layout.tsx` - dark classes
- [ ] Update `app/globals.css` - dark mode support
- [ ] Update `app/page.tsx` - landing page dark mode

### Task 2.5: Component Updates - Dashboard
- [ ] Update `components/DashboardContent.tsx` - dark classes
- [ ] Update `components/ProjectCard.tsx` - dark classes
- [ ] Update `components/MetricCard.tsx` - dark classes
- [ ] Update `components/StatusBadge.tsx` - dark classes

### Task 2.6: Component Updates - UI Elements
- [ ] Update `components/ProgressBar.tsx` - dark classes
- [ ] Update `components/Timeline.tsx` - dark classes
- [ ] Update `components/LoadingSkeleton.tsx` - dark classes

### Task 2.7: Error States & Loading
- [ ] Update `app/loading.tsx` - dark mode
- [ ] Update `app/error.tsx` - dark mode
- [ ] Update `app/org/[slug]/not-found.tsx` - dark mode

### Task 2.8: Testing & Polish
- [ ] Build and test locally
- [ ] Verify all pages in both themes
- [ ] Check contrast ratios (WCAG AA)
- [ ] Test system theme detection
- [ ] Test localStorage persistence
- [ ] Commit and create PR

---

## 🎨 Color Scheme

### Light Mode (Current)
```
Background: from-blue-50 via-white to-indigo-50
Cards: bg-white
Borders: border-gray-200
Text Primary: text-gray-900
Text Secondary: text-gray-600
```

### Dark Mode (New)
```
Background: from-gray-900 via-gray-800 to-slate-900
Cards: bg-gray-800
Borders: border-gray-700
Text Primary: text-gray-100
Text Secondary: text-gray-300
```

### Status Badges
| Status | Light | Dark |
|--------|-------|------|
| Green | `bg-green-100 text-green-800` | `dark:bg-green-900/30 dark:text-green-300` |
| Yellow | `bg-yellow-100 text-yellow-800` | `dark:bg-yellow-900/30 dark:text-yellow-300` |
| Red | `bg-red-100 text-red-800` | `dark:bg-red-900/30 dark:text-red-300` |

---

## ✅ Acceptance Criteria

- [ ] Toggle button visible in header
- [ ] Click switches theme instantly
- [ ] Theme persists across sessions (localStorage)
- [ ] System theme detected on first visit
- [ ] All components readable in both themes
- [ ] Proper contrast ratios (WCAG AA)
- [ ] No flashing/flickering on load
- [ ] Build succeeds
- [ ] PR merged

---

## 📚 Reference Implementation

**ThemeContext.tsx pattern:**
```typescript
'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({ theme: 'light', toggleTheme: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme;
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initial = saved || system;
    
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
```

---

**Started:** 2026-03-06 16:55 GMT-5

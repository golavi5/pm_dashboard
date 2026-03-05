# PM Dashboard - Design Document

## UI Wireframes

### Desktop View

```
╔══════════════════════════════════════════════════════════════════╗
║  PM Dashboard                                    Last sync: 2m ago ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                    ║
║  📊 Active Projects                                                ║
║                                                                    ║
║  ┌──────────────────────────┐  ┌──────────────────────────┐      ║
║  │ Realtime Agents          │  │ PM Dashboard             │      ║
║  │ Grupo-Z5 • #2            │  │ golavi5 • #3             │      ║
║  │                          │  │                          │      ║
║  │ ████████████████░░░ 98.7%│  │ ██░░░░░░░░░░░░░░░░░ 15%  │      ║
║  │ 🟢 On Track • Tasks      │  │ 🟡 Active • Design       │      ║
║  │                          │  │                          │      ║
║  │ ✅ Recent Wins (3)       │  │ ✅ Recent Wins (1)       │      ║
║  │  • Final verification    │  │  • Spec approved         │      ║
║  │  • Integration tests     │  │                          │      ║
║  │  • API documentation     │  │ 🚧 In Progress (1)       │      ║
║  │                          │  │  • Technical design      │      ║
║  │ 🚧 Active (1)            │  │                          │      ║
║  │  • Verify collections    │  │ ⏭️  Next Up              │      ║
║  │                          │  │  • Component development │      ║
║  │ Est: Mar 10, 2026        │  │  • API integration       │      ║
║  └──────────────────────────┘  └──────────────────────────┘      ║
║                                                                    ║
║  📈 Executive Metrics                                              ║
║  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐    ║
║  │ Tasks/Week │ │  Velocity  │ │  On Time   │ │   Team     │    ║
║  │            │ │            │ │            │ │            │    ║
║  │     27     │ │   15/week  │ │    100%    │ │  Active    │    ║
║  │   ▲ +12%   │ │   → 0%     │ │   ▲ +5%    │ │     2      │    ║
║  └────────────┘ └────────────┘ └────────────┘ └────────────┘    ║
║                                                                    ║
║  🗓️  Upcoming Milestones                                          ║
║  • Realtime Agents: Final verification (Mar 10)                   ║
║  • PM Dashboard: Design complete (Mar 8)                          ║
║                                                                    ║
╚══════════════════════════════════════════════════════════════════╝
```

### Mobile View

```
┌────────────────────┐
│ PM Dashboard    ☰  │
├────────────────────┤
│                    │
│ Realtime Agents    │
│ ████████░░ 98.7%   │
│ 🟢 On Track        │
│                    │
│ ✅ 3 wins this wk  │
│ 🚧 1 in progress   │
│                    │
│ [View Details →]   │
├────────────────────┤
│                    │
│ PM Dashboard       │
│ ██░░░░░░░░ 15%     │
│ 🟡 In Design       │
│                    │
│ ✅ 1 win           │
│ 🚧 1 in progress   │
│                    │
│ [View Details →]   │
├────────────────────┤
│                    │
│ 📊 This Week       │
│ • 27 tasks done    │
│ • 15/wk velocity   │
│ • 100% on time     │
└────────────────────┘
```

## Color Palette

```
Primary:    #3B82F6  (Blue)
Success:    #10B981  (Green - 🟢 on track)
Warning:    #F59E0B  (Yellow - 🟡 attention)
Danger:     #EF4444  (Red - 🔴 blocked)
Background: #F9FAFB  (Light gray)
Card:       #FFFFFF  (White)
Text:       #1F2937  (Dark gray)
Accent:     #6366F1  (Indigo)
```

## Component Library

### Status Indicators
- 🟢 On Track (green badge)
- 🟡 Needs Attention (yellow badge)
- 🔴 Blocked (red badge)

### Icons
- ✅ Completed task
- 🚧 In progress
- ⏭️ Next up
- 📊 Metrics
- 🗓️ Timeline
- 👥 Team

### Typography
- **Headings:** Inter, bold
- **Body:** Inter, regular
- **Monospace:** Fira Code (for metrics)

## Interaction Design

### Hover States
- Project cards: lift + shadow
- Buttons: color darken
- Metrics: show tooltip

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Animations
- Page load: fade in
- Card hover: subtle lift (transform: translateY(-2px))
- Progress bars: animated fill
- Metric changes: number count-up

## Accessibility

- Semantic HTML
- ARIA labels for icons
- Keyboard navigation
- Focus indicators
- Color contrast WCAG AA

---

**Next:** Implementation phase

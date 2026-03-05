# PM Dashboard - Project Plan

## Project Goal
Build an executive-friendly dashboard that shows real-time status of multiple GitHub projects.

## Tech Stack
- Next.js 15 (React framework)
- Tailwind CSS (styling)
- GitHub API (data source)
- Cloudflare Pages (deployment)

## SDD Workflow

### Phase 1: Specification ✅ (Current)
**Goal:** Define what the dashboard should do

**Features:**
1. **Multi-project view**
   - Display 2-3 projects simultaneously
   - Each project shows: name, progress %, current phase, recent activity

2. **Project detail cards**
   - Progress bar (% complete)
   - Current milestone
   - Recent completed tasks (last 3)
   - Active tasks (in progress)
   - Blockers (if any)

3. **Timeline view**
   - Upcoming milestones
   - Deadlines
   - Release dates

4. **GitHub integration**
   - Pull data from GitHub Projects API
   - Show PR status
   - Display issue counts by phase

5. **Executive metrics**
   - Tasks completed this week
   - Velocity (tasks/week)
   - Projected completion date

**User Stories:**
- As a CEO, I want to see project progress at a glance
- As a stakeholder, I want to know what's been completed recently
- As a PM, I want to share updates without giving GitHub access

**Success Criteria:**
- [ ] Shows real-time data from GitHub
- [ ] Loads in < 2 seconds
- [ ] Works on mobile devices
- [ ] No login required (public view)

### Phase 2: Design (Next)
**Technical architecture:**
- Server-side data fetching (GitHub API)
- Static generation (builds every hour)
- Responsive grid layout
- Component structure

### Phase 3: Tasks (After Design)
**Implementation breakdown:**
- GitHub API integration
- UI components
- Data transformation
- Deployment setup

---

## Timeline

**Week 1:** Spec + Design
**Week 2-3:** Implementation
**Week 4:** Polish + Deploy

## Current Status
- [x] Repository created
- [x] Next.js initialized
- [x] Basic homepage
- [ ] Spec approval
- [ ] Design phase
- [ ] Implementation

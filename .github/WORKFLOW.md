# Development Workflow

## Branch Strategy

**main branch:**
- Production-ready code only
- Protected: No direct commits
- All changes via PR

**feature branches:**
- Pattern: `feature/<feature-name>`
- Example: `feature/dark-theme`, `feature/multi-tenant`
- Branch from: `main`
- Merge to: `main` (via PR)

**fix branches:**
- Pattern: `fix/<issue-description>`
- Example: `fix/broken-links`
- For bug fixes only

---

## Development Cycle

1. **Create branch:**
   ```bash
   git checkout main
   git pull
   git checkout -b feature/my-feature
   ```

2. **Develop:**
   - Make changes
   - Test locally
   - Commit frequently

3. **Push & PR:**
   ```bash
   git push -u origin feature/my-feature
   gh pr create --title "..." --body "..."
   ```

4. **Review:**
   - Wait for approval
   - Address feedback
   - Update PR if needed

5. **Merge:**
   - After approval
   - Squash or merge commits
   - Delete feature branch

---

## Exceptions

**Documentation-only changes:**
- README updates
- Comment fixes
- Non-code changes
→ Can be direct to main (with caution)

**Emergency hotfixes:**
- Site down
- Critical security issue
→ Fast-track PR + immediate merge

---

## SDD Workflow Integration

**Spec → Design → Tasks → Implementation**

Each phase gets its own issue:
- Spec issues: `[SPEC] Feature Name`
- Design issues: `[DESIGN] Feature Name`
- Task issues: `[TASK] Specific Task`

Implementation happens in feature branches with PRs.

---

Created: 2026-03-05

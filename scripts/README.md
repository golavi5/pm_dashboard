# Scripts

Helper scripts for PM Dashboard development workflow.

## create-spec.sh

Creates a specification issue and automatically:
- Adds it to GitHub Project #3
- Moves it to "Specs" column
- Tags with [SPEC] prefix

**Usage:**

```bash
# With inline description
./scripts/create-spec.sh "Feature Name" "Full description here..."

# With markdown file
./scripts/create-spec.sh "Feature Name" spec-document.md
```

**Example:**

```bash
./scripts/create-spec.sh "Export to PDF" "
## Problem
Users need to export dashboard as PDF

## Solution
Add PDF export button...
"
```

This saves you from manually running 3 commands every time!

---

## Future Automation Ideas

**GitHub Actions (Better):**
- Auto-add issues with `spec` label to project
- Auto-move to Specs column
- Notify on new specs

**Project Settings:**
- Configure project workflows
- Auto-add all issues from repo
- Filter by labels

---

Created: 2026-03-05

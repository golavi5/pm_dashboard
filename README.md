# PM Dashboard

Executive dashboard for project management and stakeholder updates. Displays real-time status from GitHub Projects.

![Dashboard Preview](https://img.shields.io/badge/Status-Active-green)

## Features

- 📊 **Real-time project tracking** from GitHub Projects API
- 📈 **Executive metrics** (velocity, progress, on-time percentage)
- 🎯 **Status indicators** (on-track, needs attention, blocked)
- 📋 **Task summaries** (recent wins, in progress, blockers)
- 🚀 **Auto-updates** every hour via ISR
- 📱 **Responsive design** (mobile, tablet, desktop)
- 🔒 **Secure** (read-only access, no user data stored)

## Quick Start

### 1. Clone & Install

\`\`\`bash
git clone https://github.com/golavi5/pm_dashboard.git
cd pm_dashboard
npm install
\`\`\`

### 2. Configure Projects

Edit `config/projects.ts` to add your projects:

\`\`\`typescript
export const TRACKED_PROJECTS: ProjectConfig[] = [
  {
    id: 'my-project',
    name: 'My Project',
    owner: 'my-org',           // GitHub org or user
    projectNumber: 1,          // Project number from URL
    repo: 'my-org/my-repo'     // Optional: specific repo
  }
];
\`\`\`

**How to find project number:**
- Go to your GitHub Project
- Look at the URL: `github.com/users/username/projects/3` → number is `3`
- Or: `github.com/orgs/org-name/projects/2` → number is `2`

### 3. Setup GitHub Token

Create a Personal Access Token:

1. Go to: https://github.com/settings/tokens/new
2. Name: `PM Dashboard`
3. Scopes needed:
   - ✅ `project` (read)
   - ✅ `repo` (read)
4. Copy the token (starts with `ghp_...`)

Create `.env.local`:

\`\`\`bash
cp .env.local.example .env.local
# Edit .env.local and add your token
\`\`\`

\`\`\`.env
GITHUB_TOKEN=ghp_your_actual_token_here
\`\`\`

### 4. Run Locally

\`\`\`bash
npm run dev
\`\`\`

Open http://localhost:3000

## Deployment to Cloudflare Pages

### Option 1: Via Dashboard (Recommended)

1. **Go to:** [Cloudflare Dashboard](https://dash.cloudflare.com/) → Pages

2. **Connect repository:**
   - Click "Create a project"
   - Select "Connect to Git"
   - Choose `golavi5/pm_dashboard`

3. **Build settings:**
   \`\`\`
   Build command:       npm run build
   Build output dir:    out
   Root directory:      /
   Node version:        20.x
   \`\`\`

4. **Environment variables:**
   - Add `GITHUB_TOKEN` with your token value

5. **Deploy!**
   - Every push to `main` auto-deploys
   - Access at: `your-project.pages.dev`

### Option 2: Via CLI

\`\`\`bash
# Install Wrangler
npm install -g wrangler

# Login
wrangler login

# Deploy
npm run build
npx wrangler pages deploy out --project-name=pm-dashboard
\`\`\`

## Configuration

### Update Tracked Projects

Edit `config/projects.ts`:

\`\`\`typescript
export const TRACKED_PROJECTS = [
  // Add/remove projects here
];
\`\`\`

### Adjust Refresh Rate

Default: 1 hour. To change, edit `app/api/projects/route.ts`:

\`\`\`typescript
export const revalidate = 1800; // 30 minutes
\`\`\`

### Customize Styling

All components use Tailwind CSS. Edit:
- `components/` - Individual components
- `app/globals.css` - Global styles
- `tailwind.config.ts` - Theme configuration

## Project Structure

\`\`\`
pm_dashboard/
├── app/
│   ├── api/projects/
│   │   └── route.ts          # API endpoint (GitHub data)
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Dashboard page
│   ├── loading.tsx           # Loading skeleton
│   ├── error.tsx             # Error boundary
│   └── globals.css           # Global styles
├── components/
│   ├── ProjectCard.tsx       # Main project card
│   ├── StatusBadge.tsx       # Status indicators
│   ├── ProgressBar.tsx       # Progress visualization
│   ├── MetricCard.tsx        # Executive metrics
│   ├── Timeline.tsx          # Milestones
│   └── LoadingSkeleton.tsx   # Loading states
├── lib/
│   ├── github.ts             # GitHub API client
│   ├── types.ts              # TypeScript types
│   └── utils.ts              # Helper functions
├── config/
│   └── projects.ts           # Project configuration
└── public/                   # Static assets
\`\`\`

## Troubleshooting

### "Failed to fetch projects"

**Check:**
1. `GITHUB_TOKEN` is set in `.env.local`
2. Token has `project` and `repo` scopes
3. Project numbers in `config/projects.ts` are correct
4. Owner names match GitHub exactly (case-sensitive)

**Verify token:**
\`\`\`bash
# Test token
curl -H "Authorization: token YOUR_TOKEN" https://api.github.com/user
\`\`\`

### "Project not found"

- Double-check project number in URL
- Ensure project is not private (or token has access)
- For org projects, token needs org access

### Build errors

\`\`\`bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Clear Next.js cache
rm -rf .next
npm run build
\`\`\`

## Development

### Local Development

\`\`\`bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # Lint code
\`\`\`

### Adding Features

1. **New component:**
   - Create in `components/MyComponent.tsx`
   - Import in `app/page.tsx`

2. **New metric:**
   - Add calculation in `lib/utils.ts`
   - Update type in `lib/types.ts`
   - Display in `app/page.tsx`

3. **New data source:**
   - Extend `lib/github.ts`
   - Update GraphQL query
   - Transform in `transformProjectData()`

## Architecture

### Data Flow

\`\`\`
GitHub Projects API
       ↓
lib/github.ts (GraphQL query)
       ↓
Transform to Project type
       ↓
app/api/projects/route.ts (ISR caching)
       ↓
app/page.tsx (Server component)
       ↓
Components (Client render)
\`\`\`

### Performance

- **ISR (Incremental Static Regeneration):** Rebuilds every hour
- **Static export:** Pre-rendered at build time
- **Edge caching:** Cloudflare CDN
- **Fast load:** < 2s target

## Security

- ✅ Read-only GitHub access
- ✅ Token stored in environment variables
- ✅ No user authentication needed
- ✅ No sensitive data exposed in client
- ✅ Rate limiting handled by GitHub

## License

MIT

## Support

Issues? Check:
1. [Troubleshooting](#troubleshooting) section
2. [GitHub Issues](https://github.com/golavi5/pm_dashboard/issues)
3. Environment variable setup
4. GitHub token permissions

---

**Built with:** Next.js 15 • Tailwind CSS • GitHub Projects API  
**Deployed on:** Cloudflare Pages

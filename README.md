# PM Dashboard

Executive dashboard for project management and stakeholder updates.

## Features

- 📊 Real-time project status tracking
- 🎯 GitHub Projects integration
- 📈 Progress visualization
- 👥 Stakeholder-friendly views
- 🚀 Multi-project support

## Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **Deployment:** Cloudflare Pages
- **Data Source:** GitHub API

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Deployment to Cloudflare Pages

1. **Connect GitHub repo:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to Pages
   - Click "Create a project"
   - Select "Connect to Git"
   - Choose `golavi5/pm_dashboard`

2. **Build settings:**
   ```
   Build command: npm run build
   Build output directory: out
   ```

3. **Environment variables:** (none needed for now)

4. **Deploy!** Cloudflare will auto-deploy on every push to `main`

## Project Structure

```
pm_dashboard/
├── app/                 # Next.js app directory
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── public/             # Static assets
├── package.json        # Dependencies
└── next.config.ts      # Next.js config (static export)
```

## Roadmap

- [ ] GitHub API integration
- [ ] Real-time project data
- [ ] Multiple project views
- [ ] Custom metrics
- [ ] Export reports
- [ ] Authentication (optional)

## License

MIT

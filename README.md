# Blue Modern Advisory Website

Production-ready Next.js website for Blue Modern Advisory (BMA).

## Stack

- **Framework**: Next.js 14 (App Router) + TypeScript strict mode
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **3D**: React Three Fiber (hero network graph)
- **Content**: MDX for case studies and pages
- **Deployment**: Railway (nixpacks)

## Monorepo Structure

```
bma-website/
├── apps/
│   └── bma-web/          # Next.js application
├── packages/
│   ├── ui/               # Shared design tokens and components
│   ├── content/          # MDX content + Drive integration stubs
│   └── integrations/     # Clay, Slack, analytics stubs
├── content/
│   ├── case-studies/     # MDX case studies
│   ├── agents/           # Agent card JSON definitions
│   └── pages/            # Page body MDX
├── railway.json          # Railway deployment config
├── nixpacks.toml         # Build config
└── Dockerfile            # Optional Docker build
```

## Local Development

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
# Clone and install
git clone https://github.com/calebnewtonusc/bma-website
cd bma-website
npm install

# Set up environment
cp apps/bma-web/.env.example apps/bma-web/.env.local
# Edit .env.local with your values (all are optional for local dev)

# Start development server
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | No | Full site URL (e.g., `https://bluemodernadviosry.com`) |
| `CLAY_API_KEY` | No | Clay API key for visitor tracking and contact CRM push |
| `SLACK_WEBHOOK_URL` | No | Slack incoming webhook for `#website-visitors` notifications |
| `NEXT_PUBLIC_ANALYTICS_ID` | No | Analytics provider key |

All integrations are **env-gated**: if the env var is not set, the integration is silently skipped. The site runs fully without any env vars.

## Pages

| Route | Description |
|---|---|
| `/` | Home: hero, What We Do, Process, Industries, Case Study highlights, Togari/Coaching previews, Founders |
| `/gtm` | GTM Strategy & Engineering |
| `/togari` | Togari Health Intelligence Platform |
| `/agents` | AI Agents gallery with interactive cards |
| `/coaching` | Coaching programs |
| `/content` | Content Hub with type/industry filters |
| `/case-studies` | Case study index |
| `/case-studies/[slug]` | Individual case study (3 included) |
| `/about` | BMA story + founder bios |
| `/contact` | Multi-form contact (Enterprise/Togari/Coaching) |

## API Routes

| Route | Method | Description |
|---|---|---|
| `/api/contact` | POST | Contact form handler (Slack + Clay push) |
| `/api/events/visitor` | POST | Visitor tracking (Clay push) |

## Adding Content

### New Case Study

1. Add a file to `content/case-studies/[slug].mdx` with the required frontmatter
2. Add the case study data to `apps/bma-web/src/lib/case-studies.ts`

### New Agent Card

Add a JSON file to `content/agents/[agent-id].json` following the schema in existing files.

### Content Hub Article

Add entries to the `contentItems` array in `apps/bma-web/src/app/content/ContentPageContent.tsx`.

## Deployment (Railway)

### Using Railway Dashboard

1. Create a new project on [Railway](https://railway.app)
2. Connect your GitHub repository (`calebnewtonusc/bma-website`)
3. Railway auto-detects the `railway.json` config
4. Add environment variables in the Railway dashboard
5. Deploy

### Using Railway CLI

```bash
npm install -g @railway/cli
railway login
railway link
railway up
```

### Environment Variables on Railway

Set these in the Railway project dashboard under Variables:

```
NEXT_PUBLIC_SITE_URL=https://your-railway-domain.up.railway.app
CLAY_API_KEY=your_clay_key
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...
```

## Build Commands

```bash
npm run dev       # Development server (localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint
```

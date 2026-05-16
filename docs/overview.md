# Site Overview — anouk.vananrooij.com

Personal portfolio website for **Anouk van Anrooij**, operations and technology professional.

## Purpose

A single-page resume/portfolio site presenting Anouk's background, selected projects, education, work experience and contact details. The goal is to position her as an interim manager / consultant at the intersection of operations, technology and organizational growth.

## Audience

- Potential clients looking for interim or consulting work
- Recruiters and hiring managers
- Professional connections via LinkedIn or referral

## Sections

| Section | Content |
|---|---|
| Hero | Name, tagline, CTA buttons (Book Meeting, LinkedIn, Email) |
| About | Personal bio and core competency pills |
| Projects | 3 detailed case studies (accordion) + 3 supporting cards |
| Education | MSc Strategic Management (cum laude) + BSc Liberal Arts & Sciences (cum laude), Tilburg University |
| Experience | 6 employer cards with referral request links |
| Contact | Email, LinkedIn, Book a Meeting button |

## Key Projects Documented

1. **Security Technology Implementation** — multi-tenant building, access control, camera surveillance, stakeholder management
2. **Operational Stabilization & Team Rebuilding** — coworking space during organizational change, CRM workflows, 12 hires
3. **Autonomous Robotics R&D Recovery** — project restart, system redesign, commercial renegotiation (Alltrons)
4. **Wireless Access Control Stabilization** — cloud-based ZKTeco system, root cause: networking/gateway
5. **AI Camera Analytics Pilot** — people counting dashboard, outdoor environment
6. **Smart Mobility Collaboration Network** — 60 organizations interviewed, regional ecosystem development (ROM Utrecht)

## Tech Stack

- React 18 + Vite — single-page app with component-per-section architecture
- CSS custom properties — warm neutral palette (`#f7f4ee` background, `#6f8490` accent)
- Responsive: CSS Grid, `clamp()` fluid typography, 900px and 560px breakpoints
- Accordion: `<details>/<summary>` with useRef for controlled state
- Docker multi-stage build: `node:22-alpine` → `nginx:alpine`
- Nginx Proxy Manager for HTTPS (Let's Encrypt via Cloudflare DNS-01)
- GitHub Actions for CI/CD

## File Structure

```
/
├── Dockerfile                    # Multi-stage build
├── docker-compose.yml            # portfolio + NPM + MariaDB
├── nginx.conf                    # nginx SPA config
├── .github/workflows/deploy.yml  # CI/CD pipeline
├── src/
│   ├── App.jsx                   # Root component, imports all sections
│   ├── App.css                   # All styles (CSS custom properties)
│   ├── main.jsx                  # Vite entry point
│   └── components/
│       ├── Header.jsx            # Sticky nav
│       ├── Hero.jsx              # Hero section with photo
│       ├── About.jsx             # Bio + skill pills
│       ├── Projects.jsx          # Accordion project cards
│       ├── Education.jsx         # Degree cards
│       ├── Experience.jsx        # Employer cards
│       └── Contact.jsx           # Contact card
├── public/
│   └── photo.png                 # Profile photo
└── docs/
    ├── overview.md               # This file
    ├── deployment.md             # Deployment guide
    └── content/                  # Source-of-truth for site copy
        ├── hero.md
        ├── about.md
        ├── projects.md
        ├── education.md
        ├── experience.md
        └── contact.md
```

## Placeholder / TODOs

- `CALENDAR_URL_HERE` in Hero and Contact — replace with actual booking URL (Calendly etc.)

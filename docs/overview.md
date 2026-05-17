# Site Overview — anouk.vananrooij.com

Personal portfolio website for **Anouk van Anrooij**, operations and technology professional.

## Purpose

A single-page portfolio site presenting Anouk's background, selected projects, education, work experience and contact details. The goal is to position her as an interim manager / consultant at the intersection of operations, technology and entrepreneurship.

## Audience

- Potential clients looking for interim or project management work
- Recruiters and hiring managers
- Professional connections via LinkedIn or referral

## Sections

| Section | Content |
|---|---|
| Hero | Name, eyebrow tagline, subtitle, CTA buttons (Book Meeting, LinkedIn, Email) |
| About | Personal bio in three paragraphs |
| Projects | 6 tabbed case studies, each with summary and expandable full case study |
| Experience | 6 employer cards in a 3-column horizontal grid, most recent first |
| Education | MSc Strategic Management (cum laude) + BSc Liberal Arts & Sciences (cum laude), Tilburg University |
| Contact | Location, language, CTA buttons (Book Meeting, LinkedIn, Email) |

## Key Projects

1. **Security Technology Implementation** — multi-tenant building, access control, camera surveillance, stakeholder management
2. **Operational Stabilization & Team Rebuilding** — coworking space during organizational change, CRM workflows, 12 hires
3. **Autonomous Robotics R&D Recovery** — project restart, system redesign, commercial renegotiation
4. **Wireless Access Control Stabilization** — cloud-based system, root cause: networking/gateway
5. **AI Camera Analytics Pilot** — people counting dashboard, outdoor environment
6. **Building a Regional Public-Private Ecosystem** — 60 organisations, Utrecht region, public-private alignment

## Tech Stack

- React 18 + Vite — single-page app with component-per-section architecture
- CSS custom properties — warm-neutral palette, petrol blue accent
- Responsive: CSS Grid, `clamp()` fluid typography, 900px and 560px breakpoints
- Projects: `useState` tabs with expand/collapse button per case study
- Scroll animations: IntersectionObserver for `.reveal` fade-up, active nav detection
- Hero: parallax scroll effect on photo via `useRef` + scroll event listener
- Hero: staggered fade-up entrance animation on page load
- Mobile nav: hamburger toggle with `useState`
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
│       ├── Header.jsx            # Sticky nav with active section indicator
│       ├── Hero.jsx              # Hero section with photo and entrance animation
│       ├── About.jsx             # Bio
│       ├── Projects.jsx          # Tabbed case studies with expand/collapse
│       ├── Education.jsx         # Degree cards
│       ├── Experience.jsx        # Employer cards (3-column grid)
│       └── Contact.jsx           # Contact section
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

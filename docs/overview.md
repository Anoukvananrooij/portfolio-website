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
| Hero | Name, tagline, CTA buttons (Book Appointment, LinkedIn, Email) |
| About | Professional summary and core competency pills |
| Projects | 3 detailed case studies + 3 supporting cards (accordion/details) |
| Education | MSc Strategic Management (cum laude) + BSc Liberal Arts & Sciences (cum laude), Tilburg University |
| Experience | 6 employer cards with referral request links |
| Contact | Email, LinkedIn, Book Appointment button |

## Key Projects Documented

1. **Security Technology Implementation** — multi-tenant building, access control, camera surveillance, stakeholder management
2. **Operational Stabilization & Team Rebuilding** — coworking space during organizational change, CRM workflows, 12 hires
3. **Autonomous Robotics R&D Recovery** — project restart, system redesign, commercial renegotiation (Alltrons)
4. **Wireless Access Control Stabilization** — cloud-based ZKTeco system, root cause: networking/gateway
5. **AI Camera Analytics Pilot** — people counting dashboard, outdoor environment
6. **Smart Mobility Collaboration Network** — 60 organizations interviewed, regional ecosystem development (ROM Utrecht)

## Tech Stack

- Pure HTML/CSS/JS — no framework, no build step
- Fonts: Avenir / system-ui stack
- Design: warm neutral palette (`#f7f4ee` background, `#6f8490` accent)
- Responsive: CSS Grid, `clamp()` fluid typography, 900px and 560px breakpoints
- Interactive: `<details>` accordion for project cards, accordion-group JS (only one open at a time)

## File Structure

```
/
├── Caddyfile               # Caddy web server config
├── docker-compose.yml      # Docker Compose (Caddy container)
├── docs/
│   ├── overview.md         # This file
│   └── deployment.md       # Deployment guide
└── site/                   # Files served by Caddy
    ├── index.html          # Main portfolio page
    └── photo.png           # Profile photo (ChatGPT-generated portrait)
```

## Placeholder / TODOs

- `CALENDAR_URL_HERE` in the contact section — replace with actual booking URL (Calendly etc.)
- Phone number marked "to be added" in contact section
- Consider adding `/cv.pdf` for a downloadable one-pager

# How to Repeat This Project with Claude

This document captures the questions and prompts used to build anouk.vananrooij.com from scratch, so you can recreate the same type of project for a new domain or client.

## What was built

A personal portfolio website:
- Single-page React app (Vite + React 18)
- Hosted on a VPS (LeaseWeb Debian)
- Docker Compose: app container + Nginx Proxy Manager + MariaDB
- HTTPS via Let's Encrypt (Cloudflare DNS challenge)
- CI/CD via GitHub Actions

---

## Phase 1: Design and content decisions

Start by answering these questions for your new project:

**Site identity**
- What is the person's name and professional role?
- Who is the target audience? (recruiters, clients, collaborators?)
- What tone? (formal/professional, warm/personal, minimal/bold?)

**Design**
- Color palette preference? (warm neutrals, cool minimal, bold/colorful?)
- Font style? (serif, sans-serif, system font?)
- Layout: single scrolling page or multi-page?
- Should the header be sticky?
- Is there a profile photo?

**Content sections**
- Hero: tagline / subtitle?
- About: bio style (short and punchy, or detailed?)
- Projects: how many? With expandable details or cards?
- Education: degrees, institutions, honors?
- Experience: list of employers with descriptions? Referral links?
- Contact: which channels? (email, LinkedIn, calendar booking?)

**Interactions**
- Book-a-meeting button? (Calendly or Google Calendar link)
- Accordion sections or all visible?

---

## Phase 2: Infrastructure decisions

**Domain and DNS**
- Domain name?
- DNS provider? (Cloudflare recommended — supports DNS-01 HTTPS challenge)
- Cloudflare API token (zone:edit permission for your domain)

**Server**
- VPS provider (LeaseWeb, Hetzner, DigitalOcean, etc.)
- Server IP
- Root SSH credentials
- Operating system (Debian recommended)

**Repository**
- GitHub username and repo name
- GitHub personal access token (for repo creation via API)

**What Claude needs from you**
- Domain name and Cloudflare API token
- Server IP and SSH root password
- GitHub token (for creating the repo and setting up Actions)

> These are session credentials. At the end of the session, revoke the Cloudflare token, rotate the server root password, and store secrets properly (see Phase 4).

---

## Phase 3: What to ask Claude

Ask these prompts in roughly this order:

1. "Can you dockerize the project?" *(or: "Build a React portfolio site for me")*
2. "I want the website built in React. Less content, more personal. Ask me about the design."
3. Answer Claude's design questions (colors, layout, sections, font, photo, etc.)
4. "I want a button so people can plan a meeting with me."
5. "Single page but with header buttons that scroll to each section."
6. "For the domain [yourdomain.com], I use Cloudflare. Here is my API token: [token]"
7. "Root password is [password] on [server-ip]. Use SSH to set up the entire webserver with Docker."
8. "Use http://[yourdomain.com] as the domain name."
9. "I want CI/CD using GitHub. Create a repo at [github-url]."
10. "I put the token in the .env file." *(after adding it)*
11. "Go ahead until [yourdomain.com] is live. Use Cloudflare for DNS, SSH for configuring the server, GitHub Actions for CI/CD."
12. "Write documentation: a root README and cross-linked files."
13. "Write a .md file describing how I can repeat this project with you."

---

## Phase 4: End-of-session security cleanup

Claude will remind you of this at the end, but here is the checklist:

**Rotate server root password**
```bash
ssh root@<server-ip>
passwd  # set a new strong password
```
Store the new password in a password manager (Bitwarden, 1Password, etc.).

**Revoke Cloudflare API token**
Go to: Cloudflare dashboard → My Profile → API Tokens → Revoke the session token.
Create a new scoped token for future use and store it in your password manager.

**GitHub Actions secrets**
Go to: `https://github.com/<username>/<repo>/settings/secrets/actions`

Add these secrets (so the workflow file never contains credentials):
- `SERVER_IP` — your server's IP
- `SERVER_USER` — `root` (or a dedicated deploy user)
- `SERVER_PASSWORD` — the new server password

**SSH key (recommended upgrade)**
Replace password SSH with key-based auth:
```bash
ssh-keygen -t ed25519 -C "deploy@yourdomain.com"
ssh-copy-id root@<server-ip>
# Then disable password auth in /etc/ssh/sshd_config
```

**NPM admin password**
The Nginx Proxy Manager admin account uses:
- Email: your email
- Password: set during setup (change it in the NPM UI: `http://<server-ip>:81`)
Store in password manager. Block port 81 from external access via UFW:
```bash
ufw deny 81/tcp
```

---

## What Claude does automatically

When you provide the above information, Claude will:

- Scaffold the React app (Vite + component-per-section architecture)
- Write all CSS with your chosen palette
- Fill in content from your answers
- Create a multi-stage Dockerfile and docker-compose.yml
- SSH into your server, install Docker, clone the repo, start services
- Create the Cloudflare DNS A record
- Configure Nginx Proxy Manager and request an SSL certificate
- Set up GitHub Actions CI/CD
- Write documentation

You only need to: open firewall ports when asked, add tokens/passwords to `.env` when asked, and approve GitHub Actions secrets manually (GitHub requires human confirmation for new repos).

---

## Useful reference

- [docs/overview.md](overview.md) — architecture and file structure
- [docs/deployment.md](deployment.md) — how to deploy and update
- [docs/content/](content/) — source of truth for all site copy

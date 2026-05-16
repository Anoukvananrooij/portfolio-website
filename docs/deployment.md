# Deployment Guide

The site is a React (Vite) app built into a static bundle and served by nginx inside Docker. Nginx Proxy Manager (NPM) handles HTTPS termination with a Let's Encrypt certificate via Cloudflare DNS challenge.

## Requirements

- Docker + Docker Compose on the host
- A `.env` file with `DB_PASSWORD` and `DB_ROOT_PASSWORD` (see `.env.example`)

## Local development

```bash
npm install
npm run dev
# Open http://localhost:5173
```

## Local Docker preview

```bash
docker compose up --build
# Open http://localhost
```

## Production setup

1. Clone repo on server under `/opt/portfolio`
2. Copy `.env` with DB credentials
3. Start services:

```bash
cd /opt/portfolio
docker compose up --build -d
```

4. Configure Nginx Proxy Manager at `http://<server-ip>:81`:
   - Add proxy host: your domain → `portfolio:80`
   - Add SSL certificate via Cloudflare DNS challenge

## CI/CD

GitHub Actions deploys on every push to `main`. The workflow SSHes into the server and runs:

```bash
cd /opt/portfolio
git pull origin main
docker compose up --build -d --remove-orphans
```

Secrets required in GitHub repository settings:
- `SERVER_IP` — server IP address
- `SERVER_USER` — SSH username
- `SERVER_PASSWORD` — SSH password

## Files that matter for deployment

| File | Purpose |
|---|---|
| `Dockerfile` | Multi-stage build: node → nginx |
| `nginx.conf` | nginx SPA config (try_files, gzip, caching) |
| `docker-compose.yml` | portfolio app + Nginx Proxy Manager + MariaDB |
| `.env` | DB credentials (gitignored) |
| `.github/workflows/deploy.yml` | CI/CD pipeline |

## Updating the site

1. Edit source files in `src/`
2. Push to `main` — GitHub Actions handles the rest

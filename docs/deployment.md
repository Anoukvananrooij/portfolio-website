# Deployment Guide

The site runs as a static file server inside Docker using [Caddy](https://caddyserver.com/).

## Requirements

- Docker + Docker Compose installed on the host

## Local preview

```bash
docker compose up
# Open http://localhost:80
```

## Production

Deploy the whole repository to your server, then:

```bash
docker compose up -d
```

Caddy serves everything in `./site/` on port 80. To enable HTTPS, update the `Caddyfile`:

```
anouk.vananrooij.com {
    root * /usr/share/caddy/site
    file_server
}
```

Caddy will automatically obtain and renew a Let's Encrypt certificate.

## Files that matter for deployment

| File | Purpose |
|---|---|
| `Caddyfile` | Web server config — change `:80` to your domain for HTTPS |
| `docker-compose.yml` | Defines the Caddy container and mounts |
| `site/index.html` | The portfolio page |
| `site/photo.png` | Profile photo |

## Updating the site

1. Edit `site/index.html` directly
2. Commit with git
3. Pull on the server and restart: `docker compose up -d --force-recreate`

No build step needed — changes to `site/` are served immediately after the container restarts (or instantly if the volume is already mounted and you're just editing files in place).

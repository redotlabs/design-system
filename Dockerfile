# storybook static 빌드 → nginx 정적 서빙 (redot-storybook)
# ---- builder ----
FROM node:20-alpine AS builder
RUN corepack enable && corepack prepare pnpm@10.6.1 --activate
WORKDIR /app

COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm build                    # turbo build @redotlabs/* → 워크스페이스 패키지 dist(tokens 등)
RUN pnpm build-storybook          # → storybook-static/

# ---- runner ----
FROM nginx:alpine
COPY --from=builder /app/storybook-static /usr/share/nginx/html
EXPOSE 80

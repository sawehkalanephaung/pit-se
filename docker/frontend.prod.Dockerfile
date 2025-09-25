# Build stage
FROM node:20-alpine AS builder
WORKDIR /workspace
RUN corepack enable
COPY package.json pnpm-lock.yaml .npmrc* ./
COPY pnpm-workspace.yaml nx.json tsconfig.base.json ./
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm exec nx build web

# Serve static build with Nginx
FROM nginx:1.27-alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /workspace/dist/apps/web /usr/share/nginx/html
EXPOSE 80

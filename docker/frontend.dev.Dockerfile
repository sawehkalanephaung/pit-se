FROM node:20-alpine

WORKDIR /workspace
RUN corepack enable

# We mount the repo in docker-compose; install deps & run dev server at start
CMD sh -c "pnpm install && pnpm nx serve web --host 0.0.0.0 --port 5173"

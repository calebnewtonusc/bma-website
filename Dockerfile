FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
COPY apps/bma-web/package.json ./apps/bma-web/
COPY packages/ ./packages/

RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/bma-web/public ./apps/bma-web/public

RUN mkdir -p ./apps/bma-web/.next
RUN chown nextjs:nodejs ./apps/bma-web/.next

COPY --from=builder --chown=nextjs:nodejs /app/apps/bma-web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/bma-web/.next/static ./apps/bma-web/.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "apps/bma-web/server.js"]

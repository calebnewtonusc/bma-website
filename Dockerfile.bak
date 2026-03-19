FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy all package files for workspace install
COPY package.json package-lock.json* ./
COPY apps/bma-web/package.json ./apps/bma-web/package.json
COPY packages/ ./packages/

# Install all workspace deps (root + workspaces)
RUN npm ci

# Copy source
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

# Build the Next.js app
RUN npm run build --workspace=apps/bma-web

# Production runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy standalone output
COPY --from=base --chown=nextjs:nodejs /app/apps/bma-web/.next/standalone ./
COPY --from=base --chown=nextjs:nodejs /app/apps/bma-web/.next/static ./apps/bma-web/.next/static
COPY --from=base --chown=nextjs:nodejs /app/apps/bma-web/public ./apps/bma-web/public

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "apps/bma-web/server.js"]

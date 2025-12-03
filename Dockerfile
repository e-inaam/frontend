# ---- Base image ----
FROM node:20-alpine AS base
WORKDIR /app

# Fixes some glibc compatibility issues on Alpine
RUN apk add --no-cache libc6-compat

ENV NODE_ENV=production

# ---- Dependencies stage ----
FROM base AS deps

# Install deps (uses package-lock.json for exact versions)
COPY package.json package-lock.json ./
RUN npm ci

# ---- Build stage ----
FROM base AS builder

WORKDIR /app

# Re-use node_modules from deps
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the project files
COPY . .

# Build Next.js app
RUN npm run build

# ---- Runner stage (final image) ----
FROM base AS runner

WORKDIR /app

# Copy only what we need at runtime
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

# Install only production dependencies (includes next if it's in dependencies)
RUN npm install --omit=dev

# Expose the port Render will hit
EXPOSE 3000

# Start Next.js in production mode
CMD ["npm", "start"]

# Base image
FROM node:18-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json before installing dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build Next.js app
RUN npm run build

# ----------------- Production Stage -----------------
FROM node:18-alpine AS runner

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

# Set environment variable (disable telemetry)
ENV NEXT_TELEMETRY_DISABLED=1
# ENV NODE_ENV=production

# Expose port (used by Next.js)
EXPOSE 3004

# Start Next.js app
CMD ["npm", "run", "start"]

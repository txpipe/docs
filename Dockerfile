# Build stage
FROM node:22-slim AS builder

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./
COPY patches/ ./patches/

# Install dependencies
RUN pnpm install --frozen-lockfile --ignore-scripts

RUN pnpm exec playwright install --with-deps --only-shell

# Copy source files
COPY . .

# Build the project
RUN pnpm build

# Runtime stage
FROM node:22-alpine AS runtime

WORKDIR /app

# Install a simple static file server
RUN npm install -g serve

# Copy the built files from builder stage
COPY --from=builder /app/dist /app

# Expose port 3000
EXPOSE 3000

# Start the server (serving static files)
CMD ["serve", ".", "-l", "3000"] 
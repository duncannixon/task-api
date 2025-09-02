# Use official Node.js LTS image
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and lockfile
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build TypeScript
RUN npm run build

# Expose port
EXPOSE 3000

# Force unbuffered stdout/stderr
ENV NODE_ENV=development
ENV NODE_OPTIONS=--enable-source-maps

# Start server
CMD ["node", "--enable-source-maps", "dist/server.js"]

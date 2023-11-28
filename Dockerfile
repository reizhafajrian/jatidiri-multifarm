# Stage 1: Building the code
FROM node:16-alpine as builder

# Create app directory
WORKDIR /opt/jatidiri/frontend

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# # Build the Next.js app
RUN npm run build

# # Stage 2: Run the app
FROM node:16-alpine

WORKDIR /opt/jatidiri/frontend

# # Copy built assets from builder stage
COPY --from=builder /opt/jatidiri/frontend/public ./public
COPY --from=builder /opt/jatidiri/frontend/.next ./.next
COPY --from=builder /opt/jatidiri/frontend/node_modules ./node_modules
COPY --from=builder /opt/jatidiri/frontend/package.json ./package.json

# # Expose the port the app runs on
EXPOSE 3000

# # Start the app
CMD ["npm", "start"]

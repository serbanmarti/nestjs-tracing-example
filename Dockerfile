FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image
COPY --chown=node:node package.json yarn.lock ./

# Install the dependencies
RUN yarn install

# Copy the app source
COPY --chown=node:node . .

# Run the build command which creates the bundle
RUN yarn build

# Use the node user from the image (instead of the root user)
USER node

# Start the server using the production build
CMD [ "node", "dist/main.js" ]

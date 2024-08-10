FROM node:20-bookworm-slim

WORKDIR /react_app

# Copy app files
COPY ecosystem.config.cjs ./
COPY ./package.json ./
COPY . .

# Install pm2
RUN npm install pm2 -g

# Install dependencies
RUN npm install

# Build args
ARG VITE_SERVER_URL
ARG VITE_SUPPORT_PHONE
ARG VITE_SUPPORT_EMAIL

# Prepare `yarn build` environment
ENV VITE_SERVER_URL=$VITE_SERVER_URL
ENV VITE_SUPPORT_PHONE=$VITE_SUPPORT_PHONE
ENV VITE_SUPPORT_EMAIL=$VITE_SUPPORT_EMAIL

# Build project
RUN yarn build

# Remove all but 'build'
# RUN find . -maxdepth 1 ! -name 'build' ! -name '.' ! -name '..' -exec rm -rf {} +

# serve by pm2
CMD pm2 list ; pm2-runtime start ecosystem.config.cjs

# Stage 1: Compile and Build angular codebase
FROM node:20-slim as build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Set the working directory
WORKDIR /app

# Add the source code to app
COPY . .
RUN rm -rf .nx .angular

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm exec nx build client-auth --prod

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest as nginx-build

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/apps/client-auth/browser /usr/share/nginx/html

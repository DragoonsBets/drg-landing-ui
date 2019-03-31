FROM node:9-slim
ENV PORT 8080
EXPOSE 8080
WORKDIR /.next
COPY . .
CMD ["npm", "start"]

# Stage 1 - the build process
FROM node:9-slim as build-deps
# FROM tiangolo/node-frontend:10 as build-deps
# ENV PORT 8080
# EXPOSE 8080
WORKDIR /out
COPY . .
RUN yarn run build
RUN /bin/bash -c "ls /out/"
# RUN /bin/bash -c "ls /usr/src/app/build"

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /out/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-deps /out/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
EXPOSE 443
#ENV NODE_ENV=production
CMD ["nginx", "-g", "daemon off;"]
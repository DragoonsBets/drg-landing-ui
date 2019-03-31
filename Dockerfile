FROM node:9-slim
ENV PORT 8080
EXPOSE 8080
WORKDIR /.next
COPY . .
CMD ["npm", "start"]
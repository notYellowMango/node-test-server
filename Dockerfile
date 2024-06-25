FROM node:18.13.0 AS base

WORKDIR /app
COPY ./ ./

RUN npm install

EXPOSE 3001

ENV PORT 3001

CMD ["node", "index.js"]
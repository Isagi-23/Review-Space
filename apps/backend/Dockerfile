FROM node:20-alpine

WORKDIR /apps/backend/src

COPY package.json ./
COPY prisma ./prisma

RUN  npm install

COPY . .
EXPOSE 8000
EXPOSE 5555


CMD ["npm", "run", "dev:docker"]
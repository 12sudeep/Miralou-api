FROM node:16 as base

WORKDIR /app 

COPY package*.json ./
COPY prisma .

RUN npm install 

RUN npx prisma generate

COPY . . 

RUN npm run build 

FROM node:16-alpine as production 

WORKDIR /app 

COPY package*.json ./ 

RUN npm install --only=production 

COPY --from=base /app/dist ./dist 
COPY prisma .
RUN npx prisma generate

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

EXPOSE 3000

CMD ["node", "dist/src/main.js"] 

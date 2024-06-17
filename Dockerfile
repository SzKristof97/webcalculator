FROM node:latest
WORKDIR .
ADD . .
RUN npm install
CMD ["node", "index.js"]
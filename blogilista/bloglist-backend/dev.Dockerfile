FROM node:16
WORKDIR /usr/src/app
COPY --chown=node:node . .
RUN npm ci --legacy-peer-deps
ENV DEBUG=playground:*
USER node
CMD ["npm", "run", "dev"]
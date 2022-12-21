FROM node:14 as NodeBuilder
WORKDIR /code
COPY . ./
RUN npm install -g @angular/cli@15.0.4 \
    && npm install \
    && npm run build:ssr

FROM node:14
ENV NODE_ENV=production
COPY --from=NodeBuilder /code/dist /dist
EXPOSE 4000
RUN npm install -g pm2
CMD ["pm2-runtime", "/dist/web/server/main.js"]
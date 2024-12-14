FROM node:22.12.0-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package.json ./

ENV PNPM_HOME="/home/node/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable
RUN corepack prepare pnpm@latest-9 --activate

USER node

RUN pnpm add -g remix-serve

COPY --chown=node:node ./build ./build

EXPOSE 3000

CMD ["pnpm", "start"]
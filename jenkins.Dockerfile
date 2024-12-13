FROM node:22.12.0

ARG UID
ARG GID

RUN groupadd -g $GID jenkins
RUN useradd -g $GID -u $UID -m jenkins

RUN corepack enable
RUN corepack prepare pnpm@latest-9 --activate

USER jenkins:users
WORKDIR /home/jenkins

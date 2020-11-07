FROM node:10.15.3
MAINTAINER ruslan.lizogub@clicklogiq.com

WORKDIR /project
COPY  . .

RUN yarn install
RUN yarn global add protractor

CMD ["yarn", "e2e-dev"]

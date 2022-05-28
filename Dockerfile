FROM node:12.22.12
EXPOSE 8080
WORKDIR /awesomelibrary
RUN npm install -g npm@8.11.0
CMD ["npm", "run", "start"]

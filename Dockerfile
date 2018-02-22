FROM node:latest
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 80
# ENV NAME World
CMD ["npm", "run" ,"start-dev"]
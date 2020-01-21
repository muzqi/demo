ARG nodeVersion
FROM node:$nodeVersion
ENV DOCKERFILE_ENV "hello Dockerfile"
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3000

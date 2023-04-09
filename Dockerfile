FROM nginx:stable
LABEL maintainer="Abiola Rotimi rtmabiola@gmail.com"
COPY . /usr/share/nginx/html
EXPOSE 8080


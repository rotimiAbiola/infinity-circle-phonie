FROM nginx:stable
LABEL maintainer="Abiola Rotimi rtmabiola@gmail.com"
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
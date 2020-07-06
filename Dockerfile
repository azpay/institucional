FROM nginx:alpine
COPY . /usr/share/nginx/html
RUN sed -i 's/#error_page 404/error_page 404/g' /etc/nginx/conf.d/default.conf

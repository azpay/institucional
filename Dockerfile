FROM nginx:alpine
COPY . /usr/share/nginx/html
RUN sed -i 's/#error_page/error_page/g' /etc/nginx/conf.d/default.conf
RUN sed -i '/location \/ {/ a rewrite ^/([^\.]+)$ /$1.html break;' /etc/nginx/conf.d/default.conf

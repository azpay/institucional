FROM nginx:alpine
COPY . /usr/share/nginx/html
RUN sed -i 's/#error_page/error_page/g' /etc/nginx/conf.d/default.conf

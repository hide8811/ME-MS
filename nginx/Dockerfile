FROM nginx:1.15.8

COPY nginx.conf /etc/nginx/conf.d/default.conf.template

CMD /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf


ARG nodeVersion=18.18.2
ARG nginxVersion=1.21
ARG alpineVersion=3.18
ARG buildDir=dist

#FROM hub.docker.prod.walmart.com/library/node:${nodeVersion}-alpine AS base
FROM docker.artifacts.walmart.com/hub-docker-release-remote/library/node:${nodeVersion}-alpine${alpineVersion} AS base

RUN SYS_MAJ_VER=$( grep '^VERSION' /etc/os-release|awk -F= '{ print $2 }'|awk -F. '{ print($1"."$2) }') \
    && echo "http://ark-repos.wal-mart.com/ark/apk/published/alpine/$SYS_MAJ_VER/direct/soe/noenv/community" > /etc/apk/repositories \
    && echo "http://ark-repos.wal-mart.com/ark/apk/published/alpine/$SYS_MAJ_VER/direct/soe/noenv/main" >> /etc/apk/repositories  \
    && apk update && apk upgrade && apk --no-cache add \
    tini \
    && rm -rf /var/cache/* \
    && mkdir /var/cache/apk

WORKDIR /app
# download dev dependencies and perform build
COPY . .
RUN npm install --registry=https://npme.walmart.com/ \
    && npm run build
# download dev dependencies and perform build
#RUN npm run build

ENTRYPOINT ["/sbin/tini", "--"]

# Certificates
FROM docker.prod.walmart.com/wce/ca-roots:latest AS roots

#Buld nginx web server
#FROM docker.artifacts.walmart.com/hub-docker-release-remote/library/nginx:${nginxVersion}-alpine
FROM docker.artifacts.walmart.com/hub-docker-release-remote/library/node:${nodeVersion}-alpine${alpineVersion}
RUN SYS_MAJ_VER=$( grep '^VERSION' /etc/os-release|awk -F= '{ print $2 }'|awk -F. '{ print($1"."$2) }') \
    && echo "http://ark-repos.wal-mart.com/ark/apk/published/alpine/$SYS_MAJ_VER/direct/soe/noenv/community" > /etc/apk/repositories \
    && echo "http://ark-repos.wal-mart.com/ark/apk/published/alpine/$SYS_MAJ_VER/direct/soe/noenv/main" >> /etc/apk/repositories  \
    && apk update && apk upgrade \
    && rm -rf /var/cache/* \
    && mkdir /var/cache/apk 
RUN apk add nginx    

WORKDIR /app

LABEL io.strati.maintainer="Strati" \
    io.strati.wce_base_kba="v1.0.0" \
    io.strati.base_image="node-static-nginx"

COPY --from=base /app/dist/* /usr/share/nginx/html/
#COPY --from=base /app/dist/* .
COPY --from=base /app/package.json .
COPY --from=base /app/package-lock.json .
COPY --from=base /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=roots /usr/local/share/ca-certificates /usr/local/share/ca-certificates
COPY --from=roots /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/ca-certificates.crt
RUN rm -f /etc/ssl/cert.pem && ln -s /etc/ssl/certs/ca-certificates.crt /etc/ssl/cert.pem

RUN npm config set registry https://npme.walmart.com/
RUN npm install -g @angular/cli@16.2.0
RUN npm install

#Non Root User Configuration
RUN addgroup -S -g 10001 appGrp \
    && adduser -S -D -u 10000 -s /sbin/nologin -h /app -G appGrp app \
    && chown -R 10000:10001 /app \
    && mkdir -p /var/run/ \
    && chown -R 10000:10001 /var/run/ \
    && touch /var/run/nginx.pid \
    && chown -R app:appGrp /var/run/nginx.pid \
    && chmod 0777 /var/run/nginx.pid \
    && chown -R app:appGrp /usr/share/nginx/html/ \
    && mkdir -p /var/cache/nginx/ \
    && chown -R app:appGrp /var/cache/nginx/ \
    && mkdir -p /var/lib/nginx/logs/ \
    && chown -R app:appGrp /var/lib/nginx/  \
    && chown -R app:appGrp /var/lib/nginx/logs/ 
#    && chown -R app:appGrp /etc/nginx/conf.d/  \
#    && echo "ambiente: $ENVIRONMENTS" > ambiente.txt

EXPOSE 8080 8087 3000

#Override as non-root user
USER 10000:10001

CMD ["nginx", "-g", "daemon off;"]
#CMD ["npm", "run", "start"]
#CMD ["npm", "run", "start"]
#CMD [ "tail","-f", "/dev/null" ]
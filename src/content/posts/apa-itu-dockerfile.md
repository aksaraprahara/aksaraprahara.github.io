---
title: "Apa itu Dockerfile?"
date: 2022-09-25
excerpt: "Pengenalan Dockerfile beserta contoh sederhana membuat image Ubuntu yang sudah dikustomisasi dengan Nginx dan konten web sendiri."
image: "https://cdn-images-1.medium.com/proxy/1*CH99AOFHFJKClkbM6OVH5w.png"
tags: [dockerfiles, containers, docker, nginx]
---

_Adaptasi preview dari tulisan asli di [Medium](https://yudiwiratama.medium.com/apa-itu-dockerfile-50f8f99af8b4?source=rss-673404229d19------2)._

Dockerfile adalah file konfigurasi untuk membangun image yang sudah dikustomisasi. Dengan Dockerfile, kita bisa menyiapkan dependency, file konfigurasi, dan command startup sejak proses build, jadi tidak perlu setup manual setiap kali container dijalankan.

## Struktur Project

```bash
mkdir deploy
cd deploy
touch Dockerfile
```

## Contoh Dockerfile

```dockerfile
FROM ubuntu:latest

RUN apt -y update && apt-get -y install nginx

COPY default /etc/nginx/sites-available/default
COPY index.html /var/www/html/index.nginx-debian.html

EXPOSE 80/tcp

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
```

Image di atas membuat Ubuntu yang sudah diinstal Nginx, lalu menyalin konfigurasi dan konten web ke dalam container.

## Build Image

```bash
docker build -t ubuntu_webserver .
```

Parameter `-t` dipakai untuk memberi nama atau tag image.

## Menjalankan Container

```bash
docker run -d --name webserver -p 80:80 ubuntu_webserver:latest
docker ps
```

Dengan port mapping `80:80`, service Nginx dalam container bisa diakses dari host melalui port 80. Pendekatan ini cocok untuk memahami alur dasar build image, copy file ke container, dan menjalankan service sebagai proses utama.

## Video Referensi Uji Embed

Kalau auto-embed YouTube aktif, link tunggal di bawah ini akan berubah menjadi preview video yang bisa diputar langsung di dalam halaman.

https://www.youtube.com/watch?v=dQw4w9WgXcQ

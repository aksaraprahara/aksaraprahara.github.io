---
title: "Input Output Redirection in Linux"
date: 2023-01-07
excerpt: "Catatan dasar mengenai stdin, stdout, stderr, pipes, dan contoh penggunaan redirection di Linux shell."
image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
tags: [stdin, stdout, stderr, linux, shell]
---

_Adaptasi preview dari tulisan asli di [Medium](https://yudiwiratama.medium.com/input-output-redirection-in-linux-36b5848bbef4?source=rss-673404229d19------2)._

Topik ini terdengar sederhana, tapi redirection sering sangat membantu saat troubleshooting, logging, atau menyusun command pipeline yang lebih efisien.

## Konsep Dasar

- `stdin` adalah input standar, biasanya dari keyboard.
- `stdout` adalah output standar yang tampil ke layar.
- `stderr` adalah output error yang juga tampil ke layar.

## STDOUT

Gunakan `>` untuk overwrite dan `>>` untuk append.

```bash
ls -al > file.txt
cat file.txt
```

## STDIN

Input redirection dipakai untuk menjadikan isi file sebagai input command.

```bash
sort < file.txt
sort < file.txt > sorted_list
```

## Pipes

Pipe mengambil output dari satu command lalu memberikannya sebagai input ke command berikutnya.

```bash
ls -l | less
du -h | sort -nr > disk_used
ls -l | wc -l
tar -tzvf file.tar.gz | less
```

## STDERR

Kalau ingin menangkap error terpisah dari output normal:

```bash
myscript.sh 2> error.txt
```

Kalau ingin menggabungkan `stderr` ke `stdout`:

```bash
myscript.sh > output.log 2>&1
```

Pola ini sangat berguna saat kita butuh satu file log lengkap untuk investigasi. Intinya, dengan memahami redirection dan pipe, banyak task shell bisa dibuat lebih ringkas dan lebih mudah dibaca ulang.

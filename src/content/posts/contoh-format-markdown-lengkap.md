---
title: "Contoh Format Markdown Lengkap untuk Catatan"
date: 2026-04-29
excerpt: "Catatan contoh yang merangkum fitur penulisan yang didukung di format Markdown biasa pada section catatan utama."
image: "/images/home-top-artwork-banner.png"
tags: [markdown, contoh, format, panduan]
author: "Yudi Putra Wiratama"
draft: false
---

Catatan ini dibuat untuk menguji dan mendemokan fitur-fitur penulisan yang **didukung di format `.md` biasa**. Jadi isinya sengaja beragam: dari heading, list, tabel, blockquote, code block, HTML ringan, sampai auto-embed YouTube.

## Teks Dasar

- **bold**
- *italic*
- ~~strikethrough~~
- `inline code`

Kalimat ini juga memuat `docker compose up -d`, `sudo systemctl status nginx`, dan `ceph -s` untuk memastikan inline code tetap nyaman dibaca di tengah paragraf.

## Heading dan Paragraf

### Heading Level 3

Markdown mendukung struktur heading biasa sampai beberapa level. Ini berguna untuk menata alur catatan panjang.

#### Heading Level 4

Sub-bagian seperti ini cocok untuk rincian langkah atau penjelasan yang lebih kecil.

Baris pertama dengan line break manual.  
Baris kedua tetap dalam paragraf yang sama.

## Link

- Link biasa ke [Astro](https://astro.build)
- Link biasa ke [halaman tentang](/about)

Contoh reference-style link: [Dokumentasi Grafana][grafana-docs].

## List

### Unordered List

- item satu
- item dua
- item tiga
  - sub item A
  - sub item B

### Ordered List

1. siapkan environment
2. tulis konfigurasi
3. jalankan service

### Task List

- [x] menulis contoh Markdown
- [x] menambahkan code block
- [ ] menambah lebih banyak contoh nyata

## Blockquote

> Kadang catatan terbaik bukan yang paling lengkap, tetapi yang paling mudah ditemukan kembali saat dibutuhkan.
>
> Itu sebabnya struktur tulisan sering lebih penting daripada panjang tulisan.

## Tabel

| Komponen | Versi | Status |
| :--- | :---: | ---: |
| Ubuntu | 22.04 | aktif |
| Docker | latest | siap |
| Grafana | stable | online |

---

## Code Block

```bash
sudo apt update
sudo apt install -y docker.io
sudo systemctl enable --now docker
```

```yaml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'node'
    static_configs:
      - targets:
          - localhost:9100
```

```json
{
  "service": "grafana",
  "port": 3000,
  "auth": "enabled"
}
```

```ini
[Service]
ExecStart=/usr/local/bin/node_exporter
```

```diff
- old value
+ new value
```

```text
Active: active (running)
```

## Gambar

Gambar lokal di dalam isi catatan:

![Contoh gambar lokal](/images/site-logo.png)

## Auto-embed YouTube

Kalau link YouTube berdiri sendiri dalam satu paragraf, sekarang akan otomatis jadi embed:

https://youtu.be/dQw4w9WgXcQ

## HTML Ringan

<details>
<summary>Klik untuk membuka catatan tambahan</summary>

HTML ringan masih bisa dipakai di Markdown biasa.

- bisa untuk catatan tambahan
- bisa untuk list
- bisa untuk teks dengan `inline code`

</details>

Kalimat ini memuat <mark>highlight</mark>, H<sub>2</sub>O, x<sup>2</sup>, dan <kbd>Ctrl</kbd> + <kbd>C</kbd>.

## Escape Character

Contoh karakter yang di-escape:

\*bukan italic\*  
\_bukan emphasis\_  
\#bukan heading

## Footnote

Kalimat ini memakai footnote.[^contoh-footnote]

Footnote juga berguna untuk catatan kecil tambahan.[^catatan-kedua]

## Penutup

Kalau catatan ini tampil rapi, berarti pipeline Markdown biasa sudah mendukung mayoritas format yang dibutuhkan untuk menulis catatan teknikal tanpa harus pindah ke `.mdx`.

[^contoh-footnote]: Ini contoh footnote pertama.
[^catatan-kedua]: Ini contoh footnote kedua.

[grafana-docs]: https://grafana.com/docs/

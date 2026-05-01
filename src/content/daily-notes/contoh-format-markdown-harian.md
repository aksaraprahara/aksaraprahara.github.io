---
title: "Contoh Format Markdown Lengkap untuk Daily Notes"
date: 2026-04-29
excerpt: "Daily note contoh yang merangkum fitur-fitur yang didukung pada Markdown biasa di section catatan harian."
tags: [markdown, contoh, daily]
draft: false
---

Catatan harian ini dibuat untuk memastikan section `daily-notes` juga mendukung format Markdown biasa dengan baik, tanpa perlu `.mdx`.

## Teks Dasar

- **bold**
- *italic*
- ~~strikethrough~~
- `inline code`

## Heading dan Struktur

### Sub-bagian

Paragraf pendek seperti ini cocok untuk fragmen atau catatan harian yang tidak perlu terlalu panjang.

Baris pertama dengan line break manual.  
Baris kedua tetap menyatu dalam konteks yang sama.

## Link

- [Beranda](/)
- [Section daily notes](/Tercatat-Hidup-Oleh-Entitas-Tak-Terbatas)
- [Pagefind](https://pagefind.app/)

Link referensi juga tetap didukung: [YouTube Docs][youtube-docs].

## List

### Unordered List

- satu ide kecil
- satu pengingat kecil
- satu observasi kecil

### Ordered List

1. catat masalah
2. simpan solusi
3. ulangi besok

### Task List

- [x] menulis contoh daily note
- [x] menambah tag
- [ ] menambah lebih banyak fragmen

## Blockquote

> Daily note tidak harus megah. Kadang cukup satu kalimat yang berguna saat dibaca lagi seminggu kemudian.

## Tabel

| Hal | Nilai |
| :--- | ---: |
| Fokus | singkat |
| Bentuk | ringkas |
| Gaya | ringan |

## Code Block

```bash
date
uptime
free -h
```

```yaml
note:
  kind: daily
  status: active
```

```json
{
  "daily": true,
  "compact": true
}
```

```text
remember less, write better
```

## Gambar

![Contoh gambar untuk daily notes](/images/site-logo.png)

## Auto-embed YouTube

https://www.youtube.com/watch?v=dQw4w9WgXcQ

## HTML Ringan

<details>
<summary>Buka fragmen tambahan</summary>

Daily note juga bisa berisi catatan tersembunyi seperti ini.

</details>

Contoh elemen kecil: <mark>penting</mark>, H<sub>2</sub>O, x<sup>2</sup>, <kbd>Esc</kbd>.

## Escape Character

\*bukan italic\*  
\_bukan emphasis\_  
\#bukan heading

## Footnote

Satu catatan kaki kecil juga tetap bisa dipakai.[^daily-note-footnote]

## Penutup

Kalau daily note ini tampil benar, berarti section `daily-notes` sudah aman dipakai untuk catatan ringkas sehari-hari.

[^daily-note-footnote]: Ini footnote khusus daily note.

[youtube-docs]: https://support.google.com/youtube/

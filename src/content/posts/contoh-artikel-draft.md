---
title: "Contoh Artikel Draft"
date: 2026-04-20
excerpt: "Artikel contoh untuk menguji alur draft sebelum dipublikasikan ke hasil build publik."
tags: [draft, demo]
draft: true
---

Artikel ini sengaja dibuat sebagai contoh post dengan status `draft: true`.

Tujuannya sederhana:

- memastikan field `draft` bekerja
- memberi contoh file yang bisa kamu tiru
- memudahkan pengecekan alur preview lokal sebelum publish

## Cara Cek

Saat menjalankan mode development, artikel ini seharusnya tetap bisa dibuka agar kamu bisa review isinya.

```bash
npm run dev
```

Lalu buka URL berikut:

```text
/posts/contoh-artikel-draft
```

## Perilaku Saat Build

Saat kamu menjalankan build produksi, artikel draft seperti ini tidak akan ikut dipublikasikan.

```bash
npm run build
```

Artinya draft ini tidak akan muncul di:

- homepage
- halaman artikel
- tag archive
- RSS
- hasil search publik

## Saat Siap Publish

Kalau artikel sudah siap tayang, cukup ubah:

```md
draft: true
```

menjadi:

```md
draft: false
```

atau hapus baris `draft` sama sekali.

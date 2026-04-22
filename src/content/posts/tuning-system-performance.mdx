---
title: "Tuning system performance"
date: 2023-06-12
excerpt: "Ringkasan penggunaan tuned-adm untuk memilih profile tuning sistem sesuai kebutuhan workload seperti throughput, latency, virtualisasi, dan efisiensi daya."
image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
tags: [tuned, tuning, linux, performance]
---

_Adaptasi preview dari tulisan asli di [Medium](https://yudiwiratama.medium.com/tuning-system-performance-738b63fc77b5?source=rss-673404229d19------2)._

`tuned-adm` adalah utilitas CLI yang dipakai untuk mengelola profile dari service `tuned`. Dengan tool ini kita bisa cepat mengganti tuning sistem berdasarkan karakter workload, misalnya high performance, low latency, virtualization, atau power saving.

## Melihat Profile yang Tersedia

```bash
tuned-adm list
```

Contoh output:

```text
Available profiles:
- balanced
- desktop
- latency-performance
- network-latency
- network-throughput
- powersave
- throughput-performance
- virtual-guest
- virtual-host
Current active profile: virtual-guest
```

## Mengecek Profile Aktif

```bash
tuned-adm active
```

## Mengaktifkan Profile Tertentu

Misalnya host ini akan dipakai untuk workload virtualisasi:

```bash
sudo tuned-adm profile virtual-host
```

Kalau ingin tahu profile yang direkomendasikan sistem saat ini:

```bash
tuned-adm recommend
```

## Menonaktifkan Tuned

```bash
sudo tuned-adm off
tuned-adm active
```

## Melihat Isi Profile

Profile `tuned` pada dasarnya berisi kumpulan konfigurasi kernel dan sistem. Banyak nilainya berkaitan langsung dengan `sysctl`, CPU governor, dan parameter performance lain.

```bash
ls /usr/lib/tuned/
cat /usr/lib/tuned/latency-performance/tuned.conf | grep -v "^#"
```

Contoh potongan konfigurasi:

```ini
[cpu]
force_latency=1
governor=performance
energy_perf_bias=performance
min_perf_pct=100

[sysctl]
kernel.sched_min_granularity_ns=10000000
vm.dirty_ratio=10
vm.dirty_background_ratio=3
vm.swappiness=10
kernel.sched_migration_cost_ns=5000000
```

## Verifikasi Perubahan Value

Setelah ganti profile, cek apakah parameter sistem benar-benar berubah.

```bash
sudo tuned-adm profile latency-performance
sysctl -a | grep vm.swappiness

sudo tuned-adm profile balanced
sysctl -a | grep vm.swappiness
```

Jika value berbeda antar profile, berarti tuning dari `tuned` memang sedang bekerja. Pendekatan ini lebih praktis dibanding mengubah banyak parameter satu per satu secara manual saat kita butuh baseline tuning yang cepat.

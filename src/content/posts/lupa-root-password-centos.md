---
title: "Lupa Root Password CentOS"
date: 2023-06-12
excerpt: "Langkah singkat masuk ke emergency mode dan reset password root di CentOS saat akses administratif hilang."
image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
tags: [centos, linux, recovery, root]
---

_Adaptasi preview dari tulisan asli di [Medium](https://yudiwiratama.medium.com/lupa-root-password-centos-74da0d27f809?source=rss-673404229d19------2)._

Kalau password `root` lupa, salah satu cara paling cepat adalah masuk ke emergency mode lewat menu boot, lalu melakukan reset password dari shell recovery.

## Masuk ke Emergency Mode

1. Reboot mesin.
2. Saat menu GRUB muncul, tekan `e`.
3. Cari baris yang dimulai dengan `linux16` atau `linuxefi`.
4. Tambahkan `rd.break` di akhir baris.

Contoh:

```text
linux16 /vmlinuz-3.10.0-1127.el7.x86_64 root=/dev/mapper/centos-root ro rhgb quiet rd.break
```

5. Tekan `Ctrl + X` atau `F10` untuk melanjutkan boot.

## Remount Root Filesystem

Setelah masuk shell emergency:

```bash
mount -o remount,rw /sysroot
chroot /sysroot
```

## Ganti Password Root

```bash
passwd root
```

Masukkan password baru dua kali.

## Aktifkan Relabel SELinux

```bash
touch /.autorelabel
exit
mount -o remount,ro /sysroot
reboot
```

File `/.autorelabel` penting supaya context SELinux dibangun ulang saat boot berikutnya. Setelah server hidup kembali, login dengan password root yang baru.

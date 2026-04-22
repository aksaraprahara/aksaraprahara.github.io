---
title: "Deploy Ceph Cluster Quincy Manual"
date: 2023-06-22
excerpt: "Catatan instalasi dan setup Ceph Cluster Quincy secara manual di Ubuntu 20.04 dengan 6 node dan pemisahan public network dan cluster network."
image: "https://cdn-images-1.medium.com/max/1000/0*HAvhOE_csevQku3I"
tags: [ceph-cluster, ceph, ubuntu, storage]
---

_Adaptasi preview dari tulisan asli di [Medium](https://yudiwiratama.medium.com/deploy-ceph-cluster-quincy-manual-6-node-96ac4644710e?source=rss-673404229d19------2)._

Catatan ini merangkum alur instalasi dan setup Ceph Cluster manual dengan Ceph Quincy di Ubuntu 20.04. Fokus utamanya adalah menyiapkan cluster 6 node, memisahkan jaringan publik dan cluster, lalu memverifikasi monitor, manager, dan OSD.

## Environment

| Komponen | Nilai |
| --- | --- |
| Node | 6 node |
| Interface | 2 NIC per node |
| OS | Ubuntu 20.04.1 LTS |
| Ceph | 17.2.x Quincy |

- `public network = 10.10.10.0/24`
- `cluster network = 10.11.11.0/24`

## Mapping Antar Host

Langkah awal dilakukan di semua node agar resolusi nama antar host konsisten.

```bash
cat <<'EOF' | sudo tee -a /etc/hosts
# Public Network
10.10.10.11 r01-oscontroller-01
10.10.10.12 r02-oscontroller-02
10.10.10.13 r03-oscontroller-03
10.10.10.21 r01-oscompute-01
10.10.10.22 r01-oscompute-02
10.10.10.23 r01-oscompute-03

# Cluster Network
10.11.11.11 r01-oscontroller-01
10.11.11.12 r02-oscontroller-02
10.11.11.13 r03-oscontroller-03
10.11.11.21 r01-oscompute-01
10.11.11.22 r01-oscompute-02
10.11.11.23 r01-oscompute-03
EOF
```

## Menambah Repository dan Install Ceph

```bash
sudo add-apt-repository cloud-archive:yoga
sudo apt update -y
sudo apt install -y ceph
```

## Inisialisasi Ceph Monitor

Tahap ini dijalankan dari `r01-oscontroller-01` untuk membuat konfigurasi global cluster.

```bash
sudo apt install -y uuid
FSID=$(uuid)

cat <<EOF | sudo tee /etc/ceph/ceph.conf
[global]
fsid = ${FSID}
mon initial members = r01-oscontroller-01, r02-oscontroller-02, r03-oscontroller-03
mon host = 10.10.10.11, 10.10.10.12, 10.10.10.13
public network = 10.10.10.0/24
cluster network = 10.11.11.0/24
auth cluster required = cephx
auth service required = cephx
auth client required = cephx
EOF
```

Distribusikan `ceph.conf` tersebut ke semua node agar seluruh host membaca konfigurasi cluster yang sama.

## Membuat Keyring dan Monmap

```bash
sudo ceph-authtool --create-keyring /tmp/ceph.mon.keyring --gen-key -n mon. --cap mon 'allow *'

sudo ceph-authtool \
  --create-keyring /etc/ceph/ceph.client.admin.keyring \
  --gen-key -n client.admin \
  --cap mon 'allow *' \
  --cap osd 'allow *' \
  --cap mds 'allow *' \
  --cap mgr 'allow *'

sudo ceph-authtool \
  --create-keyring /var/lib/ceph/bootstrap-osd/ceph.keyring \
  --gen-key -n client.bootstrap-osd \
  --cap mon 'profile bootstrap-osd' \
  --cap mgr 'allow r'
```

Setelah itu, gabungkan keyring tadi ke `ceph.mon.keyring` dan buat `monmap` untuk tiga monitor awal.

```bash
sudo ceph-authtool /tmp/ceph.mon.keyring \
  --import-keyring /etc/ceph/ceph.client.admin.keyring

sudo ceph-authtool /tmp/ceph.mon.keyring \
  --import-keyring /var/lib/ceph/bootstrap-osd/ceph.keyring

monmaptool --create --add r01-oscontroller-01 10.10.10.11 --fsid ${FSID} /tmp/monmap
monmaptool --add r02-oscontroller-02 10.10.10.12 --fsid ${FSID} /tmp/monmap
monmaptool --add r03-oscontroller-03 10.10.10.13 --fsid ${FSID} /tmp/monmap
```

## Menjalankan Monitor dan Manager

Di semua node monitor/manager:

```bash
sudo -u ceph mkdir -p /var/lib/ceph/mon/ceph-$(hostname)
sudo -u ceph ceph-mon --mkfs -i $(hostname) --monmap /tmp/monmap --keyring /tmp/ceph.mon.keyring
sudo systemctl enable --now ceph-mon@$(hostname)

sudo mkdir -p /var/lib/ceph/mgr/ceph-$(hostname)
sudo ceph auth get-or-create mgr.$(hostname) mon 'allow profile mgr' osd 'allow *' mds 'allow *' \
  -o /var/lib/ceph/mgr/ceph-$(hostname)/keyring
sudo chown -R ceph:ceph /var/lib/ceph/mgr
sudo systemctl enable --now ceph-mgr@$(hostname)
```

Aktifkan juga `msgr2` dari salah satu node:

```bash
ceph mon enable-msgr2
```

## Menyiapkan OSD

Bootstrap keyring untuk OSD harus tersedia di node-node compute, lalu buat OSD dari disk yang disiapkan.

```bash
sudo ceph-volume lvm create --bluestore --data /dev/sdb
sudo ceph-volume lvm create --bluestore --data /dev/sdc
sudo ceph-volume lvm create --bluestore --data /dev/sdd
```

Perintah ini dijalankan di setiap node OSD sesuai disk yang memang dialokasikan untuk cluster.

## Verifikasi

```bash
ceph -s
ceph versions
```

Contoh hasil yang diharapkan:

```
health: HEALTH_WARN
mon: 3 daemons, quorum r01-oscontroller-01,r02-oscontroller-02,r03-oscontroller-03
mgr: 1 active, 2 standbys
osd: 9 osds: 9 up, 9 in
pgs: 1 active+clean
```

Kalau semua monitor, manager, dan OSD sudah `up` dan `in`, cluster dasar sudah berhasil berjalan. Dari titik ini biasanya baru dilanjutkan ke tuning, pool planning, atau integrasi dengan stack lain seperti OpenStack.

# Product Requirements Document (PRD)

**Nama Aplikasi**: Tagihin  
**Jenis Aplikasi**: Mobile (Android)  
**Framework**: Flutter + Appwrite  

---

## 1. Latar Belakang
Pemilik toko material skala kecil hingga menengah masih banyak yang mencatat transaksi kredit pelanggan secara manual menggunakan nota kertas. Cara ini sering menimbulkan masalah:  
- Nota tercecer  
- Riwayat pembayaran sulit dilacak  
- Tidak ada sistem pengingat yang efektif  

Hal ini mengganggu efisiensi operasional dan berpotensi menimbulkan kerugian.  

---

## 2. Tujuan Produk
Aplikasi **Tagihin** bertujuan untuk:  
- Menyediakan solusi digital dalam mencatat transaksi kredit pelanggan  
- Mempermudah pemilik toko melacak cicilan dan pembayaran  
- Menghadirkan fitur pengingat pembayaran otomatis agar pelanggan lebih tertib membayar  
- Memberikan laporan sederhana untuk membantu pemilik toko mengambil keputusan  

---

## 3. Target Pengguna
- **Pemilik toko bangunan skala kecil-menengah** yang membutuhkan pencatatan transaksi kredit lebih rapi  
- **Karyawan toko** yang bertugas mencatat penjualan dan menerima pembayaran cicilan  

---

## 4. Fitur Utama
### 4.1 Manajemen Pelanggan
- Tambah, ubah, dan hapus data pelanggan  
- Lihat detail pelanggan beserta riwayat transaksi  

### 4.2 Pencatatan Transaksi Kredit
- Input data transaksi: deskripsi, total, uang muka  
- Upload foto nota  
- Hitung otomatis sisa utang  

### 4.3 Input Pembayaran Cicilan
- Tambah data pembayaran untuk transaksi tertentu  
- Input tanggal, nominal, metode, dan catatan  

### 4.4 Pengingat WhatsApp
- Mengirim pengingat kepada pelanggan yang memiliki kredit

### 4.5 Laporan Ringkas
- Total utang aktif  
- Total cicilan masuk  
- Daftar pelanggan menunggak  

---

## 5. Use Case / User Story
- Sebagai **pemilik toko**, saya ingin menambahkan pelanggan baru agar transaksi bisa dicatat dengan rapi  
- Sebagai **pemilik toko**, saya ingin mencatat transaksi kredit agar sisa utang langsung dihitung otomatis  
- Sebagai **pemilik toko**, saya ingin mengirim pengingat pembayaran via WhatsApp agar pelanggan tidak lupa membayar  
- Sebagai **pemilik toko**, saya ingin melihat laporan sederhana agar tahu posisi keuangan toko  

---

## 6. Lingkup & Batasan MVP
✔ Aplikasi hanya digunakan oleh satu akun (pemilik/karyawan toko)  
✔ Penyimpanan data & file nota dilakukan menggunakan Appwrite  
✘ Belum ada login multi-user  
✘ Belum ada integrasi pembayaran digital otomatis  

---

## 7. Kriteria Sukses
- Semua transaksi kredit dan cicilan pelanggan tercatat secara digital  
- Laporan ringkas dapat ditampilkan dalam sekali klik  
- Pemilik toko dapat mengirimkan pengingat pembayaran langsung ke pelanggan melalui WhatsApp  

# Product Requirements Document (PRD)

**Nama Aplikasi**: Tagihin  
**Nama Kelompok**: Muhammad Shofi Mirza & Ahmad Muhlis Saifullah
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
- Menghadirkan fitur pengingat pembayaran agar pelanggan lebih tertib membayar  
- Memberikan laporan sederhana

---

## 3. Target Pengguna
- **Pemilik toko bangunan skala kecil-menengah** yang membutuhkan pencatatan transaksi kredit lebih rapi  

---

## 4. Fitur Utama
### 4.1 Manajemen Pelanggan
- Tambah, ubah, dan hapus data pelanggan  
- Lihat detail pelanggan beserta riwayat transaksi

### 4.2 Pencatatan Transaksi Kredit
- Input data transaksi: deskripsi, total, uang muka  
- Upload foto nota   

### 4.3 Input Pembayaran Cicilan
- Tambah data pembayaran untuk transaksi tertentu  
- Input nominal, metode, dan catatan  

### 4.4 Pengingat WhatsApp
- (Fitur Premium) Mengirim format pengingat WA kepada pelanggan yang masih memiliki nota kredit. Fitur ini hanya tersedia untuk pengguna yang berlangganan (premium). Pengguna gratis tidak dapat mengirim pengingat WhatsApp otomatis.

### 4.5 Laporan Ringkas
- Total utang aktif  
- Total cicilan masuk

### 4.6 Fitur Backup Data
- Fitur backup data (misal backup ke cloud atau ekspor file) tersedia untuk semua pengguna baru selama 2 minggu pertama (masa trial).
- Setelah 2 minggu, hanya pengguna premium yang dapat menggunakan fitur backup data.
- Fitur backup data berfungsi untuk melindungi data dari kehilangan akibat kerusakan perangkat, aplikasi terhapus, atau reset ponsel, serta memudahkan pemulihan data saat berganti perangkat.
- Aplikasi akan memberikan notifikasi/penanda masa trial backup data dan status langganan premium.

---

## 5. Use Case / User Story
- Sebagai **pemilik toko**, saya ingin menambahkan pelanggan baru agar transaksi bisa dicatat dengan rapi  
- Sebagai **pemilik toko**, saya ingin mencatat transaksi kredit agar sisa utang langsung dihitung otomatis  
- Sebagai **pemilik toko**, saya ingin mengirim pengingat pembayaran via WhatsApp agar pelanggan tidak lupa membayar (khusus pengguna premium)  
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
- Pengguna premium dapat mengirimkan pengingat pembayaran langsung ke pelanggan melalui WhatsApp  

---

## 8. Monetisasi & Fitur Premium

Aplikasi Tagihin menyediakan fitur premium berlangganan. Pengingat pembayaran via WhatsApp hanya dapat digunakan oleh pengguna yang berlangganan (premium). Pengguna gratis tetap dapat menggunakan seluruh fitur pencatatan dan laporan, namun tidak dapat mengirim pengingat WhatsApp.

### 8.2 Fitur Backup Data
- Fitur backup data (misal backup ke cloud atau ekspor file) tersedia untuk semua pengguna baru selama 2 minggu pertama (masa trial).
- Setelah 2 minggu, hanya pengguna premium yang dapat menggunakan fitur backup data.
- Fitur backup data berfungsi untuk melindungi data dari kehilangan akibat kerusakan perangkat, aplikasi terhapus, atau reset ponsel, serta memudahkan pemulihan data saat berganti perangkat.
- Aplikasi akan memberikan notifikasi/penanda masa trial backup data dan status langganan premium.

### Skema Fitur (update)
- **Gratis:** Semua fitur utama, backup data selama 2 minggu pertama, tanpa pengingat WhatsApp
- **Premium (berlangganan):** Termasuk fitur pengingat WhatsApp otomatis ke pelanggan dan backup data tanpa batas waktu

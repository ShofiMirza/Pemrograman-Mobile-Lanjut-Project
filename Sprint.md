# Timeline Iterasi Proyek Akhir – Aplikasi Manajemen Nota "Tagihin"

Metode: Agile
Durasi: 4 Minggu

---

## Iterasi 1 – Perencanaan & Setup Awal

- Finalisasi ide aplikasi: "Tagihin" untuk manajemen nota toko bangunan
- Menentukan fitur inti (MVP): pelanggan, nota, pembayaran, pengingat WA
- Menyusun ulang dokumen SRS berdasarkan ide final
- Setup awal proyek Flutter
- Setup backend menggunakan Appwrite
- Membuat koleksi database:  
  - `pelanggan`  
  - `transaksi` (nota)  
  - `pembayaran`  
  - `foto-nota` (menggunakan storage)
- Mendesain relasi antar data dan struktur database awal

---

## Iterasi 2 – Desain UI dan Implementasi Dasar

- Desain UI:
  - Halaman utama pelanggan
  - Tambah pelanggan
  - Detail pelanggan + daftar nota
  - Tambah nota (form transaksi + upload foto)
  - Halaman tambah pembayaran
- Implementasi dasar:
  - CRUD pelanggan
  - Input nota dan upload foto ke Appwrite
  - Tampilkan daftar nota per pelanggan

---

## Iterasi 3 – Integrasi Backend & Fungsi Utama

- Implementasi:
  - Tambah pembayaran & simpan ke database
  - Hitung otomatis sisa utang
  - Status otomatis: lunas / belum lunas
  - Riwayat pembayaran per pelanggan
- Fitur pengingat WA:
  - Format pesan otomatis
  - Tombol pengingat WA di halaman nota

---

## Iterasi 4 – Polishing, Uji Coba & Presentasi

- Penyempurnaan UI/UX
- Validasi input data & error handling ringan
- Menyusun riwayat pembayaran global (optional)
- Dokumentasi GitHub & demo aplikasi
- Perekaman video presentasi (1–5 menit)
- Pengumpulan laporan progres akhir

---

## Alasan Menggunakan Metode Agile

Metode Agile dipilih karena:
- Memungkinkan pengembangan bertahap dengan evaluasi mingguan
- Adaptif terhadap perubahan selama proses belajar dan pengembangan
- Memudahkan pelaporan mingguan & kontrol progres
- Cocok untuk proyek mahasiswa dalam durasi 4 minggu
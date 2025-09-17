# Software Design Document (SDD)

**Project**: Tagihin --- Aplikasi Manajemen Nota Tagihan Kredit\
**Stack**: Flutter (frontend) + Appwrite (backend: Database, Storage,
Functions)\
**Target Platform**: Android (MVP)\


## 1. Ringkasan Arsitektur Sistem

-   **Arsitektur**: Mobile client (Flutter) ↔ Appwrite backend (Realtime
    DB + Storage + Functions)\
-   **Pattern Frontend**: MVVM / Clean-ish architecture\
-   **Penyimpanan**: Collections `customers`, `transactions`,
    `payments`, Storage `nota_photos`\
-   **Autentikasi (MVP)**: single-user tanpa login\
-   **Komunikasi WhatsApp**: intent/URL
    `https://wa.me/<phone>?text=<message>`

------------------------------------------------------------------------

## 2. Komponen Sistem & Tanggung Jawab

### Frontend (Flutter)

-   Screens: CustomersList, CustomerDetail, TransactionForm,
    TransactionDetail, Reports\
-   State management: Riverpod/Provider\
-   Repository layer untuk Appwrite SDK

### Backend (Appwrite)

-   Collections: customers, transactions, payments\
-   Storage: nota_photos\
-   Functions opsional: validasi, update status, reminder

------------------------------------------------------------------------

## 3. Data Model / Schema

### customers

-   id, nama, no_hp, alamat, catatan, created_at, updated_at\
    \### transactions
-   id, customer_id, tanggal_nota, deskripsi, total, dp, sisa, status,
    foto_nota_url\
    \### payments
-   id, transaction_id, tanggal_pay, nominal, metode, catatan

------------------------------------------------------------------------

## 4. Relasi & Konsistensi Data

-   customers 1---\* transactions\
-   transactions 1---\* payments\
-   Payment insert → update sisa + status transaksi

------------------------------------------------------------------------

## 5. Sequence Flows

-   Tambah transaksi (upload foto → create doc)\
-   Tambah payment (insert → update sisa)\
-   Kirim pengingat WA (generate pesan → buka WA)

------------------------------------------------------------------------

## 6. Desain Kelas

``` dart
class Customer { ... }
class Transaction { ... }
class Payment { ... }
```

------------------------------------------------------------------------

## 7. UI/UX Ringkas

-   CustomersList → daftar pelanggan\
-   CustomerDetail → transaksi & reminder\
-   TransactionForm → tambah nota + foto\
-   TransactionDetail → daftar pembayaran\
-   Reports → ringkasan utang & cicilan

------------------------------------------------------------------------

## 8. Testing & Deployment

-   Unit & widget tests\
-   Integration tests\
-   CI/CD build APK\
-   Deploy Appwrite backend

------------------------------------------------------------------------

## 9. Sprint Breakdown

-   Sprint 0: setup project & DB\
-   Sprint 1: CRUD Customer\
-   Sprint 2: Transaction + foto\
-   Sprint 3: Payment\
-   Sprint 4: Reports + WA reminder

------------------------------------------------------------------------

## 10. Risiko Teknis

-   Konsistensi data tanpa transaksi ACID\
-   Upload gagal\
-   Validasi nomor HP

------------------------------------------------------------------------

## 11. Catatan Tambahan

-   Multi-user support di masa depan\
-   Integrasi WA Business API untuk reminder otomatis

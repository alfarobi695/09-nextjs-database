Nama : Muhamad Al Faroby

Kelas: TI-4J

NIM : 2341727001

Laporan Dan Dokumentasi

Soal 1
Capture hasil deploy project Anda dan buatlah laporan di file README.md. Jelaskan apa yang telah Anda pelajari?
<br>
![1](/img/Screenshot%20(1190).png)
Penjelasan : Saya telah mempelajari cara untuk menghubungkan github ke vercel. ketika keduanya sudah terkoneksi, maka project dalam akun github akan tersinkronisasi pada akun vercel. Pada akun vercel kita dapat memilih project yang ingin di deploy via vercel dengan link `nextjs-database-theta.vercel.app`.<br>


Soal 2
Capture hasil basis data Anda dan buatlah laporan di file README.md. Jelaskan apa yang telah Anda pelajari?<br>
![1](/img/Screenshot%20(1197).png)
Penjelasan : Saya telah mempelajari cara membuat basis data Postgres. membuat file .env dan mencantukmnya ke .gitignore agar konfigurasi rahasia basis data tidak terekspos ketika melakukan push ke GitHub. Kemudian menginstall Vercel Postgres SDK.<br>

Soal 3
Capture hasil npm run seed Anda dan buatlah laporan di file README.md. Jelaskan apa yang telah Anda pelajari ?<br>
![1](/img/Screenshot%20(1197).png)
Penjelasan : Saya telah mempelajari cara melakukan seed ke basis data. Selain itu telah mempelajari Troubleshooting karena module dotenv tidak ada, module bcrypt tidak ditemukan  dan data.js tidak ditemukan.<br>

Soal 4
Capture hasil query Anda dan buatlah laporan di file README.md. Jelaskan apa yang telah Anda pelajari ? Cobalah eksekusi query SQL yang lain sesuai kreasi Anda, capture hasilnya dan jelaskan!<br>
![1](/img/Screenshot%20(1212).png)
Penjelasan : Saya telah mempelajari cara melakukan querying pada data yang telah dilakukan seed. Saya juga telah mencoba query lain untuk mendapatkan total pendapatan untuk setiap bulan `ELECT month, SUM(revenue) AS total_revenue FROM revenue GROUP BY month;`<br>
![1](/img/Screenshot%20(1219).png)

Soal 5
Lakukan push, kemudian perhatikan di akun dashboard Vercel project Anda. Capture dan lampirkan link aplikasi Anda yang telah berhasil di deploy, kemudian buatlah laporan di file README.md. Jelaskan apa yang telah Anda pelajari ?<br>
![1](/img/Screenshot%20(1232).png)
Link : https://nextjs-database-theta.vercel.app/ <br>
Penjelasan : Saya telah mempelajari cara membuat lobal query (Model) dan melakukan fetching data (API)

![1](/img/Screenshot%20(1183).png)
![1](/img/Screenshot%20(1184).png)
![1](/img/Screenshot%20(1185).png)
![1](/img/Screenshot%20(1186).png)
![1](/img/Screenshot%20(1187).png)
![1](/img/Screenshot%20(1188).png)
![1](/img/Screenshot%20(1189).png)
![1](/img/Screenshot%20(1191).png)
![1](/img/Screenshot%20(1192).png)
![1](/img/Screenshot%20(1193).png)
![1](/img/Screenshot%20(1194).png)
![1](/img/Screenshot%20(1195).png)
![1](/img/Screenshot%20(1196).png)
![1](/img/Screenshot%20(1198).png)
![1](/img/Screenshot%20(1199).png)
![1](/img/Screenshot%20(1200).png)
![1](/img/Screenshot%20(1201).png)
![1](/img/Screenshot%20(1202).png)
![1](/img/Screenshot%20(1204).png)
![1](/img/Screenshot%20(1205).png)
![1](/img/Screenshot%20(1206).png)
![1](/img/Screenshot%20(1207).png)
![1](/img/Screenshot%20(1208).png)
![1](/img/Screenshot%20(1209).png)
![1](/img/Screenshot%20(1210).png)
![1](/img/Screenshot%20(1211).png)
![1](/img/Screenshot%20(1213).png)
![1](/img/Screenshot%20(1214).png)
![1](/img/Screenshot%20(1215).png)
![1](/img/Screenshot%20(1216).png)
![1](/img/Screenshot%20(1217).png)
![1](/img/Screenshot%20(1220).png)
![1](/img/Screenshot%20(1221).png)
![1](/img/Screenshot%20(1222).png)
![1](/img/Screenshot%20(1223).png)
![1](/img/Screenshot%20(1224).png)
![1](/img/Screenshot%20(1225).png)
![1](/img/Screenshot%20(1226).png)
![1](/img/Screenshot%20(1227).png)
![1](/img/Screenshot%20(1228).png)
![1](/img/Screenshot%20(1230).png)
![1](/img/Screenshot%20(1231).png)
![1](/img/Screenshot%20(1233).png)

### Fetching Data untuk komponen RevenueChart
Buka file src\app\page.tsx. Kemudian hapus comment pada komponen RevenueChart <br>
![1](/img/Screenshot_722.png)

Coba running localhost atau langsung deploy ke Vercel dengan cara push. <br>
![1](/img/Screenshot_723.png)

Amati apa yang terjadi ? Jika error atau ada tampilan grafik yang kurang baik, silakan Anda dapat perbaiki. <br>
Hasil setelah diperbaiki <br>
![1](/img/Screenshot_724.png)

Soal 6
Lakukan capture dan push hasilnya, kemudian buatlah laporan di file README.md. Jelaskan apa yang telah Anda pelajari ?<br>
![1](/img/Screenshot_724.png)
Penjelasan : Saya telah mempelajari cara untuk Fetching Data pada komponen RevenueChart<br>

Buka src\app\page.tsx kemudian lakukan import komponen LatestInvoices, lalu hapus comment pada komponen LatestInvoices di dalam fungsi Page().<br>
![1](/img/Screenshot_726.png)


Soal 7
Lakukan capture dan push hasilnya, kemudian buatlah laporan di file README.md. Jelaskan apa yang telah Anda pelajari ?<br>
![1](/img/Screenshot_725.png)
Penjelasan : Saya telah mempelajari cara untuk Fetching Data pada komponen LatestInvoices<br>


# Tugas Praktikum
1. Jika Anda perhatikan pada file src\app\page.tsx untuk komponen Card sebenarnya telah dibuat sebagai molecules pada file src\app\components\molecules\card.tsx yaitu komponen CardWrapper. Silakan Anda sesuaikan sehingga dapat tampil seperti gambar berikut.<br>
![1](/img/Screenshot_727.png)

2. Perhatikan fungsi fetchCardData() (pada file src\model\query.tsx) dari soal nomor 1. Jelaskan maksud kode dan kueri yang dilakukan dalam fungsi tersebut!<br> Penjelasan : Fungsi ini bertugas mengambil data kartu dari database. Pertama, kita memastikan tidak menyimpan data sementara. Kemudian, kita mencoba menjalankan tiga kueri SQL secara bersamaan untuk mengoptimalkan waktu eksekusi.
Kueri pertama menghitung jumlah tagihan yang ada, yang kedua menghitung jumlah pelanggan, dan yang ketiga menghitung total tagihan yang sudah dibayar dan yang masih tertunda. Setelah itu, kita menunggu semua janji kueri selesai dieksekusi dengan `Promise.all`.
Setelah data diterima, kita mengolahnya. Jumlah tagihan dan pelanggan diambil dari hasil kueri pertama dan kedua, sedangkan total tagihan yang sudah dibayar dan tertunda diambil dari hasil kueri ketiga. Data tersebut diformat sesuai kebutuhan, misalnya, jumlah uang dalam mata uang yang sesuai. Kemudian, hasilnya dikembalikan sebagai objek yang berisi jumlah pelanggan, jumlah tagihan, total tagihan yang sudah dibayar, dan total tagihan yang masih tertunda.
Jika terjadi kesalahan dalam mengambil data dari database, pesan kesalahan ditampilkan di konsol, dan sebuah pengecualian dilemparkan dengan pesan yang sesuai.

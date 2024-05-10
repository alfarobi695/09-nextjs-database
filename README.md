Nama : Muhamad Al Faroby

Kelas: TI-4J

NIM : 2341727001

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

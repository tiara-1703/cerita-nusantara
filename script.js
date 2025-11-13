// Saat tombol diklik, tampilkan cerita
document.getElementById("tampilkan").addEventListener("click", tampilkanCerita);

// Kumpulan cerita rakyat sederhana
const cerita = {
  "Jawa Tengah": {
    judul: "Legenda Roro Jonggrang",
    gambar: "https://upload.wikimedia.org/wikipedia/commons/4/41/Prambanan_Temple.jpg",
    isi: `Pada zaman dahulu kala, di Kerajaan Prambanan hiduplah seorang putri cantik bernama Roro Jonggrang.
Ia adalah anak dari Raja Boko. Suatu hari, kerajaan diserang oleh Bandung Bondowoso, seorang pangeran sakti dari Pengging.
Setelah menang, Bandung jatuh cinta pada Roro Jonggrang dan ingin menikahinya.

Namun Roro Jonggrang tidak mau. Ia memberi syarat: Bandung harus membangun seribu candi dalam satu malam.
Dengan bantuan jin, Bandung hampir berhasil. Karena takut janji terpenuhi, Roro Jonggrang menipu dengan menumbuk padi dan membangunkan ayam agar jin mengira pagi telah tiba.

Bandung gagal dan marah besar. Ia mengutuk Roro Jonggrang menjadi arca ke-seribu.
Sekarang arca itu dikenal sebagai Candi Roro Jonggrang di kompleks Candi Prambanan.`
  },

  "Bali": {
    judul: "Legenda Danau Batur",
    gambar: "https://upload.wikimedia.org/wikipedia/commons/3/32/Mount_Batur_Bali.jpg",
    isi: `Dahulu kala, di Bali hidup seorang raksasa wanita bernama Kebo Iwa.
Ia sangat kuat dan suka membantu penduduk, tetapi juga sering makan banyak karena tubuhnya besar.
Suatu hari, raja dari kerajaan lain ingin menaklukkan Bali dan menipu Kebo Iwa dengan pura-pura membangun sumur besar.

Ketika Kebo Iwa menggali sumur, musuh menimbun tanah hingga ia terkubur di dalamnya.
Dari bekas galian itu muncul air yang tidak berhenti keluar hingga membentuk Danau Batur.
Gunung di dekatnya disebut Gunung Batur.`
  },

  "Sumatera Barat": {
    judul: "Legenda Malin Kundang",
    gambar: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Malin_Kundang_stone.jpg",
    isi: `Dahulu di pantai Air Manis, Padang, hiduplah seorang ibu dan anak bernama Malin Kundang.
Mereka miskin tetapi saling menyayangi. Malin merantau ke kota dan berhasil menjadi pedagang kaya.

Saat kembali ke kampung, ia malu mengakui ibunya yang berpakaian sederhana.
Sang ibu sedih dan berdoa agar anaknya sadar. Tiba-tiba badai datang dan kapal Malin terbalik.
Tubuhnya berubah menjadi batu di tepi pantai sebagai hukuman atas durhakanya.`
  },

  "Kalimantan Timur": {
    judul: "Legenda Danau Lipan",
    gambar: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Danau_Lipan_Tenggarong.jpg",
    isi: `Konon di Kalimantan Timur ada desa makmur yang penduduknya sombong dan serakah.
Suatu hari datang seorang kakek tua meminta makanan, tetapi semua menolak kecuali seorang gadis baik hati.

Keesokan harinya, air memancar dari tanah dan menenggelamkan desa itu menjadi danau.
Hanya rumah gadis baik itu yang selamat. Danau itu kemudian disebut Danau Lipan.`
  },

  "Sulawesi Selatan": {
    judul: "Legenda Sawerigading",
    gambar: "https://upload.wikimedia.org/wikipedia/commons/5/55/Toraja_traditional_house.jpg",
    isi: `Sawerigading adalah pahlawan besar dari Kerajaan Luwu di Sulawesi Selatan.
Ia terkenal gagah dan sakti mandraguna. Suatu hari ia jatuh cinta pada putri We Tenriabeng,
namun ternyata putri itu adalah saudara kembarnya sendiri.

Dewa melarang cinta mereka, sehingga Sawerigading pergi berlayar jauh ke negeri lain.
Ia meninggalkan banyak kisah kepahlawanan dan kebijaksanaan bagi rakyat Luwu.`
  }
};

// Fungsi untuk menampilkan cerita
function tampilkanCerita() {
  const provinsi = document.getElementById("provinsi").value;
  const judulElem = document.getElementById("judul-cerita");
  const gambarElem = document.getElementById("gambar-cerita");
  const isiElem = document.getElementById("isi-cerita");

  if (cerita[provinsi]) {
    judulElem.textContent = cerita[provinsi].judul;
    gambarElem.src = cerita[provinsi].gambar;
    isiElem.textContent = cerita[provinsi].isi;
  } else {
    judulElem.textContent = "Cerita belum tersedia 😅";
    gambarElem.src = "";
    isiElem.textContent = "";
  }
}

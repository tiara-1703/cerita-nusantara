// Saat tombol diklik, tampilkan cerita
document.getElementById("tampilkan").addEventListener("click", tampilkanCerita);

// Kumpulan cerita rakyat sederhana
const cerita = {
  "Jawa Barat": {
  judul: "Legenda Sangkuriang",
  gambar: "tangkuban_perahu.webp",
  isi: `Dahulu kala, di Jawa Barat hiduplah seorang wanita cantik bernama Dayang Sumbi. 
Ia memiliki anak laki-laki bernama Sangkuriang yang gemar berburu di hutan. 
Suatu hari, karena kesalahan kecil, Dayang Sumbi marah dan memukul Sangkuriang hingga anak itu pergi mengembara. 

Bertahun-tahun kemudian, Sangkuriang tumbuh dewasa dan tanpa sadar jatuh cinta kepada ibunya sendiri. 
Saat mengetahui hal itu, Dayang Sumbi menolak dan memberi syarat mustahil: 
Sangkuriang harus membuat danau serta perahu besar dalam satu malam. 

Dengan kesaktiannya, Sangkuriang hampir berhasil, namun Dayang Sumbi menipu dengan membuat fajar seolah telah tiba. 
Marah karena gagal, Sangkuriang menendang perahunya hingga terbalik. 
Perahu itu kemudian berubah menjadi **Gunung Tangkuban Perahu** di Bandung.`
},

  "Jawa Tengah": {
    judul: "Legenda Roro Jonggrang",
    gambar: "roro_jonggrang.jpg",
    isi: `Pada zaman dahulu kala, di Kerajaan Prambanan hiduplah seorang putri cantik bernama Roro Jonggrang.
Ia adalah anak dari Raja Boko. Suatu hari, kerajaan diserang oleh Bandung Bondowoso, seorang pangeran sakti dari Pengging.
Setelah menang, Bandung jatuh cinta pada Roro Jonggrang dan ingin menikahinya.

Namun Roro Jonggrang tidak mau. Ia memberi syarat: Bandung harus membangun seribu candi dalam satu malam.
Dengan bantuan jin, Bandung hampir berhasil. Karena takut janji terpenuhi, Roro Jonggrang menipu dengan menumbuk padi dan membangunkan ayam agar jin mengira pagi telah tiba.

Bandung gagal dan marah besar. Ia mengutuk Roro Jonggrang menjadi arca ke-seribu.
Sekarang arca itu dikenal sebagai Candi Roro Jonggrang di kompleks Candi Prambanan.`
  },

"Jawa Timur": {
  judul: "Legenda Jaka Tarub",
  gambar: "jaka_tarub.jpg",
  isi: `Dahulu di sebuah desa di Jawa Timur, hiduplah seorang pemuda tampan bernama Jaka Tarub. 
Ia sering berburu di hutan dan suatu hari melihat tujuh bidadari turun dari kayangan untuk mandi di sebuah telaga. 
Jaka Tarub mencuri salah satu selendang milik bidadari bernama Nawang Wulan, sehingga ia tidak bisa kembali ke langit. 

Akhirnya Nawang Wulan menikah dengan Jaka Tarub dan mereka hidup bahagia serta memiliki seorang anak. 
Namun, Jaka Tarub melanggar janji dengan membuka rahasia dapur ajaib Nawang Wulan. 
Setelah rahasianya terbongkar, Nawang Wulan sedih dan kembali ke kayangan, meninggalkan Jaka Tarub bersama anak mereka.`
},

  "Bali": {
    judul: "Legenda Danau Batur",
    gambar: "danau_toba.jpg",
    isi: `Dahulu kala, di Bali hidup seorang raksasa wanita bernama Kebo Iwa.
Ia sangat kuat dan suka membantu penduduk, tetapi juga sering makan banyak karena tubuhnya besar.
Suatu hari, raja dari kerajaan lain ingin menaklukkan Bali dan menipu Kebo Iwa dengan pura-pura membangun sumur besar.

Ketika Kebo Iwa menggali sumur, musuh menimbun tanah hingga ia terkubur di dalamnya.
Dari bekas galian itu muncul air yang tidak berhenti keluar hingga membentuk Danau Batur.
Gunung di dekatnya disebut Gunung Batur.`
  },

  "Sumatera Barat": {
    judul: "Legenda Malin Kundang",
    gambar: "malin_kundang.jpg",
    isi: `Dahulu di pantai Air Manis, Padang, hiduplah seorang ibu dan anak bernama Malin Kundang.
Mereka miskin tetapi saling menyayangi. Malin merantau ke kota dan berhasil menjadi pedagang kaya.

Saat kembali ke kampung, ia malu mengakui ibunya yang berpakaian sederhana.
Sang ibu sedih dan berdoa agar anaknya sadar. Tiba-tiba badai datang dan kapal Malin terbalik.
Tubuhnya berubah menjadi batu di tepi pantai sebagai hukuman atas durhakanya.`
  },

"Sumatera Utara": {
  judul: "Legenda Danau Toba",
  gambar: "danau_toba.jpg",
  isi: `Dahulu di Sumatera Utara, hiduplah seorang pemuda miskin yang hidup dari hasil memancing. 
Suatu hari ia menangkap seekor ikan emas ajaib yang berubah menjadi wanita cantik. 
Wanita itu mengaku berasal dari kayangan dan bersedia menikah dengannya dengan satu syarat — asal-usulnya tidak boleh diungkap kepada siapa pun. 

Mereka hidup bahagia dan dikaruniai seorang anak laki-laki bernama Samosir. 
Namun, ketika sang anak berbuat nakal, ayahnya marah dan tanpa sadar mengucapkan bahwa anak itu adalah anak ikan. 
Janji pun dilanggar. 

Sang istri sedih dan kembali ke wujud aslinya sebagai ikan, lalu kembali ke danau bersama putranya. 
Tak lama kemudian air meluap dan menenggelamkan desa, membentuk danau besar yang kini dikenal sebagai **Danau Toba** dengan Pulau **Samosir** di tengahnya.`
},

"Sumatera Selatan": {
  judul: "Legenda Putri Kemuning",
  gambar: "kemuning.jpg",
  isi: `Dahulu di Sumatera Selatan, hiduplah seorang putri cantik bernama Putri Kemuning. 
Ia terkenal sangat baik hati, ramah kepada rakyat, dan gemar menolong siapa saja yang membutuhkan. 
Karena sifatnya itu, rakyat sangat menyayanginya, tetapi ada juga orang-orang iri yang ingin mencelakainya. 

Suatu hari, Putri Kemuning difitnah melakukan kesalahan besar oleh seorang dayang yang dengki. 
Sang raja marah dan mengusirnya dari istana tanpa sempat mendengar penjelasan. 
Dengan hati sedih, Putri Kemuning pergi ke hutan dan menghilang secara misterius. 

Beberapa waktu kemudian, di tempat ia menghilang, tumbuhlah bunga kecil berwarna kuning dengan aroma harum. 
Bunga itu dinamakan **bunga kemuning**, sebagai lambang **kebaikan hati, kesetiaan, dan ketulusan** Putri Kemuning.`
},

"Lampung": {
  judul: "Legenda Putri Ulung",
  gambar: "pahawan_lampung.jpg",
  isi: `Di tanah Lampung yang subur, hiduplah seorang putri jelita bernama Putri Ulung. 
Ia adalah anak raja yang terkenal lembut, bijak, dan dicintai rakyat. 
Suatu hari, sang raja berniat menikahkannya dengan seorang bangsawan kaya dari kerajaan tetangga. 
Namun, Putri Ulung telah jatuh cinta pada seorang pemuda sederhana dari desa. 

Ketika dipaksa menikah, Putri Ulung memilih melarikan diri ke hutan. 
Di tengah tangis dan doa memohon kebebasan, tiba-tiba tubuhnya lenyap dan berubah menjadi bunga indah berwarna cerah yang menyebarkan keharuman di sekitarnya. 
Sejak saat itu, rakyat percaya bunga itu adalah jelmaan Putri Ulung — simbol **ketulusan cinta dan kebebasan hati**.`
},

  "Kalimantan Timur": {
    judul: "Legenda Danau Lipan",
    gambar: "danau_lipan.jpg",
    isi: `Konon di Kalimantan Timur ada desa makmur yang penduduknya sombong dan serakah.
Suatu hari datang seorang kakek tua meminta makanan, tetapi semua menolak kecuali seorang gadis baik hati.

Keesokan harinya, air memancar dari tanah dan menenggelamkan desa itu menjadi danau.
Hanya rumah gadis baik itu yang selamat. Danau itu kemudian disebut Danau Lipan.`
  },

"Kalimantan Tengah": {
  judul: "Legenda Nyai Undang",
  gambar: "nyai_undang.jpg",
  isi: `Dahulu kala di tepi Sungai Barito hiduplah seorang wanita sakti bernama Nyai Undang.
Ia dikenal bijak dan menolong siapa pun yang membutuhkan, terutama saat sungai meluap atau kekeringan datang.
Nyai Undang selalu mengingatkan agar manusia tidak serakah dan menjaga alam sekitar.
Setelah wafat, rakyat percaya arwahnya tetap menjaga ketenangan Sungai Barito, sehingga sungai itu tetap membawa kehidupan bagi penduduk sekitarnya.`
},

"Kalimantan Barat": {
  judul: "Legenda Batu Menangis",
  gambar: "batu_menangis.jpg",
  isi: `Dahulu kala, di sebuah desa di perbukitan dekat Sungai Kapuas, hiduplah seorang janda miskin bersama anak perempuannya yang bernama Darmi. Meskipun hidup sederhana, sang ibu sangat menyayangi Darmi dan berusaha keras memenuhi kebutuhan mereka dengan bekerja di ladang setiap hari.

Darmi tumbuh menjadi gadis cantik rupawan, tetapi sayangnya ia juga menjadi sombong dan malu pada keadaan ibunya yang miskin. Ia selalu mengeluh dan ingin hidup mewah seperti orang-orang di kota. Sang ibu tetap sabar dan berharap suatu hari anaknya akan berubah.

Suatu pagi, mereka pergi ke pasar untuk menjual hasil ladang. Darmi memakai pakaian terbaiknya agar terlihat cantik, sementara ibunya hanya mengenakan pakaian lusuh. Dalam perjalanan, mereka bertemu para pemuda desa. Melihat kecantikan Darmi, para pemuda bertanya, “Siapa wanita tua yang bersamamu itu?”  
Dengan sombong Darmi menjawab, “Dia pembantuku.” Mendengar jawaban itu, hati sang ibu terasa hancur. Ia berjalan perlahan sambil menahan air mata.

Sesampainya di tepi bukit, sang ibu berhenti dan berdoa dengan suara bergetar, “Ya Tuhan, hukumlah anak durhaka ini agar ia menyadari kesalahannya.” Tiba-tiba langit menjadi gelap, angin bertiup kencang, dan petir menyambar. Darmi menjerit ketakutan, namun tubuhnya mulai mengeras sedikit demi sedikit—dimulai dari kaki, lalu ke seluruh tubuh. Ia memohon ampun, tetapi semuanya sudah terlambat. Dalam sekejap, tubuhnya berubah menjadi batu besar.

Dari mata batu itu mengalir air jernih yang tak pernah berhenti, seolah-olah batu itu terus menangis menyesali dosanya. Masyarakat menamai batu itu **“Batu Menangis”**, dan hingga kini legenda ini dikenang sebagai pengingat agar setiap anak menghormati dan menyayangi orang tuanya.`
},

"Kalimantan Selatan": {
  judul: "Legenda Putri Junjung Buih",
  gambar: "junjung_buih.jpg",
  isi: `Pada zaman dahulu, di wilayah Kerajaan Negara Dipa di Kalimantan Selatan, hiduplah seorang raja bernama Maharaja Suryanata. Ia memerintah dengan adil dan bijaksana, tetapi lama tidak memiliki keturunan. Sang raja dan rakyatnya pun berdoa kepada para dewa agar diberikan seorang putri yang kelak membawa kesejahteraan bagi negeri.

Suatu hari, ketika matahari terbit di tepi Sungai Nagara, para pengawal istana melihat buih-buih air yang berputar di permukaan sungai. Dari tengah buih itu muncul cahaya lembut berwarna keemasan, dan perlahan tampak sesosok bayi perempuan cantik mengapung di atas buih tersebut. Bayi itu diangkat dengan hati-hati dan dibawa ke istana. Raja yang mendengar kabar itu merasa gembira dan menamainya **Putri Junjung Buih**, karena ia datang dari buih sungai yang suci.

Putri Junjung Buih tumbuh menjadi gadis yang anggun dan bijaksana. Dikatakan bahwa ia memiliki aura suci yang membuat siapa pun merasa tenteram di dekatnya. Ketika dewasa, ia menjadi permaisuri Raja Suryanata dan membawa keberuntungan bagi kerajaan. Rakyat hidup makmur, hasil panen melimpah, dan negeri menjadi damai.

Namun, Putri Junjung Buih juga dikenal rendah hati dan sering mengingatkan raja agar selalu adil dan tidak sombong atas kekuasaan. Ia percaya bahwa kesejahteraan sejati datang dari hati yang bersih dan keikhlasan dalam memimpin. Setelah wafat, rakyat tetap mengenangnya sebagai lambang **kesucian, kesabaran, dan kemakmuran**. Hingga kini, legenda Putri Junjung Buih masih dijaga dalam upacara adat dan cerita rakyat Banjar sebagai wujud penghormatan kepada leluhur.`
},

"Kalimantan Utara": {
  judul: "Legenda Gunung Putih",
  gambar: "gunung_putih.jpg",
  isi: `Di wilayah Tanjung Palas, Kabupaten Bulungan, terdapat sebuah bukit batu kapur berwarna putih yang disebut Gunung Putih.
Dari kejauhan, gunung ini tampak berkilau seperti marmer, dan masyarakat setempat meyakini tempat itu bukan sekadar batu biasa, melainkan tempat suci yang dijaga oleh makhluk halus penunggu alam.

Konon, pada zaman dahulu di kawasan itu berdiri sebuah kampung yang makmur dan damai. Para penduduk hidup berdampingan dengan alam, menanam padi di lembah dan menangkap ikan di sungai yang jernih. Di tengah kampung tinggal seorang tetua bijak bernama Aki Lalang, yang dipercaya bisa berkomunikasi dengan roh penjaga gunung. Ia sering memperingatkan warga agar tidak menebang pohon sembarangan atau menggali batu dari Gunung Putih, karena di sanalah roh-roh leluhur bersemayam.

Namun suatu ketika, datang sekelompok pendatang yang tidak mempercayai cerita itu. Mereka menebang hutan dan memecah batu dari kaki gunung untuk dijual. Tiba-tiba langit berubah gelap, petir menyambar, dan hujan deras turun berhari-hari. Gunung Putih memancarkan cahaya terang, dan dari puncaknya terdengar suara gaib yang menggema: “Jangan rusak alam yang menjaga kehidupanmu!” Tak lama kemudian, para pendatang itu pergi, dan gunung kembali tenang.

Sejak saat itu, masyarakat Bulungan berjanji menjaga Gunung Putih sebagai tempat keramat dan simbol keseimbangan antara manusia dan alam. Setiap tahun, mereka mengadakan upacara adat sederhana di kaki gunung untuk mengucapkan syukur atas hasil bumi dan keselamatan. Hingga kini, Gunung Putih tetap berdiri megah sebagai saksi kearifan lokal yang mengajarkan pentingnya menjaga kelestarian alam.`
},

  "Sulawesi Selatan": {
  judul: "Legenda Sawerigading",
  gambar: "saweringading.jpg",
  isi: `Legenda Sawerigading berasal dari Kerajaan Luwu, Sulawesi Selatan, dan merupakan salah satu kisah paling terkenal dalam epos La Galigo — karya sastra klasik Bugis yang sangat dihormati.  
Sawerigading adalah putra dari raja Luwu, Batara Lattu, dan permaisuri We Datu Sengngeng. Sejak kecil, ia dikenal gagah, berani, dan sakti mandraguna. Tidak hanya kuat dalam perang, ia juga bijak dalam memimpin.

Suatu hari, Sawerigading jatuh cinta pada seorang wanita cantik bernama We Tenriabeng. Namun, para tetua kerajaan mengungkapkan bahwa We Tenriabeng adalah saudara kembarnya sendiri. 
Hubungan itu dilarang oleh para dewa karena dianggap menentang tatanan dunia. Merasa sedih dan kecewa, Sawerigading memutuskan untuk meninggalkan tanah Luwu.

Ia berlayar jauh melintasi lautan luas untuk mencari wanita lain yang mirip dengan We Tenriabeng. Dalam perjalanan, ia menghadapi banyak rintangan — badai besar, makhluk laut, hingga peperangan dengan kerajaan asing. 
Namun, keberanian dan kesaktiannya membuatnya selalu selamat. Dalam pengembaraannya, ia membantu banyak rakyat tertindas, mendamaikan kerajaan yang berperang, dan mengajarkan nilai-nilai kehidupan.

Setelah masa panjang berkelana, Sawerigading akhirnya kembali ke Luwu dan hidup sebagai tokoh bijak. 
Masyarakat Bugis percaya bahwa ia adalah simbol kepahlawanan, keberanian, dan kesetiaan pada takdir. 
Kisahnya menjadi dasar nilai budaya Bugis tentang *siri’* (harga diri), *pesse* (empati), dan *reso* (usaha keras).

Legenda ini hingga kini dianggap sebagai warisan luhur masyarakat Bugis-Makassar, yang mengajarkan tentang cinta, kehormatan, dan tanggung jawab terhadap kehidupan.`
},

"Sulawesi Utara": {
  judul: "Legenda Toar dan Lumimuut",
  gambar: "pulau_lumimuut.webp",
  isi: `Legenda Toar dan Lumimuut berasal dari tanah Minahasa, Sulawesi Utara, dan dianggap sebagai asal-usul manusia pertama di wilayah itu. 
Menurut cerita rakyat, Lumimuut diciptakan oleh dewa Mahatalla, penguasa langit dan bumi, dari tanah liat yang dicampur dengan sinar matahari. 
Ia adalah wanita cantik, baik hati, dan bijaksana. Karena hidup seorang diri, Mahatalla mengutus angin utara untuk meniupkan kehidupan baru baginya — 
lahirlah seorang pemuda gagah bernama Toar, yang kelak menjadi pelindung rakyat Minahasa.

Toar dan Lumimuut hidup berdampingan dan saling membantu membangun kehidupan di bumi. 
Namun, setelah lama berpisah karena perjalanan jauh, keduanya bertemu kembali tanpa saling mengenali. 
Mereka pun hampir menikah, hingga Mahatalla turun dari langit dan mencegahnya, menjelaskan bahwa mereka adalah ibu dan anak. 
Sejak itu, Toar pergi mencari tanah baru untuk dihuni keturunannya, sementara Lumimuut tetap menjaga tanah asal. 
Dari merekalah, masyarakat Minahasa percaya semua suku dan marga di wilayah itu berasal.

Kisah Toar dan Lumimuut bukan hanya legenda asal-usul manusia Minahasa, 
tetapi juga simbol tentang pentingnya menjaga kesucian, menghormati asal-usul, dan hidup selaras dengan alam serta leluhur.`
},

"Sulawesi Tengah": {
  judul: "Legenda La Totombatu",
  gambar: "jembatan_palu.jpg",
  isi: `Legenda La Totombatu berasal dari daerah Lore, Sulawesi Tengah. 
Dahulu kala, wilayah ini sering diganggu oleh makhluk buas dan raksasa pemakan manusia yang menebar ketakutan di seluruh desa. 
Di tengah kekacauan itu, lahirlah seorang pemuda sakti bernama La Totombatu, 
yang sejak kecil sudah menunjukkan keberanian dan kekuatan luar biasa.

Saat dewasa, La Totombatu bertekad melindungi rakyatnya. 
Dengan senjata sederhana berupa tombak batu, ia menghadapi raksasa jahat itu di hutan pegunungan Lore. 
Pertarungan berlangsung lama dan dahsyat, hingga akhirnya La Totombatu berhasil menaklukkan raksasa tersebut dan menyelamatkan penduduk desa.

Setelah kemenangan itu, La Totombatu menjadi pahlawan yang dihormati oleh seluruh rakyat. 
Namanya berarti “manusia dari batu”, karena diyakini tubuhnya sekuat batu dan tidak bisa dilukai. 
Setelah wafat, roh La Totombatu dipercaya tetap menjaga kedamaian tanah Lore dan melindungi para penduduk dari bencana.

Legenda ini menjadi simbol keberanian, ketulusan hati, dan tanggung jawab seorang pemimpin dalam menjaga rakyatnya.`
},

"Sulawesi Barat": {
  judul: "Legenda Simbolangi",
  gambar: "pantai_manakara.jpg",
  isi: `Legenda Simbolangi berasal dari daerah Mamuju, Sulawesi Barat. 
Dikisahkan pada zaman dahulu, di sebuah kerajaan pesisir yang makmur, hidup seorang putri cantik bernama Simbolangi. 
Ia dikenal baik hati, lembut, dan sangat peduli pada rakyatnya. Namun suatu waktu, kerajaan itu dilanda kekeringan panjang. 
Tanaman tidak tumbuh, sungai mengering, dan rakyat mulai kelaparan.

Melihat penderitaan rakyatnya, Putri Simbolangi berdoa kepada dewa laut agar memberikan rezeki bagi semua orang. 
Namun, syaratnya berat: ia harus rela mengorbankan dirinya sendiri. 
Dengan hati ikhlas, Simbolangi pun melompat ke laut dan perlahan berubah menjadi seekor ikan besar yang indah berwarna keemasan. 
Sejak saat itu, laut di sekitar Mamuju menjadi sangat subur dan penuh ikan, sehingga rakyat dapat hidup makmur kembali.

Rakyat kemudian membangun tempat pemujaan di tepi pantai untuk mengenang pengorbanannya. 
Mereka percaya bahwa arwah Putri Simbolangi masih menjaga laut Mamuju agar tetap memberikan hasil melimpah. 
Hingga kini, nelayan setempat masih mengadakan upacara adat sebagai bentuk rasa syukur dan penghormatan kepadanya.

Legenda ini mengajarkan tentang keikhlasan, pengorbanan, dan kasih sayang seorang pemimpin terhadap rakyatnya.`
},

"Sulawesi Tenggara": {
  judul: "Legenda Sungai Tamborasi",
  gambar: "sungai_tamborasi.jpg",
  isi: `Legenda Sungai Tamborasi berasal dari daerah Kolaka, Sulawesi Tenggara. 
Sungai ini terkenal karena keunikannya — panjangnya hanya sekitar 20 meter, namun airnya sangat jernih dan sejuk. 
Masyarakat percaya sungai ini bukan sungai biasa, melainkan tempat yang penuh berkah dan memiliki kisah sedih di balik keindahannya.

Dahulu kala, di sebuah kerajaan kecil di Kolaka, hiduplah seorang raja bijaksana yang sangat mencintai putri tunggalnya. 
Putri itu dikenal berwajah cantik dan berhati lembut. Namun suatu hari, sang putri jatuh sakit keras yang tak kunjung sembuh meski telah diobati oleh tabib-tabib terbaik. 
Sang raja berdoa siang dan malam, memohon agar nyawa putrinya diselamatkan, tetapi takdir berkata lain — sang putri akhirnya meninggal dunia.

Kesedihan yang mendalam membuat sang raja menangis berhari-hari tanpa henti. 
Dikisahkan, air mata yang mengalir dari tangisannya berubah menjadi mata air yang terus mengalir ke lembah dekat istana. 
Air itu semakin lama semakin banyak hingga membentuk sungai kecil yang sangat indah dan jernih. 
Karena airnya berasal dari tangisan sang raja, masyarakat menamainya **Sungai Tamborasi**, yang dipercaya berasal dari kata *“Tambo”* (air mata) dan *“Rasi”* (raja).

Konon, siapa pun yang mandi atau mencuci muka di sungai Tamborasi akan merasakan ketenangan hati dan kedamaian jiwa. 
Airnya dipercaya mampu membersihkan pikiran dari kesedihan, seperti air mata sang raja yang menjadi lambang cinta dan keikhlasan melepaskan orang yang dicintai.

Legenda ini mengajarkan tentang cinta kasih, kesabaran dalam menerima takdir, dan keindahan yang lahir dari kesedihan yang tulus.`
},

"Gorontalo": {
  judul: "Legenda Raja Walanga",
  gambar: "kota_gorontalo.jpg",
  isi: `Legenda Raja Walanga berasal dari tanah Gorontalo dan telah diceritakan turun-temurun oleh masyarakat setempat. 
Walanga dikenal sebagai seorang raja bijaksana yang memimpin kerajaannya dengan adil, jujur, dan penuh kasih kepada rakyatnya. 
Ia selalu menekankan pentingnya kejujuran dan kerja keras sebagai dasar kehidupan bermasyarakat.

Pada masa pemerintahannya, rakyat hidup damai dan makmur karena Raja Walanga tidak hanya memerintah dari istana, 
tetapi juga sering turun langsung membantu rakyatnya di ladang dan pasar. 
Ia percaya bahwa seorang pemimpin sejati harus memahami kehidupan rakyatnya, bukan hanya memerintah dari jauh.

Namun suatu hari, datanglah seorang pedagang asing yang mencoba menipu rakyat dengan menjual barang-barang palsu. 
Raja Walanga yang mengetahui hal itu tidak langsung menghukum pedagang tersebut, 
melainkan mengajaknya berbicara dan memberi pelajaran tentang arti kejujuran dan kehormatan. 
Sang pedagang akhirnya menyesal dan memohon maaf di hadapan seluruh rakyat.

Sejak saat itu, nama Walanga dikenang sebagai simbol pemimpin yang tidak hanya tegas, 
tetapi juga penuh kebijaksanaan dan kasih sayang. 
Masyarakat Gorontalo percaya bahwa selama nilai-nilai yang diajarkan Raja Walanga dijaga — kejujuran, gotong royong, dan keikhlasan — 
tanah Gorontalo akan selalu diberkahi kedamaian dan kemakmuran.`
 },
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

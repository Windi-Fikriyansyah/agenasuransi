export interface Article {
  id: string;
  title: string;
  slug: string;
  category: "Bank Garansi" | "Surety Bond" | "Tips Tender" | "Regulasi";
  date: string;
  isoDate: string;
  readTime: string;
  author: string;
  authorRole: string;
  summary: string;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
}

export const ARTICLES: Article[] = [
  {
    id: "1",
    title: "Panduan Lengkap Memahami Bank Garansi untuk Tender Proyek Pemerintah & Swasta",
    slug: "panduan-bank-garansi-tender-proyek",
    category: "Bank Garansi",
    date: "4 Oktober 2026",
    isoDate: "2026-10-04T08:30:00+07:00",
    readTime: "6 menit baca",
    author: "Tim Legal & Underwriting NJN",
    authorRole: "Divisi Penjaminan Korporasi",
    summary:
      "Pelajari prinsip dasar, mekanisme penerbitan, syarat administratif, serta tips memilih bank garansi tanpa agunan (non-collateral) agar terhindar dari gugurnya penawaran dalam proses lelang LPSE/LKPP.",
    tags: ["Bank Garansi", "Tender Proyek", "LPSE", "Non Collateral", "Legalitas"],
    keyTakeaways: [
      "Bank Garansi adalah warkat jaminan berkekuatan hukum penuh dari bank umum untuk menjamin kewajiban Principal kepada Obligee.",
      "Tender LPSE/LKPP mewajibkan format Bank Garansi sesuai standar IKP (Instruksi Kepada Peserta).",
      "Pilihan fasilitas Non-Collateral (tanpa setoran tunai 100%) memungkinkan kontraktor mengamankan modal kerja.",
      "Verifikasi keabsahan warkat selalu dilakukan panitia tender melalui call center dan surat konfirmasi cabang bank penerbit.",
    ],
    content: [
      "Bank Garansi adalah warkat perjanjian tertulis yang diterbitkan oleh institusi perbankan resmi yang mengikat bank penjamin untuk membayar sejumlah uang kepada pihak pemilik proyek (Obligee) apabila pihak pelaksana pekerjaan (Principal) cidera janji atau wanprestasi terhadap kontrak kerja yang disepakati.",
      "Dalam pengadaan barang dan jasa pemerintah (melalui portal LPSE / SPSE) maupun proyek swasta nasional berskala besar, keberadaan Bank Garansi merupakan salah satu syarat mutlak yang tercantum dalam Dokumen Pemilihan dan RKS. Kegagalan menyerahkan jaminan yang sesuai standar akan langsung menggugurkan peserta tender pada tahap evaluasi kualifikasi administrasi.",
      "Secara umum, terdapat 4 jenis warkat garansi yang digunakan bertahap sepanjang siklus proyek: Jaminan Penawaran (Bid Bond), Jaminan Pelaksanaan (Performance Bond), Jaminan Uang Muka (Advance Payment Bond), serta Jaminan Pemeliharaan (Maintenance Bond). Masing-masing memiliki masa laku dan persentase nilai penjaminan yang spesifik.",
      "Bagi kontraktor dan vendor berkembang, menyetorkan dana agunan tunai 100% (cash collateral) ke bank dapat melumpuhkan arus kas (cash flow) operasional. Untuk mengatasi kendala ini, PT Niaga Jaminan Nusantara hadir menyediakan fasilitas penerbitan Bank Garansi Tanpa Agunan (Non Collateral) dan Dengan Agunan Minimal yang resmi, legal, terdaftar di Otoritas Jasa Keuangan (OJK), serta diterima di seluruh instansi pemerintah dan swasta.",
      "Dalam memilih agen penerbitan jaminan, pastikan Anda memeriksa rekam jejak, legalitas operasional, dan kepastian bahwa warkat yang terbit dilengkapi nomor register sah serta surat konfirmasi resmi dari kantor cabang bank penerbit guna menjamin keamanan hukum proyek Anda.",
    ],
  },
  {
    id: "2",
    title: "Perbedaan Mendasar Surety Bond vs Bank Garansi: Mana yang Tepat untuk Proyek Anda?",
    slug: "perbedaan-surety-bond-vs-bank-garansi",
    category: "Surety Bond",
    date: "28 September 2026",
    isoDate: "2026-09-28T09:15:00+07:00",
    readTime: "5 menit baca",
    author: "Konsultan Penjaminan NJN",
    authorRole: "Senior Risk Consultant",
    summary:
      "Ketahui perbedaan mendalam antara produk asuransi Surety Bond dan Bank Garansi dari sisi biaya premi, kecepatan proses, fleksibilitas agunan, dan akseptasi di mata panitia tender.",
    tags: ["Surety Bond", "Bank Garansi", "Analisa Biaya", "Asuransi Proyek"],
    keyTakeaways: [
      "Surety Bond diterbitkan oleh perusahaan asuransi, sedangkan Bank Garansi diterbitkan oleh perbankan umum.",
      "Surety Bond umumnya memiliki tarif premi lebih terjangkau dan waktu proses lebih cepat (1-2 hari kerja).",
      "Bank Garansi diwajibkan mutlak oleh beberapa instansi kementerian, BUMN migas, dan infrastruktur strategis.",
      "Kedua instrumen ini memiliki kekuatan hukum yang sah apabila diterbitkan oleh lembaga berizin OJK.",
    ],
    content: [
      "Banyak kontraktor dan penyedia barang/jasa yang masih bingung membedakan antara Surety Bond dan Bank Garansi. Meskipun secara fungsional keduanya sama-sama berfungsi sebagai instrumen pengalihan risiko finansial akibat wanprestasi, institusi penerbit dan mekanisme operasionalnya memiliki perbedaan signifikan.",
      "Surety Bond merupakan produk penjaminan yang diterbitkan oleh perusahaan asuransi umum yang memiliki izin usaha penjaminan dari Otoritas Jasa Keuangan (OJK). Karakteristik utama Surety Bond adalah proses penerbitan yang sangat cepat (seringkali selesai dalam waktu 1x24 jam) serta fleksibilitas tinggi tanpa mensyaratkan agunan aset fisik untuk nilai-nilai proyek tertentu.",
      "Sebaliknya, Bank Garansi diterbitkan langsung oleh Bank Umum (baik Bank BUMN seperti Mandiri, BRI, BNI, BTN maupun Bank Swasta Nasional seperti BCA, Danamon, CIMB). Warkat Bank Garansi memiliki nilai akseptasi yang sangat prestisius dan seringkali menjadi syarat mutlak dalam proyek bernilai puluhan miliar rupiah.",
      "Dalam menentukan pilihan, langkah pertama adalah memeriksa dengan teliti klausul dalam Dokumen Pemilihan / RKS tender Anda. Jika panitia memperbolehkan 'Jaminan dari Bank atau Perusahaan Asuransi yang memiliki izin usaha dari OJK', maka Surety Bond adalah opsi yang paling efisien dari segi biaya dan kecepatan proses.",
      "PT Niaga Jaminan Nusantara siap membantu menganalisis kebutuhan proyek Anda dan memberikan rekomendasi instrumen terbaik, baik Surety Bond maupun Bank Garansi, dengan tarif jasa yang sangat kompetitif dan proses tanpa birokrasi berbelit-belit.",
    ],
  },
  {
    id: "3",
    title: "Strategi Menyiapkan Jaminan Penawaran (Bid Bond) agar Bebas dari Gugur Evaluasi Lelang",
    slug: "strategi-menyiapkan-bid-bond-lpse",
    category: "Tips Tender",
    date: "19 September 2026",
    isoDate: "2026-09-19T10:00:00+07:00",
    readTime: "5 menit baca",
    author: "Tim Teknis Tender NJN",
    authorRole: "Spesialis Pengadaan & LPSE",
    summary:
      "Seringkali penawaran tender gugur hanya karena kesalahan sepele pada format jaminan penawaran. Simak poin-poin krusial yang wajib diverifikasi sebelum mengunggah Bid Bond.",
    tags: ["Bid Bond", "LPSE", "Tips Lelang", "Jaminan Tender"],
    keyTakeaways: [
      "Masa berlaku Bid Bond harus sama atau melebihi masa berlaku surat penawaran dalam dokumen pemilihan.",
      "Nama paket pekerjaan dan nama Obligee (Pokja Pemilihan) harus sesuai huruf-per-huruf dengan dokumen tender.",
      "Pastikan mencantumkan klausul klaim tanpa syarat (Unconditional Guarantee) jika dipersyaratkan.",
      "Gunakan jasa penjaminan yang mampu menerbitkan draf verifikasi kilat sebelum warkat asli dicetak.",
    ],
    content: [
      "Tahap evaluasi administrasi dalam lelang online melalui portal SPSE / LPSE bersifat sistematis dan menggugurkan (knock-out system). Salah satu penyebab gugur paling sering yang menimpa peserta lelang bukanlah nilai penawaran harga, melainkan ketidaksesuaian warkat Jaminan Penawaran (Bid Bond) terhadap ketentuan dokumen pengadaan.",
      "Poin krusial pertama adalah masa berlaku warkat (validity period). Dokumen tender biasanya menentukan batas minimal masa laku, misalnya 90 hari kalender, ditambah masa pengajuan klaim 14 hingga 30 hari kalender. Jika warkat jaminan Anda kurang satu hari saja dari ketentuan, panitia tender wajib menyatakan penawaran Anda tidak memenuhi syarat.",
      "Poin kedua adalah keakuratan data administratif: Nama paket pekerjaan, kode tender, nilai nominal jaminan (biasanya 1% - 3% dari HPS), serta nama lengkap pihak penerima jaminan (Pokja Pemilihan atau Pejabat Pembuat Komitmen). Kesalahan ketik satu huruf pada nama instansi penerima jaminan dapat menjadi dasar sanggahan dari kompetitor tender Anda.",
      "Poin ketiga adalah klausul pencairan. Pastikan warkat mencantumkan klausul jaminan bersifat tanpa syarat (Unconditional), di mana pihak penjamin wajib mencairkan pembayaran dalam waktu maksimal 14 hari kerja setelah menerima surat klaim resmi dari panitia pengadaan.",
      "Untuk menghindari risiko kegagalan, tim PT Niaga Jaminan Nusantara selalu melakukan pra-pengecekan terhadap dokumen lelang (RKS/IKP) Anda sebelum warkat dicetak, sehingga menjamin warkat Bid Bond yang Anda unggah 100% compliant dan bebas gugur.",
    ],
  },
  {
    id: "4",
    title: "Cara Aman Mengajukan Jaminan Uang Muka (Advance Payment Bond) untuk Proyek Konstruksi",
    slug: "mengajukan-advance-payment-bond-aman",
    category: "Bank Garansi",
    date: "12 September 2026",
    isoDate: "2026-09-12T11:20:00+07:00",
    readTime: "5 menit baca",
    author: "Analis Risiko Proyek NJN",
    authorRole: "Head of Project Risk",
    summary:
      "Uang muka proyek sangat berharga untuk pengadaan material dan mobilisasi awal. Simak cara mendapatkan jaminan uang muka dengan proses cepat dan rasio premi yang kompetitif.",
    tags: ["Advance Payment Bond", "Uang Muka", "Konstruksi", "Modal Kerja"],
    keyTakeaways: [
      "Uang muka proyek (20%-30%) dapat dicairkan setelah penyerahan Jaminan Uang Muka senilai 100% dari DP.",
      "Pengembalian uang muka diperhitungkan secara bertahap melalui pemotongan pada setiap termin pembayaran fisik.",
      "Dokumen pendukung utama: Surat Perjanjian Kontrak (SPK), Surat Perintah Mulai Kerja (SPMK), dan jadwal Kurva-S.",
      "Fasilitas Non-Collateral membantu kontraktor langsung memulai pekerjaan tanpa beban modal awal.",
    ],
    content: [
      "Setelah memenangkan lelang dan menandatangani Surat Perjanjian Kontrak Kerja (SPK / SPMK), kontraktor memiliki hak untuk mengajukan penarikan uang muka proyek, umumnya berkisar antara 20% hingga 30% dari total nilai kontrak kerja.",
      "Pencairan uang muka ini sangat vital bagi kontraktor guna membiayai mobilisasi alat berat, pembelian material awal, pembayaran uang muka subkontraktor, serta biaya operasional lapangan sebelum termin pertama dapat ditagihkan.",
      "Sebagai syarat pencairan dana APBN / APBD atau kas perusahaan swasta, pihak pemilik proyek (Obligee) mewajibkan penyerahan Jaminan Uang Muka (Advance Payment Bond) dengan nilai nominal yang persis sama dengan jumlah uang muka yang hendak ditarik.",
      "Jaminan ini melindungi pemilik proyek dari risiko apabila kontraktor membawa kabur uang muka atau gagal melaksanakan pekerjaan sesuai dengan tahapan yang disepakati. Nilai jaminan uang muka ini nantinya akan menyusut secara proporsional seiring dengan pemotongan pada sertifikat pembayaran bulanan (MC).",
      "Melalui layanan PT Niaga Jaminan Nusantara, kontraktor dapat menerbitkan Advance Payment Bond baik dalam bentuk Bank Garansi maupun Surety Bond dengan syarat mudah tanpa harus menyetorkan deposito tunai penuh, sehingga akselerasi proyek dapat segera dimulai.",
    ],
  },
  {
    id: "5",
    title: "Pentingnya Jaminan Pemeliharaan (Maintenance Bond) Pascaterbitnya Berita Acara BAST",
    slug: "pentingnya-jaminan-pemeliharaan-bast",
    category: "Surety Bond",
    date: "5 September 2026",
    isoDate: "2026-09-05T13:45:00+07:00",
    readTime: "4 menit baca",
    author: "Konsultan Proyek Konstruksi NJN",
    authorRole: "Technical Project Advisor",
    summary:
      "Jangan sampai sisa pembayaran termin 5% ditahan (retensi) terlalu lama. Gantikan retensi kas Anda dengan Maintenance Bond agar arus kas perusahaan tetap berputar sehat.",
    tags: ["Maintenance Bond", "BAST", "Retensi", "Garansi Proyek"],
    keyTakeaways: [
      "Masa pemeliharaan umumnya berlangsung selama 3 hingga 6 bulan setelah penandatanganan BAST 1.",
      "Pemilik proyek berhak menahan uang retensi 5% dari nilai kontrak jika tidak diganti warkat jaminan.",
      "Maintenance Bond memungkinkan kontraktor mencairkan 100% pembayaran proyek secara instan.",
      "Warkat menjamin kesediaan kontraktor memperbaiki kerusakan fisik selama masa garansi.",
    ],
    content: [
      "Setelah seluruh fisik pekerjaan konstruksi rampung 100% dan Berita Acara Serah Terima Pertama (BAST 1 / Provisional Hand Over) ditandatangani oleh kedua belah pihak, proyek memasuki tahap masa pemeliharaan (warranty period).",
      "Masa pemeliharaan ini biasanya berlangsung selama 90 hingga 180 hari kalender tergantung pada kompleksitas bangunan atau infrastruktur yang dikerjakan. Selama periode ini, kontraktor berkewajiban memperbaiki segala bentuk cacat tersembunyi atau kerusakan fisik yang terjadi.",
      "Untuk menjamin kewajiban tersebut, pemilik proyek lazimnya menahan (retensi) 5% dari total nilai kontrak pembayaran terakhir. Bagi perusahaan, tertahannya dana retensi sebesar 5% dalam jangka waktu berbulan-bulan tentu sangat merugikan likuiditas perusahaan.",
      "Solusi terbaik dan legal yang diakui dalam Perpres Pengadaan adalah menggantikan potongan uang retensi tunai tersebut dengan warkat Jaminan Pemeliharaan (Maintenance Bond / Retention Bond). Dengan menyerahkan warkat ini, kontraktor dapat langsung menagihkan pembayaran 100% secara utuh.",
      "PT Niaga Jaminan Nusantara menyediakan layanan penerbitan Maintenance Bond cepat, terjangkau, dan dapat diselesaikan dalam 1-2 hari kerja setelah dokumen BAST 1 Anda terverifikasi.",
    ],
  },
  {
    id: "6",
    title: "Kepatuhan Regulasi OJK Terhadap Agen & Broker Penjaminan di Seluruh Indonesia",
    slug: "regulasi-ojk-penjaminan-proyek",
    category: "Regulasi",
    date: "25 Agustus 2026",
    isoDate: "2026-08-25T14:10:00+07:00",
    readTime: "5 menit baca",
    author: "Tim Kepatuhan Hukum NJN",
    authorRole: "Compliance & Regulatory Specialist",
    summary:
      "Mengapa penting memilih agen penjaminan resmi yang terdaftar dan patuh terhadap regulasi OJK? Simak aspek legalitas, keabsahan warkat, dan perlindungan hukum bagi pengguna jasa.",
    tags: ["OJK", "Regulasi", "Legalitas", "Kepatuhan Hukum"],
    keyTakeaways: [
      "Otoritas Jasa Keuangan (OJK) mengatur ketat standar solvabilitas lembaga penjaminan proyek.",
      "Warkat palsu atau tidak terdaftar database penerbit dapat berakibat pada pemutusan kontrak sepihak dan pidana.",
      "Warkat resmi selalu memuat kode verifikasi online, nomor register warkat, dan stempel basah/elektronik.",
      "PT Niaga Jaminan Nusantara hanya bermitra dengan bank dan asuransi berizin resmi serta terdaftar di OJK.",
    ],
    content: [
      "Industri penjaminan proyek di Indonesia diatur secara ketat oleh Otoritas Jasa Keuangan (OJK) melalui Peraturan OJK (POJK) mengenai penyelenggaraan usaha perusahaan penjaminan dan keagenan asuransi.",
      "Tingginya volume proyek infrastruktur dan pengadaan barang/jasa nasional seringkali dimanfaatkan oleh oknum-oknum tidak bertanggung jawab yang menawarkan warkat Bank Garansi atau Surety Bond dengan tarif sangat murah namun tanpa pencatatan resmi di pembukuan kantor cabang (warkat bodong/palsu).",
      "Risiko menggunakan warkat tidak resmi sangat fatal: Panitia lelang berhak melakukan diskualifikasi langsung, pencairan jaminan tidak dapat dilakukan, bahkan perusahaan Anda dapat dimasukkan ke dalam Daftar Hitam (Blacklist) nasional LPSE serta menghadapi ancaman pidana penipuan dokumen.",
      "Untuk melindungi kepentingan bisnis Anda, pastikan setiap warkat yang Anda terima diterbitkan oleh institusi yang terdaftar di OJK. Ciri-ciri warkat resmi antara lain: memiliki nomor register warkat yang dapat dicek melalui helpdesk bank/asuransi, dilengkapi QR code verifikasi online, dan disertai surat konfirmasi keabsahan (legal confirmation letter).",
      "PT Niaga Jaminan Nusantara berkomitmen penuh terhadap integritas dan transparansi. Seluruh warkat yang kami terbitkan dijamin 100% legal, asli, terdaftar di sistem perbankan/asuransi, dan telah diawasi oleh OJK demi keamanan dan kelancaran bisnis seluruh mitra kerja kami.",
    ],
  },
];

export function getAllArticles(): Article[] {
  return ARTICLES;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string, category: string, limit = 3): Article[] {
  return ARTICLES.filter((a) => a.slug !== currentSlug && a.category === category)
    .concat(ARTICLES.filter((a) => a.slug !== currentSlug && a.category !== category))
    .slice(0, limit);
}

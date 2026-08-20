// Birthday experience data tailored with 100% human, intimate, sincere Indonesian tone

export interface LoveCoupon {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  terms: string;
  icon: string;
  color: string;
  accentColor: string;
  whatsappText: string;
}

export interface BirthdayPhoto {
  id: number;
  src: string;
  caption: string;
  tag: string;
  memoryNote: string;
}

export const BIRTHDAY_CONFIG = {
  targetDate: "2026-09-08T00:00:00",
  displayDate: "08 September 2026",
  recipientName: "Sayangku",
  partnerWhatsApp: "6281232522276",
  anniversaryDate: "2026-01-16",
};

export const BIRTHDAY_LETTER = {
  title: "Selamat Ulang Tahun, Sayangku ❤️",
  dateText: "08 September 2026 • Hari Paling Spesial",
  paragraphs: [
    "Selamat ulang tahun ya, Sayangku tercinta! 🎉🎂",
    "Hari ini adalah salah satu hari paling membahagiakan buat aku, karena di tanggal 8 September ini, orang paling baik, paling manis, dan paling aku sayangi lahir ke dunia.",
    "Makasih banyak ya udah lahir dan tumbuh jadi sosok yang luar biasa seperti sekarang. Kehadiran kamu di hidup aku bener-bener berkah terbesar yang selalu aku syukuri setiap hari. Bersama kamu sejak 16 Januari lalu, hari-hariku jadi punya arti, penuh tawa, dan selalu ada rasa hangat tiap kali mikirin kamu.",
    "Di usiamu yang baru ini, doa aku sederhana tapi tulus banget dari lubuk hati: semoga kamu selalu sehat, selalu dilimpahkan kebahagiaan, dimudahkan segala urusan dan cita-citamu, serta selalu dikelilingi orang-orang yang tulus menyayangimu—termasuk aku yang bakal selalu ada di garda terdepan buat dukung kamu.",
    "Semoga senyum manismu nggak pernah pudar. Jangan pernah ragu sama kemampuan dirimu sendiri, karena di mataku, kamu adalah perempuan yang hebat dan sangat berharga. Kalau dunia luar lagi bikin capek, ingat ya, kamu selalu punya aku sebagai tempat pulang dan bersandar kapan pun kamu butuh.",
    "Selamat bertambah usia ya, Sayang. Aku janji bakal terus berusaha jadi pasangan yang lebih baik lagi dan nemenin kamu di setiap ulang tahunmu ke depan. Aku sayang banget sama kamu, hari ini, besok, dan selamanya! 🤍✨",
  ],
  signOff: "Dari pacar kamu yang selalu bangga dan sayang sama kamu,",
  signature: "Sayang Kamu Selalu ❤️",
};

export const LOVE_COUPONS: LoveCoupon[] = [
  {
    id: "coupon-1",
    code: "BDAY-NGAMBEK-01",
    title: "Voucher Bebas Ngambek Seharian",
    subtitle: "Tiket auto-ngalah & langsung dipeluk erat",
    description: "Kalau lagi ada hal yang bikin kamu kesel atau bad mood, tunjukin voucher ini. Aku bakal langsung ngalah, minta maaf duluan, dengerin unek-unek kamu, dan peluk erat sampai hatimu adem lagi.",
    terms: "Berlaku seumur hidup • Tanpa syarat ribet",
    icon: "HeartHandshake",
    color: "from-[#ff6b6b] to-[#ee5253]",
    accentColor: "#ff7675",
    whatsappText: "Sayang! Aku mau klaim Voucher Bebas Ngambek Seharian (BDAY-NGAMBEK-01) yaa 🥺🤍",
  },
  {
    id: "coupon-2",
    code: "BDAY-MAKAN-02",
    title: "Voucher Kuliner & Jajan Sepuasnya",
    subtitle: "Kamu pilih tempatnya, aku yang temenin & traktir",
    description: "Pilih makanan, dessert, cafe lucu, atau jajanan apa aja yang lagi kamu kepengin banget hari ini. Aku bakal temenin makan sampai kenyang dan bahagia!",
    terms: "Bebas pilih menu apa saja • Wajib dinikmati berdua",
    icon: "Utensils",
    color: "from-[#ff9f43] to-[#ee5253]",
    accentColor: "#feca57",
    whatsappText: "Sayang! Aku mau klaim Voucher Kuliner & Jajan Sepuasnya (BDAY-MAKAN-02). Yuk kita makan enak berdua! 🍽️🍰",
  },
  {
    id: "coupon-3",
    code: "BDAY-HUG-03",
    title: "Voucher Deep Talk & Peluk 24/7",
    subtitle: "Waktu khusus berdua tanpa distraksi",
    description: "Satu sesi penuh tanpa ada yang ganggu. Kamu boleh cerita apa aja dari hal sepele sampai yang paling dalam, sambil rebahan santai dan dipeluk hangat.",
    terms: "Anti-distraksi gadget • Selalu tersedia saat dibutuhkan",
    icon: "Heart",
    color: "from-[#a55eea] to-[#8854d0]",
    accentColor: "#d6a2e8",
    whatsappText: "Sayang, aku mau klaim Voucher Deep Talk & Peluk (BDAY-HUG-03) malam ini yaa 🫂🤍",
  },
  {
    id: "coupon-4",
    code: "BDAY-DATE-04",
    title: "Voucher Kencan Spontan & Jalan Berdua",
    subtitle: "Keliling kota, cafe hunting, atau santai di alam",
    description: "Kencan santai ke mana pun yang kamu mau. Mau nonton bioskop, nongkrong di tempat adem, atau jalan sore keliling kota sambil dengerin lagu favorit berdua di perjalanan.",
    terms: "Waktu fleksibel • Agenda ditentukan oleh birthday girl",
    icon: "Compass",
    color: "from-[#10ac84] to-[#1dd1a1]",
    accentColor: "#55efc4",
    whatsappText: "Sayang! Aku mau klaim Voucher Kencan Spontan (BDAY-DATE-04). Ayo kita jalan-jalan berdua! 🚗✨",
  },
  {
    id: "coupon-5",
    code: "BDAY-QUEEN-05",
    title: "Voucher Jadi Ratu Seharian",
    subtitle: "Semua permintaanmu diturutin tanpa tapi",
    description: "Hari spesial di mana kamu berhak jadi ratu. Mau dipijitin pas capek, dibuatin minuman favorit, atau ditemenin nonton drakor/film kesukaanmu seharian, siap laksanakan!",
    terms: "Berlaku 24 jam penuh • Dilayani dengan penuh cinta",
    icon: "Crown",
    color: "from-[#f368e0] to-[#ff9ff3]",
    accentColor: "#ff9ff3",
    whatsappText: "Sayang! Hari ini aku klaim Voucher Jadi Ratu Seharian (BDAY-QUEEN-05) yaa! 👑🥰",
  },
  {
    id: "coupon-6",
    code: "BDAY-WISH-06",
    title: "Voucher Kado Impian Tambahan",
    subtitle: "Satu permintaan spesial yang bakal diwujudkan",
    description: "Tuliskan satu barang atau hal yang paling kamu impikan saat ini. Aku bakal berusaha sebaik mungkin buat wujudin kado ini khusus buat kamu.",
    terms: "Bisa diklaim kapan saja di bulan ulang tahun",
    icon: "Gift",
    color: "from-[#0abde3] to-[#48dbfb]",
    accentColor: "#48dbfb",
    whatsappText: "Sayang! Aku mau klaim Voucher Kado Impian (BDAY-WISH-06) nih... 🎁✨",
  },
];

export const BIRTHDAY_PHOTOS: BirthdayPhoto[] = [
  { id: 1, src: "/img/photo-13.jpeg", caption: "Binar mata manismu yang selalu bikin hariku adem", tag: "Cantikku ✨", memoryNote: "Foto favorit pas kamu lagi senyum tulus" },
  { id: 2, src: "/img/photo-14.jpeg", caption: "Potret manis si birthday girl kesayangan", tag: "Bintang Hari Ini 🌸", memoryNote: "Gemas banget tiap liat foto ini" },
  { id: 3, src: "/img/photo-15.jpeg", caption: "Senyum paling indah yang bikin selalu kangen", tag: "Senyum Manis 🌷", memoryNote: "Obat paling ampuh pas lagi capek" },
  { id: 4, src: "/img/photo-16.jpeg", caption: "Ketawa lepas bareng kamu pas lagi jalan berdua", tag: "Tawa Lepas 📸", memoryNote: "Momen seru yang selalu kuingat" },
  { id: 5, src: "/img/photo-17.jpeg", caption: "Gandengan tangan yang selalu menenangkan hati", tag: "Genggaman Erat 🤝", memoryNote: "Nggak bakal pernah sengaja dilepas" },
  { id: 6, src: "/img/photo-18.jpeg", caption: "Tingkah lucu dan ekspresi gemas kamu", tag: "Kesayangan 🥰", memoryNote: "Selalu punya cara bikin ketawa" },
  { id: 7, src: "/img/photo-19.jpeg", caption: "Tempat paling nyaman dan tenang di dunia", tag: "Rumahku 🏡", memoryNote: "Bersamamu selalu terasa aman" },
  { id: 8, src: "/img/photo-20.jpeg", caption: "Melangkah bersama sejak 16 Januari 2026", tag: "Langkah Kita 💫", memoryNote: "Dan akan terus melangkah bersama" },
  { id: 9, src: "/img/photo-01.jpg", caption: "Awal mula takdir manis mempertemukan kita", tag: "Awal Cerita 💌", memoryNote: "Awal dari semua kebahagiaan ini" },
  { id: 10, src: "/img/photo-02.jpg", caption: "Pesona kamu yang nggak pernah pudar", tag: "Istimewa 💖", memoryNote: "Selalu bikin kagum setiap hari" },
  { id: 11, src: "/img/photo-03.jpg", caption: "Saat kita saling tatap dan malu-malu", tag: "Deg-degan 🌿", memoryNote: "Momen manis yang tak terlupakan" },
  { id: 12, src: "/img/photo-04.jpg", caption: "Candaan receh yang selalu berhasil bikin bahagia", tag: "Bahagia 😄", memoryNote: "Sederhana tapi hangat" },
  { id: 13, src: "/img/photo-05.jpg", caption: "Ngobrol santai berdua sambil nikmati waktu", tag: "Santai Berdua ☕", memoryNote: "Waktu selalu berjalan terlalu cepat" },
  { id: 14, src: "/img/photo-06.jpg", caption: "Salah satu foto kamu yang selalu kusimpan", tag: "Favorit 🌟", memoryNote: "Selalu ada di galeri ponselku" },
  { id: 15, src: "/img/photo-07.jpg", caption: "Ketulusan kamu yang membuatku bersyukur", tag: "Tulus 🤍", memoryNote: "Terima kasih sudah sebaik ini" },
  { id: 16, src: "/img/photo-08.jpg", caption: "Kehadiranmu yang memberi warna di hariku", tag: "Pelangiku 🌈", memoryNote: "Selalu mencerahkan hari mendung" },
  { id: 17, src: "/img/photo-09.jpg", caption: "Keceriaanmu yang selalu menular", tag: "Bunga Hati 🌻", memoryNote: "Gadis paling manis di duniaku" },
  { id: 18, src: "/img/photo-10.jpg", caption: "Memori indah yang terukir manis", tag: "Kenangan 🗝️", memoryNote: "Cerita kita yang berharga" },
  { id: 19, src: "/img/photo-11.jpg", caption: "Duduk santai menikmati kebersamaan", tag: "Damai 🕊️", memoryNote: "Tenang tanpa banyak suara" },
  { id: 20, src: "/img/photo-12.jpg", caption: "Selamat ulang tahun sayang, aku sayang kamu!", tag: "Ulang Tahunmu 🎂", memoryNote: "Selamanya bersamamu" },
];

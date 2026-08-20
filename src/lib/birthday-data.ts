// Curated Editorial Birthday Dataset with 100% Human, Scandinavian Aesthetic Tone

export interface LoveCoupon {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  terms: string;
  tag: string;
  whatsappText: string;
}

export interface EditorialPhoto {
  id: number;
  src: string;
  title: string;
  annotation: string;
  category: "moments" | "portraits" | "details";
  date: string;
}

export interface LoveReason {
  id: number;
  note: string;
  detail: string;
}

export const BIRTHDAY_CONFIG = {
  targetDate: "2026-09-08T00:00:00",
  displayDate: "08 September 2026",
  recipientName: "Sayangku",
  partnerWhatsApp: "6281232522276",
  anniversaryDate: "2026-01-16",
  editionTag: "N° 080926 — THE BIRTHDAY ARCHIVE",
};

export const EDITORIAL_LETTER = {
  headline: "Selamat Ulang Tahun, Rumahku.",
  editionInfo: "Edisi Khusus • 08 September 2026",
  paragraphs: [
    "Selamat ulang tahun ya, Sayangku tercinta.",
    "Hari ini adalah salah satu hari yang paling aku syukuri di hidupku, karena di tanggal 8 September ini, orang yang paling baik, paling manis, dan paling aku sayangi lahir ke dunia.",
    "Terima kasih banyak ya sudah lahir dan tumbuh jadi sosok yang begitu menyenangkan. Sejak 16 Januari lalu kita mulai melangkah bersama, hariku yang tadinya biasa aja berubah jadi selalu punya alasan buat pulang dan tersenyum. Bersamamu, aku nggak pernah merasa harus berpura-pura—aku bisa jadi diriku sendiri seutuhnya.",
    "Di usiamu yang baru ini, doa aku sederhana tapi tulus dari lubuk hati: semoga kamu selalu diberikan kesehatan, dilindungi dari segala hal yang melelahkan, dan dimudahkan semua impian serta rencana baik yang sedang kamu perjuangkan. Apapun yang terjadi di luar sana, ingat ya, kamu selalu punya aku yang bakal siap sedia mendengarkan dan mendukungmu.",
    "Jangan pernah ragu sama dirimu sendiri. Kamu hebat, kamu berharga, dan kamu selalu istimewa di mataku. Terima kasih sudah memilih bertahan dan menemaniku sejauh ini.",
    "Selamat bertambah usia, Sayang. Mari kita terus jalan bareng, bikin lebih banyak cerita seru, dan lewati setiap hari ke depan dengan saling menjaga. Aku sayang banget sama kamu, hari ini, besok, dan seterusnya.",
  ],
  signOff: "Dari seseorang yang selalu bersyukur memilikimu,",
  signature: "Sayang Kamu Selalu ❤️",
};

export const LOVE_REASONS: LoveReason[] = [
  { id: 1, note: "Binar matamu pas lagi cerita antusias", detail: "Kamu selalu kelihatan paling manis kalau lagi ceritain hal yang kamu sukai." },
  { id: 2, note: "Cara kamu selalu sabar ngadepin aku", detail: "Kebaikan dan kesabaran hatimu selalu berhasil bikin aku luluh." },
  { id: 3, note: "Tawa renyahmu yang nular banget", detail: "Nggak ada obat capek yang lebih ampuh daripada denger kamu ketawa lepas." },
  { id: 4, note: "Rasa aman setiap kali kita gandengan tangan", detail: "Cuma sentuhan sederhana, tapi rasanya hangat dan menenangkan." },
  { id: 5, note: "Ketulusan kamu yang apa adanya", detail: "Sama kamu, segalanya terasa jujur dan nggak ada yang perlu ditutup-tutupi." },
  { id: 6, note: "Wajah gemasmu pas lagi merajuk atau ngantuk", detail: "Selalu bikin aku pengin cubit pipi kamu dan peluk erat." },
  { id: 7, note: "Obrolan random kita di malam hari", detail: "Mulai dari topik receh sampai obrolan masa depan, selalu menyenangkan." },
  { id: 8, note: "Perhatian kecil yang selalu kamu kasih", detail: "Dari nanyain kabar, ngingetin makan, sampai hal-hal sederhana lainnya." },
  { id: 9, note: "Caramu bikin duniaku terasa tenang", detail: "Pas di luar lagi bising dan capek, ada kamu tempat aku bernapas lega." },
  { id: 10, note: "Senyum manis yang nggak pernah bikin bosen", detail: "Setiap hari ngeliat kamu selalu terasa seperti jatuh hati lagi." },
  { id: 11, note: "Kamu yang selalu menghargai usaha sekecil apa pun", detail: "Apresiasi dari kamu selalu bikin aku semangat buat berusaha lebih baik." },
  { id: 12, note: "Selera makan kita yang selalu cocok", detail: "Makan apa aja asal bareng kamu rasanya jadi dua kali lebih nikmat." },
  { id: 13, note: "Gaya jalanmu yang menggemaskan", detail: "Suka diam-diam merhatiin kamu dari samping pas kita lagi jalan berdua." },
  { id: 14, note: "Keberanianmu buat terus belajar dan bertumbuh", detail: "Aku selalu bangga melihat semua proses dan perjuanganmu." },
  { id: 15, note: "Karena kamu adalah kamu", detail: "Nggak perlu jadi orang lain, kamu udah sempurna dan cukup buat aku." },
];

export const EDITORIAL_COUPONS: LoveCoupon[] = [
  {
    id: "coupon-01",
    code: "VCH-0809-A",
    title: "Voucher Bebas Ngambek & Auto-Ngalah",
    subtitle: "Tiket prioritas pelukan damai",
    description: "Tunjukkan voucher ini saat kamu lagi kesal. Aku akan langsung minta maaf, dengarkan seluruh isi hatimu tanpa membantah, dan peluk sampai hatimu reda.",
    terms: "Berlaku seumur hidup • Tanpa syarat",
    tag: "Priority Pass",
    whatsappText: "Sayang, aku mau klaim Voucher Bebas Ngambek (VCH-0809-A) hari ini yaa 🥺🤍",
  },
  {
    id: "coupon-02",
    code: "VCH-0809-B",
    title: "Voucher Wisata Kuliner Pilihanmu",
    subtitle: "Kamu pilih tempatnya, aku yang temani",
    description: "Pilih cafe lucu, resto yang lagi kamu idamkan, atau street food favoritmu. Hari ini kita jalan dan makan santai berdua.",
    terms: "Bebas pilih menu • Wajib dinikmati berdua",
    tag: "Dining Experience",
    whatsappText: "Sayang! Aku mau klaim Voucher Wisata Kuliner (VCH-0809-B). Yuk kita jalan & makan bareng! 🍽️🍰",
  },
  {
    id: "coupon-03",
    code: "VCH-0809-C",
    title: "Voucher Deep Talk & Peluk Hangat",
    subtitle: "Satu malam tenang tanpa distraksi",
    description: "Waktu khusus berdua untuk rebahan santai, bercerita tentang apa saja, saling mendengar dan melepas lelah bersama.",
    terms: "Bebas distraksi gadget • Selalu tersedia",
    tag: "Intimate Time",
    whatsappText: "Sayang, aku mau klaim Voucher Deep Talk & Peluk (VCH-0809-C) malam ini yaa 🫂🤍",
  },
  {
    id: "coupon-04",
    code: "VCH-0809-D",
    title: "Voucher Kencan Spontan Keliling Kota",
    subtitle: "Menikmati sore dan malam berdua",
    description: "Perjalanan santai ke tempat adem, keliling kota sambil memutar lagu favorit, atau sekadar duduk santai menikmati waktu.",
    terms: "Waktu fleksibel • Agenda ditentukan olehmu",
    tag: "Day Out",
    whatsappText: "Sayang! Aku mau klaim Voucher Kencan Spontan (VCH-0809-D). Ayo kita jalan sore berdua! 🚗✨",
  },
  {
    id: "coupon-05",
    code: "VCH-0809-E",
    title: "Voucher Pelayanan Khusus Ratu Seharian",
    subtitle: "Semua permintaanmu dituruti dengan senang hati",
    description: "Hari spesial di mana kamu boleh minta dipijit pas lelah, dibikinin minuman kesukaan, atau ditemani nonton serial kesukaanmu seharian.",
    terms: "Berlaku 24 jam penuh • Penuh perhatian",
    tag: "Queen For A Day",
    whatsappText: "Sayang! Hari ini aku klaim Voucher Jadi Ratu Seharian (VCH-0809-E) yaa! 👑🥰",
  },
  {
    id: "coupon-06",
    code: "VCH-0809-F",
    title: "Voucher Permintaan Kado Tambahan",
    subtitle: "Satu kado impian pilihanmu",
    description: "Tuliskan satu barang atau pengalaman yang paling kamu inginkan saat ini, dan aku akan berusaha sebaik mungkin mewujudkannya khusus buat kamu.",
    terms: "Bisa diklaim kapan saja di bulan ulang tahun",
    tag: "Wishlist Token",
    whatsappText: "Sayang! Aku mau klaim Voucher Permintaan Kado Tambahan (VCH-0809-F) nih... 🎁✨",
  },
];

export const EDITORIAL_PHOTOS: EditorialPhoto[] = [
  { id: 1, src: "/img/photo-13.jpeg", title: "Tatap Teduh", annotation: "Binar matamu yang selalu memberi ketenangan", category: "portraits", date: "Archived Memory" },
  { id: 2, src: "/img/photo-14.jpeg", title: "The Birthday Girl", annotation: "Potret manis si gadis yang paling aku sayangi", category: "portraits", date: "Special Spotlight" },
  { id: 3, src: "/img/photo-15.jpeg", title: "Senyum Hangat", annotation: "Senyuman tulus yang selalu mengembalikan energi positif", category: "portraits", date: "Sweet Everyday" },
  { id: 4, src: "/img/photo-16.jpeg", title: "Tawa Lepas", annotation: "Momen seru saat kita tertawa bersama tanpa beban", category: "moments", date: "Candid Story" },
  { id: 5, src: "/img/photo-17.jpeg", title: "Genggaman Erat", annotation: "Dua jemari yang saling menguatkan dalam setiap langkah", category: "details", date: "Since 16.01.2026" },
  { id: 6, src: "/img/photo-18.jpeg", title: "Ekspresi Gemas", annotation: "Tingkah konyol dan lucu yang selalu kurindukan", category: "moments", date: "Joyful Moments" },
  { id: 7, src: "/img/photo-19.jpeg", title: "Tempat Pulang", annotation: "Kenyamanan sederhana saat berada di dekatmu", category: "details", date: "Peaceful Mind" },
  { id: 8, src: "/img/photo-20.jpeg", title: "Langkah Kita", annotation: "Perjalanan indah yang kita rajut bersama hari demi hari", category: "moments", date: "Forever Forward" },
  { id: 9, src: "/img/photo-01.jpg", title: "Awal Mula", annotation: "Jejak pertama takdir mempertemukan dua hati", category: "moments", date: "Chapter One" },
  { id: 10, src: "/img/photo-02.jpg", title: "Pesona Anggun", annotation: "Selalu memukau dengan ketulusan apa adanya", category: "portraits", date: "Timeless Grace" },
  { id: 11, src: "/img/photo-03.jpg", title: "Saling Tatap", annotation: "Saat tatapan mata berbicara lebih banyak dari kata-kata", category: "details", date: "Silent Chemistry" },
  { id: 12, src: "/img/photo-04.jpg", title: "Bahagia Sederhana", annotation: "Candaan kecil yang selalu berhasil mencairkan suasana", category: "moments", date: "Pure Delight" },
  { id: 13, src: "/img/photo-05.jpg", title: "Secangkir Waktu", annotation: "Menikmati obrolan santai berdua tanpa terburu-buru", category: "details", date: "Coffee & Talks" },
  { id: 14, src: "/img/photo-06.jpg", title: "Potret Favorit", annotation: "Salah satu foto yang selalu kusimpan rapi di dompet", category: "portraits", date: "Personal Keepsake" },
  { id: 15, src: "/img/photo-07.jpg", title: "Hati yang Tulus", annotation: "Kebaikan hatimu yang selalu membuatku bersyukur", category: "portraits", date: "Genuine Soul" },
  { id: 16, src: "/img/photo-08.jpg", title: "Warna Hidup", annotation: "Kehadiranmu yang selalu mencerahkan hari-hariku", category: "moments", date: "Warm Daylight" },
  { id: 17, src: "/img/photo-09.jpg", title: "Keceriaan", annotation: "Energi positif yang selalu kamu tularkan setiap saat", category: "portraits", date: "Sunlit Glow" },
  { id: 18, src: "/img/photo-10.jpg", title: "Cerita Bersama", annotation: "Setiap detik bersamamu adalah memori berharga", category: "moments", date: "Our Archive" },
  { id: 19, src: "/img/photo-11.jpg", title: "Ketenangan", annotation: "Saat hening pun terasa begitu nyaman bersamamu", category: "details", date: "Quiet Harmony" },
  { id: 20, src: "/img/photo-12.jpg", title: "Ulang Tahunmu", annotation: "Selamat ulang tahun sayang, aku selalu di sampingmu", category: "moments", date: "08.09.2026" },
];

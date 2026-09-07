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
  location: "GRESIK",
};

export const EDITORIAL_LETTER = {
  headline: "Selamat Ulang Tahun, Rumah & Doaku.",
  editionInfo: "Edisi Khusus • 08 September 2026",
  paragraphs: [
    "Selamat ulang tahun ya, Sayangku tercinta.",
    "Waktu aku ulang tahun kemarin, aku ingat banget kamu sempat kirim pesan panjang. Kamu bilang kalau kamu sering mikir gimana ya jalannya takdir sampai akhirnya kita berdua bisa dipertemukan, dan kamu bilang kalau mencintaiku adalah keputusan paling membahagiakan yang pernah kamu ambil.",
    "Hari ini, di tanggal 8 September ini, gantian giliran aku yang mau ngomong langsung ke kamu: ketemu kamu adalah hal paling indah dan paling aku syukuri di hidup ini. Sejak 16 Januari lalu kita mulai jalan bareng—ke mana-mana berdua, ketawa lepas, cerita ngalor-ngidul nggak jelas sampai larut—hariku yang tadinya biasa aja beneran berubah jadi jauh lebih hangat dan selalu punya alasan buat pulang dan tersenyum.",
    "Kamu selalu bilang aku pacar terbaik dan sempurna di matamu, padahal kenyataannya justru kamulah yang selalu bikin aku merasa cukup dan berharga. Aku juga minta maaf ya kalau selama ini masih banyak kurangnya, kadang bikin kesel atau belum bisa jadi yang paling sempurna. Tapi satu hal yang perlu kamu tahu: doa kamu buat ngarungi sisa waktu bareng aku itu, beneran jadi amin paling serius yang selalu aku langitkan setiap hari.",
    "Di usia barumu ini, tetap jadi diri kamu ya. Tetap jadi si manis yang ceria, yang suka manja, dan nggak pernah pelit senyum. Kamu nggak perlu khawatir, aku nggak akan berubah—aku bakal terus ada di sini buat nemenin kamu, jagain kamu, dan sayang sama kamu hari ini, besok, dan seterusnya.",
    "Selamat bertambah usia, Sayangku. I love you more than you'll ever know. (Peluk erat banget dari jauh 🫂💗)",
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
  { id: 21, src: "/img/photo-21.jpg", title: "Senyuman Teduh", annotation: "Senyum tulusmu yang selalu berhasil menenangkan hariku", category: "portraits", date: "23 Nov 2025" },
  { id: 22, src: "/img/photo-22.jpg", title: "Kencan Santai", annotation: "Menikmati waktu yang berlalu pelan asal bersamamu", category: "moments", date: "23 Nov 2025" },
  { id: 23, src: "/img/photo-23.jpg", title: "Saling Memandang", annotation: "Ada bahasa cinta yang tak perlu diucapkan lewat kata-kata", category: "details", date: "23 Nov 2025" },
  { id: 24, src: "/img/photo-24.jpg", title: "Tawa Spontan", annotation: "Candaan receh yang selalu berujung tawa lepas berdua", category: "moments", date: "23 Nov 2025" },
  { id: 25, src: "/img/photo-25.jpg", title: "Potret Bahagia", annotation: "Setiap sudut wajahmu selalu memancarkan kehangatan", category: "portraits", date: "23 Nov 2025" },
  { id: 26, src: "/img/photo-26.jpg", title: "Sudut Favorit", annotation: "Tempat di mana kita selalu punya cerita manis untuk dibagi", category: "details", date: "23 Nov 2025" },
  { id: 27, src: "/img/photo-27.jpg", title: "Langkah Seirama", annotation: "Berjalan berdampingan menatap masa depan dengan yakin", category: "moments", date: "23 Nov 2025" },
  { id: 28, src: "/img/photo-28.jpg", title: "Rona Manis", annotation: "Pipi merona saat kamu tersipu malu di depanku", category: "portraits", date: "23 Nov 2025" },
  { id: 29, src: "/img/photo-29.jpg", title: "Hangatnya Kebersamaan", annotation: "Dunia luar boleh ramai, yang penting kita tetap damai", category: "details", date: "23 Nov 2025" },
  { id: 30, src: "/img/photo-30.jpg", title: "Jejak Kenangan", annotation: "Satu lagi memori indah yang tersimpan rapi di hati", category: "moments", date: "23 Nov 2025" },
  { id: 31, src: "/img/photo-31.jpg", title: "Paling Berharga", annotation: "Kamu adalah hadiah terindah yang tak pernah berhenti kusyukuri", category: "portraits", date: "29 Nov 2025" },
  { id: 32, src: "/img/photo-32.jpg", title: "Sentuhan Lembut", annotation: "Genggaman tangan yang selalu memberi rasa aman", category: "details", date: "29 Nov 2025" },
  { id: 33, src: "/img/photo-33.jpg", title: "Keceriaan Sederhana", annotation: "Binar matamu yang selalu penuh semangat dan harapan", category: "portraits", date: "29 Nov 2025" },
  { id: 34, src: "/img/photo-34.jpg", title: "Momen Hangat", annotation: "Duduk berdua membicarakan impian-impian kecil kita", category: "moments", date: "29 Nov 2025" },
  { id: 35, src: "/img/photo-35.jpg", title: "Cerita Tanpa Akhir", annotation: "Selalu ada hal baru yang membuatku makin sayang padamu", category: "details", date: "29 Nov 2025" },
  { id: 36, src: "/img/photo-36.jpg", title: "Wajah Kesayangan", annotation: "Foto yang selalu jadi mood booster di kala lelah", category: "portraits", date: "6 Des 2025" },
  { id: 37, src: "/img/photo-37.jpg", title: "Petualangan Kita", annotation: "Menjelajah sudut kota dengan hati yang bahagia", category: "moments", date: "6 Des 2025" },
  { id: 38, src: "/img/photo-38.jpg", title: "Detik Paling Manis", annotation: "Saat waktu seolah berhenti hanya untuk kita berdua", category: "details", date: "6 Des 2025" },
  { id: 39, src: "/img/photo-39.jpg", title: "Cahaya di Hari-hariku", annotation: "Kehadiranmu selalu membawa warna cerah di setiap langkah", category: "portraits", date: "6 Des 2025" },
  { id: 40, src: "/img/photo-40.jpg", title: "Kisah Indah Kita", annotation: "Bersyukur atas setiap detik yang kita lalui bersama", category: "moments", date: "6 Des 2025" },
  { id: 41, src: "/img/photo-41.jpg", title: "Matahari Senja", annotation: "Sore yang tenang dengan pemandangan termanis: kamu", category: "moments", date: "6 Des 2025" },
  { id: 42, src: "/img/photo-42.jpg", title: "Canda Tawa Berdua", annotation: "Tertawa sampai pipi pegal karena tingkah konyol kita", category: "moments", date: "6 Des 2025" },
  { id: 43, src: "/img/photo-43.jpeg", title: "Hari Jadi Kita (16.01)", annotation: "Awal mula langkah resmi perjalanan cinta kita berdua", category: "moments", date: "16 Jan 2026" },
  { id: 44, src: "/img/photo-44.jpeg", title: "Hari Jadi Kita (16.01)", annotation: "Awal mula langkah resmi perjalanan cinta kita berdua", category: "moments", date: "16 Jan 2026" },
  { id: 45, src: "/img/photo-45.jpeg", title: "Hari Jadi Kita (16.01)", annotation: "Awal mula langkah resmi perjalanan cinta kita berdua", category: "moments", date: "16 Jan 2026" },
  { id: 46, src: "/img/photo-46.jpeg", title: "Hari Jadi Kita (16.01)", annotation: "Awal mula langkah resmi perjalanan cinta kita berdua", category: "moments", date: "16 Jan 2026" },
  { id: 47, src: "/img/photo-47.jpeg", title: "Hari Jadi Kita (16.01)", annotation: "Awal mula langkah resmi perjalanan cinta kita berdua", category: "moments", date: "16 Jan 2026" },
  { id: 48, src: "/img/photo-48.jpeg", title: "Tawa Spontan", annotation: "Candaan receh yang selalu berujung tawa lepas berdua", category: "moments", date: "20 Jan 2026" },
  { id: 49, src: "/img/photo-49.jpeg", title: "Potret Bahagia", annotation: "Setiap sudut wajahmu selalu memancarkan kehangatan", category: "portraits", date: "21 Jan 2026" },
  { id: 50, src: "/img/photo-50.jpeg", title: "Sudut Favorit", annotation: "Tempat di mana kita selalu punya cerita manis untuk dibagi", category: "details", date: "23 Jan 2026" },
  { id: 51, src: "/img/photo-51.jpeg", title: "Langkah Seirama", annotation: "Berjalan berdampingan menatap masa depan dengan yakin", category: "moments", date: "23 Jan 2026" },
  { id: 52, src: "/img/photo-52.jpeg", title: "Rona Manis", annotation: "Pipi merona saat kamu tersipu malu di depanku", category: "portraits", date: "24 Jan 2026" },
  { id: 53, src: "/img/photo-53.jpeg", title: "Hangatnya Kebersamaan", annotation: "Dunia luar boleh ramai, yang penting kita tetap damai", category: "details", date: "25 Jan 2026" },
  { id: 54, src: "/img/photo-54.jpeg", title: "Jejak Kenangan", annotation: "Satu lagi memori indah yang tersimpan rapi di hati", category: "moments", date: "25 Jan 2026" },
  { id: 55, src: "/img/photo-55.jpeg", title: "Paling Berharga", annotation: "Kamu adalah hadiah terindah yang tak pernah berhenti kusyukuri", category: "portraits", date: "25 Jan 2026" },
  { id: 56, src: "/img/photo-56.jpeg", title: "Sentuhan Lembut", annotation: "Genggaman tangan yang selalu memberi rasa aman", category: "details", date: "25 Jan 2026" },
  { id: 57, src: "/img/photo-57.jpeg", title: "Keceriaan Sederhana", annotation: "Binar matamu yang selalu penuh semangat dan harapan", category: "portraits", date: "25 Jan 2026" },
  { id: 58, src: "/img/photo-58.jpeg", title: "Momen Hangat", annotation: "Duduk berdua membicarakan impian-impian kecil kita", category: "moments", date: "25 Jan 2026" },
  { id: 59, src: "/img/photo-59.jpeg", title: "Cerita Tanpa Akhir", annotation: "Selalu ada hal baru yang membuatku makin sayang padamu", category: "details", date: "25 Jan 2026" },
  { id: 60, src: "/img/photo-60.jpeg", title: "Wajah Kesayangan", annotation: "Foto yang selalu jadi mood booster di kala lelah", category: "portraits", date: "25 Jan 2026" },
  { id: 61, src: "/img/photo-61.jpeg", title: "Petualangan Kita", annotation: "Menjelajah sudut kota dengan hati yang bahagia", category: "moments", date: "25 Jan 2026" },
  { id: 62, src: "/img/photo-62.jpeg", title: "Detik Paling Manis", annotation: "Saat waktu seolah berhenti hanya untuk kita berdua", category: "details", date: "25 Jan 2026" },
  { id: 63, src: "/img/photo-63.jpeg", title: "Cahaya di Hari-hariku", annotation: "Kehadiranmu selalu membawa warna cerah di setiap langkah", category: "portraits", date: "25 Jan 2026" },
  { id: 64, src: "/img/photo-64.jpeg", title: "Kisah Indah Kita", annotation: "Bersyukur atas setiap detik yang kita lalui bersama", category: "moments", date: "25 Jan 2026" },
  { id: 65, src: "/img/photo-65.jpeg", title: "Matahari Senja", annotation: "Sore yang tenang dengan pemandangan termanis: kamu", category: "moments", date: "25 Jan 2026" },
  { id: 66, src: "/img/photo-66.jpeg", title: "Canda Tawa Berdua", annotation: "Tertawa sampai pipi pegal karena tingkah konyol kita", category: "moments", date: "25 Jan 2026" },
  { id: 67, src: "/img/photo-67.jpeg", title: "Gadis Impian", annotation: "Sosok yang selalu aku doakan dalam setiap sujudku", category: "portraits", date: "25 Jan 2026" },
  { id: 68, src: "/img/photo-68.jpeg", title: "Genggam Erat", annotation: "Jangan pernah lepas tangan ini, kita hadapi dunia berdua", category: "details", date: "25 Jan 2026" },
  { id: 69, src: "/img/photo-69.jpeg", title: "Senyuman Teduh", annotation: "Senyum tulusmu yang selalu berhasil menenangkan hariku", category: "portraits", date: "25 Jan 2026" },
  { id: 70, src: "/img/photo-70.jpeg", title: "Kencan Santai", annotation: "Menikmati waktu yang berlalu pelan asal bersamamu", category: "moments", date: "25 Jan 2026" },
  { id: 71, src: "/img/photo-71.jpeg", title: "Saling Memandang", annotation: "Ada bahasa cinta yang tak perlu diucapkan lewat kata-kata", category: "details", date: "25 Jan 2026" },
  { id: 72, src: "/img/photo-72.jpeg", title: "Tawa Spontan", annotation: "Candaan receh yang selalu berujung tawa lepas berdua", category: "moments", date: "25 Jan 2026" },
  { id: 73, src: "/img/photo-73.jpeg", title: "Potret Bahagia", annotation: "Setiap sudut wajahmu selalu memancarkan kehangatan", category: "portraits", date: "25 Jan 2026" },
  { id: 74, src: "/img/photo-74.jpeg", title: "Sudut Favorit", annotation: "Tempat di mana kita selalu punya cerita manis untuk dibagi", category: "details", date: "25 Jan 2026" },
  { id: 75, src: "/img/photo-75.jpeg", title: "Langkah Seirama", annotation: "Berjalan berdampingan menatap masa depan dengan yakin", category: "moments", date: "25 Jan 2026" },
  { id: 76, src: "/img/photo-76.jpeg", title: "Rona Manis", annotation: "Pipi merona saat kamu tersipu malu di depanku", category: "portraits", date: "1 Feb 2026" },
  { id: 77, src: "/img/photo-77.jpeg", title: "Hangatnya Kebersamaan", annotation: "Dunia luar boleh ramai, yang penting kita tetap damai", category: "details", date: "27 Mar 2026" },
  { id: 78, src: "/img/photo-78.jpeg", title: "Jejak Kenangan", annotation: "Satu lagi memori indah yang tersimpan rapi di hati", category: "moments", date: "27 Mar 2026" },
  { id: 79, src: "/img/photo-79.jpeg", title: "Paling Berharga", annotation: "Kamu adalah hadiah terindah yang tak pernah berhenti kusyukuri", category: "portraits", date: "27 Mar 2026" },
  { id: 80, src: "/img/photo-80.jpeg", title: "Sentuhan Lembut", annotation: "Genggaman tangan yang selalu memberi rasa aman", category: "details", date: "27 Mar 2026" },
  { id: 81, src: "/img/photo-81.jpeg", title: "Keceriaan Sederhana", annotation: "Binar matamu yang selalu penuh semangat dan harapan", category: "portraits", date: "27 Mar 2026" },
  { id: 82, src: "/img/photo-82.jpeg", title: "Momen Hangat", annotation: "Duduk berdua membicarakan impian-impian kecil kita", category: "moments", date: "27 Mar 2026" },
  { id: 83, src: "/img/photo-83.jpeg", title: "Cerita Tanpa Akhir", annotation: "Selalu ada hal baru yang membuatku makin sayang padamu", category: "details", date: "27 Mar 2026" },
  { id: 84, src: "/img/photo-84.jpeg", title: "Wajah Kesayangan", annotation: "Foto yang selalu jadi mood booster di kala lelah", category: "portraits", date: "27 Mar 2026" },
  { id: 85, src: "/img/photo-85.jpeg", title: "Petualangan Kita", annotation: "Menjelajah sudut kota dengan hati yang bahagia", category: "moments", date: "27 Mar 2026" },
  { id: 86, src: "/img/photo-86.jpeg", title: "Detik Paling Manis", annotation: "Saat waktu seolah berhenti hanya untuk kita berdua", category: "details", date: "27 Mar 2026" },
  { id: 87, src: "/img/photo-87.jpeg", title: "Cahaya di Hari-hariku", annotation: "Kehadiranmu selalu membawa warna cerah di setiap langkah", category: "portraits", date: "27 Mar 2026" },
  { id: 88, src: "/img/photo-88.jpeg", title: "Kisah Indah Kita", annotation: "Bersyukur atas setiap detik yang kita lalui bersama", category: "moments", date: "27 Mar 2026" },
  { id: 89, src: "/img/photo-89.jpeg", title: "Matahari Senja", annotation: "Sore yang tenang dengan pemandangan termanis: kamu", category: "moments", date: "27 Mar 2026" },
  { id: 90, src: "/img/photo-90.jpeg", title: "Canda Tawa Berdua", annotation: "Tertawa sampai pipi pegal karena tingkah konyol kita", category: "moments", date: "27 Mar 2026" },
  { id: 91, src: "/img/photo-91.jpeg", title: "Gadis Impian", annotation: "Sosok yang selalu aku doakan dalam setiap sujudku", category: "portraits", date: "27 Mar 2026" },
  { id: 92, src: "/img/photo-92.jpeg", title: "Genggam Erat", annotation: "Jangan pernah lepas tangan ini, kita hadapi dunia berdua", category: "details", date: "28 Mar 2026" },
  { id: 93, src: "/img/photo-93.jpeg", title: "Senyuman Teduh", annotation: "Senyum tulusmu yang selalu berhasil menenangkan hariku", category: "portraits", date: "28 Mar 2026" },
  { id: 94, src: "/img/photo-94.jpeg", title: "Kencan Santai", annotation: "Menikmati waktu yang berlalu pelan asal bersamamu", category: "moments", date: "28 Mar 2026" },
  { id: 95, src: "/img/photo-95.jpeg", title: "Saling Memandang", annotation: "Ada bahasa cinta yang tak perlu diucapkan lewat kata-kata", category: "details", date: "28 Mar 2026" },
  { id: 96, src: "/img/photo-96.jpeg", title: "Tawa Spontan", annotation: "Candaan receh yang selalu berujung tawa lepas berdua", category: "moments", date: "28 Mar 2026" },
  { id: 97, src: "/img/photo-97.jpeg", title: "Potret Bahagia", annotation: "Setiap sudut wajahmu selalu memancarkan kehangatan", category: "portraits", date: "29 Mar 2026" },
  { id: 98, src: "/img/photo-98.png", title: "Sudut Favorit", annotation: "Tempat di mana kita selalu punya cerita manis untuk dibagi", category: "details", date: "Special Edition" },
  { id: 99, src: "/img/photo-99.png", title: "Langkah Seirama", annotation: "Berjalan berdampingan menatap masa depan dengan yakin", category: "moments", date: "Special Edition" },
  { id: 100, src: "/img/photo-100.png", title: "Rona Manis", annotation: "Pipi merona saat kamu tersipu malu di depanku", category: "portraits", date: "Special Edition" },
  { id: 101, src: "/img/photo-101.png", title: "Hangatnya Kebersamaan", annotation: "Dunia luar boleh ramai, yang penting kita tetap damai", category: "details", date: "Special Edition" },
  { id: 102, src: "/img/photo-102.png", title: "Jejak Kenangan", annotation: "Satu lagi memori indah yang tersimpan rapi di hati", category: "moments", date: "Special Edition" },
];

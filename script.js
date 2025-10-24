// Redirect card ke oryvia.my.id
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const url = card.getAttribute('data-href');
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  });
});

// Proteksi dasar
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
  // Blokir Ctrl+C, Ctrl+U, F12
  if (
    (e.ctrlKey && (e.key === 'c' || e.key === 'u')) ||
    e.key === 'F12'
  ) {
    e.preventDefault();
  }
});

// Multibahasa (opsional: bisa di-load dari JSON)
// Untuk versi sederhana, Anda bisa ganti manual atau tambahkan fetch ke /lang/id.json
// Contoh placeholder:
const translations = {
  id: {
    hero_title: "Kebijakan Layanan",
    hero_subtitle: "Transparansi penuh. Kepercayaan tanpa kompromi.",
    domain: "Domain",
    hosting: "Hosting",
    website: "Website Builder",
    vps: "VPS Cloud",
    desc_domain: "Daftarkan nama domain impian Anda.",
    desc_hosting: "Server cepat & stabil.",
    desc_website: "Buat website tanpa coding.",
    desc_vps: "Kontrol penuh & performa tinggi.",
    promo_label: "🔥 Promo Musiman",
    promo_desc: "Diskon Ramadan, Lebaran & event spesial lainnya!",
    policy_title: "Ketentuan & Kebijakan",
    policy_text: "Semua layanan Oryvia tunduk pada syarat dan ketentuan yang berlaku. Pembayaran bersifat final kecuali dalam kasus force majeure. Kami tidak bertanggung jawab atas penyalahgunaan layanan oleh pengguna."
  },
  en: {
    hero_title: "Service Policy",
    hero_subtitle: "Full transparency. Trust without compromise.",
    domain: "Domain",
    hosting: "Hosting",
    website: "Website Builder",
    vps: "VPS Cloud",
    desc_domain: "Register your dream domain name.",
    desc_hosting: "Fast & stable servers.",
    desc_website: "Build a website without coding.",
    desc_vps: "Full control & high performance.",
    promo_label: "🔥 Seasonal Promo",
    promo_desc: "Ramadan, Eid, and special event discounts!",
    policy_title: "Terms & Policy",
    policy_text: "All Oryvia services are subject to applicable terms. Payments are final except in force majeure cases. We are not liable for service misuse by users."
  }
};

// Ganti bahasa (opsional tombol di HTML)
function setLanguage(lang = 'id') {
  document.documentElement.lang = lang;
  const trans = translations[lang] || translations.id;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (trans[key]) el.textContent = trans[key];
  });
}

// Default ke Bahasa Indonesia
setLanguage('id');
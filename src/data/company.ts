export const company = {
  name: "DOLOOK",
  founded: 2001,
  team: 63,
  ceo: { ar: "علي أحمد اليحيى", en: "Ali Ahmed Al Yahya" },
  address: {
    ar: "حي الجوهرة، الخبر 34434، المملكة العربية السعودية",
    en: "Al Jawharah District, Al Khobar 34434, Kingdom of Saudi Arabia",
  },
  email: "info@dolook.sa",
  phone: "+966 13 805 4006",
  phoneHref: "tel:+966138054006",
  whatsapp: "966570889950",
  whatsappDisplay: "+966 57 088 9950",
  /** Unified national number (commercial registration). */
  cr: "7050843783",
  vat: "313143807900003",
  /** Saudi National Address short code. */
  nationalAddress: "EKGA3742",
};

/** Public site address — used for the sitemap, canonical URLs and social previews. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://dolook.sa").replace(/\/$/, "");

/** Used for the Google Maps embed and directions link. */
export const mapQuery = encodeURIComponent("Al Jawharah, Al Khobar 34434, Saudi Arabia");

export const whatsappUrl = `https://wa.me/${company.whatsapp}`;

export const yearsOfExperience = () => new Date().getFullYear() - company.founded;

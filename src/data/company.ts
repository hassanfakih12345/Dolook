export const company = {
  name: "DOLOOK",
  founded: 2001,
  team: 63,
  ceo: { ar: "علي أحمد اليحيى", en: "Ali Ahmed Al Yahya" },
  address: {
    ar: "طريق الملك فهد بن عبدالعزيز، الدمام، المملكة العربية السعودية",
    en: "King Fahd Bin Abdulaziz Road, Dammam, Kingdom of Saudi Arabia",
  },
  email: "info@dolook.sa",
  phone: "+966 13 805 4006",
  phoneHref: "tel:+966138054006",
  whatsapp: "966570889950",
  whatsappDisplay: "+966 57 088 9950",
  cr: "2050038756",
  vat: "311614310700003",
};

/** Public site address — used for the sitemap, canonical URLs and social previews. */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://dolook.sa").replace(/\/$/, "");

export const whatsappUrl = `https://wa.me/${company.whatsapp}`;

export const yearsOfExperience = () => new Date().getFullYear() - company.founded;

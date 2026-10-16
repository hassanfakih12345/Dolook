import type { Localized } from "@/lib/i18n/config";

export type Certificate = {
  slug: string;
  title: Localized;
  issuer: Localized;
  /** Official PDF in public/certificates (metadata cleaned before publishing). */
  file: string;
  /** First-page preview rendered from the PDF. */
  preview: string;
};

export const certificates: Certificate[] = [
  {
    slug: "commercial-registration",
    title: { ar: "السجل التجاري", en: "Commercial Registration" },
    issuer: { ar: "وزارة التجارة", en: "Ministry of Commerce" },
    file: "/certificates/commercial-registration.pdf",
    preview: "/certificates/commercial-registration.jpg",
  },
  {
    slug: "chamber-membership",
    title: { ar: "عضوية الغرفة التجارية", en: "Chamber of Commerce Membership" },
    issuer: { ar: "غرفة الشرقية", en: "Asharqia Chamber" },
    file: "/certificates/chamber-membership.pdf",
    preview: "/certificates/chamber-membership.jpg",
  },
  {
    slug: "national-address",
    title: { ar: "العنوان الوطني", en: "National Address" },
    issuer: { ar: "سبل — البريد السعودي", en: "SPL — Saudi Post" },
    file: "/certificates/national-address.pdf",
    preview: "/certificates/national-address.jpg",
  },
  {
    slug: "zakat",
    title: { ar: "شهادة الزكاة", en: "Zakat Certificate" },
    issuer: { ar: "هيئة الزكاة والضريبة والجمارك", en: "Zakat, Tax and Customs Authority" },
    file: "/certificates/zakat.pdf",
    preview: "/certificates/zakat.jpg",
  },
  {
    slug: "vat",
    title: { ar: "شهادة ضريبة القيمة المضافة", en: "VAT Certificate" },
    issuer: { ar: "هيئة الزكاة والضريبة والجمارك", en: "Zakat, Tax and Customs Authority" },
    file: "/certificates/vat.pdf",
    preview: "/certificates/vat.jpg",
  },
];

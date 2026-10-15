import type { Localized } from "@/lib/i18n/config";

export type Client = {
  slug: string;
  name: Localized;
  logo: string;
};

export const clients: Client[] = [
  {
    slug: "ministry-of-culture",
    name: {
      ar: "وزارة الثقافة",
      en: "Ministry of Culture",
    },
    logo: "/clients/ministry-of-culture.png",
  },
  {
    slug: "sar",
    name: {
      ar: "الخطوط الحديدية السعودية",
      en: "Saudi Arabia Railways",
    },
    logo: "/clients/sar.png",
  },
  {
    slug: "al-mahmal",
    name: {
      ar: "المحمل لخدمات المرافق",
      en: "Al Mahmal Facilities Services",
    },
    logo: "/clients/al-mahmal.png",
  },
  {
    slug: "saudi-irrigation",
    name: {
      ar: "المؤسسة العامة للري",
      en: "Saudi Irrigation Organization",
    },
    logo: "/clients/saudi-irrigation.png",
  },
  {
    slug: "sab",
    name: {
      ar: "البنك الأول",
      en: "SAB",
    },
    logo: "/clients/sab.png",
  },
  {
    slug: "ministry-of-education",
    name: {
      ar: "وزارة التعليم",
      en: "Ministry of Education",
    },
    logo: "/clients/ministry-of-education.png",
  },
  {
    slug: "kps",
    name: {
      ar: "KPS",
      en: "KPS",
    },
    logo: "/clients/kps.png",
  },
  {
    slug: "al-saif",
    name: {
      ar: "مجموعة السيف",
      en: "Al Saif Group",
    },
    logo: "/clients/al-saif.png",
  },
  {
    slug: "aljabr",
    name: {
      ar: "الجبر",
      en: "ALJABR",
    },
    logo: "/clients/aljabr.png",
  },
  {
    slug: "abdul-latif-jameel",
    name: {
      ar: "عبداللطيف جميل للسيارات",
      en: "Abdul Latif Jameel Motors",
    },
    logo: "/clients/abdul-latif-jameel.png",
  },
];

import type { DivisionSlug } from "./divisions";
import type { Localized } from "@/lib/i18n/config";

export type ProjectStatus = "completed" | "ongoing";

export type Project = {
  slug: string;
  name: Localized;
  location: Localized;
  type: Localized;
  /** Built-up area in m², or null when not published. */
  area: number | null;
  status: ProjectStatus;
  division: DivisionSlug;
  image: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "salt-khobar",
    name: {
      ar: "SALT",
      en: "SALT",
    },
    location: {
      ar: "الخبر",
      en: "Al Khobar",
    },
    type: {
      ar: "تشطيبات معمارية",
      en: "Architectural Finishing",
    },
    area: 750,
    status: "completed",
    division: "contracting",
    image: "/projects/salt.png",
    featured: true,
  },
  {
    slug: "fadl-al-yahia-villa",
    name: {
      ar: "فيلا فضل اليحيى",
      en: "Fadl Al Yahya Villa",
    },
    location: {
      ar: "الدمام",
      en: "Dammam",
    },
    type: {
      ar: "إنشاء كامل",
      en: "Total Construction",
    },
    area: 300,
    status: "completed",
    division: "contracting",
    image: "/projects/fadl-villa.png",
    featured: true,
  },
  {
    slug: "808-square",
    name: {
      ar: "مجمع 808 سكوير التجاري",
      en: "808 Square Strip Mall",
    },
    location: {
      ar: "الواجهة البحرية — الدمام",
      en: "Dammam Seafront",
    },
    type: {
      ar: "تشطيبات معمارية",
      en: "Architectural Finishing",
    },
    area: 3000,
    status: "completed",
    division: "aluminum-facades",
    image: "/projects/808-square.png",
    featured: true,
  },
  {
    slug: "al-hasan-commercial",
    name: {
      ar: "مركز الحسن التجاري",
      en: "Al Hasan Commercial Center",
    },
    location: {
      ar: "الدمام",
      en: "Dammam",
    },
    type: {
      ar: "أعمال مدنية",
      en: "Civil Works",
    },
    area: null,
    status: "completed",
    division: "contracting",
    image: "/projects/al-hasan.png",
  },
  {
    slug: "snb-branch-69",
    name: {
      ar: "البنك الأهلي — فرع 69",
      en: "SNB Branch 69",
    },
    location: {
      ar: "الدمام",
      en: "Dammam",
    },
    type: {
      ar: "أعمال كهروميكانيكية وتشطيبات",
      en: "MEP & Architectural Finishing",
    },
    area: null,
    status: "completed",
    division: "contracting",
    image: "/projects/snb-69.png",
    featured: true,
  },
  {
    slug: "snb-branch-41",
    name: {
      ar: "البنك الأهلي — فرع 41",
      en: "SNB Branch 41",
    },
    location: {
      ar: "القطيف",
      en: "Al Qatif",
    },
    type: {
      ar: "أعمال كهروميكانيكية وتشطيبات",
      en: "MEP & Architectural Finishing",
    },
    area: null,
    status: "completed",
    division: "contracting",
    image: "/projects/snb-41.png",
  },
  {
    slug: "ibrahim-villa",
    name: {
      ar: "فيلا إبراهيم الإبراهيم",
      en: "Ibrahim Al-Ibrahim Villa",
    },
    location: {
      ar: "الدمام",
      en: "Dammam",
    },
    type: {
      ar: "إنشاء كامل",
      en: "Total Construction",
    },
    area: 600,
    status: "completed",
    division: "contracting",
    image: "/projects/ibrahim-villa.png",
  },
  {
    slug: "azizia-pool",
    name: {
      ar: "مسبح العزيزية — الخبر",
      en: "Al Aziziyah Pool",
    },
    location: {
      ar: "الخبر",
      en: "Al Khobar",
    },
    type: {
      ar: "أعمال مسابح",
      en: "Swimming Pool Works",
    },
    area: 250,
    status: "completed",
    division: "contracting",
    image: "/projects/azizia-pool.png",
  },
  {
    slug: "erb-fitout",
    name: {
      ar: "تجهيزات ERB الداخلية",
      en: "ERB Fit-out",
    },
    location: {
      ar: "الخبر",
      en: "Al Khobar",
    },
    type: {
      ar: "تشطيبات معمارية",
      en: "Architectural Finishing",
    },
    area: 4000,
    status: "completed",
    division: "contracting",
    image: "/projects/erb-fitout.png",
    featured: true,
  },
  {
    slug: "moc-theatre",
    name: {
      ar: "مسرح وزارة الثقافة — الخبر",
      en: "Ministry of Culture Theatre — Al Khobar",
    },
    location: {
      ar: "الخبر",
      en: "Al Khobar",
    },
    type: {
      ar: "تشطيبات معمارية",
      en: "Architectural Finishing",
    },
    area: 350,
    status: "completed",
    division: "contracting",
    image: "/projects/moc-theatre.png",
  },
  {
    slug: "biryanak",
    name: {
      ar: "بريانك",
      en: "Biryanak",
    },
    location: {
      ar: "الخبر",
      en: "Al Khobar",
    },
    type: {
      ar: "إنشاء كامل",
      en: "Total Construction",
    },
    area: 40,
    status: "completed",
    division: "contracting",
    image: "/projects/biryanak.png",
  },
  {
    slug: "sipchem-training",
    name: {
      ar: "مركز تدريب سبكيم",
      en: "Sipchem Training Center",
    },
    location: {
      ar: "الخبر",
      en: "Al Khobar",
    },
    type: {
      ar: "أسقف زجاجية (Skylight) وتشطيبات",
      en: "Skylight & Architectural Finishing",
    },
    area: 1500,
    status: "completed",
    division: "aluminum-facades",
    image: "/projects/sipchem.png",
    featured: true,
  },
  {
    slug: "bassam-factory",
    name: {
      ar: "مصنع البسام لإعادة تدوير الورق",
      en: "Al Bassam Paper Recycling Factory",
    },
    location: {
      ar: "المدينة الصناعية الثانية — الدمام",
      en: "2nd Industrial City — Dammam",
    },
    type: {
      ar: "إنشاء كامل",
      en: "Total Construction",
    },
    area: 875,
    status: "ongoing",
    division: "steel-buildings",
    image: "/projects/bassam-factory.png",
    featured: true,
  },
  {
    slug: "kawthar-villa",
    name: {
      ar: "فيلا الكوثر",
      en: "Al Kawthar Villa",
    },
    location: {
      ar: "الدمام",
      en: "Dammam",
    },
    type: {
      ar: "إنشاء كامل",
      en: "Total Construction",
    },
    area: 350,
    status: "ongoing",
    division: "contracting",
    image: "/projects/kawthar-villa.png",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function formatArea(area: number | null, locale: "ar" | "en") {
  if (area === null) return null;
  return `${area.toLocaleString("en-US")} ${locale === "ar" ? "م²" : "m²"}`;
}

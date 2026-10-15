import type { DivisionSlug } from "./divisions";
import type { Localized } from "@/lib/i18n/config";

export type ProjectStatus = "completed" | "ongoing";

export type Project = {
  slug: string;
  name: Localized;
  location: Localized;
  type: Localized;
  area: string | null;
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
    area: "750 m²",
    status: "completed",
    division: "contracting",
    image: "/projects/salt.png",
    featured: true,
  },
  {
    slug: "fadl-al-yahia-villa",
    name: {
      ar: "فيلا فضل اليحيى",
      en: "Fadl Al-Yahia Villa",
    },
    location: {
      ar: "الدمام",
      en: "Dammam",
    },
    type: {
      ar: "إنشاء كامل",
      en: "Total Construction",
    },
    area: "300 m²",
    status: "completed",
    division: "contracting",
    image: "/projects/fadl-villa.png",
    featured: true,
  },
  {
    slug: "808-square",
    name: {
      ar: "808 Square Strip Mall",
      en: "808 Square Strip Mall",
    },
    location: {
      ar: "واجهة الدمام",
      en: "Dammam Seafront",
    },
    type: {
      ar: "تشطيبات معمارية",
      en: "Architectural Finishing",
    },
    area: "3000 m²",
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
      ar: "MEP وتشطيبات",
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
      en: "Al-Qateef",
    },
    type: {
      ar: "MEP وتشطيبات",
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
      en: "Villa Mr. Ibrahim Al-Ibrahim",
    },
    location: {
      ar: "الدمام",
      en: "Dammam",
    },
    type: {
      ar: "إنشاء كامل",
      en: "Total Construction",
    },
    area: "600 m²",
    status: "completed",
    division: "contracting",
    image: "/projects/ibrahim-villa.png",
  },
  {
    slug: "azizia-pool",
    name: {
      ar: "مسبح العزيزية",
      en: "Al Azizia Khobar Pool",
    },
    location: {
      ar: "الخبر",
      en: "Al Khobar",
    },
    type: {
      ar: "أعمال مسابح",
      en: "Swimming Pool Works",
    },
    area: "250 m²",
    status: "completed",
    division: "contracting",
    image: "/projects/azizia-pool.png",
  },
  {
    slug: "erb-fitout",
    name: {
      ar: "ERB Fitout",
      en: "ERB Fitout",
    },
    location: {
      ar: "الخبر",
      en: "Al Khobar",
    },
    type: {
      ar: "تشطيبات معمارية",
      en: "Architectural Finishing",
    },
    area: "4000 m²",
    status: "completed",
    division: "contracting",
    image: "/projects/erb-fitout.png",
    featured: true,
  },
  {
    slug: "moc-theatre",
    name: {
      ar: "مسرح وزارة الثقافة — الخبر",
      en: "MOC Khobar Theatre",
    },
    location: {
      ar: "الخبر",
      en: "Al Khobar",
    },
    type: {
      ar: "تشطيبات معمارية",
      en: "Architectural Finishing",
    },
    area: "350 m²",
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
      en: "Complete Construction",
    },
    area: "40 m²",
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
      ar: "سكاي لايت وتشطيبات",
      en: "Skylight & Architectural Finishing",
    },
    area: "1500 m²",
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
      ar: "المدينة الصناعية الثانية — الظهران",
      en: "2nd Industrial City — Dhahran",
    },
    type: {
      ar: "إنشاء كامل",
      en: "Total Construction Works",
    },
    area: "875 m²",
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
      en: "Total Construction Works",
    },
    area: "350 m²",
    status: "ongoing",
    division: "contracting",
    image: "/projects/kawthar-villa.png",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

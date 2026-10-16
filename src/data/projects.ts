import type { DivisionSlug } from "./divisions";
import type { Localized } from "@/lib/i18n/config";

export type ProjectStatus = "completed" | "ongoing" | "design";

export const projectStatuses: ProjectStatus[] = ["completed", "ongoing", "design"];

export type ProjectImage = { src: string; caption: Localized };

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
  /** Optional detail-page content, used by projects that have a full presentation. */
  summary?: Localized;
  gallery?: ProjectImage[];
  drawings?: ProjectImage[];
  spaces?: { name: Localized; area: number }[];
};

export const projects: Project[] = [
  {
    slug: "office-interior-design",
    name: {
      ar: "التصميم الداخلي لمكاتب إدارية",
      en: "Corporate Office Interior",
    },
    location: {
      ar: "المملكة العربية السعودية",
      en: "Saudi Arabia",
    },
    type: {
      ar: "تصميم داخلي وتجهيزات مكتبية",
      en: "Interior Design & Fit-out",
    },
    area: 233,
    status: "design",
    division: "contracting",
    image: "/projects/office-interior/open-work-2.jpg",
    featured: true,
    summary: {
      ar: "تصميم داخلي متكامل لطابق مكاتب إدارية بمساحة 233 م²: قلب منحنٍ بفواصل زجاجية يلتف حول مساحة عمل مفتوحة، ويضم ثمانية مكاتب خاصة ومكتباً للمدير ومركز اتصال وبوفيه واستراحة للموظفات ودورات مياه. أعمدة مكسوّة بخشب الجوز، وزجاج مصنفر، وأرضيات بملمس الحجر، وإضاءة خطية متصلة تمنح المكان طابعاً هادئاً وراقياً.",
      en: "A complete interior design for a 233 m² corporate office floor: a curved, glass-partitioned core wraps around an open workspace, with eight private offices, a manager office, a call center, a pantry, a women's break room and washrooms. Walnut-clad columns, frosted glass, stone-look flooring and continuous linear lighting give the floor a calm, premium character.",
    },
    gallery: [
      { src: "/projects/office-interior/open-work-2.jpg", caption: { ar: "مساحة العمل المفتوحة", en: "Open workspace" } },
      { src: "/projects/office-interior/open-work-1.jpg", caption: { ar: "مساحة العمل المفتوحة والمكاتب الزجاجية", en: "Open workspace and glass-partitioned offices" } },
      { src: "/projects/office-interior/open-work-3.jpg", caption: { ar: "الممر المنحني والإضاءة الخطية", en: "Curved corridor and linear lighting" } },
      { src: "/projects/office-interior/manager-office.jpg", caption: { ar: "مكتب المدير", en: "Manager office" } },
      { src: "/projects/office-interior/office-2.jpg", caption: { ar: "المكتب 2", en: "Office 2" } },
      { src: "/projects/office-interior/office-3.jpg", caption: { ar: "المكتب 3", en: "Office 3" } },
      { src: "/projects/office-interior/office-5.jpg", caption: { ar: "المكتب 5", en: "Office 5" } },
      { src: "/projects/office-interior/office-8-1.jpg", caption: { ar: "المكتب 8", en: "Office 8" } },
      { src: "/projects/office-interior/office-8-2.jpg", caption: { ar: "المكتب 8", en: "Office 8" } },
      { src: "/projects/office-interior/workstations.jpg", caption: { ar: "محطات العمل", en: "Workstations" } },
      { src: "/projects/office-interior/pantry.jpg", caption: { ar: "البوفيه", en: "Pantry" } },
    ],
    drawings: [
      { src: "/projects/office-interior/plan.png", caption: { ar: "المخطط الأفقي", en: "Floor plan" } },
      { src: "/projects/office-interior/axonometric.png", caption: { ar: "المنظور المحوري", en: "Axonometric view" } },
    ],
    spaces: [
      { name: { ar: "مكتب المدير", en: "Manager office" }, area: 19.62 },
      { name: { ar: "المكتب 1", en: "Office 1" }, area: 19.62 },
      { name: { ar: "المكتب 2", en: "Office 2" }, area: 14.62 },
      { name: { ar: "المكتب 3", en: "Office 3" }, area: 12.9 },
      { name: { ar: "المكتب 4", en: "Office 4" }, area: 14.62 },
      { name: { ar: "المكتب 5", en: "Office 5" }, area: 13.44 },
      { name: { ar: "المكتب 6", en: "Office 6" }, area: 15.79 },
      { name: { ar: "مركز الاتصال", en: "Call center" }, area: 14.77 },
      { name: { ar: "المكتب 8", en: "Office 8" }, area: 11.63 },
      { name: { ar: "البوفيه ومساحة العمل المفتوحة", en: "Pantry & open workspace" }, area: 16.73 },
      { name: { ar: "استراحة الموظفات", en: "Women break room" }, area: 5 },
    ],
  },
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

import type { Localized } from "@/lib/i18n/config";

export type DivisionSlug =
  | "contracting"
  | "maintenance"
  | "steel-buildings"
  | "aluminum-facades";

export type Division = {
  slug: DivisionSlug;
  number: string;
  title: Localized;
  summary: Localized;
  scope: { ar: string[]; en: string[] };
  imageHint: string;
};

export const divisions: Division[] = [
  {
    slug: "contracting",
    number: "01",
    title: {
      ar: "قسم المقاولات",
      en: "Contracting Division",
    },
    summary: {
      ar: "تنفيذ مشاريع الإنشاء والتشييد من التخطيط إلى التسليم بجودة عالية والتزام بالمواعيد.",
      en: "End-to-end construction delivery — from planning to handover — with quality and schedule discipline.",
    },
    scope: {
      ar: [
        "مقاولات عامة وإنشاء كامل",
        "أعمال مدنية وهياكل",
        "تشطيبات معمارية وFit-out",
        "إدارة تنفيذ المشاريع",
      ],
      en: [
        "General contracting & full construction",
        "Civil works & structures",
        "Architectural finishing & fit-out",
        "Project execution management",
      ],
    },
    imageHint: "/projects/fadl-villa.png",
  },
  {
    slug: "maintenance",
    number: "02",
    title: {
      ar: "قسم الصيانة والتشغيل",
      en: "Maintenance & Operation",
    },
    summary: {
      ar: "استمرارية الأصول بعد التسليم عبر صيانة دورية وتشغيل موثوق للمنشآت والمرافق.",
      en: "Asset continuity after handover through preventive maintenance and reliable facility operation.",
    },
    scope: {
      ar: [
        "صيانة دورية ووقائية",
        "تشغيل أنظمة المباني",
        "عقود صيانة طويلة الأمد",
        "استجابة أعطال وصيانة تصحيحية",
      ],
      en: [
        "Preventive & scheduled maintenance",
        "Building systems operation",
        "Long-term AMC contracts",
        "Corrective maintenance response",
      ],
    },
    imageHint: "/projects/sipchem.png",
  },
  {
    slug: "steel-buildings",
    number: "03",
    title: {
      ar: "قسم المباني الحديدية",
      en: "Steel Buildings Division",
    },
    summary: {
      ar: "تصميم وتنفيذ المنشآت والهياكل الحديدية للمصانع والمستودعات والهنجر الصناعية.",
      en: "Design and build of steel structures for factories, warehouses, and industrial hangars.",
    },
    scope: {
      ar: [
        "هناجر ومبانٍ صناعية حديدية",
        "هياكل فولاذية للمصانع والمستودعات",
        "تصنيع وتركيب الهياكل المعدنية",
        "توسعات صناعية",
      ],
      en: [
        "Industrial steel hangars & buildings",
        "Steel frames for factories & warehouses",
        "Fabrication & erection",
        "Industrial expansions",
      ],
    },
    imageHint: "/projects/bassam-factory.png",
  },
  {
    slug: "aluminum-facades",
    number: "04",
    title: {
      ar: "قسم أعمال واجهات الألمنيوم",
      en: "Aluminum Facade Works",
    },
    summary: {
      ar: "تنفيذ واجهات الألمنيوم والزجاج والأنظمة المعمارية الخارجية للمباني التجارية والمؤسسية.",
      en: "Aluminum and glass facade systems for commercial and institutional buildings.",
    },
    scope: {
      ar: [
        "واجهات Curtain Wall",
        "نوافذ وأبواب ألمنيوم",
        "كلادينج واجهات",
        "أنظمة زجاجية معمارية",
      ],
      en: [
        "Curtain wall systems",
        "Aluminum windows & doors",
        "Facade cladding",
        "Architectural glazing systems",
      ],
    },
    imageHint: "/projects/808-square.png",
  },
];

export function getDivision(slug: string) {
  return divisions.find((d) => d.slug === slug);
}

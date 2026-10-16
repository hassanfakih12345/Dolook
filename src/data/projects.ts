import type { DivisionSlug } from "./divisions";
import type { Localized } from "@/lib/i18n/config";

export type ProjectStatus = "completed" | "ongoing" | "design";

export const projectStatuses: ProjectStatus[] = ["completed", "ongoing", "design"];

export type ProjectImage = { src: string; caption: Localized };

export type Project = {
  slug: string;
  name: Localized;
  /** City / site; omitted when not published. */
  location?: Localized;
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
    slug: "rch-al-khobar",
    name: { ar: "مكاتب RCH — الخبر", en: "RCH Offices — Al Khobar" },
    location: { ar: "الخبر", en: "Al Khobar" },
    type: { ar: "تجهيزات داخلية وتشطيبات مكتبية", en: "Office Fit-out & Finishing" },
    area: null,
    status: "completed",
    division: "contracting",
    image: "/projects/rch-al-khobar/01.jpg",
    featured: true,
    summary: {
      ar: "تنفيذ التجهيزات الداخلية الكاملة لمكاتب RCH في الخبر: أسقف جبسية، فواصل وأبواب زجاجية للمكاتب وقاعة الاجتماعات، تكسيات جدارية خشبية وزخرفية، أرضيات موكيت، إضاءة خطية، ومنطقة استراحة وبوفيه مجهّزة.",
      en: "Complete office fit-out for RCH in Al Khobar: gypsum ceilings, glass partitions and doors for the offices and meeting room, timber and decorative wall cladding, carpet flooring, linear lighting, and a fully equipped lounge and pantry.",
    },
    gallery: [
      { src: "/projects/rch-al-khobar/01.jpg", caption: { ar: "منطقة الاستراحة والبوفيه", en: "Lounge and pantry" } },
      { src: "/projects/rch-al-khobar/02.jpg", caption: { ar: "قاعة الاجتماعات", en: "Meeting room" } },
      { src: "/projects/rch-al-khobar/03.jpg", caption: { ar: "مكاتب بفواصل زجاجية", en: "Glass-partitioned offices" } },
      { src: "/projects/rch-al-khobar/04.jpg", caption: { ar: "منطقة الجلوس المفتوحة", en: "Open seating area" } },
      { src: "/projects/rch-al-khobar/05.jpg", caption: { ar: "ممر المكاتب", en: "Office corridor" } },
      { src: "/projects/rch-al-khobar/06.jpg", caption: { ar: "ركن الاجتماعات غير الرسمية", en: "Informal meeting corner" } },
      { src: "/projects/rch-al-khobar/07.jpg", caption: { ar: "المكاتب الخاصة", en: "Private offices" } },
      { src: "/projects/rch-al-khobar/08.jpg", caption: { ar: "منطقة الانتظار", en: "Waiting area" } },
      { src: "/projects/rch-al-khobar/09.jpg", caption: { ar: "الممر الرئيسي", en: "Main corridor" } },
      { src: "/projects/rch-al-khobar/10.jpg", caption: { ar: "أثناء التنفيذ: الفواصل الزجاجية والأسقف", en: "During works: glass partitions and ceilings" } },
      { src: "/projects/rch-al-khobar/11.jpg", caption: { ar: "أثناء التنفيذ: تشطيب الأسقف الجبسية", en: "During works: gypsum ceiling finishing" } },
    ],
  },
  {
    slug: "akt-head-office",
    name: { ar: "المقر الرئيسي لشركة AKT", en: "AKT Head Office" },
    type: { ar: "هيكل حديدي وأعمال إنشاء", en: "Steel Structure & Building Works" },
    area: null,
    status: "ongoing",
    division: "steel-buildings",
    image: "/projects/akt-head-office/01.jpg",
    featured: true,
    summary: {
      ar: "إنشاء المقر الرئيسي لشركة AKT بهيكل حديدي متعدد الطوابق، يشمل تصنيع وتركيب الأعمدة والجسور الفولاذية وصولاً إلى مبنى إداري بواجهات حجرية وزجاجية وفق التصميم المعتمد.",
      en: "Construction of the AKT head office on a multi-storey steel frame — fabrication and erection of steel columns and beams, leading to an office building with stone and glass facades as per the approved design.",
    },
    gallery: [
      { src: "/projects/akt-head-office/01.jpg", caption: { ar: "التصميم المعتمد للمبنى", en: "Approved building design" } },
      { src: "/projects/akt-head-office/02.jpg", caption: { ar: "تركيب الهيكل الحديدي", en: "Steel structure erection" } },
      { src: "/projects/akt-head-office/03.jpg", caption: { ar: "تركيب الأعمدة الفولاذية", en: "Steel column erection" } },
    ],
  },
  {
    slug: "bassam-petroleum",
    name: { ar: "شركة صالح ومساعد محمد البسام للمعدات البترولية", en: "Salah & Musaed M. Al-Bassam Petroleum Equipment Co." },
    type: { ar: "مستودع حديدي وإنشاء كامل", en: "Steel Warehouse & Total Construction" },
    area: null,
    status: "completed",
    division: "steel-buildings",
    image: "/projects/bassam-petroleum/01.jpg",
    featured: true,
    summary: {
      ar: "إنشاء منشأة صناعية متكاملة لشركة صالح ومساعد محمد البسام للمعدات البترولية: مستودع بهيكل حديدي وألواح معزولة، مبنى إداري، أسوار وبوابات، وأرضيات صناعية مع حفرة صيانة.",
      en: "A complete industrial facility for Salah & Musaed M. Al-Bassam Petroleum Equipment Co.: an insulated-panel steel warehouse, an office block, boundary walls and gates, and industrial flooring with a service pit.",
    },
    gallery: [
      { src: "/projects/bassam-petroleum/01.jpg", caption: { ar: "المنشأة بعد التسليم", en: "Completed facility" } },
      { src: "/projects/bassam-petroleum/02.jpg", caption: { ar: "المستودع من الداخل", en: "Warehouse interior" } },
    ],
  },
  {
    slug: "the-wash-club",
    name: { ar: "ذا واش كلوب", en: "The Wash Club" },
    type: { ar: "تجهيز وتشطيب داخلي", en: "Fit-out & Finishing" },
    area: null,
    status: "completed",
    division: "contracting",
    image: "/projects/the-wash-club/01.jpg",
    featured: true,
    summary: {
      ar: "تجهيز وتشطيب مركز ذا واش كلوب للعناية بالسيارات: تكسيات جدارية بالبورسلان، أرضيات مقاومة بخطوط إرشادية، سقف معلّق بإضاءة سداسية، ميزانين لعرض المنتجات، وتمديدات المياه والكهرباء لمحطات الغسيل.",
      en: "Fit-out of The Wash Club car-care studio: porcelain wall cladding, resin flooring with lane markings, a suspended ceiling with hexagon lighting, a product-display mezzanine, and water and power runs for the wash stations.",
    },
    gallery: [
      { src: "/projects/the-wash-club/01.jpg", caption: { ar: "صالة الخدمة", en: "Service bay" } },
      { src: "/projects/the-wash-club/02.jpg", caption: { ar: "السقف والإضاءة السداسية", en: "Ceiling and hexagon lighting" } },
      { src: "/projects/the-wash-club/03.jpg", caption: { ar: "محطة الغسيل", en: "Wash station" } },
    ],
  },
  {
    slug: "akt-car-showroom",
    name: { ar: "معرض سيارات AKT", en: "AKT Car Showroom" },
    type: { ar: "إنشاء وتجهيز معرض سيارات", en: "Showroom Construction & Fit-out" },
    area: null,
    status: "ongoing",
    division: "contracting",
    image: "/projects/akt-car-showroom/01.jpg",
    summary: {
      ar: "تحويل مبنى تجاري إلى معرض سيارات لشركة AKT: ميزانين بسقف حديدي وخرساني، واجهات زجاجية، أعمال تكييف وكهرباء، أسقف وجدران جبسية، عزل مائي، وتركيب مصعد.",
      en: "Conversion of a commercial building into a car showroom for AKT: a steel-deck mezzanine, glazed facades, HVAC and electrical works, gypsum ceilings and partitions, waterproofing, and elevator installation.",
    },
    gallery: [
      { src: "/projects/akt-car-showroom/01.jpg", caption: { ar: "واجهة المعرض", en: "Showroom frontage" } },
      { src: "/projects/akt-car-showroom/02.jpg", caption: { ar: "واجهة المعرض من الزاوية", en: "Showroom corner elevation" } },
      { src: "/projects/akt-car-showroom/03.jpg", caption: { ar: "صالة العرض: أعمال التكييف والكهرباء", en: "Showroom hall: HVAC and electrical works" } },
      { src: "/projects/akt-car-showroom/04.jpg", caption: { ar: "سقف الميزانين الحديدي", en: "Mezzanine steel-deck slab" } },
      { src: "/projects/akt-car-showroom/05.jpg", caption: { ar: "الميزانين والواجهة الزجاجية", en: "Mezzanine and glazed facade" } },
      { src: "/projects/akt-car-showroom/06.jpg", caption: { ar: "أعمال الجبس للميزانين", en: "Mezzanine gypsum works" } },
      { src: "/projects/akt-car-showroom/07.jpg", caption: { ar: "تركيب المصعد", en: "Elevator installation" } },
      { src: "/projects/akt-car-showroom/08.jpg", caption: { ar: "أعمال العزل المائي", en: "Waterproofing works" } },
      { src: "/projects/akt-car-showroom/09.jpg", caption: { ar: "تشطيب أسقف الطابق العلوي", en: "Upper-floor ceiling finishing" } },
      { src: "/projects/akt-car-showroom/10.jpg", caption: { ar: "ممر المكاتب أثناء التنفيذ", en: "Office corridor during works" } },
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

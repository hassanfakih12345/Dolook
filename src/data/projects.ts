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
    image: "/projects/salt-khobar/cover.jpg",
    summary: {
      ar: "أعمال التشطيبات المعمارية لمشروع SALT في الخبر بمساحة مبنية 750 م²، شملت الواجهة الخارجية بالحجر والألمنيوم والمساحات الداخلية.",
      en: "Architectural finishing works for SALT in Al Khobar over a 750 m² built-up area, covering the stone and aluminum frontage and the interior spaces.",
    },
    gallery: [
      { src: "/projects/salt-khobar/01.jpg", caption: { ar: "واجهة مشروع SALT", en: "SALT frontage" } },
    ],
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
    image: "/projects/fadl-al-yahia-villa/01.jpg",
    summary: {
      ar: "إنشاء كامل لفيلا سكنية في الدمام بمساحة مبنية 300 م²، من الهيكل الإنشائي حتى التشطيبات النهائية والواجهات.",
      en: "Total construction of a private villa in Dammam with a 300 m² built-up area, from structure through to final finishes and facades.",
    },
    gallery: [
      { src: "/projects/fadl-al-yahia-villa/01.jpg", caption: { ar: "واجهة الفيلا", en: "Villa elevation" } },
    ],
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
    image: "/projects/808-square/01.jpg",
    summary: {
      ar: "أعمال التشطيبات المعمارية وواجهات الألمنيوم لمجمع 808 سكوير التجاري على الواجهة البحرية بالدمام، بمساحة مبنية 3,000 م².",
      en: "Architectural finishing and aluminum facade works for the 808 Square strip mall on the Dammam seafront, with a 3,000 m² built-up area.",
    },
    gallery: [
      { src: "/projects/808-square/01.jpg", caption: { ar: "مجمع 808 سكوير التجاري", en: "808 Square strip mall" } },
    ],
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
    image: "/projects/al-hasan-commercial/01.jpg",
    summary: {
      ar: "الأعمال المدنية والهيكل الخرساني لمركز الحسن التجاري في الدمام، مبنى تجاري متعدد الطوابق.",
      en: "Civil works and the concrete structure for Al Hasan Commercial Center in Dammam, a multi-storey commercial building.",
    },
    gallery: [
      { src: "/projects/al-hasan-commercial/01.jpg", caption: { ar: "الهيكل الخرساني للمبنى", en: "Concrete structure" } },
    ],
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
    image: "/projects/snb-branch-69/01.jpg",
    summary: {
      ar: "أعمال كهروميكانيكية وتشطيبات معمارية لفرع البنك الأهلي السعودي رقم 69 في الدمام.",
      en: "MEP and architectural finishing works for Saudi National Bank branch 69 in Dammam.",
    },
    gallery: [
      { src: "/projects/snb-branch-69/01.jpg", caption: { ar: "واجهة الفرع", en: "Branch frontage" } },
    ],
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
    image: "/projects/snb-branch-41/01.jpg",
    summary: {
      ar: "أعمال كهروميكانيكية وتشطيبات معمارية لفرع البنك الأهلي السعودي رقم 41 في القطيف.",
      en: "MEP and architectural finishing works for Saudi National Bank branch 41 in Al Qatif.",
    },
    gallery: [
      { src: "/projects/snb-branch-41/01.jpg", caption: { ar: "الفرع بعد التسليم", en: "Completed branch" } },
    ],
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
    image: "/projects/ibrahim-villa/01.jpg",
    summary: {
      ar: "إنشاء كامل لفيلا سكنية في الدمام بمساحة مبنية 600 م²، تشمل الهيكل والتشطيبات والواجهات الحديثة.",
      en: "Total construction of a private villa in Dammam with a 600 m² built-up area, including structure, finishes and modern facades.",
    },
    gallery: [
      { src: "/projects/ibrahim-villa/01.jpg", caption: { ar: "واجهة الفيلا", en: "Villa elevation" } },
    ],
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
    image: "/projects/azizia-pool/01.jpg",
    summary: {
      ar: "تنفيذ مسبح بمساحة 250 م² في العزيزية بالخبر، يشمل الأعمال الإنشائية والعزل والتكسيات والنوافير.",
      en: "A 250 m² swimming pool in Al Aziziyah, Al Khobar — structure, waterproofing, cladding and water features.",
    },
    gallery: [
      { src: "/projects/azizia-pool/01.jpg", caption: { ar: "المسبح بعد التسليم", en: "Completed pool" } },
    ],
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
    image: "/projects/erb-fitout/01.jpg",
    summary: {
      ar: "تجهيزات داخلية وتشطيبات معمارية لمكاتب ERB في الخبر بمساحة 4,000 م²، تشمل الأسقف المعلّقة والفواصل الزجاجية والأرضيات.",
      en: "Office fit-out and architectural finishing for ERB in Al Khobar over 4,000 m², including suspended ceilings, glass partitions and flooring.",
    },
    gallery: [
      { src: "/projects/erb-fitout/01.jpg", caption: { ar: "المكاتب بعد التجهيز", en: "Fitted-out offices" } },
    ],
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
    image: "/projects/moc-theatre/01.jpg",
    summary: {
      ar: "تشطيبات معمارية لمسرح وزارة الثقافة في الخبر بمساحة 350 م²، تشمل المسرح والتكسيات الخشبية والصوتية ومقاعد الجمهور.",
      en: "Architectural finishing for the Ministry of Culture theatre in Al Khobar (350 m²): the stage, timber and acoustic cladding, and audience seating.",
    },
    gallery: [
      { src: "/projects/moc-theatre/01.jpg", caption: { ar: "المسرح بعد التجهيز", en: "Completed theatre" } },
    ],
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
    image: "/projects/biryanak/01.jpg",
    summary: {
      ar: "إنشاء وتجهيز كامل لمطعم بريانك في الخبر بمساحة 40 م²، من الأعمال الإنشائية حتى الديكور والكاونتر.",
      en: "Complete build-out of the Biryanak restaurant in Al Khobar (40 m²), from construction works to the interior design and service counter.",
    },
    gallery: [
      { src: "/projects/biryanak/01.jpg", caption: { ar: "كاونتر الطلبات", en: "Order counter" } },
      { src: "/projects/biryanak/02.jpg", caption: { ar: "صالة الطعام", en: "Dining area" } },
    ],
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
    image: "/projects/sipchem-training/01.jpg",
    summary: {
      ar: "تنفيذ السقف الزجاجي (Skylight) والتشطيبات المعمارية لمركز تدريب سبكيم في الخبر بمساحة 1,500 م².",
      en: "Skylight and architectural finishing works for the Sipchem Training Center in Al Khobar over 1,500 m².",
    },
    gallery: [
      { src: "/projects/sipchem-training/01.jpg", caption: { ar: "السقف الزجاجي (Skylight)", en: "Skylight" } },
      { src: "/projects/sipchem-training/02.jpg", caption: { ar: "فريق العمل في الموقع", en: "Site team" } },
    ],
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
    image: "/projects/bassam-factory/01.jpg",
    summary: {
      ar: "إنشاء كامل لمصنع البسام لإعادة تدوير الورق في المدينة الصناعية الثانية بالدمام بمساحة 875 م²، بمبانٍ وهناجر حديدية.",
      en: "Total construction of the Al Bassam paper recycling factory in Dammam 2nd Industrial City (875 m²), with steel buildings and hangars.",
    },
    gallery: [
      { src: "/projects/bassam-factory/01.jpg", caption: { ar: "التصميم ثلاثي الأبعاد للمصنع", en: "3D design of the factory" } },
    ],
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
    image: "/projects/kawthar-villa/01.jpg",
    summary: {
      ar: "إنشاء كامل لفيلا الكوثر في الدمام بمساحة مبنية 350 م² — المشروع حالياً في مرحلة الهيكل وأعمال البلوك.",
      en: "Total construction of Al Kawthar Villa in Dammam (350 m² built-up) — currently at the structure and blockwork stage.",
    },
    gallery: [
      { src: "/projects/kawthar-villa/01.jpg", caption: { ar: "أعمال الهيكل والبلوك", en: "Structure and blockwork" } },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function formatArea(area: number | null, locale: "ar" | "en") {
  if (area === null) return null;
  return `${area.toLocaleString("en-US")} ${locale === "ar" ? "م²" : "m²"}`;
}

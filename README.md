# DOLOOK — موقع شركة دولوك للمقاولات

موقع Next.js 16 + Tailwind CSS 4، ثنائي اللغة (عربي `/ar` وإنكليزي `/en`)، بيطلع كنسخة HTML ثابتة جاهزة للرفع على cPanel.

## التشغيل

```bash
npm install
npm run dev        # تطوير: http://localhost:3000/ar
npm run build      # بناء الموقع الثابت داخل مجلد out/
npm run check      # فحص كل الروابط والصور والعناوين بالموقع المبني
npm run typecheck  # فحص أخطاء TypeScript
```

بعد `npm run build`، ارفع **محتوى** مجلد `out/` على `public_html` (التفاصيل في `docs/README-UPLOAD.txt`).

## وين بتعدّل شو

| بدك تعدّل | الملف |
|---|---|
| نصوص الموقع (عناوين، أزرار، فقرات، وصف السيو) | `src/lib/i18n/ar.ts` و `src/lib/i18n/en.ts` |
| المشاريع (`featured: true` = بيظهر بالرئيسية) | `src/data/projects.ts` + الصور بـ `public/projects/` |
| الأقسام (المقاولات، الصيانة...) | `src/data/divisions.ts` |
| العملاء | `src/data/clients.ts` + اللوغوهات بـ `public/clients/` |
| العنوان، الهاتف، الإيميل، واتساب، السجل التجاري، عدد الموظفين | `src/data/company.ts` |
| الألوان | `src/app/globals.css` |

## هيكل المشروع

```
src/app/[locale]/          الصفحات (الرئيسية، about، services، projects، clients، certificates، contact)
src/app/(root)/            صفحة "/" اللي بتحوّل على /ar/
src/app/global-not-found   صفحة 404
src/app/sitemap.ts         sitemap.xml  ·  src/app/robots.ts → robots.txt
src/components/            Header، Footer، ProjectCard، ProjectsFilter، ContactForm، Breadcrumbs...
src/data/                  بيانات المشاريع والأقسام والعملاء والشركة
src/lib/                   الترجمات (i18n)، الخطوط، بيانات السيو (metadata)
scripts/check-site.mjs     فاحص الموقع
public/                    الصور و .htaccess
docs/                      مخطط الموقع، تقرير الفحص، تعليمات الرفع
```

- **مخطط الموقع الكامل والترابط بين الصفحات:** [`docs/SITE-MAP.md`](docs/SITE-MAP.md)
- **تقرير الفحص والإصلاحات:** [`docs/AUDIT-REPORT.md`](docs/AUDIT-REPORT.md)

نموذج التواصل ما بيحتاج سيرفر: بيفتح واتساب برسالة جاهزة فيها كل بيانات الطلب.

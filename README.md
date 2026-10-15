# DOLOOK — موقع شركة دولوك للمقاولات

موقع Next.js 16 + Tailwind CSS 4، ثنائي اللغة (عربي `/ar` وإنكليزي `/en`)، بيطلع كنسخة HTML ثابتة جاهزة للرفع على cPanel.

## التشغيل

```bash
npm install
npm run dev      # تطوير: http://localhost:3000/ar
npm run build    # بناء الموقع الثابت داخل مجلد out/
```

بعد `npm run build`، ارفع **محتوى** مجلد `out/` على `public_html` (التفاصيل في `docs/README-UPLOAD.txt`).

## وين بتعدّل شو

| بدك تعدّل | الملف |
|---|---|
| نصوص الموقع (عناوين، أزرار، فقرات) | `src/lib/i18n/ar.ts` و `src/lib/i18n/en.ts` |
| المشاريع | `src/data/projects.ts` + الصور بـ `public/projects/` |
| الأقسام (المقاولات، الصيانة...) | `src/data/divisions.ts` |
| العملاء | `src/data/clients.ts` + اللوغوهات بـ `public/clients/` |
| العنوان، الهاتف، الإيميل، واتساب، السجل التجاري | `src/data/company.ts` |
| الألوان والخطوط | `src/app/globals.css` و `src/app/layout.tsx` |

## هيكل المشروع

```
src/app/[locale]/          الصفحات (الرئيسية، about، services، projects، clients، certificates، contact)
src/components/            Header، Footer، ProjectCard، ProjectsFilter، ContactForm...
src/data/                  بيانات المشاريع والأقسام والعملاء والشركة
src/lib/i18n/              الترجمات
public/                    الصور و .htaccess
```

نموذج التواصل ما بيحتاج سيرفر: بيفتح واتساب برسالة جاهزة فيها بيانات الطلب.

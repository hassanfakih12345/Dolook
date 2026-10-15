DOLOOK — تعليمات الرفع على cPanel
================================

1) ادخل cPanel → File Manager → افتح مجلد public_html
   (أو مجلد الدومين مثل dolook.sa)

2) ارفع الملف: dolook-cpanel.zip

3) اضغط Extract / فك الضغط داخل public_html
   مهم: محتوى الموقع يكون مباشرة داخل public_html
   (يعني تشوف مجلدات ar و en و ملف .htaccess)

4) احذف ملف zip بعد الفك إذا حابب

5) افتح الموقع:
   https://your-domain.com
   أو https://your-domain.com/ar/

ملاحظات:
- الموقع نسخة ثابتة (HTML) — لا يحتاج Node.js
- لازم تفعيل SSL من cPanel (Let's Encrypt)
- إذا ما اشتغلت الروابط، تأكد أن mod_rewrite مفعّل
  وملف .htaccess موجود في جذر الموقع

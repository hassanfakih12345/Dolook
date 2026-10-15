import type { Metadata } from "next";
import Image from "next/image";
import { ar } from "@/lib/i18n/ar";
import { en } from "@/lib/i18n/en";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 | DOLOOK",
  robots: { index: false },
};

// Served as 404.html (see ErrorDocument in public/.htaccess). The locale is
// unknown here, so the page speaks both languages.
export default function GlobalNotFound() {
  return (
    <html lang="ar" dir="rtl" className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <main className="flex flex-1 flex-col items-center justify-center gap-10 px-4 py-24 text-center">
          <Image src="/brand/logo.png" alt="DOLOOK" width={160} height={49} className="h-12 w-auto" priority />
          <p className="text-7xl font-bold text-dolook">404</p>
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
            {[
              { dict: ar, lang: "ar", dir: "rtl", href: "/ar/" },
              { dict: en, lang: "en", dir: "ltr", href: "/en/" },
            ].map(({ dict, lang, dir, href }) => (
              <div key={lang} lang={lang} dir={dir} className="max-w-xs space-y-3">
                <h1 className="text-2xl font-bold text-dolook-dark">{dict.notFound.title}</h1>
                <p className="text-sm leading-relaxed text-muted">{dict.notFound.body}</p>
                <a
                  href={href}
                  className="inline-flex rounded-md bg-dolook px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-dolook-soft"
                >
                  {dict.notFound.home}
                </a>
              </div>
            ))}
          </div>
        </main>
      </body>
    </html>
  );
}

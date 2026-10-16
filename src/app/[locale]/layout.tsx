import type { Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { fontVariables } from "@/lib/fonts";
import { locales, resolveLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await resolveLocale(params);
  return pageMetadata({ locale, path: "/" });
}

export const viewport: Viewport = {
  themeColor: "#0b1f3a",
  viewportFit: "cover",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale, dict } = await resolveLocale(params);

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-dolook focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          {dict.nav.skip}
        </a>
        <Header locale={locale} dict={dict} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={locale} dict={dict} />
        <WhatsAppButton label={dict.contact.whatsapp} />
      </body>
    </html>
  );
}

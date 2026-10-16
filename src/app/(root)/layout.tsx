import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: "DOLOOK Construction Company",
  robots: { index: false },
};

// Root layout for "/" only — the site itself lives under /ar and /en.
export default function RedirectLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${fontVariables} h-full antialiased`}>
      <head>
        <meta httpEquiv="refresh" content="0; url=/ar/" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}

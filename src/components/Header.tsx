"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/lib/i18n/en";
import type { Locale } from "@/lib/i18n/config";
import { LocaleLink } from "./LocaleLink";

type Props = { locale: Locale; dict: Dictionary };

export function Header({ locale, dict }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? `/${locale}/`;
  const otherLocale: Locale = locale === "ar" ? "en" : "ar";
  const switchHref = pathname.replace(/^\/(ar|en)(?=\/|$)/, `/${otherLocale}`);

  // Path inside the locale, without trailing slash: "/" or "/projects/salt-khobar".
  const current = pathname.replace(/^\/(ar|en)/, "").replace(/\/$/, "") || "/";
  const isActive = (href: string) => (href === "/" ? current === "/" : current === href || current.startsWith(`${href}/`));

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { href: "/", label: dict.nav.home },
    { href: "/about", label: dict.nav.about },
    { href: "/services", label: dict.nav.services },
    { href: "/projects", label: dict.nav.projects },
    { href: "/clients", label: dict.nav.clients },
    { href: "/certificates", label: dict.nav.certificates },
    { href: "/contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <LocaleLink href="/" locale={locale} className="flex shrink-0 items-center gap-2">
          <Image
            src="/brand/logo.png"
            alt={dict.meta.siteName}
            width={160}
            height={49}
            className="h-10 w-auto object-contain"
            priority
          />
        </LocaleLink>

        <nav aria-label={dict.nav.home} className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <LocaleLink
                key={link.href}
                href={link.href}
                locale={locale}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm font-medium transition hover:bg-surface hover:text-dolook-dark ${
                  active ? "bg-surface text-dolook" : "text-muted"
                }`}
              >
                {link.label}
              </LocaleLink>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={switchHref}
            hrefLang={otherLocale}
            lang={otherLocale}
            title={dict.nav.switchLanguage}
            aria-label={dict.nav.switchLanguage}
            className="rounded-md border border-line px-2.5 py-1.5 text-xs font-semibold tracking-wide text-dolook-dark uppercase transition hover:border-dolook/40"
          >
            {otherLocale === "ar" ? "عربي" : "EN"}
          </a>
          <LocaleLink
            href="/contact"
            locale={locale}
            className="hidden rounded-md bg-dolook px-4 py-2 text-sm font-semibold text-white transition hover:bg-dolook-soft sm:inline-flex"
          >
            {dict.nav.quote}
          </LocaleLink>
          <button
            type="button"
            aria-label={open ? dict.nav.closeMenu : dict.nav.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-5 flex-col gap-1.5" aria-hidden>
              <span className={`block h-0.5 w-full bg-dolook-dark transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-full bg-dolook-dark transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-full bg-dolook-dark transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {links.map((link) => (
              <LocaleLink
                key={link.href}
                href={link.href}
                locale={locale}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`border-b border-line/70 py-3 text-base font-medium ${
                  isActive(link.href) ? "text-dolook" : "text-dolook-dark"
                }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </LocaleLink>
            ))}
            <LocaleLink
              href="/contact"
              locale={locale}
              className="mt-4 rounded-md bg-dolook px-4 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {dict.nav.quote}
            </LocaleLink>
          </nav>
        </div>
      )}
    </header>
  );
}

"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, whatsappUrl } from "@/data/company";
import type { Dictionary } from "@/lib/i18n/en";
import type { Locale } from "@/lib/i18n/config";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import { LocaleLink } from "./LocaleLink";
import { Ltr, pad2 } from "./ui";

type Props = { locale: Locale; dict: Dictionary };

const HEADER_H = "h-[72px]";

export function Header({ locale, dict }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname() ?? `/${locale}/`;
  const otherLocale: Locale = locale === "ar" ? "en" : "ar";
  const switchHref = pathname.replace(/^\/(ar|en)(?=\/|$)/, `/${otherLocale}`);

  // Path inside the locale, without trailing slash: "/" or "/projects/salt-khobar".
  const current = pathname.replace(/^\/(ar|en)/, "").replace(/\/$/, "") || "/";
  const isActive = (href: string) => (href === "/" ? current === "/" : current === href || current.startsWith(`${href}/`));
  // On the home page the header floats transparent over the hero photo until the user scrolls.
  const overHero = current === "/";
  const solid = !overHero || scrolled || open;

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
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

  const tone = solid ? "text-muted hover:bg-surface hover:text-dolook-dark" : "text-white/85 hover:bg-white/10 hover:text-white";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          solid ? "border-b border-line/80 bg-white/95 shadow-[0_8px_30px_-20px_rgba(11,31,58,0.35)] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className={`mx-auto flex ${HEADER_H} max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8`}>
          <LocaleLink
            href="/"
            locale={locale}
            className={`flex min-h-11 shrink-0 items-center rounded-md transition ${solid ? "" : "bg-white/95 px-2.5 py-1"}`}
          >
            <Image
              src="/brand/logo.png"
              alt={dict.meta.siteName}
              width={160}
              height={49}
              className="h-9 w-auto object-contain sm:h-10"
              priority
            />
          </LocaleLink>

          <nav aria-label={dict.nav.home} className="hidden items-center gap-0.5 lg:flex">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <LocaleLink
                  key={link.href}
                  href={link.href}
                  locale={locale}
                  aria-current={active ? "page" : undefined}
                  className={`relative inline-flex min-h-11 items-center rounded-md px-2.5 text-sm font-medium transition xl:px-3 ${
                    active ? (solid ? "text-dolook" : "text-white") : tone
                  }`}
                >
                  {link.label}
                  {active && <span className="absolute inset-x-2.5 bottom-1.5 h-0.5 bg-dolook xl:inset-x-3" aria-hidden />}
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
              className={`inline-flex h-11 min-w-11 items-center justify-center rounded-md border px-3 text-xs font-semibold tracking-wide uppercase transition ${
                solid ? "border-line text-dolook-dark hover:border-dolook/40" : "border-white/40 text-white hover:bg-white/10"
              }`}
            >
              {otherLocale === "ar" ? "عربي" : "EN"}
            </a>
            <LocaleLink
              href="/contact"
              locale={locale}
              className="hidden min-h-11 items-center rounded-md bg-dolook px-4 text-sm font-semibold text-white transition hover:bg-dolook-soft sm:inline-flex"
            >
              {dict.nav.quote}
            </LocaleLink>
            <button
              type="button"
              aria-label={open ? dict.nav.closeMenu : dict.nav.menu}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className={`inline-flex h-11 w-11 items-center justify-center rounded-md border lg:hidden ${
                solid ? "border-line" : "border-white/40"
              }`}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-4 w-5" aria-hidden>
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`absolute inset-x-0 h-0.5 transition duration-200 ${solid ? "bg-dolook-dark" : "bg-white"} ${
                      open
                        ? i === 1
                          ? "top-[7px] opacity-0"
                          : `top-[7px] ${i === 0 ? "rotate-45" : "-rotate-45"}`
                        : ["top-0", "top-[7px]", "top-[14px]"][i]
                    }`}
                  />
                ))}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Outside <header>: its backdrop-filter would make it the containing block for this fixed panel. */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[72px] z-[45] overflow-y-auto overscroll-contain border-t border-line bg-white lg:hidden"
        >
          <nav className="mx-auto flex max-w-3xl flex-col px-4 pb-10 pt-2 sm:px-6">
            {links.map((link, i) => {
              const active = isActive(link.href);
              return (
                <LocaleLink
                  key={link.href}
                  href={link.href}
                  locale={locale}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-14 items-center gap-4 border-b border-line/70 text-lg font-semibold ${
                    active ? "text-dolook" : "text-dolook-dark"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <span className="w-7 text-xs font-bold text-dolook/60">{pad2(i + 1)}</span>
                  {link.label}
                </LocaleLink>
              );
            })}
            <LocaleLink
              href="/contact"
              locale={locale}
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-dolook px-4 text-base font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {dict.nav.quote}
            </LocaleLink>
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs font-semibold">
              <a href={company.phoneHref} className="flex min-h-16 flex-col items-center justify-center gap-1.5 border border-line text-dolook-dark">
                <PhoneIcon className="h-5 w-5 text-dolook" />
                {dict.contact.phoneLabel}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-16 flex-col items-center justify-center gap-1.5 border border-line text-dolook-dark"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                {dict.contact.whatsapp}
              </a>
              <a href={`mailto:${company.email}`} className="flex min-h-16 flex-col items-center justify-center gap-1.5 border border-line text-dolook-dark">
                <MailIcon className="h-5 w-5 text-dolook" />
                {dict.contact.email}
              </a>
            </div>
            <p className="mt-6 text-center text-sm text-muted">
              <Ltr>{company.phone}</Ltr> · {company.email}
            </p>
          </nav>
        </div>
      )}
      {/* Reserve the header's height on pages whose content starts below it. */}
      {!overHero && <div className={HEADER_H} aria-hidden />}
    </>
  );
}

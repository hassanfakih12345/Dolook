import Image from "next/image";
import { company, whatsappUrl } from "@/data/company";
import type { Dictionary } from "@/lib/i18n/en";
import type { Locale } from "@/lib/i18n/config";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./icons";
import { LocaleLink } from "./LocaleLink";
import { Button, Ltr, container } from "./ui";

type Props = { locale: Locale; dict: Dictionary };

export function Footer({ locale, dict }: Props) {
  const groups = [
    {
      title: dict.footer.company,
      links: [
        { href: "/about", label: dict.nav.about },
        { href: "/clients", label: dict.nav.clients },
        { href: "/certificates", label: dict.nav.certificates },
      ],
    },
    {
      title: dict.footer.explore,
      links: [
        { href: "/services", label: dict.nav.services },
        { href: "/projects", label: dict.nav.projects },
        { href: "/contact", label: dict.nav.contact },
      ],
    },
  ];

  return (
    <footer className="mt-auto">
      {/* Site-wide call to action */}
      <section className="relative overflow-hidden bg-dolook text-white">
        <div className="dot-mesh-light pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className={`${container} relative flex flex-col gap-6 py-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between`}>
          <div>
            <h2 className="text-heading font-bold">{dict.home.finalCtaTitle}</h2>
            <p className="mt-2 text-white/80 sm:text-lg">{dict.home.finalCtaSub}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" locale={locale} variant="light">
              {dict.nav.quote}
            </Button>
            <Button external={whatsappUrl} variant="outlineLight">
              <WhatsAppIcon className="h-4 w-4" /> {dict.contact.whatsapp}
            </Button>
          </div>
        </div>
      </section>

      <div className="bg-dolook-dark text-white">
        <div className={`${container} grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.4fr] lg:gap-12`}>
          <div>
            <div className="inline-flex rounded-md bg-white px-3 py-2">
              <Image src="/brand/logo.png" alt={dict.meta.siteName} width={160} height={49} className="h-9 w-auto" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">{dict.footer.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:col-span-2 lg:col-span-2 lg:gap-12">
            {groups.map((group) => (
              <div key={group.title} className="text-sm">
                <p className="mb-2 font-semibold text-white">{group.title}</p>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <LocaleLink
                        href={link.href}
                        locale={locale}
                        className="inline-flex min-h-11 items-center text-white/75 hover:text-white"
                      >
                        {link.label}
                      </LocaleLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <address className="space-y-1 text-sm not-italic text-white/80 sm:col-span-2 lg:col-span-1">
            <p className="mb-2 font-semibold text-white">{dict.contact.office}</p>
            <p className="flex gap-3 py-2 leading-relaxed">
              <PinIcon className="mt-0.5 h-4 w-4 text-white/50" />
              {company.address[locale]}
            </p>
            <a className="flex min-h-11 items-center gap-3 hover:text-white" href={`mailto:${company.email}`}>
              <MailIcon className="h-4 w-4 text-white/50" />
              {company.email}
            </a>
            <a className="flex min-h-11 items-center gap-3 hover:text-white" href={company.phoneHref}>
              <PhoneIcon className="h-4 w-4 text-white/50" />
              <Ltr>{company.phone}</Ltr>
            </a>
            <a
              className="flex min-h-11 items-center gap-3 hover:text-white"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-4 w-4 text-white/50" />
              <Ltr>{company.whatsappDisplay}</Ltr>
            </a>
          </address>
        </div>

        <div className="border-t border-white/10">
          <div className={`${container} flex flex-col gap-2 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between`}>
            <span>
              © {new Date().getFullYear()} {company.name}. {dict.footer.rights}
            </span>
            <span>
              {dict.footer.cr}: <Ltr>{company.cr}</Ltr> · {dict.footer.vat}: <Ltr>{company.vat}</Ltr>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

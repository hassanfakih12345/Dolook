import Image from "next/image";
import { company, whatsappUrl } from "@/data/company";
import type { Dictionary } from "@/lib/i18n/en";
import type { Locale } from "@/lib/i18n/config";
import { LocaleLink } from "./LocaleLink";
import { Ltr } from "./ui";

type Props = { locale: Locale; dict: Dictionary };

export function Footer({ locale, dict }: Props) {
  const companyLinks = [
    { href: "/about", label: dict.nav.about },
    { href: "/clients", label: dict.nav.clients },
    { href: "/certificates", label: dict.nav.certificates },
  ];
  const exploreLinks = [
    { href: "/services", label: dict.nav.services },
    { href: "/projects", label: dict.nav.projects },
    { href: "/contact", label: dict.nav.contact },
  ];

  return (
    <footer className="border-t border-line bg-dolook-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="inline-flex rounded-md bg-white px-3 py-2">
            <Image src="/brand/logo.png" alt={dict.meta.siteName} width={160} height={49} className="h-9 w-auto" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">{dict.footer.tagline}</p>
        </div>

        {[
          { title: dict.footer.company, links: companyLinks },
          { title: dict.footer.explore, links: exploreLinks },
        ].map((group) => (
          <div key={group.title} className="space-y-3 text-sm text-white/80">
            <p className="font-semibold text-white">{group.title}</p>
            {group.links.map((link) => (
              <LocaleLink key={link.href} href={link.href} locale={locale} className="block hover:text-white">
                {link.label}
              </LocaleLink>
            ))}
          </div>
        ))}

        <address className="space-y-3 text-sm not-italic text-white/80">
          <p className="font-semibold text-white">{dict.contact.office}</p>
          <p className="leading-relaxed">{company.address[locale]}</p>
          <p>
            <a className="hover:text-white" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
          <p>
            <a className="hover:text-white" href={company.phoneHref}>
              <Ltr>{company.phone}</Ltr>
            </a>
          </p>
          <p>
            <a className="hover:text-white" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {dict.contact.whatsapp}: <Ltr>{company.whatsappDisplay}</Ltr>
            </a>
          </p>
        </address>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-white/50 sm:px-6 lg:px-8">
          <span>
            © {new Date().getFullYear()} {company.name}. {dict.footer.rights}
          </span>
          <span>
            {dict.footer.cr}: <Ltr>{company.cr}</Ltr> · {dict.footer.vat}: <Ltr>{company.vat}</Ltr>
          </span>
        </div>
      </div>
    </footer>
  );
}

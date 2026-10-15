import { company } from "@/data/company";
import type { Dictionary } from "@/lib/i18n/en";
import type { Locale } from "@/lib/i18n/config";
import { LocaleLink } from "./LocaleLink";

type Props = { locale: Locale; dict: Dictionary };

export function Footer({ locale, dict }: Props) {
  return (
    <footer className="border-t border-line bg-dolook-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-2xl font-bold tracking-wide text-white">{company.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">{dict.footer.tagline}</p>
        </div>
        <div className="space-y-2 text-sm text-white/80">
          <p className="font-semibold text-white">{dict.contact.office}</p>
          <p>{company.address[locale]}</p>
          <p>
            <a className="hover:text-white" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
          <p>
            <a className="hover:text-white" href={company.phoneHref}>
              {company.phone}
            </a>
          </p>
        </div>
        <div className="space-y-2 text-sm text-white/80">
          <LocaleLink href="/services" locale={locale} className="block hover:text-white">
            {dict.nav.services}
          </LocaleLink>
          <LocaleLink href="/projects" locale={locale} className="block hover:text-white">
            {dict.nav.projects}
          </LocaleLink>
          <LocaleLink href="/contact" locale={locale} className="block hover:text-white">
            {dict.nav.contact}
          </LocaleLink>
          <p className="pt-4 text-xs text-white/50">
            {dict.footer.cr}: {company.cr}
            <br />
            {dict.footer.vat}: {company.vat}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-xs text-white/50 sm:px-6 lg:px-8">
          <span>
            © {new Date().getFullYear()} {company.name}. {dict.footer.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}

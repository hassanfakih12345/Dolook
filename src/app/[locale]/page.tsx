import Image from "next/image";
import { LocaleLink } from "@/components/LocaleLink";
import { company } from "@/data/company";
import { divisions } from "@/data/divisions";
import { resolveLocale } from "@/lib/i18n";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dict } = await resolveLocale(params);

  return (
    <>
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <Image
          src="/hero/cover.jpg"
          alt="DOLOOK"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="dot-mesh pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between px-4 pb-10 pt-28 sm:px-6 lg:px-8">
          <div className="flex-1" />
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-white/80 uppercase">{company.name}</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {dict.home.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{dict.home.subhead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LocaleLink
                href="/contact"
                locale={locale}
                className="rounded-md bg-dolook px-6 py-3 text-sm font-semibold text-white transition hover:bg-dolook-soft"
              >
                {dict.home.ctaQuote}
              </LocaleLink>
              <LocaleLink
                href="/projects"
                locale={locale}
                className="rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                {dict.home.ctaProjects}
              </LocaleLink>
            </div>
          </div>

          <nav
            aria-label={dict.nav.services}
            className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md md:grid-cols-4"
          >
            {divisions.map((d) => (
              <LocaleLink
                key={d.slug}
                href={`/services/${d.slug}`}
                locale={locale}
                className="group flex flex-col gap-2 bg-dolook-dark/55 px-4 py-5 transition hover:bg-dolook/90"
              >
                <span className="text-xs font-bold tracking-wider text-white/55">{d.number}</span>
                <span className="text-sm font-semibold leading-snug text-white sm:text-base">{d.title[locale]}</span>
              </LocaleLink>
            ))}
          </nav>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-sm text-muted">
            {company.name} · {company.founded}
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-semibold text-dolook-dark">
            {(["about", "clients", "certificates", "contact"] as const).map((key) => (
              <LocaleLink key={key} href={`/${key}`} locale={locale} className="hover:text-dolook">
                {dict.nav[key]}
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

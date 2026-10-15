import Image from "next/image";
import { LocaleLink } from "@/components/LocaleLink";
import { ProjectCard } from "@/components/ProjectCard";
import { Arrow, Ltr, SectionHeading } from "@/components/ui";
import { clients } from "@/data/clients";
import { company, yearsOfExperience } from "@/data/company";
import { divisions } from "@/data/divisions";
import { projects } from "@/data/projects";
import { resolveLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await resolveLocale(params);
  return pageMetadata({ locale, path: "/" });
}

const container = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dict } = await resolveLocale(params);
  const t = dict.home;
  const featured = projects.filter((p) => p.featured).slice(0, 6);

  const stats = [
    { value: `${yearsOfExperience()}+`, label: t.statsYear },
    { value: `${company.team}+`, label: t.statsTeam },
    { value: String(divisions.length), label: t.statsDivisions },
    { value: t.statsRegionValue, label: t.statsRegion },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <Image
          src="/hero/cover.jpg"
          alt={dict.meta.siteName}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="dot-mesh pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light" />

        <div className={`${container} relative z-10 flex h-full flex-col justify-between pb-10 pt-28`}>
          <div className="flex-1" />
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.25em] text-white/80 uppercase">{company.name}</p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {t.headline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{t.subhead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LocaleLink
                href="/contact"
                locale={locale}
                className="rounded-md bg-dolook px-6 py-3 text-sm font-semibold text-white transition hover:bg-dolook-soft"
              >
                {t.ctaQuote}
              </LocaleLink>
              <LocaleLink
                href="/projects"
                locale={locale}
                className="rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                {t.ctaProjects}
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

      {/* Stats */}
      <section className="border-b border-line bg-white">
        <dl className={`${container} grid grid-cols-2 gap-px py-10 md:grid-cols-4`}>
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse gap-1 px-4 py-2 text-center">
              <dt className="text-sm text-muted">{s.label}</dt>
              <dd className="text-3xl font-bold text-dolook sm:text-4xl">
                <Ltr>{s.value}</Ltr>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Divisions */}
      <section className="bg-surface py-20">
        <div className={container}>
          <SectionHeading
            title={t.divisionsTitle}
            sub={t.divisionsSub}
            action={
              <LocaleLink
                href="/services"
                locale={locale}
                className="inline-flex items-center gap-2 text-sm font-semibold text-dolook hover:text-dolook-dark"
              >
                {dict.common.learnMore} <Arrow />
              </LocaleLink>
            }
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {divisions.map((d) => (
              <LocaleLink
                key={d.slug}
                href={`/services/${d.slug}`}
                locale={locale}
                className="group flex flex-col border border-line bg-white p-6 transition hover:border-dolook/40 hover:shadow-[0_20px_50px_-28px_rgba(11,31,58,0.45)]"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center bg-dolook text-sm font-bold text-white">
                  {d.number}
                </span>
                <h3 className="mt-5 text-lg font-bold text-dolook-dark group-hover:text-dolook">{d.title[locale]}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{d.summary[locale]}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-dolook">
                  {dict.common.learnMore} <Arrow />
                </span>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-20">
        <div className={container}>
          <SectionHeading
            title={t.featuredTitle}
            sub={t.featuredSub}
            action={
              <LocaleLink
                href="/projects"
                locale={locale}
                className="inline-flex items-center gap-2 text-sm font-semibold text-dolook hover:text-dolook-dark"
              >
                {t.viewAll} <Arrow />
              </LocaleLink>
            }
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} locale={locale} dict={dict} />
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-dolook-dark py-16 text-white">
        <div className={container}>
          <h2 className="text-2xl font-bold">{t.sectorsTitle}</h2>
          <ul className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-4">
            {t.sectors.map((sector, i) => (
              <li key={sector} className="flex flex-col gap-2 bg-dolook-dark px-5 py-6">
                <span className="text-xs font-bold tracking-wider text-white/45">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-base font-semibold sm:text-lg">{sector}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Clients */}
      <section className="py-20">
        <div className={container}>
          <SectionHeading
            title={t.clientsTitle}
            sub={t.clientsSub}
            action={
              <LocaleLink
                href="/clients"
                locale={locale}
                className="inline-flex items-center gap-2 text-sm font-semibold text-dolook hover:text-dolook-dark"
              >
                {t.clientsLink} <Arrow />
              </LocaleLink>
            }
          />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((client) => (
              <div
                key={client.slug}
                className="flex h-24 items-center justify-center border border-line bg-white px-5 py-4"
                title={client.name[locale]}
              >
                <Image
                  src={client.logo}
                  alt={client.name[locale]}
                  width={180}
                  height={72}
                  className="max-h-12 w-auto max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO message */}
      <section className="border-y border-line bg-surface py-16">
        <div className={`${container} grid items-center gap-8 md:grid-cols-[auto_1fr]`}>
          <div className="text-5xl font-bold leading-none text-dolook/30" aria-hidden>
            “
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-dolook uppercase">{t.ceoTitle}</h2>
            <blockquote className="mt-3 max-w-3xl text-xl font-semibold leading-relaxed text-dolook-dark sm:text-2xl">
              {t.ceoTeaser}
            </blockquote>
            <p className="mt-4 text-sm text-muted">
              {company.ceo[locale]} — {dict.about.ceoRole}
            </p>
            <LocaleLink
              href="/about#ceo"
              locale={locale}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-dolook hover:text-dolook-dark"
            >
              {t.ceoLink} <Arrow />
            </LocaleLink>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className={`${container} flex flex-col items-start justify-between gap-6 md:flex-row md:items-center`}>
          <div>
            <h2 className="text-3xl font-bold text-dolook-dark">{t.finalCtaTitle}</h2>
            <p className="mt-3 text-muted">{t.finalCtaSub}</p>
          </div>
          <LocaleLink
            href="/contact"
            locale={locale}
            className="inline-flex rounded-md bg-dolook px-6 py-3 text-sm font-semibold text-white transition hover:bg-dolook-soft"
          >
            {t.ctaQuote}
          </LocaleLink>
        </div>
      </section>
    </>
  );
}

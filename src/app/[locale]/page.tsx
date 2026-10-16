import Image from "next/image";
import { FeaturedTile } from "@/components/FeaturedTile";
import { QuoteIcon } from "@/components/icons";
import { LocaleLink } from "@/components/LocaleLink";
import { Arrow, ArrowLink, Button, Ltr, NumberBadge, SectionHeading, container, pad2, section } from "@/components/ui";
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

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dict } = await resolveLocale(params);
  const t = dict.home;
  const featured = projects.filter((p) => p.featured).slice(0, 5);

  const stats = [
    { value: `${yearsOfExperience()}+`, label: t.statsYear },
    { value: `${company.team}+`, label: t.statsTeam },
    { value: String(divisions.length), label: t.statsDivisions },
    { value: `${projects.length}+`, label: dict.nav.projects },
  ];

  return (
    <>
      {/* Hero — the header floats transparent over it */}
      <section className="relative min-h-[100svh] w-full overflow-hidden bg-dolook-dark">
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

        <div className={`${container} relative z-10 flex min-h-[100svh] flex-col justify-end pb-8 pt-28 sm:pb-10`}>
          <div className="max-w-3xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-white/80 uppercase sm:text-sm">
              <span className="h-px w-10 bg-white/50" aria-hidden />
              {company.name} · {company.founded}
            </p>
            <h1 className="text-display font-bold text-white">{t.headline}</h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{t.subhead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" locale={locale}>
                {t.ctaQuote}
              </Button>
              <Button href="/projects" locale={locale} variant="outlineLight">
                {t.ctaProjects}
              </Button>
            </div>
          </div>

          <nav
            aria-label={dict.nav.services}
            className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-white/20 bg-white/15 backdrop-blur-md sm:mt-12 md:grid-cols-4"
          >
            {divisions.map((d) => (
              <LocaleLink
                key={d.slug}
                href={`/services/${d.slug}`}
                locale={locale}
                className="group flex min-h-20 flex-col justify-between gap-2 bg-dolook-dark/55 px-4 py-4 transition hover:bg-dolook/90 sm:py-5"
              >
                <span className="flex items-center justify-between text-xs font-bold tracking-wider text-white/55">
                  {d.number}
                  <Arrow className="text-white/40 transition group-hover:text-white" />
                </span>
                <span className="text-sm font-semibold leading-snug text-white sm:text-base">{d.title[locale]}</span>
              </LocaleLink>
            ))}
          </nav>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-line bg-white">
        <dl className={`${container} grid grid-cols-2 lg:grid-cols-4`}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse gap-1 px-2 py-8 text-center sm:py-10 ${
                i % 2 === 1 ? "border-s border-line" : ""
              } ${i >= 2 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-s" : ""}`}
            >
              <dt className="text-sm text-muted">{s.label}</dt>
              <dd className="text-3xl font-bold text-dolook sm:text-4xl lg:text-5xl">
                <Ltr>{s.value}</Ltr>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* About + CEO */}
      <section className={section}>
        <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
          <div>
            <SectionHeading eyebrow={dict.nav.about} title={dict.about.title} sub={dict.about.intro} />
            <figure className="relative mt-8 bg-dolook-dark p-6 text-white sm:p-8">
              <QuoteIcon className="absolute -top-5 start-6 h-10 w-10 text-dolook" />
              <blockquote className="text-lg font-semibold leading-relaxed sm:text-xl">{t.ceoTeaser}</blockquote>
              <figcaption className="mt-4 text-sm text-white/70">
                {company.ceo[locale]} — {dict.about.ceoRole}
              </figcaption>
            </figure>
            <div className="mt-6">
              <ArrowLink href="/about" locale={locale}>
                {t.ceoLink}
              </ArrowLink>
            </div>
          </div>
          <div className="relative grid grid-cols-5 gap-3 sm:gap-4">
            <div className="relative col-span-3 aspect-[3/4] overflow-hidden">
              <Image
                src="/projects/rch-al-khobar/01.jpg"
                alt={projects.find((p) => p.slug === "rch-al-khobar")?.name[locale] ?? ""}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 60vw, 30vw"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-3 pt-10 sm:gap-4 sm:pt-16">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/projects/akt-head-office/01.jpg"
                  alt={projects.find((p) => p.slug === "akt-head-office")?.name[locale] ?? ""}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 40vw, 20vw"
                />
              </div>
              <div className="bg-dolook p-4 text-white sm:p-5">
                <p className="text-3xl font-bold sm:text-4xl">
                  <Ltr>{company.founded}</Ltr>
                </p>
                <p className="mt-1 text-xs text-white/80 sm:text-sm">{dict.footer.tagline}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className={`bg-surface ${section}`}>
        <div className={container}>
          <SectionHeading
            eyebrow={dict.nav.services}
            title={t.divisionsTitle}
            sub={t.divisionsSub}
            action={
              <ArrowLink href="/services" locale={locale}>
                {dict.common.learnMore}
              </ArrowLink>
            }
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {divisions.map((d) => (
              <LocaleLink
                key={d.slug}
                href={`/services/${d.slug}`}
                locale={locale}
                className="group flex flex-col overflow-hidden border border-line bg-white transition hover:border-dolook/40 hover:shadow-[0_20px_50px_-28px_rgba(11,31,58,0.45)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={d.imageHint}
                    alt=""
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  />
                  <NumberBadge n={d.number} className="absolute start-4 top-4" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-dolook-dark group-hover:text-dolook">{d.title[locale]}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{d.summary[locale]}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-dolook">
                    {dict.common.learnMore} <Arrow />
                  </span>
                </div>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects — bento grid */}
      <section className={section}>
        <div className={container}>
          <SectionHeading
            eyebrow={dict.nav.projects}
            title={t.featuredTitle}
            sub={t.featuredSub}
            action={
              <ArrowLink href="/projects" locale={locale}>
                {t.viewAll}
              </ArrowLink>
            }
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:auto-rows-[260px] lg:grid-cols-4">
            {featured.map((project, i) => (
              <FeaturedTile
                key={project.slug}
                project={project}
                locale={locale}
                dict={dict}
                large={i === 0}
                className={i === 0 ? "min-h-80 md:col-span-2 lg:row-span-2" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="relative overflow-hidden bg-dolook-dark py-16 text-white sm:py-20">
        <div className="blueprint pointer-events-none absolute inset-0" aria-hidden />
        <div className={`${container} relative`}>
          <SectionHeading invert eyebrow="DOLOOK" title={t.sectorsTitle} />
          <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-white/15 bg-white/15 lg:grid-cols-4">
            {t.sectors.map((sector, i) => (
              <li key={sector} className="flex min-h-28 flex-col justify-between gap-3 bg-dolook-dark px-5 py-6">
                <span className="text-xs font-bold tracking-wider text-white/45">{pad2(i + 1)}</span>
                <span className="text-base font-semibold sm:text-lg">{sector}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Clients */}
      <section className={section}>
        <div className={container}>
          <SectionHeading
            eyebrow={dict.nav.clients}
            title={t.clientsTitle}
            sub={t.clientsSub}
            action={
              <ArrowLink href="/clients" locale={locale}>
                {t.clientsLink}
              </ArrowLink>
            }
          />
          <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((client) => (
              <li key={client.slug} className="group flex h-24 items-center justify-center bg-white px-5 sm:h-28" title={client.name[locale]}>
                <Image
                  src={client.logo}
                  alt={client.name[locale]}
                  width={180}
                  height={72}
                  className="max-h-12 w-auto max-w-full object-contain opacity-70 grayscale transition group-hover:opacity-100 group-hover:grayscale-0 sm:max-h-14"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

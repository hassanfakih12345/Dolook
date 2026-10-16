import Image from "next/image";
import { LocaleLink } from "@/components/LocaleLink";
import { Arrow, Button, Ltr, NumberBadge, SectionHeading, container, pad2, section } from "@/components/ui";
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

  const pages = [
    { href: "/about", title: dict.nav.about, text: dict.meta.about, image: "/projects/rch-al-khobar/01.jpg" },
    { href: "/services", title: dict.nav.services, text: dict.meta.services, image: "/projects/akt-head-office/02.jpg" },
    { href: "/projects", title: dict.nav.projects, text: dict.meta.projects, image: "/projects/office-interior/open-work-2.jpg" },
    { href: "/clients", title: dict.nav.clients, text: dict.meta.clients, image: "/projects/808-square/01.jpg" },
    { href: "/certificates", title: dict.nav.certificates, text: dict.meta.certificates, image: null },
    { href: "/contact", title: dict.nav.contact, text: dict.meta.contact, image: null },
  ];

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

      {/* Site directory — every section lives on its own page */}
      <section className={section}>
        <div className={container}>
          <SectionHeading eyebrow={company.name} title={t.exploreTitle} sub={t.exploreSub} />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pages.map((page, i) => (
              <li key={page.href}>
                <LocaleLink
                  href={page.href}
                  locale={locale}
                  className="group relative flex h-full min-h-56 flex-col justify-end overflow-hidden bg-dolook-dark p-6 text-white sm:min-h-72 sm:p-7"
                >
                  {page.image ? (
                    <>
                      <Image
                        src={page.image}
                        alt=""
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dolook-dark via-dolook-dark/60 to-dolook-dark/10" />
                    </>
                  ) : (
                    <div className="blueprint pointer-events-none absolute inset-0" aria-hidden />
                  )}
                  <NumberBadge n={pad2(i + 1)} className="absolute start-6 top-6 sm:start-7 sm:top-7" />
                  <div className="relative">
                    <h3 className="text-2xl font-bold">{page.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80">{page.text}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                      {dict.common.learnMore}
                      <Arrow className="transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </span>
                  </div>
                </LocaleLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

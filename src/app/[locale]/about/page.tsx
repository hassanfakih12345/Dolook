import Image from "next/image";
import { QuoteIcon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { Button, Ltr, SectionHeading, container, pad2, section } from "@/components/ui";
import { company, yearsOfExperience } from "@/data/company";
import { divisions } from "@/data/divisions";
import { projects } from "@/data/projects";
import { resolveLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params) {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata({ locale, path: "/about", title: dict.about.title, description: dict.meta.about });
}

export default async function AboutPage({ params }: Params) {
  const { locale, dict } = await resolveLocale(params);
  const t = dict.about;
  const stats = [
    { value: `${yearsOfExperience()}+`, label: dict.home.statsYear },
    { value: `${company.team}+`, label: dict.home.statsTeam },
    { value: String(divisions.length), label: dict.home.statsDivisions },
    { value: `${projects.length}+`, label: dict.nav.projects },
  ];

  return (
    <>
      <PageHero
        locale={locale}
        dict={dict}
        crumbs={[{ label: t.title }]}
        eyebrow="01"
        title={t.title}
        sub={t.intro}
        image={{ src: "/projects/rch-al-khobar/01.jpg", alt: t.title }}
      />

      {/* Key figures */}
      <section className="border-b border-line">
        <dl className={`${container} grid grid-cols-2 lg:grid-cols-4`}>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse gap-1 px-2 py-8 text-center ${i % 2 === 1 ? "border-s border-line" : ""} ${
                i >= 2 ? "border-t border-line lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-s" : ""}`}
            >
              <dt className="text-sm text-muted">{s.label}</dt>
              <dd className="text-3xl font-bold text-dolook sm:text-4xl">
                <Ltr>{s.value}</Ltr>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* CEO message */}
      <section id="ceo" className={`scroll-mt-24 ${section}`}>
        <div className={container}>
          <figure className="relative overflow-hidden bg-dolook-dark p-7 text-white sm:p-10 lg:p-14">
            <div className="blueprint pointer-events-none absolute inset-0" aria-hidden />
            <div className="relative grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
              <QuoteIcon className="h-12 w-12 text-dolook sm:h-16 sm:w-16" />
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase">{t.ceoTitle}</p>
                <blockquote className="mt-4 text-lg leading-relaxed text-white/90 sm:text-xl lg:text-2xl lg:leading-relaxed">
                  {t.ceoBody}
                </blockquote>
                <figcaption className="mt-6 border-t border-white/15 pt-5">
                  <p className="font-bold">{company.ceo[locale]}</p>
                  <p className="text-sm text-white/70">{t.ceoRole}</p>
                </figcaption>
              </div>
            </div>
          </figure>
        </div>
      </section>

      {/* Vision & mission */}
      <section className={`bg-surface ${section}`}>
        <div className={`${container} grid gap-6 md:grid-cols-2`}>
          {[
            { n: "01", title: t.visionTitle, body: t.vision },
            { n: "02", title: t.missionTitle, body: t.mission },
          ].map((card) => (
            <article key={card.title} className="border-t-4 border-dolook bg-white p-7 sm:p-9">
              <span className="text-sm font-bold text-dolook/60">{card.n}</span>
              <h2 className="mt-2 text-2xl font-bold text-dolook-dark">{card.title}</h2>
              <p className="mt-4 leading-relaxed text-muted sm:text-lg">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className={section}>
        <div className={container}>
          <SectionHeading eyebrow={t.title} title={t.valuesTitle} />
          <ul className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {t.values.map((value, i) => (
              <li key={value} className="flex gap-4 bg-white p-5 sm:p-6">
                <span className="text-2xl font-bold leading-none text-dolook/25">{pad2(i + 1)}</span>
                <span className="text-sm font-medium leading-relaxed text-dolook-dark sm:text-base">{value}</span>
              </li>
            ))}
            {/* Fill the last row on the 3-column grid so no grey gap shows. */}
            {t.values.length % 3 !== 0 &&
              Array.from({ length: 3 - (t.values.length % 3) }).map((_, i) => (
                <li key={`fill-${i}`} className="hidden bg-white lg:block" aria-hidden />
              ))}
          </ul>
        </div>
      </section>

      {/* Resources */}
      <section className={`bg-surface ${section}`}>
        <div className={`${container} grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
          <div>
            <SectionHeading title={t.resourcesTitle} sub={t.resources} />
            <p className="mt-6 text-sm font-semibold text-dolook">
              <Ltr>{company.team}+</Ltr> {dict.home.statsTeam.toLowerCase()} · {t.since} <Ltr>{company.founded}</Ltr>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/services" locale={locale}>
                {dict.services.title}
              </Button>
              <Button href="/projects" locale={locale} variant="secondary">
                {dict.home.ctaProjects}
              </Button>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src="/projects/akt-head-office/02.jpg"
              alt={t.resourcesTitle}
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}

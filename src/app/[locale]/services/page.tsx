import Image from "next/image";
import { LocaleLink } from "@/components/LocaleLink";
import { PageIntro } from "@/components/PageIntro";
import { divisions } from "@/data/divisions";
import { resolveLocale } from "@/lib/i18n";

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dict } = await resolveLocale(params);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <PageIntro number="02" title={dict.services.title} sub={dict.services.sub} />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {divisions.map((d) => (
          <LocaleLink
            key={d.slug}
            href={`/services/${d.slug}`}
            locale={locale}
            className="group relative block overflow-hidden border border-line bg-white transition hover:border-dolook/40 hover:shadow-[0_20px_50px_-28px_rgba(11,31,58,0.45)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={d.imageHint}
                alt={d.title[locale]}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dolook-dark/80 via-dolook-dark/20 to-transparent" />
              <span className="absolute start-4 top-4 inline-flex h-9 min-w-9 items-center justify-center bg-dolook px-2 text-sm font-bold text-white">
                {d.number}
              </span>
            </div>
            <div className="space-y-3 p-6">
              <h3 className="text-xl font-bold text-dolook-dark">{d.title[locale]}</h3>
              <p className="text-sm leading-relaxed text-muted">{d.summary[locale]}</p>
              <span className="inline-flex text-sm font-semibold text-dolook">{dict.common.learnMore} →</span>
            </div>
          </LocaleLink>
        ))}
      </div>
    </div>
  );
}

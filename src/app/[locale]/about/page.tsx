import { company } from "@/data/company";
import { resolveLocale } from "@/lib/i18n";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dict } = await resolveLocale(params);
  const t = dict.about;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-dolook">01</p>
      <h1 className="mt-2 text-4xl font-bold text-dolook-dark">{t.title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{t.intro}</p>

      <section className="mt-16 grid gap-10 border-t border-line pt-16 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-dolook-dark">{t.ceoTitle}</h2>
          <p className="mt-2 font-semibold text-dolook">{company.ceo[locale]} — CEO</p>
          <p className="mt-6 leading-relaxed text-muted">{t.ceoBody}</p>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-dolook">{t.visionTitle}</h3>
            <p className="mt-3 leading-relaxed text-muted">{t.vision}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-dolook">{t.missionTitle}</h3>
            <p className="mt-3 leading-relaxed text-muted">{t.mission}</p>
          </div>
        </div>
      </section>

      <section className="mt-16 border-t border-line pt-16">
        <h2 className="text-2xl font-bold text-dolook-dark">{t.valuesTitle}</h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {t.values.map((value, i) => (
            <li key={value} className="flex gap-4 border border-line bg-surface px-5 py-5">
              <span className="inline-flex h-9 min-w-9 shrink-0 items-center justify-center bg-dolook text-xs font-bold text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium leading-relaxed text-dolook-dark sm:text-base">{value}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-t border-line pt-16">
        <h2 className="text-2xl font-bold text-dolook-dark">{t.resourcesTitle}</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">{t.resources}</p>
        <p className="mt-4 text-sm font-semibold text-dolook">
          {company.team}+ {dict.home.statsTeam.toLowerCase()} · {company.founded}
        </p>
      </section>
    </div>
  );
}

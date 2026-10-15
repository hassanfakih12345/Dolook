import Image from "next/image";
import { LocaleLink } from "@/components/LocaleLink";
import { PageIntro } from "@/components/PageIntro";
import { Arrow } from "@/components/ui";
import { clients } from "@/data/clients";
import { resolveLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params) {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata({ locale, path: "/clients", title: dict.clients.title, description: dict.meta.clients });
}

export default async function ClientsPage({ params }: Params) {
  const { locale, dict } = await resolveLocale(params);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <PageIntro locale={locale} dict={dict} number="04" title={dict.clients.title} sub={dict.clients.sub} />
      <p className="mt-3 max-w-2xl text-sm text-muted">{dict.clients.note}</p>
      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {clients.map((client) => (
          <li
            key={client.slug}
            className="flex flex-col items-center justify-between gap-3 border border-line bg-white px-5 py-5 text-center transition hover:border-dolook/30"
          >
            <div className="flex h-16 items-center justify-center">
              <Image
                src={client.logo}
                alt={client.name[locale]}
                width={180}
                height={72}
                className="max-h-14 w-auto max-w-full object-contain"
              />
            </div>
            <span className="text-xs font-medium text-muted">{client.name[locale]}</span>
          </li>
        ))}
      </ul>
      <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border border-line bg-surface p-8">
        <p className="text-lg font-semibold text-dolook-dark">{dict.home.finalCtaTitle}</p>
        <LocaleLink
          href="/projects"
          locale={locale}
          className="inline-flex items-center gap-2 text-sm font-semibold text-dolook hover:text-dolook-dark"
        >
          {dict.home.ctaProjects} <Arrow />
        </LocaleLink>
      </div>
    </div>
  );
}

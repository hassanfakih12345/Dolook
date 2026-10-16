import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ArrowLink, container, section } from "@/components/ui";
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
    <>
      <PageHero
        locale={locale}
        dict={dict}
        crumbs={[{ label: dict.clients.title }]}
        eyebrow="04"
        title={dict.clients.title}
        sub={dict.clients.sub}
      />
      <section className={section}>
        <div className={container}>
          <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">{dict.clients.note}</p>
          <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((client) => (
              <li key={client.slug} className="group flex flex-col items-center justify-between gap-4 bg-white px-4 py-6 text-center sm:px-6 sm:py-8">
                <div className="flex h-16 w-full items-center justify-center sm:h-20">
                  <Image
                    src={client.logo}
                    alt={client.name[locale]}
                    width={180}
                    height={72}
                    className="max-h-14 w-auto max-w-full object-contain transition group-hover:scale-105 sm:max-h-16"
                  />
                </div>
                <span className="text-xs font-medium leading-snug text-muted sm:text-sm">{client.name[locale]}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-s-4 border-dolook bg-surface p-6 sm:p-8">
            <p className="text-lg font-semibold text-dolook-dark">{dict.home.featuredSub}</p>
            <ArrowLink href="/projects" locale={locale}>
              {dict.home.ctaProjects}
            </ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}

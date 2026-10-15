import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { clients } from "@/data/clients";
import { resolveLocale } from "@/lib/i18n";

export default async function ClientsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale, dict } = await resolveLocale(params);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <PageIntro number="04" title={dict.clients.title} sub={dict.clients.sub} />
      <p className="mt-3 max-w-2xl text-sm text-muted">{dict.clients.note}</p>
      <div className="mt-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((client) => (
            <div
              key={client.slug}
              className="flex h-28 items-center justify-center border border-line bg-white px-5 py-4 transition hover:border-dolook/30"
              title={client.name[locale]}
            >
              <Image
                src={client.logo}
                alt={client.name[locale]}
                width={180}
                height={72}
                className="max-h-14 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

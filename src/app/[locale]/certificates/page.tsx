import { DocumentIcon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { Button, Ltr, container, pad2, section } from "@/components/ui";
import { company } from "@/data/company";
import { resolveLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params) {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata({
    locale,
    path: "/certificates",
    title: dict.certificates.title,
    description: dict.meta.certificates,
  });
}

export default async function CertificatesPage({ params }: Params) {
  const { locale, dict } = await resolveLocale(params);

  return (
    <>
      <PageHero
        locale={locale}
        dict={dict}
        crumbs={[{ label: dict.certificates.title }]}
        eyebrow="05"
        title={dict.certificates.title}
        sub={dict.certificates.sub}
      />
      <section className={section}>
        <div className={`${container} grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-12`}>
          <ul className="grid gap-4 sm:grid-cols-2">
            {dict.certificates.items.map((item, i) => (
              <li key={item} className="flex items-center gap-4 border border-line bg-white p-5 transition hover:border-dolook/40">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center bg-surface text-dolook">
                  <DocumentIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs font-bold text-dolook/60">{pad2(i + 1)}</span>
                  <span className="mt-0.5 block font-bold text-dolook-dark">{item}</span>
                </span>
              </li>
            ))}
          </ul>
          <aside className="h-fit space-y-6 bg-dolook-dark p-7 text-white lg:sticky lg:top-24">
            <dl className="space-y-5">
              <div>
                <dt className="text-xs font-semibold tracking-wide text-white/60 uppercase">{dict.footer.cr}</dt>
                <dd className="mt-1 text-2xl font-bold">
                  <Ltr>{company.cr}</Ltr>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-wide text-white/60 uppercase">{dict.footer.vat}</dt>
                <dd className="mt-1 text-2xl font-bold">
                  <Ltr>{company.vat}</Ltr>
                </dd>
              </div>
            </dl>
            <p className="border-t border-white/15 pt-5 text-sm text-white/75">{dict.certificates.request}</p>
            <Button href="/contact" locale={locale} variant="light" className="w-full">
              {dict.nav.contact}
            </Button>
          </aside>
        </div>
      </section>
    </>
  );
}

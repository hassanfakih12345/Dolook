import Image from "next/image";
import { DocumentIcon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { Button, Ltr, buttonClass, container, pad2, section } from "@/components/ui";
import { certificates } from "@/data/certificates";
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
  const t = dict.certificates;

  return (
    <>
      <PageHero
        locale={locale}
        dict={dict}
        crumbs={[{ label: t.title }]}
        eyebrow="05"
        title={t.title}
        sub={t.sub}
      />
      <section className={section}>
        <div className={`${container} grid gap-10 lg:grid-cols-[1fr_340px] lg:gap-12`}>
          <ul className="grid gap-6 sm:grid-cols-2">
            {certificates.map((cert, i) => (
              <li key={cert.slug} className="group flex flex-col border border-line bg-white transition hover:border-dolook/40 hover:shadow-[0_20px_50px_-28px_rgba(11,31,58,0.45)]">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[4/3] overflow-hidden border-b border-line bg-surface"
                  aria-label={`${t.view}: ${cert.title[locale]}`}
                >
                  <Image
                    src={cert.preview}
                    alt={cert.title[locale]}
                    fill
                    className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 30vw"
                  />
                  <span className="absolute start-3 top-3 inline-flex h-8 min-w-8 items-center justify-center bg-dolook px-2 text-xs font-bold text-white">
                    {pad2(i + 1)}
                  </span>
                </a>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start gap-3">
                    <DocumentIcon className="mt-0.5 h-5 w-5 text-dolook" />
                    <div>
                      <h2 className="font-bold text-dolook-dark">{cert.title[locale]}</h2>
                      <p className="mt-1 text-sm text-muted">{cert.issuer[locale]}</p>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <a href={cert.file} target="_blank" rel="noopener noreferrer" className={buttonClass("primary", "px-3")}>
                      {t.view}
                    </a>
                    <a href={cert.file} download className={buttonClass("secondary", "px-3")}>
                      {t.download}
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit space-y-6 bg-dolook-dark p-7 text-white lg:sticky lg:top-24">
            <p className="text-lg font-bold">{dict.meta.siteName}</p>
            <dl className="space-y-5 border-t border-white/15 pt-5">
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
              <div>
                <dt className="text-xs font-semibold tracking-wide text-white/60 uppercase">{t.nationalAddress}</dt>
                <dd className="mt-1 text-2xl font-bold">
                  <Ltr>{company.nationalAddress}</Ltr>
                </dd>
                <dd className="mt-1 text-sm text-white/70">{company.address[locale]}</dd>
              </div>
            </dl>
            <p className="border-t border-white/15 pt-5 text-sm text-white/75">{t.request}</p>
            <Button href="/contact" locale={locale} variant="light" className="w-full">
              {dict.nav.contact}
            </Button>
          </aside>
        </div>
      </section>
    </>
  );
}

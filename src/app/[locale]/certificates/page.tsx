import { LocaleLink } from "@/components/LocaleLink";
import { PageIntro } from "@/components/PageIntro";
import { Ltr, pad2 } from "@/components/ui";
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
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <PageIntro locale={locale} dict={dict} number="05" title={dict.certificates.title} sub={dict.certificates.sub} />
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dict.certificates.items.map((item, i) => (
          <li key={item} className="border border-line bg-surface p-6">
            <span className="inline-flex h-8 min-w-8 items-center justify-center bg-dolook px-2 text-xs font-bold text-white">
              {pad2(i + 1)}
            </span>
            <h2 className="mt-4 text-lg font-bold text-dolook-dark">{item}</h2>
          </li>
        ))}
      </ul>
      <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border border-line p-6 text-sm text-muted">
        <div>
          <p>
            {dict.footer.cr}:{" "}
            <strong className="text-dolook-dark">
              <Ltr>{company.cr}</Ltr>
            </strong>
          </p>
          <p className="mt-2">
            {dict.footer.vat}:{" "}
            <strong className="text-dolook-dark">
              <Ltr>{company.vat}</Ltr>
            </strong>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <span>{dict.certificates.request}</span>
          <LocaleLink
            href="/contact"
            locale={locale}
            className="rounded-md bg-dolook px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-dolook-soft"
          >
            {dict.nav.contact}
          </LocaleLink>
        </div>
      </div>
    </div>
  );
}

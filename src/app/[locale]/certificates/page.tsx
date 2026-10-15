import { PageIntro } from "@/components/PageIntro";
import { company } from "@/data/company";
import { resolveLocale } from "@/lib/i18n";

export default async function CertificatesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { dict } = await resolveLocale(params);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <PageIntro number="05" title={dict.certificates.title} sub={dict.certificates.sub} />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dict.certificates.items.map((item, i) => (
          <div key={item} className="border border-line bg-surface p-6">
            <span className="inline-flex h-8 min-w-8 items-center justify-center bg-dolook px-2 text-xs font-bold text-white">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h2 className="mt-4 text-lg font-bold text-dolook-dark">{item}</h2>
          </div>
        ))}
      </div>
      <div className="mt-12 border border-line p-6 text-sm text-muted">
        <p>
          {dict.footer.cr}: <strong className="text-dolook-dark">{company.cr}</strong>
        </p>
        <p className="mt-2">
          {dict.footer.vat}: <strong className="text-dolook-dark">{company.vat}</strong>
        </p>
      </div>
    </div>
  );
}

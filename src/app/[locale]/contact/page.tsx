import { ContactForm } from "@/components/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { Ltr } from "@/components/ui";
import { company, whatsappUrl } from "@/data/company";
import { resolveLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params) {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata({ locale, path: "/contact", title: dict.contact.title, description: dict.meta.contact });
}

export default async function ContactPage({ params }: Params) {
  const { locale, dict } = await resolveLocale(params);
  const mapQuery = encodeURIComponent("King Fahd Bin Abdulaziz Road, Dammam, Saudi Arabia");

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <PageIntro locale={locale} dict={dict} number="06" title={dict.contact.title} sub={dict.contact.sub} />
      <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <ContactForm locale={locale} dict={dict} />
        <aside className="space-y-6 border border-line bg-surface p-8">
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-dolook uppercase">{dict.contact.office}</h2>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm leading-relaxed text-muted hover:text-dolook"
            >
              {company.address[locale]}
            </a>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-dolook uppercase">{dict.contact.email}</h2>
            <a
              href={`mailto:${company.email}`}
              className="mt-2 block text-sm font-medium text-dolook-dark hover:text-dolook"
            >
              {company.email}
            </a>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-dolook uppercase">{dict.contact.phoneLabel}</h2>
            <a href={company.phoneHref} className="mt-2 block text-sm font-medium text-dolook-dark hover:text-dolook">
              <Ltr>{company.phone}</Ltr>
            </a>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-dolook uppercase">{dict.contact.whatsapp}</h2>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white"
            >
              <Ltr>{company.whatsappDisplay}</Ltr>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

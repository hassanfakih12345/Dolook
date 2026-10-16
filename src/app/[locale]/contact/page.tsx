import { ContactForm } from "@/components/ContactForm";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
import { Ltr, container, section } from "@/components/ui";
import { company, mapQuery, whatsappUrl } from "@/data/company";
import { resolveLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/metadata";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params) {
  const { locale, dict } = await resolveLocale(params);
  return pageMetadata({ locale, path: "/contact", title: dict.contact.title, description: dict.meta.contact });
}

export default async function ContactPage({ params }: Params) {
  const { locale, dict } = await resolveLocale(params);
  const c = dict.contact;

  const channels = [
    { icon: <PhoneIcon />, label: c.phoneLabel, value: <Ltr>{company.phone}</Ltr>, href: company.phoneHref },
    { icon: <WhatsAppIcon />, label: c.whatsapp, value: <Ltr>{company.whatsappDisplay}</Ltr>, href: whatsappUrl, external: true },
    { icon: <MailIcon />, label: c.email, value: company.email, href: `mailto:${company.email}` },
    {
      icon: <PinIcon />,
      label: c.office,
      value: company.address[locale],
      href: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
      external: true,
    },
  ];

  return (
    <>
      <PageHero locale={locale} dict={dict} crumbs={[{ label: c.title }]} eyebrow="06" title={c.title} sub={c.sub} />

      <section className={section}>
        <div className={`${container} grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12`}>
          <div className="border border-line bg-white p-5 shadow-[0_30px_60px_-40px_rgba(11,31,58,0.35)] sm:p-8">
            <ContactForm locale={locale} dict={dict} />
          </div>
          <aside>
            <h2 className="text-sm font-bold tracking-[0.15em] text-dolook uppercase">{c.reach}</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {channels.map((ch) => (
                <li key={ch.label}>
                  <a
                    href={ch.href}
                    {...(ch.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex min-h-16 items-center gap-4 border border-line bg-surface p-4 transition hover:border-dolook/40 hover:bg-white"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center bg-white text-dolook group-hover:bg-dolook group-hover:text-white">
                      {ch.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold tracking-wide text-muted uppercase">{ch.label}</span>
                      <span className="mt-0.5 block break-words text-sm font-semibold text-dolook-dark">{ch.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="relative border-t border-line bg-surface">
        <h2 className="sr-only">{c.map}</h2>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute end-4 top-4 z-10 inline-flex min-h-11 items-center gap-2 bg-white px-4 text-sm font-semibold text-dolook-dark shadow-md hover:text-dolook"
        >
          <PinIcon className="h-4 w-4 text-dolook" /> {c.openMap}
        </a>
        <iframe
          title={c.map}
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[320px] w-full border-0 bg-surface grayscale-[30%] sm:h-[420px]"
        />
      </section>
    </>
  );
}

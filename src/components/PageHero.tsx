import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/en";
import { Breadcrumbs } from "./Breadcrumbs";
import { container } from "./ui";

type Crumb = { href?: string; label: string };

type Props = {
  locale: Locale;
  dict: Dictionary;
  crumbs: Crumb[];
  title: string;
  eyebrow?: string;
  sub?: string;
  /** Badges, meta lines or actions under the title. */
  children?: React.ReactNode;
  /** Optional photo shown framed beside the text (never stretched full-bleed). */
  image?: { src: string; alt: string };
};

/**
 * Unified navy page header for every inner page: blueprint grid + dot mesh,
 * breadcrumb, numbered eyebrow, title and subtitle. With `image` it becomes a
 * split layout so photos keep their real resolution.
 */
export function PageHero({ locale, dict, crumbs, title, eyebrow, sub, children, image }: Props) {
  return (
    <section className="relative overflow-hidden bg-dolook-dark text-white">
      <div className="blueprint pointer-events-none absolute inset-0" aria-hidden />
      <div className="dot-mesh-light pointer-events-none absolute -end-24 -top-24 h-72 w-72 opacity-60" aria-hidden />
      <div
        className={`${container} relative grid items-center gap-10 py-12 sm:py-16 lg:py-20 ${
          image ? "lg:grid-cols-[1.05fr_0.95fr] lg:gap-14" : ""
        }`}
      >
        <div>
          <Breadcrumbs locale={locale} dict={dict} items={crumbs} invert />
          {eyebrow && (
            <p className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-white/60 uppercase">
              <span className="inline-flex h-8 min-w-8 items-center justify-center bg-dolook px-2 text-sm tracking-normal text-white">
                {eyebrow}
              </span>
            </p>
          )}
          <h1 className="text-title max-w-3xl font-bold">{title}</h1>
          {sub && <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{sub}</p>}
          {children && <div className="mt-6">{children}</div>}
        </div>
        {image && (
          <div className="relative">
            <div className="absolute -bottom-3 -end-3 h-full w-full border border-white/20" aria-hidden />
            <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 45vw"
              />
            </div>
          </div>
        )}
      </div>
      <div className="h-1 bg-gradient-to-r from-dolook via-dolook-soft to-dolook" aria-hidden />
    </section>
  );
}

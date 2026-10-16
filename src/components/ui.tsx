import type { Locale } from "@/lib/i18n/config";
import { LocaleLink } from "./LocaleLink";

/**
 * Arrow pointing in the reading direction ("forward") or against it ("back").
 * Flips automatically on RTL pages.
 */
export function Arrow({ direction = "forward", className = "" }: { direction?: "forward" | "back"; className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      aria-hidden
      className={`inline-block h-4 w-4 shrink-0 rtl:-scale-x-100 ${direction === "back" ? "rotate-180" : ""} ${className}`}
    >
      <path d="M4 10h12m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Keeps phone numbers and codes left-to-right inside Arabic text. */
export function Ltr({ children }: { children: React.ReactNode }) {
  return (
    <bdi dir="ltr" className="inline-block">
      {children}
    </bdi>
  );
}

export const container = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";
export const section = "py-16 sm:py-20 lg:py-24";

type ButtonVariant = "primary" | "secondary" | "light" | "outlineLight" | "whatsapp";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-dolook text-white hover:bg-dolook-soft",
  secondary: "border border-line bg-white text-dolook-dark hover:border-dolook/50 hover:text-dolook",
  light: "bg-white text-dolook-dark hover:bg-surface",
  outlineLight: "border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20",
  whatsapp: "bg-[#25D366] text-white hover:brightness-95",
};

export function buttonClass(variant: ButtonVariant = "primary", extra = "") {
  return `inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition ${variants[variant]} ${extra}`;
}

type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
} & ({ locale: Locale; href: string; external?: never } | { external: string; locale?: never; href?: never });

/** Link styled as a button: internal (`locale` + `href`) or external (`external`). Always ≥ 44px tall. */
export function Button({ variant = "primary", className = "", children, ...link }: ButtonProps) {
  const cls = buttonClass(variant, className);
  if (link.external) {
    const newTab = link.external.startsWith("http");
    return (
      <a href={link.external} className={cls} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <LocaleLink href={link.href!} locale={link.locale!} className={cls}>
      {children}
    </LocaleLink>
  );
}

/** Text link with a trailing arrow, padded to a 44px touch target. */
export function ArrowLink({ href, locale, children }: { href: string; locale: Locale; children: React.ReactNode }) {
  return (
    <LocaleLink
      href={href}
      locale={locale}
      className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-dolook hover:text-dolook-dark"
    >
      {children} <Arrow className="transition group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
    </LocaleLink>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  sub?: string;
  action?: React.ReactNode;
  invert?: boolean;
};

export function SectionHeading({ eyebrow, title, sub, action, invert }: SectionHeadingProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
      <div className="max-w-2xl">
        {eyebrow && (
          <p className={`mb-3 flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase ${invert ? "text-white/60" : "text-dolook"}`}>
            <span className={`h-px w-8 ${invert ? "bg-white/40" : "bg-dolook"}`} aria-hidden />
            {eyebrow}
          </p>
        )}
        <h2 className={`text-heading font-bold ${invert ? "text-white" : "text-dolook-dark"}`}>{title}</h2>
        {sub && <p className={`mt-3 text-base leading-relaxed sm:text-lg ${invert ? "text-white/75" : "text-muted"}`}>{sub}</p>}
      </div>
      {action}
    </div>
  );
}

/** Square numbered badge — the brand's "01, 02 …" motif. */
export function NumberBadge({ n, className = "" }: { n: string; className?: string }) {
  return (
    <span className={`inline-flex h-9 min-w-9 items-center justify-center bg-dolook px-2 text-sm font-bold text-white ${className}`}>
      {n}
    </span>
  );
}

export const pad2 = (n: number) => String(n).padStart(2, "0");

export const isRtl = (locale: Locale) => locale === "ar";

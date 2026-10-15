import type { Locale } from "@/lib/i18n/config";

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

type SectionHeadingProps = {
  title: string;
  sub?: string;
  action?: React.ReactNode;
  invert?: boolean;
};

export function SectionHeading({ title, sub, action, invert }: SectionHeadingProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h2 className={`text-3xl font-bold ${invert ? "text-white" : "text-dolook-dark"}`}>{title}</h2>
        {sub && <p className={`mt-3 max-w-2xl ${invert ? "text-white/75" : "text-muted"}`}>{sub}</p>}
      </div>
      {action}
    </div>
  );
}

export const pad2 = (n: number) => String(n).padStart(2, "0");

export const isRtl = (locale: Locale) => locale === "ar";

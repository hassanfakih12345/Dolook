"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ProjectImage } from "@/data/projects";
import type { Dictionary } from "@/lib/i18n/en";
import type { Locale } from "@/lib/i18n/config";

/**
 * Mosaic: the first image is 2×2, the rest are single tiles. The last tiles widen
 * so the final row is always full (2 columns on mobile, 4 on large screens).
 */
function tileClass(i: number, total: number) {
  if (i === 0) return "col-span-2 row-span-2";
  const fromEnd = total - i; // 1 = last tile
  const rest = total - 1;
  const classes: string[] = [];
  if (rest % 2 === 1 && fromEnd === 1) classes.push("col-span-2");
  // Large screens: 4 small tiles sit beside the big one, then rows of 4.
  const leftover = Math.max(rest - 4, 0) % 4;
  if (leftover === 1 && fromEnd === 1) classes.push("lg:col-span-4");
  if (leftover === 2 && fromEnd <= 2) classes.push("lg:col-span-2");
  if (leftover === 3 && fromEnd === 1) classes.push("lg:col-span-2");
  if (rest % 2 === 1 && fromEnd === 1 && leftover !== 1 && leftover !== 3) classes.push("lg:col-span-1");
  return classes.join(" ");
}

type Props = { images: ProjectImage[]; locale: Locale; dict: Dictionary; contain?: boolean };

/** Image grid (first image large) with a full-screen viewer: arrows, Esc, and ←/→ keys. */
export function ProjectGallery({ images, locale, dict, contain }: Props) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const rtl = locale === "ar";

  const step = useCallback(
    (delta: number) => setIndex((i) => (i === null ? i : (i + delta + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") step(rtl ? -1 : 1);
      if (e.key === "ArrowLeft") step(rtl ? 1 : -1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, step, rtl]);

  const current = index === null ? null : images[index];

  // Few images: plain row (never stretched past their real size). Many: mosaic.
  const simple = contain || images.length <= 3;
  const layoutClass = contain
    ? "sm:grid-cols-2"
    : images.length === 1
      ? "max-w-3xl"
      : images.length <= 3
        ? `sm:grid-cols-${images.length} max-w-5xl`
        : "grid-cols-2 lg:grid-cols-4";

  return (
    <>
      <ul className={`grid gap-3 ${layoutClass}`}>
        {images.map((img, i) => (
          <li key={img.src} className={simple ? "" : tileClass(i, images.length)}>
            {/* sm:grid-cols-2 sm:grid-cols-3 — listed so Tailwind generates the dynamic classes above */}
            <button
              type="button"
              onClick={() => setIndex(i)}
              className={`group relative block h-full w-full overflow-hidden border border-line ${
                contain ? "aspect-[5/4] bg-[#dfdfdf]" : simple ? "aspect-[4/3] bg-surface" : "aspect-[16/10] bg-surface"
              }`}
              aria-label={img.caption[locale]}
            >
              <Image
                src={img.src}
                alt={img.caption[locale]}
                fill
                className={`transition duration-700 group-hover:scale-[1.03] ${contain ? "object-contain p-4" : simple ? "object-contain" : "object-cover"}`}
                sizes={simple || i === 0 ? "(max-width:1024px) 100vw, 50vw" : "(max-width:1024px) 50vw, 25vw"}
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dolook-dark/80 to-transparent px-3 pb-2 pt-6 text-start text-xs font-medium text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                {img.caption[locale]}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption[locale]}
          className="fixed inset-0 z-[70] flex flex-col bg-dolook-dark/95 backdrop-blur"
          onClick={() => setIndex(null)}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 text-sm text-white/80 sm:px-6">
            <span>
              {current.caption[locale]} · {index! + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={() => setIndex(null)}
              className="rounded-md border border-white/30 px-3 py-1.5 font-semibold text-white hover:bg-white/10"
            >
              {dict.projects.close} ✕
            </button>
          </div>
          <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
            <Image
              key={current.src}
              src={current.src}
              alt={current.caption[locale]}
              fill
              className={`object-contain ${contain ? "bg-[#dfdfdf] p-4" : ""}`}
              sizes="100vw"
            />
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label={dict.projects.previous}
                  onClick={() => step(-1)}
                  className="absolute start-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-xl text-white hover:bg-white/25"
                >
                  <span className="inline-block rtl:-scale-x-100">‹</span>
                </button>
                <button
                  type="button"
                  aria-label={dict.projects.next}
                  onClick={() => step(1)}
                  className="absolute end-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-xl text-white hover:bg-white/25"
                >
                  <span className="inline-block rtl:-scale-x-100">›</span>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

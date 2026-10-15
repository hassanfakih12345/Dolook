"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Static export has no server redirects: .htaccess, the meta refresh in the
// layout and this effect all send "/" to the Arabic home page.
export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/ar/");
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white text-sm text-neutral-500">
      <a href="/ar/">DOLOOK…</a>
    </main>
  );
}

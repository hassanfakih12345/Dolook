"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Static export has no server redirects; .htaccess also sends "/" to "/ar/".
export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/ar/");
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white text-sm text-neutral-500">
      DOLOOK…
    </main>
  );
}

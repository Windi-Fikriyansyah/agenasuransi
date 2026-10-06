"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Nonaktifkan automatic scroll restoration browser untuk menghindari posisi tertahan
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      // Jika URL tidak memiliki hash anchor, lakukan smooth scroll ke paling atas
      if (!window.location.hash) {
        requestAnimationFrame(() => {
          try {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          } catch {
            window.scrollTo(0, 0);
          }
        });
      }
    }
  }, [pathname]);

  return null;
}

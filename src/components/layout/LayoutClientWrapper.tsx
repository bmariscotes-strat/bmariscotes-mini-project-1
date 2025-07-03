"use client";

import { usePathname } from "next/navigation";
import Loader from "./Loader";
import { ReactNode, Suspense } from "react";

export default function LayoutClientWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Exclude routes with slugs
  const showLoader = !(pathname.startsWith("/projects") || pathname.startsWith("/about"));

  return (
    <>
      {showLoader && (
        <Suspense fallback={null}>
          <Loader />
        </Suspense>
      )}
      {children}
    </>
  );
}

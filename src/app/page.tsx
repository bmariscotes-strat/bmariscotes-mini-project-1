"use client";

import { useBodyBackground } from "./hooks/useBodyBackground";

export default function HomePage() {
  useBodyBackground("bg-secondary");

  return <div className="h-full">{/* Your home page content */}</div>;
}

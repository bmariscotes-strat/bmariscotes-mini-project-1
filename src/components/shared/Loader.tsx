"use client";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

const Loader = () => {
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLoading(true);
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);

      setTimeout(() => setLoading(false), 300);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 bg-primary flex items-center justify-center z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Image */}
      <div className="relative flex items-center justify-center">
        <Image src="/brand/logo-w.png" alt="Logo" width={64} height={64} className="z-10" priority />
        <div className="absolute w-20 h-20 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;

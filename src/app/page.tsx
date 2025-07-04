"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useBodyBackground } from "@/hooks/useBodyBackground";
import { gsapAnimations } from "@/lib/gsap-animation";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function HomePage() {
  /* ------------------------
            SCRIPTS
    ------------------------*/

  useBodyBackground("bg-secondary");

  const logoRef = useRef<HTMLImageElement>(null);
  const tagLineRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cloudRef = useRef<HTMLImageElement>(null);
  const introRef = useRef<HTMLElement>(null);

  const pathname = usePathname();

  useEffect(() => {
    // Capture ref values at the time the effect runs
    const logo = logoRef.current;
    const tagLine = tagLineRef.current;
    const name = nameRef.current;
    const desc = descRef.current;
    const cloud = cloudRef.current;
    const intro = introRef.current;

    if (pathname === "/") {
      gsapAnimations.intro({
        logo,
        tagLine,
        name,
        desc,
        cloud,
        intro,
      });
    }

    // Cleanup
    return () => {
      const allElements = [logo, tagLine, name, desc, cloud, intro].filter(Boolean);
      gsap.killTweensOf(allElements);
    };
  }, [pathname]);

  /* ------------------------
            MAIN PAGE
    ------------------------*/
  return (
    <div className="h-full no-scrollbar">
      <section ref={introRef} className="intro h-screen overflow-hidden">
        <div className="flex flex-col text-container">
          <Image ref={logoRef} src="/brand/logo-w.png" className="logo" alt="Logo" width={1588} height={1284} />
          <p ref={tagLineRef} className="tag-line pt-10 text-white">
            Hello, {`I'm`}
          </p>
          <p ref={nameRef} className="text-9xl text-white">
            Biella!
          </p>
          <p ref={descRef} className="desc text-white pt-10">
            A web developer and UI/UX designer.
          </p>
        </div>

        <div className="cloud-container overflow-hidden">
          <Image ref={cloudRef} src="/media/cloud.png" alt="Cloud" width={1440} height={389} />
        </div>
      </section>
    </div>
  );
}

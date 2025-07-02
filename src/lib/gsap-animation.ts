"use client";

import gsap from "gsap";

// Type for intro animation refs
export interface IntroAnimationRefs {
  logo?: HTMLElement | null;
  tagLine?: HTMLElement | null;
  name?: HTMLElement | null;
  desc?: HTMLElement | null;
  cloud?: HTMLElement | null;
  intro?: HTMLElement | null;
}

export const gsapAnimations = {
  /**
   * Intro animation sequence
   * @param refs Object containing refs for elements to animate
   */
  intro: (refs: IntroAnimationRefs) => {
    const { logo, tagLine, name, desc, cloud, intro } = refs;

    // Kill any existing animations on these elements
    const allElements = [logo, tagLine, name, desc, cloud, intro].filter(Boolean);
    gsap.killTweensOf(allElements);

    // Reset all elements to their initial state before animating
    if (logo) gsap.set(logo, { y: "-100%" });
    if (tagLine) gsap.set(tagLine, { y: "100%", opacity: 0 });
    if (name) gsap.set(name, { y: "100%", opacity: 0 });
    if (desc) gsap.set(desc, { y: "100%", opacity: 0 });
    if (cloud) gsap.set(cloud, { y: "100%" });
    if (intro) gsap.set(intro, { backgroundPositionY: "-100%" });

    const tl = gsap.timeline({ delay: 0.5 });

    if (logo) tl.to(logo, { y: "0%", duration: 1, ease: "power2.out" });

    if (tagLine)
      tl.to(tagLine, {
        y: "0%",
        duration: 0.8,
        ease: "power2.out",
        opacity: 1,
      });

    if (name) tl.to(name, { y: "0%", duration: 0.8, ease: "power2.out", opacity: 1 }, "-=0.4");

    if (desc) tl.to(desc, { y: "0%", duration: 0.8, ease: "power2.out", opacity: 1 }, "-=0.4");

    if (cloud) tl.to(cloud, { y: "0%", duration: 1, ease: "power2.out" }, "-=0.5");

    if (intro)
      tl.to(
        intro,
        {
          backgroundPositionY: "0%",
          duration: 1.5,
          ease: "power2.out",
        },
        0
      ); // Start at the same time as the first animation

    return tl;
  },

  /**
   * Fade in a single element
   * @param el Element to animate
   * @param delay Optional delay in seconds
   * @param y Optional starting Y offset
   */
  fadeIn: (el: HTMLElement | null | undefined, delay = 0, y = 50) => {
    if (!el) return;

    gsap.from(el, {
      opacity: 0,
      y,
      duration: 1.2,
      ease: "power2.out",
      delay,
    });
  },

  /**
   * Stagger fade in a list of elements
   * @param elements Array of elements to animate
   * @param stagger Optional stagger duration in seconds
   */
  staggerFadeIn: (elements: (HTMLElement | null | undefined)[] | null, stagger = 0.2) => {
    if (!elements) return;

    // Filter out null/undefined
    const validElements = elements.filter(Boolean) as HTMLElement[];
    if (!validElements.length) return;

    gsap.from(validElements, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power2.out",
      stagger,
    });
  },
};

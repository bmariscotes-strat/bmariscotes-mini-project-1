"use client";

import { useEffect } from "react";

export function useBodyBackground(className: string) {
  useEffect(() => {
    // Add the background class to body
    document.body.classList.add(className);

    // Cleanup function to remove the class when component unmounts
    return () => {
      document.body.classList.remove(className);
    };
  }, [className]);
}

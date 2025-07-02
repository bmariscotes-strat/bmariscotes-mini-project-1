// hooks/useRoughNotation.ts
import { useEffect, useRef } from "react";
import { annotate } from "rough-notation";

interface RoughAnnotation {
  show: () => void;
  hide: () => void;
}

export function useRoughNotation() {
  const elementRef = useRef<HTMLSpanElement>(null);
  const underlineRef = useRef<RoughAnnotation | null>(null);
  const circleRef = useRef<RoughAnnotation | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    underlineRef.current = annotate(elementRef.current, {
      type: "underline",
      color: "#f2a58e",
      strokeWidth: 2,
      animationDuration: 500,
    });

    circleRef.current = annotate(elementRef.current, {
      type: "circle",
      color: "#f2a58e",
      padding: 5,
      strokeWidth: 2,
      animationDuration: 500,
    });

    underlineRef.current.show();

    return () => {
      underlineRef.current?.hide();
      circleRef.current?.hide();
    };
  }, []);

  const handleMouseEnter = () => {
    underlineRef.current?.hide();
    circleRef.current?.show();
  };

  const handleMouseLeave = () => {
    circleRef.current?.hide();
    underlineRef.current?.show();
  };

  return { elementRef, handleMouseEnter, handleMouseLeave };
}

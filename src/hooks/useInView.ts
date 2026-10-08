"use client";

import { useEffect, useRef, useState } from "react";

const DEFAULT_OPTIONS: IntersectionObserverInit = { threshold: 0.15, rootMargin: "0px 0px -8% 0px" };

/** Dispara uma única vez, quando o elemento entra na viewport. */
export function useInView<T extends Element>(options: IntersectionObserverInit = DEFAULT_OPTIONS) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setInView(true);
      observer.disconnect();
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}

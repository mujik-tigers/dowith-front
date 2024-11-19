import { useState, useEffect, useRef } from 'react';

export const useElementWidth = <T extends HTMLElement>(isActive?: boolean) => {
  const elementRef = useRef<T>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (!elementRef.current) return;

    setWidth(elementRef.current.clientWidth);

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect) {
          setWidth(entry.contentRect.width);
        }
      }
    });

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isActive]);

  return { elementRef, width };
};

import { useState, useEffect, useRef } from 'react';

type DebounceSetWidthCallback<T> = (value: T) => void;

const debounceSetWidth = <T>(
  callback: DebounceSetWidthCallback<T>,
  timeout = 300
) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return (value: T) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(value);
    }, timeout);
  };
};

export const useElementWidth = <T extends HTMLElement>(isActive?: boolean) => {
  const elementRef = useRef<T>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (!elementRef.current) return;

    const debouncedSetWidth = debounceSetWidth(setWidth, 500);

    setWidth(elementRef.current.clientWidth);

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect) {
          debouncedSetWidth(entry.contentRect.width);
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

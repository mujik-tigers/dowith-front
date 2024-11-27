import { useRef, useEffect } from 'react';

export const useResizeCssVariable = <T extends HTMLElement>(
  variableName: string,
  offset: number = 0,
  dependency?: boolean
) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const updateCssVariable = () => {
      const computedWidth = `${element.offsetWidth + offset}px`;
      document.documentElement.style.setProperty(variableName, computedWidth);
    };

    updateCssVariable();

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect) {
          updateCssVariable();
        }
      }
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
      document.documentElement.style.removeProperty(variableName);
    };
  }, [variableName, offset, dependency]);

  return { elementRef };
};

import { useEffect, useRef } from 'react';

type TUseIntersectionObserverProps = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
  enabled?: boolean;
  onIntersect: () => void;
};

export const useIntersectionObserver = <T extends HTMLElement>({
  root = null,
  rootMargin = '0px',
  threshold = 1.0,
  enabled = true,
  onIntersect,
}: TUseIntersectionObserverProps) => {
  const targetRef = useRef<T | null>(null);

  useEffect(() => {
    if (!enabled || !targetRef.current) return;

    const observer: IntersectionObserver = new IntersectionObserver(
      onIntersect,
      { root, rootMargin, threshold }
    );
    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [onIntersect, root, rootMargin, threshold, enabled]);

  return { targetRef };
};

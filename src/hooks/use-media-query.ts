import { useEffect, useState } from 'react';

const getMatches = (query: string): boolean => {
  if (typeof window !== 'undefined') {
    return window.matchMedia(query).matches;
  }
  return false;
};

export const useMediaQuery = (mediaQuery: string) => {
  const [matches, setMatches] = useState(getMatches(mediaQuery));

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const documentChangeHandler = (event: MediaQueryListEvent) =>
      setMatches(event.matches);

    mediaQueryList.addEventListener('change', documentChangeHandler);

    return () => {
      mediaQueryList.removeEventListener('change', documentChangeHandler);
    };
  }, [mediaQuery]);

  return matches;
};

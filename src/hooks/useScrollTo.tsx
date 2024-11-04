import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollTo = () => {
  const section = useRef<HTMLTableSectionElement>(null);

  const { hash } = useLocation();
  useEffect(() => {
    if (hash && hash.includes(section.current!.id)) {
      section.current!.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return { section };
};

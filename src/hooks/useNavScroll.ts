import { useEffect } from 'react';

export function useNavScroll() {
  useEffect(() => {
    const handler = () => {
      const nav = document.getElementById('nav');
      if (nav) nav.classList.toggle('on', window.scrollY > 50);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
}

'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useAnimateOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // We use a small timeout to ensure the DOM has updated 
    // and PageTransition has finished its initial push/swap
    const timer = setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>('.anim');
      if (!els.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('anim--visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );

      els.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);
}

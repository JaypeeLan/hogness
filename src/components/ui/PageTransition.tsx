'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, type ReactNode } from 'react';
import styles from './PageTransition.module.scss';

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove(styles.enter);
    // Force reflow
    void el.offsetHeight;
    el.classList.add(styles.enter);
  }, [pathname]);

  return (
    <div ref={ref} className={styles.wrap}>
      {children}
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './PageLoader.module.scss';

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setLoading(true);
    setVisible(true);
    const t = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setVisible(false), 300);
    }, 500);
    return () => clearTimeout(t);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className={[styles.loader, loading ? styles['loader--active'] : styles['loader--done']].join(' ')} aria-hidden="true">
      <div className={styles.bar} />
    </div>
  );
}

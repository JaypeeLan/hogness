'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './SplashScreen.module.scss';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Ensure all text content is ready (simulated by a small delay or window.onload)
    const handleLoad = () => {
      // Small buffer to ensure rendering is stable
      setTimeout(() => {
        setIsFading(true);
        setTimeout(() => setIsVisible(false), 800); // Match CSS transition
      }, 1000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`${styles.wrapper} ${isFading ? styles.fadeOut : ''}`}>
      <div className={styles.content}>
        <div className={styles.logoBox}>
          <Image
            src="/images/brand/white-logo.png"
            alt="Hogens Technologies Ltd"
            width={180}
            height={60}
            className={styles.logo}
            priority
          />
        </div>
        <div className={styles.loadingBar}>
          <div className={styles.progress} />
        </div>
        <p className={styles.text}>Building Future-Ready Tech Skills</p>
      </div>
    </div>
  );
}

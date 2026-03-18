'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';
import styles from './Header.module.scss';
import Image from 'next/image';
import { ChevronDownIcon } from '@/components/ui/Icons';
import { useServiceModal } from '@/contexts/ServiceModalContext';

import { COURSES, SERVICES } from '@/lib/data';

const NAV = [
  { href: '/',         label: 'Home'     },
  { href: '/about',    label: 'About'    },
  { href: '/services', label: 'Services', isDropdown: true, type: 'services', items: SERVICES },
  { href: '#',         label: 'Courses', isDropdown: true, type: 'courses', items: COURSES },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { openModal } = useServiceModal();

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header className={[styles.header, scrolled ? styles.scrolled : ''].filter(Boolean).join(' ')}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" className={styles.logo} aria-label="Hogens Technologies Ltd">
          <Image src="/images/brand/logo.png" alt="Hogens Technologies Ltd" width={205} height={47} className={styles.logoImg} />
          </Link>

          {/* Desktop nav */}
          <nav className={styles.nav} aria-label="Main navigation">
            {NAV.map(({ href, label, isDropdown, type, items }) => (
              isDropdown ? (
                <div 
                  key={`${type}-dropdown`}
                  className={styles.dropdownContainer}
                  onMouseEnter={() => setActiveDropdown(type || null)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    href={href} 
                    className={[styles.navLink, pathname.startsWith(href !== '#' ? href : `/${type}`) ? styles.navLinkActive : ''].filter(Boolean).join(' ')}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      {label} 
                      <ChevronDownIcon 
                        size={12} 
                        strokeWidth={3} 
                        style={{ transform: activeDropdown === type ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} 
                      />
                    </span>
                  </Link>
                  {activeDropdown === type && (
                    <div className={styles.dropdownMenu}>
                      {items?.map((item: any) => (
                        <Link 
                          key={item.slug} 
                          href={type === 'services' ? `/services#${item.slug}` : `/courses/${item.slug}`} 
                          className={styles.dropdownItem} 
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={href}
                  href={href}
                  className={[styles.navLink, isActive(href) ? styles.navLinkActive : ''].filter(Boolean).join(' ')}
                >
                  {label}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className={styles.cta}>
            <Button onClick={openModal} variant="primary" size="md" style={{ height: '44px', padding: '0 24px', fontSize: '13px', borderRadius: '8px' }}>
              Get Started
            </Button>
          </div>

          {/* Hamburger */}
          <button
            className={[styles.hamburger, menuOpen ? styles.hamburgerOpen : ''].filter(Boolean).join(' ')}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={[styles.drawer, menuOpen ? styles.drawerOpen : ''].filter(Boolean).join(' ')}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.drawerNav}>
          {NAV.map(({ href, label, isDropdown, type, items }, i) => (
            isDropdown ? (
               <div key={`mobile-${type}`} className={styles.drawerDropdown}>
                 <button 
                  className={styles.drawerLink} 
                  onClick={() => setActiveMobileDropdown(activeMobileDropdown === type ? null : (type || null))}
                  style={{ width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                 >
                   {label}
                   <ChevronDownIcon 
                    size={20} 
                    strokeWidth={2.5} 
                    style={{ 
                      transform: activeMobileDropdown === type ? 'rotate(180deg)' : 'rotate(0deg)', 
                      transition: 'transform 0.3s ease',
                      opacity: 0.5
                    }}
                   />
                 </button>
                 <div className={[styles.drawerSubNav, activeMobileDropdown === type ? styles.drawerSubNavOpen : ''].filter(Boolean).join(' ')}>
                    {items?.map((item: any) => (
                      <Link
                        key={item.slug}
                        href={type === 'services' ? `/services#${item.slug}` : `/courses/${item.slug}`}
                        className={styles.drawerSubLink}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                 </div>
               </div>
            ) : (
              <Link
                key={href}
                href={href}
                className={[styles.drawerLink, isActive(href) ? styles.drawerLinkActive : ''].filter(Boolean).join(' ')}
                style={{ animationDelay: menuOpen ? `${i * 60 + 80}ms` : '0ms' }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            )
          ))}
          <div className={styles.drawerCta}>
            <Button onClick={() => { setMenuOpen(false); openModal(); }} variant="primary" size="lg">
              Get Started
            </Button>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className={styles.overlay}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}



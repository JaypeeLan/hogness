'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@/components/ui/Button';
import styles from './Header.module.scss';
import Image from 'next/image';

import { COURSES } from '@/lib/data';

const NAV = [
  { href: '/',         label: 'Home'     },
  { href: '/about',    label: 'About'    },
  { href: '/services', label: 'Services' },
  { href: '#',         label: 'Courses', isDropdown: true },
];

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

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
            {NAV.map(({ href, label, isDropdown }) => (
              isDropdown ? (
                <div 
                  key="courses-dropdown"
                  className={styles.dropdownContainer}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className={[styles.navLink, pathname.startsWith('/courses') ? styles.navLinkActive : ''].filter(Boolean).join(' ')}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      Courses 
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>
                  {dropdownOpen && (
                    <div className={styles.dropdownMenu}>
                      {COURSES.map((course) => (
                        <Link key={course.slug} href={`/courses/${course.slug}`} className={styles.dropdownItem} onClick={() => setDropdownOpen(false)}>
                          {course.title}
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
            <Button as="link" href="/courses" variant="primary" size="md" style={{ height: '44px', padding: '0 24px', fontSize: '13px', borderRadius: '8px' }}>
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
          {NAV.map(({ href, label, isDropdown }, i) => (
            isDropdown ? (
               <div key="mobile-courses" className={styles.drawerDropdown}>
                 <button 
                  className={styles.drawerLink} 
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  style={{ width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                 >
                   Courses
                   <svg 
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
                    style={{ 
                      transform: mobileDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                      transition: 'transform 0.3s ease',
                      opacity: 0.5
                    }}
                   >
                     <polyline points="6 9 12 15 18 9"></polyline>
                   </svg>
                 </button>
                 <div className={[styles.drawerSubNav, mobileDropdownOpen ? styles.drawerSubNavOpen : ''].filter(Boolean).join(' ')}>
                    {COURSES.map((course) => (
                      <Link
                        key={course.slug}
                        href={`/courses/${course.slug}`}
                        className={styles.drawerSubLink}
                        onClick={() => setMenuOpen(false)}
                      >
                        {course.title}
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
            <Button as="link" href="/courses" variant="primary" size="lg">
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



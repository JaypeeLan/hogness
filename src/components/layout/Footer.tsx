import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import styles from './Footer.module.scss';

const COURSES_LINKS = [
  { href: '/courses/data-analysis',    label: 'Data Analysis'           },
  { href: '/courses/data-science',     label: 'Data Science'            },
  { href: '/courses/digital-literacy', label: 'Digital Literacy'        },
  { href: '/courses/coding-for-kids',  label: 'Coding for Kids'         },
  { href: '/courses/python',           label: 'Python'                  },
  { href: '/courses/ai',               label: 'Artificial Intelligence' },
];

const COMPANY_LINKS = [
  { href: '/',         label: 'Home'     },
  { href: '/about',    label: 'About Us' },
  { href: '/services', label: 'Services' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            {/* Col 1 — Brand */}
            <div className={styles.brand}>
              <Link href="/" className={styles.brandLogo} aria-label="Hogens home">
                <Image 
                  src="/images/brand/white-logo.png" 
                  alt="Hogens Technologies Ltd" 
                  width={160} 
                  height={45} 
                  style={{ objectFit: 'contain' }}
                />
              </Link>
              <p className={styles.brandDesc}>
                Empowering learners with practical technology skills for the digital economy.
              </p>
              <div className={styles.socials}>
                <a href="https://twitter.com" className={styles.social} aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon />
                </a>
                <a href="https://facebook.com" className={styles.social} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon />
                </a>
                <a href="https://linkedin.com" className={styles.social} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </a>
                <a href="https://youtube.com" className={styles.social} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <YouTubeIcon />
                </a>
              </div>
            </div>

            {/* Col 2 — Company */}
            <div className={styles.col}>
              <h4 className={styles.colHeading}>Company</h4>
              <ul className={styles.colList}>
                {COMPANY_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className={styles.colLink}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Courses */}
            <div className={styles.col}>
              <h4 className={styles.colHeading}>Courses</h4>
              <ul className={styles.colList}>
                {COURSES_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className={styles.colLink}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact */}
            <div className={styles.col}>
              <h4 className={styles.colHeading}>Contact Us</h4>
              <ul className={styles.colList}>
                <li className={styles.contactItem}>+234 806 897 4616</li>
                <li className={styles.contactItem}>hogenstechnologiesltd@gmail.com</li>
              </ul>
              <Button as="link" href="/about#contact" variant="primary" size="sm" className={styles.helpBtn}>
                Help Center
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <p className={styles.copy}>
            © 2026 HOGENS TECHNOLOGIES LTD. ALL RIGHT RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

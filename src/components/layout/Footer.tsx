import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import styles from './Footer.module.scss';
import { TwitterIcon, FacebookIcon, LinkedInIcon, YouTubeIcon } from '@/components/ui/Icons';

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


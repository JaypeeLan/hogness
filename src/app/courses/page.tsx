import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/sections/CTABanner';
import { COURSES } from '@/lib/data';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Courses',
  description:
    'Explore all courses — Data Analysis, Data Science, Python, Digital Literacy, Coding for Kids, and AI/Machine Intelligence.',
};

export default function CoursesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={`${styles.heroContent} anim`}>
            <span className={styles.heroBadge}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <circle cx="6" cy="6" r="5" fill="#6C2BD9" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
              </svg>
              Our Courses
            </span>
            <h1 className={styles.heroH1}>
              Practical Skills for the Digital Economy
            </h1>
            <p className={styles.heroDesc}>
              Choose from our range of technology-focused courses — each one designed to give you
              real, applicable skills from day one.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.courses} id="courses">
        <div className="container">
          <div className={`${styles.header} anim`}>
            <span className={styles.tag}>All Courses</span>
            <h2 className={styles.title}>Find the right programme for you</h2>
            <p className={styles.desc}>
              All courses are practical, hands-on, and accessible to learners at every level.
            </p>
          </div>
          <div className={styles.grid}>
            {COURSES.map((course, i) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className={[styles.card, i === 2 ? styles.cardFeatured : ''].filter(Boolean).join(' ') + ' anim'}
                data-delay={String((i % 3) + 1)}
              >
                <span className={styles.cardIcon}>{course.icon}</span>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{course.title}</h3>
                  <p className={styles.cardDesc}>{course.description}</p>
                </div>
                <div className={styles.cardMeta}>
                  <span className={styles.cardDuration}>⏱ {course.duration}</span>
                  <span className={styles.cardLevel}>{course.level}</span>
                </div>
                <span className={styles.cardCta}>Explore course →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import CTABanner from '@/components/sections/CTABanner';
import { COURSES } from '@/lib/data';
import styles from './page.module.scss';
import { NodeIcon } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'All Courses | Hogens Technologies Ltd',
  description: 'Explore all courses — Data Analysis, Data Science, Python, Digital Literacy, Coding for Kids, and AI/Machine Intelligence.',
  openGraph: {
    title: 'All Courses | Hogens Technologies Ltd',
    description: 'Explore all courses — Data Analysis, Data Science, Python, Digital Literacy, Coding for Kids, and AI/Machine Intelligence.',
    url: 'https://hogness.vercel.app/courses',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Hogens Technologies Ltd' }],
    type: 'website',
  }
};

export default function CoursesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={`${styles.heroContent} anim`}>
            <span className={styles.heroBadge}>
              <NodeIcon size={12} strokeWidth={2} />
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
                className={`${styles.card} anim`}
                data-delay={String((i % 3) + 1)}
              >
                <img className={styles.cardIcon} src={course.icon} alt={course.title} width={40} height={40} />
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{course.title}</h3>
                  <p className={styles.cardDesc}>{course.description}</p>
                </div>
                <div className={styles.cardMeta}>
                  {course.duration && <span className={styles.cardDuration}>⏱ {course.duration}</span>}
                  {course.price && <span className={styles.cardLevel}>{course.price}</span>}
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

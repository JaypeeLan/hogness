import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { COURSES, getCourse } from '@/lib/data';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/sections/CTABanner';
import ModuleList from '@/components/courses/ModuleList';
import styles from './page.module.scss';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: 'Course Not Found' };

  return {
    title: `${course.title} | Hogens Technologies Ltd`,
    description: course.description,
  };
}

export async function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourse(slug);

  if (!course) {
    notFound();
  }

  return (
    <main className={styles.main}>
      {/* ══ HERO ════════════════════════════════════════════ */}
      <section className={styles.heroOuter}>
        <div className={styles.heroBg}>
          <div className={styles.heroGrid}>
            <div className={`${styles.heroContent} anim`}>
              <div className={styles.heroBadge}>
                <NodeIcon />
                <span>{course.slug.replace('-', ' ').toUpperCase()}</span>
              </div>
              <h1 className={styles.heroTitle}>{course.pageTitle}</h1>
              <p className={styles.heroDesc}>{course.subDescription}</p>
              <div className={styles.heroBtnGroup}>
                <Button as="link" href="/about#contact" variant="primary" size="lg">
                  Enroll Now &rarr;
                </Button>
                <Button as="link" href="#overview" variant="white" size="lg" className={styles.whiteBtn}>
                  Download Course Outline
                </Button>
              </div>
            </div>
            <div className={styles.heroImgWrap}>
              <Image 
                src={`/images/courses/${course.slug}-page-img.png`} 
                alt={course.title} 
                width={680} 
                height={750} 
                className={styles.heroImg}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ OVERVIEW ════════════════════════════════════════ */}
      <section className={styles.overviewSection} id="overview">
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={`${styles.overviewTextCol} anim`}>
              <h2 className={styles.sectionTitle}>Course Overview</h2>
              <p className={styles.overviewText}>{course.overview}</p>
              <div className={styles.courseMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Duration:</span>
                  <span className={styles.metaValue}>{course.duration}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Level:</span>
                  <span className={styles.metaValue}>{course.level}</span>
                </div>
                {course.ageRange && (
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Age Range:</span>
                    <span className={styles.metaValue}>{course.ageRange}</span>
                  </div>
                )}
              </div>
            </div>
            <div className={`${styles.overviewLearnCol} anim`} data-delay="2">
              <h3 className={styles.learnTitle}>What You Will Learn</h3>
              <div className={styles.learnGrid}>
                {course.outcomes.slice(0, 6).map((outcome, i) => (
                  <div key={i} className={styles.learnCard}>
                    <div className={styles.learnIcon}>
                       <LearnIcon index={i} />
                    </div>
                    <p>{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MODULES ═════════════════════════════════════════ */}
      <section className={styles.modulesSection}>
        <div className="container">
          <h2 className={styles.sectionTitleCentered}>Learning Modules</h2>
          <div className="anim">
            <ModuleList modules={course.modules} />
          </div>
        </div>
      </section>

      {/* ══ TOOLS & SKILLS ══════════════════════════════════ */}
      <section className={styles.toolsSection}>
        <div className="container">
          <div className={styles.toolsGrid}>
            <div className={`${styles.toolsCol} anim`}>
              <h3 className={styles.subTitle}>Tools you will use</h3>
              <div className={styles.toolsPills}>
                {course.tools.map((tool) => (
                  <span key={tool} className={styles.toolPill}>{tool}</span>
                ))}
              </div>
            </div>
            <div className={`${styles.skillsCol} anim`} data-delay="2">
              <h3 className={styles.subTitle}>Skills You Will Gain</h3>
              <ul className={styles.skillsList}>
                {course.skills.map((skill, i) => (
                  <li key={i}><BulletCheck /> {skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CAREERS ═════════════════════════════════════════ */}
      <section className={styles.careersSection}>
        <div className="container">
          <h2 className={styles.sectionTitleCentered}>Career Opportunities</h2>
          <p className={styles.careerSubtitle}>Taking this course can lead to careers in various industries, including healthcare, business, and technology.</p>
          <div className={styles.careerGrid}>
            {course.careers.map((career, i) => (
              <div key={i} className={`${styles.careerCard} anim`} data-delay={String(i)}>
                <div className={styles.careerIconWrap}>
                   <BookIcon />
                </div>
                <h4>{career.label}</h4>
              </div>
            ))}
          </div>
          <div className={styles.careerAction}>
            <Button as="link" href="/about#contact" variant="primary" size="md" style={{ paddingInline: '40px' }}>
              Enroll Now —&gt;
            </Button>
          </div>
        </div>
      </section>

      <CTABanner 
         title="Start Your Learning Journey Today"
         description="Technology skills are becoming essential in almost every field. Whether you are a beginner or looking to develop new career skills, our programs can help you take the next step."
         ctaLabel="Register Now"
      />
    </main>
  );
}

function NodeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#008EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  );
}

function BulletCheck() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#E8F4FF"/>
      <path d="M8 12L11 15L16 9" stroke="#008EFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  );
}

function LearnIcon({ index }: { index: number }) {
  const icons = [
    // Book
    <svg key="1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
    // Database
    <svg key="2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    // Palette / Creative
    <svg key="3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a10 10 0 0 0-10 10c0 5.52 4.48 10 10 10a10 10 0 0 0 10-10c0-1.66-1.34-3-3-3h-1c-1.66 0-3-1.34-3-3V2z"/><path d="M7 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M11 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M16 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="M12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>,
    // Chart
    <svg key="4" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
    // Trending
    <svg key="5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
  ];
  return icons[index % icons.length];
}

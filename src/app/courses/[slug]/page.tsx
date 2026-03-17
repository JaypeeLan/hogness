import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { COURSES, getCourse } from '@/lib/data';
import Button from '@/components/ui/Button';
import EnrollButton from '@/components/ui/EnrollButton';
import CTABanner from '@/components/sections/CTABanner';
import ModuleList from '@/components/courses/ModuleList';
import styles from './page.module.scss';
import { NodeIcon, BookIcon, DataAnalysisIcon, PaletteIcon, ChartIcon, TrendingIcon } from '@/components/ui/Icons';

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
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={`${styles.heroContent} anim`}>
                <div className={styles.heroBadge}>
                  <NodeIcon size={12} strokeWidth={2} style={{ color: '#008EFF' }} />
                  <span>{course.slug.replace('-', ' ').toUpperCase()}</span>
                </div>
                <h1 className={styles.heroTitle}>{course.pageTitle}</h1>
                <p className={styles.heroDesc}>{course.subDescription}</p>
                <div className={styles.heroBtnGroup}>
                  <EnrollButton variant="primary" size="lg">
                    Enroll Now &rarr;
                  </EnrollButton>
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
                />
              </div>
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

      {/* ... rest of the file ... */}

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
                  <li key={i}><Image src="/images/icons/skills-icon.svg" alt="Skill" width={22} height={22} style={{ flexShrink: 0 }} /> {skill}</li>
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
            <EnrollButton variant="primary" size="md" style={{ paddingInline: '40px' }}>
              Enroll Now —&gt;
            </EnrollButton>
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

function LearnIcon({ index }: { index: number }) {
  const icons = [
    <BookIcon key="1" size={20} />,
    <DataAnalysisIcon key="2" size={20} />,
    <PaletteIcon key="3" size={20} />,
    <ChartIcon key="4" size={20} />,
    <TrendingIcon key="5" size={20} />
  ];
  return icons[index % icons.length];
}


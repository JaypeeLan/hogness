import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/sections/CTABanner';
import { COURSES, SERVICES, FAQS, LEARNING_STEPS } from '@/lib/data';
import styles from './page.module.scss';
import Image from 'next/image';
import EnrollButton from '@/components/ui/EnrollButton';
import { 
  NodeIcon, 
  ToolsIcon, 
  ProblemsIcon, 
  ConceptsIcon, 
  ConfidenceIcon,
  AIIcon,
  DataScienceIcon,
  DataAnalysisIcon,
  DigitalLitIcon,
  PythonIcon,
  CodeKidsIcon,
  SVCDataIcon,
  SVCTechIcon,
  SVCDesignIcon,
  SVCConsultIcon,
  SVCResourcesIcon,
  FAQPlusIcon,
  FAQMinusIcon
} from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Build Future-Ready Tech Skills That Open New Opportunities',
};

export default function HomePage() {
  return (
    <>
      {/* ══ HERO — full-width centered text, wide image below ══ */}
      <section className={styles.heroOuter}>
        <div className={styles.heroBg}>
          <div className="container">
            <div className={`${styles.heroContent} anim`}>
              <span className={styles.heroBadge}>
                <NodeIcon size={16} />
                PRACTICAL TECH TRAINING
              </span>
              <h1 className={styles.heroH1}>
                <span> Build Future-Ready Tech Skills That </span> Open New Opportunities
              </h1>
              <p className={styles.heroDesc}>
                At Hogens Technologies Ltd, we make technology simple, practical, and accessible. Whether you want to explore data, understand AI, or start coding, our hands-on programs help you learn with confidence.
              </p>
              <div className={styles.heroActions}>
                <Button as="link" href="/courses" variant="primary" size="lg">
                  Explore Courses &rarr;
                </Button>
                <EnrollButton variant="white" size="lg" style={{ color: '#000', fontWeight: 'bold' }}>
                  Start Learning Today
                </EnrollButton>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroImgContainer}>
          <div className={styles.heroImgInner}>
            <img src="/images/heroes/hero-img.png" alt="Students learning" loading="lazy" className={styles.heroImage} />
          </div>
        </div>
      </section>

      {/* ══ TRUSTED PARTNER — 3 landscape image cards ══ */}
      <section className={styles.trust}>
        <div className="container">
          <div className={`${styles.trustHeader} anim`}>
            <h2 className={styles.trustTitle}>A Trusted Partner for <br/> Learning &amp; Technology</h2>
            <p className={styles.trustDesc}>
              Hogens Technologies Ltd is a growing technology company focused on helping individuals and <br/> organizations understand and use technology more effectively.
            </p>
          </div>
          <div className={styles.trustGrid}>
            {[
              { title: 'Technology Expertise', desc: 'We combine deep tech knowledge with a passion for teaching to deliver programs that truly work.', imgSrc: '/images/sections/trustedCardImg1.png' },
              { title: 'Hands-On Practice',    desc: 'Clear explanations paired with practical exercises so learners can apply skills immediately.' , imgSrc: '/images/sections/trustedCardImg2.png' },
              { title: 'For Everyone',         desc: 'Technology should empower people, not confuse them. Our programs are designed for all skill levels.', imgSrc: '/images/sections/trustedCardImg3.png' },
            ].map(({ title, desc, imgSrc }, i) => (
              <div key={title} className={`${styles.trustCard} anim`} data-delay={String(i + 1)}>
                <div className={styles.trustCardImg}>
                  <Image src={imgSrc} alt={title} width={600} height={338} />
                </div>
                <h3 className={styles.trustCardTitle}>{title}</h3>
                <p className={styles.trustCardDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ABOUT SNIPPET — image left + dark card right ══ */}
      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImgWrap}>
              <Image src="/images/sections/about-section-img.png" alt="Student learning" loading="lazy" width={660} height={829} className={styles.aboutImage} />
            </div>
            <div className={`${styles.aboutContent} anim`}>
             
              <h2 className={styles.aboutH2}>
                  About Hogens Technologies Ltd
              </h2>
              <p className={styles.aboutText}>
           Hogens Technologies Ltd is a technology company dedicated to helping individuals, institutions, and organizations unlock the power of technology and data.
We provide technology training, educational consulting, instructional design, and digital learning resources that support modern learning and innovation. Our goal is simple: help people understand technology and use it to build a smarter future.         </p>
            
              <Button as="link" href="/about" variant="primary" size="md" style={{ width: 'fit-content', marginTop: 'auto' }}>
                Learn More About Us              
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES — 3-col then 2-col grid ══ */}
      <section className={styles.services}>
        <div className="container">
          <div className={`${styles.sectionHeader} anim`}>
            <span className={styles.servicesTag}>OUR SERVICES</span>
            <h2 className={styles.sectionTitle}>
              Technology Solutions That Support <br /> Learning and Growth
            </h2>
            <p className={styles.sectionDesc}>
              We offer a range of services designed to help individuals, institutions, and organizations thrive in the digital age.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {SERVICES.map(({ slug, title, description }, i) => (
              <Link key={slug} href={`/services#${slug}`} className={`${styles.serviceCard} anim`} data-delay={String((i % 3) + 1)}>
                <span className={styles.serviceIconBox}>
                  {slug === 'data-analysis' && <SVCDataIcon />}
                  {slug === 'tech-skills' && <SVCTechIcon />}
                  {slug === 'instructional-design' && <SVCDesignIcon />}
                  {slug === 'educational-consultancy' && <SVCConsultIcon />}
                  {slug === 'educational-resources' && <SVCResourcesIcon />}
                </span>
                <h3 className={styles.serviceCardTitle}>{title}</h3>
                <p className={styles.serviceCardDesc}>{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LEARN BY DOING — text left, image right ══ */}
      <section className={styles.lbd}>
        <div className="container">
          <div className={styles.lbdGrid}>
            <div className={`${styles.lbdContent} anim`}>
              <h2 className={styles.lbdTitle}>Learn by Doing</h2>
              <p className={styles.lbdDesc}>
           Our training programs combine clear instruction with hands-on exercises so students can practice what they learn. Our goal is to make technology understandable and useful for every learner.       you work on projects, datasets, and exercises that build genuine competence.
              </p>
              <ul className={styles.lbdList}>
                {[
                  { icon: <ToolsIcon />, label: 'Work with real digital tools and software' },
                  { icon: <ProblemsIcon />, label: 'Practice solving real-world problems' },
                  { icon: <ConceptsIcon />, label: 'Learn concepts step by step' },
                  { icon: <ConfidenceIcon />, label: 'Build confidence with guided exercises' }
                ].map((item, i) => (
                  <li key={i} className={styles.lbdItem}>
                    <div className={styles.lbdIconBox}>
                      {item.icon}
                    </div>
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.lbdImgWrap}>
              <Image src="/images/sections/learn-by-doing.png" alt="Learn by Doing" width={660} height={612} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEATURED COURSES — 3-col then 2-col grid, 3rd card purple ══ */}
      <section className={styles.courses}>
        <div className="container">
          <div className={`${styles.sectionHeader} anim`}>
            <h2 className={styles.sectionTitle}>Featured Courses</h2>
            <p className={styles.sectionDesc}>Real understanding. Practical tools. Skills that last.</p>
          </div>
          <div className={styles.coursesGrid}>
            {COURSES.map((course, i) => (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                className={`${styles.courseCard} anim`}
                data-delay={String((i % 3) + 1)}
              >
                <div className={styles.courseIconWrap}>
                  {course.slug === 'ai-ml' && <AIIcon />}
                  {course.slug === 'data-science' && <DataScienceIcon />}
                  {course.slug === 'data-analysis' && <DataAnalysisIcon />}
                  {course.slug === 'digital-literacy' && <DigitalLitIcon />}
                  {course.slug === 'python' && <PythonIcon />}
                  {course.slug === 'coding-for-kids' && <CodeKidsIcon />}
                </div>
                <h3 className={styles.courseCardTitle}>{course.title}</h3>
                <p className={styles.courseCardDesc}>{course.description}</p>
                <span className={styles.courseCardCta}>Learn More &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ LEARNING PROCESS — 4 cols with colored dot circles ══ */}
      <section className={styles.process}>
        <div className="container">
          <div className={`${styles.sectionHeader} anim`}>
            <h2 className={styles.sectionTitle}>Our Learning Process</h2>
            <p className={styles.sectionDesc}>A simple and practical approach designed to help every learner understand technology with confidence.</p>
          </div>
          <div className={styles.processGrid}>
            {LEARNING_STEPS.map(({ color, label, desc, num }, i) => (
              <div key={label} className={`${styles.processStep} anim`} data-delay={String(i + 1)}>
                <div className={styles.processDot} style={{ backgroundColor: color }}>
                  {num}
                </div>
                <div className={styles.processContent}>
                  <h3 className={styles.processLabel}>{label}</h3>
                  <p className={styles.processDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ — accordion with + / × toggle ══ */}
      <section className={styles.faq}>
        <div className="container">
          <div className={`${styles.sectionHeader} anim`} style={{ marginBottom: '32px' }}>
            <h2 className={styles.sectionTitle}>Frequently asked questions</h2>
            <p className={styles.sectionDesc}>We're happy to answer your questions</p>
          </div>
          <div className={styles.faqList}>
            {FAQS.map(({ q, a }, i) => (
              <details key={q} className={`${styles.faqItem} anim`} data-delay={String(Math.min(i + 1, 4))}>
                <summary className={styles.faqQ}>
                  <span>{q}</span>
                  <span className={styles.faqToggle} aria-hidden="true">
                    <FAQPlusIcon className={styles.faqPlus} />
                    <FAQMinusIcon className={styles.faqMinus} />
                  </span>
                </summary>
                <p className={styles.faqA}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GET IN TOUCH — 3 circle-icon cards ══ */}
      <section className={styles.contact}>
        <div className="container">
          <div className={`${styles.sectionHeader} anim`}>
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
            <p className={styles.sectionDesc}>Have questions about our programs or training opportunities? We are here to help.</p>
          </div>
          <div className={styles.contactCards}>
            {[
              { href: 'tel:+2348068974616', imgSrc: '/images/contact/call.png',  label: 'Call Us',   value: '+234 806 897 4616', sub: 'Speak directly with our team for more information about our programs.' },
              { href: 'mailto:hogenstechnologiesltd@gmail.com', imgSrc: '/images/contact/email.png', label: 'Email Us',  value: 'hogenstechnologiesltd@gmail.com', sub: 'Send us an email and a member of our team will respond to your inquiry.' },
              { href: 'https://wa.me/2348068974616', imgSrc: '/images/contact/chat.png',  label: 'Chat With Us', value: 'Chat on Whatsapp', sub: 'Contact us through whatsApp for quick responses to your questions' },
            ].map(({ href, imgSrc, label, value, sub }, i) => (
              <div key={label} className={`${styles.contactCard} anim`} data-delay={String(i + 1)}>
                <span className={styles.contactImageWrap}>
                  <Image src={imgSrc} alt={label} width={80} height={80} className={styles.contactImage} />
                </span>
                <h3 className={styles.contactLabel}>{label}</h3>
                <p className={styles.contactSub}>{sub}</p>
                <a href={href} className={styles.contactValue} style={{ color: '#6600C9' }}>{value}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}


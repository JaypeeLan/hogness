import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/sections/CTABanner';
import { COURSES, SERVICES, FAQS, LEARNING_STEPS } from '@/lib/data';
import styles from './page.module.scss';
import Image from 'next/image';

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
                <NodeIcon />
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
                <Button as="link" href="/courses" variant="white" size="lg" style={{ color: '#000', fontWeight: 'bold' }}>
                  Start Learning Today
                </Button>
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
            <h2 className={styles.trustTitle}>A Trusted Partner for<br/>Learning &amp; Technology</h2>
            <p className={styles.trustDesc}>
              Hogens Technologies Ltd is a growing technology company focused on helping individuals and<br/>organizations understand and use technology more effectively.
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
              Technology Solutions That Support<br />Learning and Growth
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
                className={[styles.courseCard, i === 2 ? styles.courseCardFeatured : ''].filter(Boolean).join(' ') + ' anim'}
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
            <h2 className={styles.sectionTitle}>Freequently asked questions</h2>
            <p className={styles.sectionDesc}>We're happy to answer your questions</p>
          </div>
          <div className={styles.faqList}>
            {FAQS.map(({ q, a }, i) => (
              <details key={q} className={`${styles.faqItem} anim`} data-delay={String(Math.min(i + 1, 4))}>
                <summary className={styles.faqQ}>
                  <span>{q}</span>
                  <span className={styles.faqToggle} aria-hidden="true">
                    <svg className={styles.faqPlus} width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <svg className={styles.faqMinus} width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3 9h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
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
              { bg: '#2563EB', imgSrc: '/call.png',  label: 'Call Us',   value: '+234 806 897 4016', sub: 'Speak directly with our team for more information about our programs.' },
              { bg: '#8B5CF6', imgSrc: '/email.png', label: 'Email Us',  value: 'hogenstechnologiesltd@gmail.com', sub: 'Send us an email and a member of our team will respond to your inquiry.' },
              { bg: '#111827', imgSrc: '/chat.png',  label: 'Chat With Us', value: 'Chat on Whatsapp', sub: 'Contact us through whatsApp for quick responses to your questions' },
            ].map(({ bg, imgSrc, label, value, sub }, i) => (
              <div key={label} className={`${styles.contactCard} anim`} data-delay={String(i + 1)}>
                <span className={styles.contactCircle} style={{ backgroundColor: bg }}>
                  <Image src={imgSrc} alt={label} width={28} height={28} />
                </span>
                <h3 className={styles.contactLabel}>{label}</h3>
                <p className={styles.contactSub}>{sub}</p>
                <p className={styles.contactValue} style={{ color: bg }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

function NodeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  );
}

function DotIcon({ color = '#6C2BD9' }: { color?: string }) {
  return (
   <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 17.5C20.3769 17.5032 19.7663 17.6746 19.2325 17.9961L15.8961 14.6589C16.3715 13.9454 16.6251 13.1073 16.6251 12.25C16.6251 11.3927 16.3715 10.5546 15.8961 9.84113L18.1248 7.6125C18.6885 7.88406 19.3302 7.94731 19.9361 7.79104C20.5421 7.63478 21.0732 7.26909 21.4353 6.75876C21.7974 6.24843 21.9672 5.62639 21.9147 5.00284C21.8621 4.37929 21.5905 3.79448 21.148 3.352C20.7055 2.90952 20.1207 2.63793 19.4972 2.58535C18.8736 2.53277 18.2516 2.70258 17.7412 3.06471C17.2309 3.42685 16.8652 3.95792 16.709 4.56386C16.5527 5.16979 16.6159 5.81148 16.8875 6.37525L14.6589 8.60388C13.9454 8.12852 13.1073 7.87488 12.25 7.87488C11.3927 7.87488 10.5546 8.12852 9.84113 8.60388L6.50388 5.26663C6.82521 4.73312 6.99661 4.12279 7 3.5C7 2.80777 6.79473 2.13108 6.41014 1.55551C6.02556 0.979934 5.47893 0.53133 4.83939 0.266423C4.19985 0.00151648 3.49612 -0.0677952 2.81719 0.0672531C2.13825 0.202301 1.51461 0.535644 1.02513 1.02513C0.535644 1.51461 0.202301 2.13825 0.0672531 2.81719C-0.0677952 3.49612 0.00151648 4.19985 0.266423 4.83939C0.53133 5.47894 0.979934 6.02556 1.55551 6.41015C2.13108 6.79473 2.80777 7 3.5 7C4.12309 6.99677 4.73374 6.82536 5.2675 6.50388L8.60388 9.84113C8.12852 10.5546 7.87487 11.3927 7.87487 12.25C7.87487 13.1073 8.12852 13.9454 8.60388 14.6589L5.26663 17.9961C4.73311 17.6748 4.12279 17.5034 3.5 17.5C2.80777 17.5 2.13108 17.7053 1.55551 18.0899C0.979934 18.4744 0.53133 19.0211 0.266423 19.6606C0.00151648 20.3002 -0.0677952 21.0039 0.0672531 21.6828C0.202301 22.3618 0.535644 22.9854 1.02513 23.4749C1.51461 23.9644 2.13825 24.2977 2.81719 24.4328C3.49612 24.5678 4.19985 24.4985 4.83939 24.2336C5.47893 23.9687 6.02556 23.5201 6.41014 22.9445C6.79473 22.3689 7 21.6922 7 21C6.99676 20.3769 6.82536 19.7663 6.50388 19.2325L9.84113 15.8961C10.3065 16.2063 10.8273 16.4238 11.375 16.5366V19.411C10.7912 19.6174 10.2991 20.0236 9.98582 20.5577C9.67251 21.0918 9.55809 21.7195 9.66281 22.3298C9.76752 22.9401 10.0846 23.4937 10.558 23.8928C11.0315 24.292 11.6308 24.5109 12.25 24.5109C12.8692 24.5109 13.4685 24.292 13.942 23.8928C14.4154 23.4937 14.7325 22.9401 14.8372 22.3298C14.9419 21.7195 14.8275 21.0918 14.5142 20.5577C14.2009 20.0236 13.7088 19.6174 13.125 19.411V16.5366C13.6727 16.4238 14.1935 16.2063 14.6589 15.8961L17.9961 19.2334C17.6748 19.7669 17.5034 20.3772 17.5 21C17.5 21.6922 17.7053 22.3689 18.0899 22.9445C18.4744 23.5201 19.0211 23.9687 19.6606 24.2336C20.3002 24.4985 21.0039 24.5678 21.6828 24.4328C22.3618 24.2977 22.9854 23.9644 23.4749 23.4749C23.9644 22.9854 24.2977 22.3618 24.4328 21.6828C24.5678 21.0039 24.4985 20.3002 24.2336 19.6606C23.9687 19.0211 23.5201 18.4744 22.9445 18.0899C22.3689 17.7053 21.6922 17.5 21 17.5ZM12.25 9.625C12.7692 9.625 13.2767 9.77896 13.7084 10.0674C14.1401 10.3558 14.4765 10.7658 14.6752 11.2455C14.8739 11.7251 14.9258 12.2529 14.8246 12.7621C14.7233 13.2713 14.4733 13.739 14.1062 14.1062C13.739 14.4733 13.2713 14.7233 12.7621 14.8246C12.2529 14.9259 11.7251 14.8739 11.2455 14.6752C10.7658 14.4765 10.3558 14.1401 10.0674 13.7084C9.77896 13.2767 9.625 12.7692 9.625 12.25C9.6257 11.554 9.90248 10.8867 10.3946 10.3946C10.8867 9.90248 11.554 9.6257 12.25 9.625ZM1.75 3.5C1.75 3.15388 1.85264 2.81554 2.04493 2.52775C2.23722 2.23997 2.51053 2.01567 2.83031 1.88321C3.15008 1.75076 3.50194 1.7161 3.84141 1.78363C4.18088 1.85115 4.4927 2.01782 4.73744 2.26256C4.98218 2.50731 5.14885 2.81913 5.21638 3.15859C5.2839 3.49806 5.24924 3.84993 5.11679 4.1697C4.98434 4.48947 4.76004 4.76278 4.47225 4.95507C4.18446 5.14737 3.84612 5.25 3.5 5.25C3.03602 5.24954 2.59116 5.06502 2.26308 4.73693C1.93499 4.40884 1.75046 3.96399 1.75 3.5ZM3.5 22.75C3.15388 22.75 2.81554 22.6474 2.52775 22.4551C2.23997 22.2628 2.01567 21.9895 1.88321 21.6697C1.75076 21.3499 1.7161 20.9981 1.78363 20.6586C1.85115 20.3191 2.01782 20.0073 2.26256 19.7626C2.50731 19.5178 2.81913 19.3512 3.15859 19.2836C3.49806 19.2161 3.84993 19.2508 4.1697 19.3832C4.48947 19.5157 4.76278 19.74 4.95507 20.0278C5.14737 20.3155 5.25 20.6539 5.25 21C5.24954 21.464 5.06501 21.9088 4.73693 22.2369C4.40884 22.565 3.96399 22.7495 3.5 22.75ZM21 22.75C20.6539 22.75 20.3155 22.6474 20.0278 22.4551C19.74 22.2628 19.5157 21.9895 19.3832 21.6697C19.2508 21.3499 19.2161 20.9981 19.2836 20.6586C19.3512 20.3191 19.5178 20.0073 19.7626 19.7626C20.0073 19.5178 20.3191 19.3512 20.6586 19.2836C20.9981 19.2161 21.3499 19.2508 21.6697 19.3832C21.9895 19.5157 22.2628 19.74 22.4551 20.0278C22.6474 20.3155 22.75 20.6539 22.75 21C22.7493 21.4639 22.5647 21.9086 22.2367 22.2367C21.9086 22.5647 21.4639 22.7493 21 22.75Z" fill="#0088FF"/>
</svg>

  );
}

function CheckCircle() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="10" fill="rgba(108,43,217,0.10)"/>
      <path d="M6.5 10.5l2.5 2.5 4.5-5" stroke="#6C2BD9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PhoneIcon2() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/><path d="M14.05 2a9 9 0 018 7.94"/><path d="M14.05 6A5 5 0 0118 10"/></svg>;
}

function EmailIcon2() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
}

function ChatIcon2() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
}

// LBD Icons
function ToolsIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>; }
function ProblemsIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2v1"/><path d="M12 7a5 5 0 0 0-3.3 8.5H15.3A5 5 0 0 0 12 7z"/></svg>; }
function ConceptsIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>; }
function ConfidenceIcon() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>; }

// Course Area Icons
function AIIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>; }
function DataScienceIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>; }
function DataAnalysisIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>; }
function DigitalLitIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>; }
function PythonIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>; }
function CodeKidsIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>; }

function SVCDataIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>; }
function SVCTechIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>; }
function SVCDesignIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>; }
function SVCConsultIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>; }
function SVCResourcesIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>; }

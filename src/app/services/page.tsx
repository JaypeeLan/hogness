import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/sections/CTABanner';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Services | Hogens Technologies Ltd',
  description: 'Technology solutions for learning and innovation.',
};

export default function ServicesPage() {
  return (
    <main className={styles.main}>
      {/* ══ HERO ════════════════════════════════════════════ */}
      <section className={styles.heroOuter}>
        <div className={styles.heroBg}>
          <div className="container">
            <div className={`${styles.heroContent} anim`}>
              <span className={styles.heroBadge}>
                <NodeIcon />
                OUR SERVICES
              </span>
              <h1 className={styles.heroH1}>
                Technology Solutions for Learning and Innovation
              </h1>
              <p className={styles.heroText}>
                At Hogens Technologies Ltd, we provide technology-driven solutions to support individuals, learners, 
                and educational institutions. Our services combine technology expertise with practical solutions 
                that improve learning, decision-making, and digital transformation.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.heroImgContainer}>
          <div className={styles.heroImgInner}>
            <Image 
              src="/images/heroes/services-hero.png" 
              alt="Technology Solutions" 
              width={1200} 
              height={600} 
              className={styles.heroImage}
            />
          </div>
        </div>
      </section>

      {/* ══ SERVICE SECTIONS ════════════════════════════════ */}
      
      {/* 1. Instructional Design */}
      <section className={styles.serviceSection}>
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={`${styles.serviceContent} anim`}>
              <h2 className={styles.serviceTitle}>Instructional Design</h2>
              <p className={styles.serviceDesc}>
                We design learning experiences that are engaging, effective, and results-oriented. 
                Our approach combines pedagogical expertise with modern learning technologies.
              </p>
              <ul className={styles.serviceBullets}>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Develop and deliver training materials</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Student-centred learning approaches</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Improve instructional materials</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Create interactive learning environments</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Align content to organisational goals</li>
              </ul>
              <Button as="link" href="/courses" variant="primary" size="md" className={styles.serviceBtn}>
                Enrol Today
              </Button>
            </div>
            <div className={styles.serviceImgWrap}>
              <Image src="/images/sections/instructional-design.png" alt="Instructional Design" width={600} height={400} className={styles.serviceImg} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Data Analysis Solutions */}
      <section className={styles.serviceSectionAlt}>
        <div className="container">
          <div className={`${styles.serviceGrid} ${styles.reverse}`}>
            <div className={`${styles.serviceContent} anim`}>
              <h2 className={styles.serviceTitle}>Data Analysis Solutions</h2>
              <p className={styles.serviceDesc}>
                We help organizations transform raw data into meaningful insights that support 
                smarter decision-making and improved outcomes.
              </p>
              <ul className={styles.serviceBullets}>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Data collection and cleaning</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Predictive analytics models</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Dashboard and report development</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Data strategy consulting</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Training in data tools</li>
              </ul>
              <Button as="link" href="/courses" variant="primary" size="md" className={styles.serviceBtn}>
                Enrol Today
              </Button>
            </div>
            <div className={styles.serviceImgWrap}>
              <Image src="/images/sections/data-analysis-solutions.png" alt="Data Analysis Solutions" width={600} height={400} className={styles.serviceImg} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tech Skills Training */}
      <section className={styles.serviceSection}>
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={`${styles.serviceContent} anim`}>
              <h2 className={styles.serviceTitle}>Tech Skills Training</h2>
              <p className={styles.serviceDesc}>
                Our hands-on training programs empower individuals with the standard technology 
                skills needed to succeed in the modern global digital economy.
              </p>
              <ul className={styles.serviceBullets}>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Python Programming</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Data Science</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Data Analysis</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Machine Learning</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Technical Writing</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Digital Literacy</li>
              </ul>
              <p className={styles.trainingSubtitle}>Empowering individuals with practical technology skills:</p>
              <ul className={styles.serviceBullets}>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Understand and build intelligent systems</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Interpret and visualize data effectively</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Build software and automate processes</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Strengthen your digital literacy</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Master data science and analytics</li>
              </ul>
              <Button as="link" href="/courses" variant="primary" size="md" className={styles.serviceBtn}>
                Enrol Now
              </Button>
            </div>
            <div className={styles.serviceImgWrap}>
              <Image src="/images/sections/tech-skills-training.png" alt="Tech Skills Training" width={600} height={400} className={styles.serviceImg} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Educational Consultancy */}
      <section className={styles.serviceSectionAlt}>
        <div className="container">
          <div className={`${styles.serviceGrid} ${styles.reverse}`}>
            <div className={`${styles.serviceContent} anim`}>
              <h2 className={styles.serviceTitle}>Educational Consultancy</h2>
              <p className={styles.serviceDesc}>
                We provide strategic advice to schools, government agencies, and organizations 
                to improve their educational outcomes and technology integration.
              </p>
              <ul className={styles.serviceBullets}>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Curriculum development</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> EdTech implementation and strategy</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Teacher professional development</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Educational research and data analysis</li>
              </ul>
              <Button as="link" href="/about" variant="primary" size="md" className={styles.serviceBtn}>
                Enrol Today
              </Button>
            </div>
            <div className={styles.serviceImgWrap}>
              <Image src="/images/sections/educational-consultancy.png" alt="Educational Consultancy" width={600} height={400} className={styles.serviceImg} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Educational Resources and Technology Tools */}
      <section className={styles.serviceSection}>
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={`${styles.serviceContent} anim`}>
              <h2 className={styles.serviceTitle}>Educational Resources and Technology Tools</h2>
              <p className={styles.serviceDesc}>
                We develop and provide high-quality digital resources and tools that make 
                learning more effective, accessible, and engaging for everyone.
              </p>
              <ul className={styles.serviceBullets}>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Digital learning platforms</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Interactive learning modules</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Open educational resources</li>
                <li><Image src="/images/icons/bullet-icon.svg" alt="bullet" width={18} height={18} className={styles.bulletIcon} /> Educational software development</li>
              </ul>
              <Button as="link" href="/courses" variant="primary" size="md" className={styles.serviceBtn}>
                Enrol Today
              </Button>
            </div>
            <div className={styles.serviceImgWrap}>
              <Image src="/images/sections/educational-resources.png" alt="Educational Resources" width={600} height={400} className={styles.serviceImg} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ════════════════════════════════════ */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={`${styles.whyHeader} anim`}>
            <h2 className={styles.whyTitle}>Why Choose Hogens Technologies</h2>
            <p className={styles.whySubtitle}>
              Our services are built around one core belief: technology should be useful, understandable, 
              and empowering for everyone.
            </p>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>
                <Image src="/images/icons/educational-resources.svg" alt="Resources" width={24} height={24} />
              </div>
              <h3>Practical and Relevant Skills</h3>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>
                <Image src="/images/icons/educational-resources.svg" alt="Design" width={24} height={24} />
              </div>
              <h3>Hands-on, Real-world Projects</h3>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>
                <Image src="/images/icons/educational-resources.svg" alt="Tech" width={24} height={24} />
              </div>
              <h3>Low student-teacher ratios</h3>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>
                <Image src="/images/icons/educational-resources.svg" alt="Consultancy" width={24} height={24} />
              </div>
              <h3>Flexible learning options</h3>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}

function NodeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6C2BD9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  );
}


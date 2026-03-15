
import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/sections/CTABanner';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'About | Hogens Technologies Ltd',
  description: 'Empowering individuals and organizations with practical technology skills.',
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* ══ HERO =============================================== */}
      <section className={styles.heroOuter}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroImgWrap}>
              <img src="/images/sections/about-section-img.png" alt="Student learning" loading="lazy" className={styles.heroImage} />
            </div>
            <div className={`${styles.heroContentCard} anim`}>
              <div className={styles.heroBadge}>
                <NodeIcon />
                About Hogens Technologies Ltd
              </div>
              <h1 className={styles.heroH1}>
                Empowering individuals and<br />
                organizations with practical<br />
                technology skills
              </h1>
              <p className={styles.heroText}>
            Hogens Technologies Ltd is a technology company dedicated to making learning and technology simple, practical, and accessible. Through hands-on training programs, digital education solutions, and technology consulting, we help people understand and use technology with confidence.<br/>
Whether you want to build digital skills, explore data, or understand emerging technologies, our goal is to support your journey toward knowledge and innovation.   </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ OUR STORY ========================================== */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyImgWrap}>
            <Image src="/images/sections/story-img.png" alt="Our Story" width={1200} height={500} className={styles.storyImg} />
          </div>
          <div className={`${styles.storyContent} anim`}>
            <h2 className={styles.storyTitle}>Our Story</h2>
            <p className={styles.storyText}>
          Hogens Technologies Ltd was created with a simple vision: to make technology education easier to understand and accessible to more people.
            </p>
            <p className={styles.storyText}>
Today, technology plays an important role in education, business, and everyday life. However, many people struggle to understand how to use digital tools effectively or where to begin learning modern technology skills.
Our mission is to bridge that gap by providing practical training and educational solutions that simplify complex concepts and help learners develop useful, real-world skills.            </p>
            <p className={styles.storyText}>
We believe that when people understand technology, they can use it to create opportunities, solve problems, and build a better future.            </p>
          </div>
        </div>
      </section>

      {/* ══ MISSION & VISION =================================== */}
      <section className={styles.mvSection}>
        <div className="container">
          <div className={styles.mvGrid}>
            <div className={`${styles.mvCard} anim`}>
              
                 <Image src="/images/sections/mission-img.png" alt="Mission" width={150} height={150} />
              
              <h2 className={styles.mvTitle}>Our Mission</h2>
              <p className={styles.mvText}>
            To empower individuals, institutions, and organizations with practical technology skills and digital knowledge that support growth, innovation, and informed decision-making.     </p>
            </div>
            <div className={`${styles.mvCard} anim`} data-delay="2">
         
                 <Image src="/images/sections/vision-img.png" alt="Vision" width={150} height={150} />
         
              <h2 className={styles.mvTitle}>Our Vision</h2>
              <p className={styles.mvText}>
               To contribute to a future where technology education is accessible, practical, and empowering for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GET IN TOUCH ======================================= */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={`${styles.contactHeader} anim`}>
            <h2 className={styles.contactTitle}>Get In Touch</h2>
            <p className={styles.contactSubtitle}>
              Have questions about our programs or training opportunities? We are here to help.
            </p>
          </div>
          
          <div className={styles.contactGrid}>
            {/* Left: Contact Info */}
            <div className={`${styles.contactInfoCol} anim`}>
              <h3 className={styles.contactInfoTitle}>Contact Information</h3>
              <ul className={styles.contactList}>
                <li>
                  <div className={styles.ciIconBox}>
                    <PhoneIconSm />
                  </div>
                  <div className={styles.ciText}>
                    <span className={styles.ciLabel}>Phone:</span>
                    <span className={styles.ciValue}>+234 809 027 4016</span>
                  </div>
                </li>
                <li>
                  <div className={styles.ciIconBox}>
                    <EmailIconSm />
                  </div>
                  <div className={styles.ciText}>
                    <span className={styles.ciLabel}>Email:</span>
                    <span className={styles.ciValue}>hogenstechnologiesltd@gmail.com</span>
                  </div>
                </li>
              </ul>
              <p className={styles.contactNote}>
                Our team responds to requests as quickly as possible.
              </p>
            </div>
            {/* Right: Form */}
            <div className={`${styles.contactFormCol} anim`} data-delay="2">
              <h3 className={styles.contactFormTitle}>Send Us a Message</h3>
              <p className={styles.contactFormSubtitle}>
                Fill in your contact details below to ensure we are able to get back to you.
              </p>
              <form className={styles.contactForm}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="E.g John Doe" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="john.doe@example.com" required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" placeholder="+234 000 000 0000" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows={4} placeholder="How can we help you?" required></textarea>
                </div>
                <Button as="button" type="submit" variant="primary" size="md" className={styles.submitBtn}>
                  Send Message
                </Button>
              </form>
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

function PhoneIconSm() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/><path d="M14.05 2a9 9 0 018 7.94"/><path d="M14.05 6A5 5 0 0118 10"/></svg>;
}

function EmailIconSm() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
}

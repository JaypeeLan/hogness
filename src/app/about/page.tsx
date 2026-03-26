
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Hogens Technologies Ltd',
  description: 'Learn about Hogens Technologies Ltd, our mission, vision, and how we empower individuals and organizations with practical technology skills.',
  openGraph: {
    title: 'About Us | Hogens Technologies Ltd',
    description: 'Learn about Hogens Technologies Ltd, our mission, vision, and how we empower individuals and organizations with practical technology skills.',
    url: 'https://hogness.vercel.app/about',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Hogens Technologies Ltd' }],
    type: 'website',
  }
};

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import CTABanner from '@/components/sections/CTABanner';
import styles from './page.module.scss';
import { NodeIcon } from '@/components/ui/Icons';

export default function AboutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'General Inquiry',
    description: '',
  });
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string | null }>({
    type: null,
    message: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: 'General Inquiry',
          description: '',
        });
      } else {
        const result = await response.json();
        setSubmitStatus({ type: 'error', message: `Error: ${result.message || 'Failed to send message'}` });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <NodeIcon size={12} strokeWidth={2} />
                About Hogens Technologies Ltd
              </div>
              <h1 className={styles.heroH1}>
                Empowering individuals and <br />
                organizations with practical <br />
                technology skills and digital solutions
              </h1>
              <p className={styles.heroText}>
                Hogens Technologies Ltd is a technology company dedicated to making learning and technology simple, practical, and accessible. Through hands-on training programs, digital education solutions, and technology consulting, we help people understand and use technology with confidence. <br/>
                Whether you want to build digital skills, explore data, or understand emerging technologies, our goal is to support your journey toward knowledge and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ OUR STORY ========================================== */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyImgWrap}>
            <Image src="/images/sections/story-img.png" alt="Our Story" width={800} height={500} className={styles.storyImg} />
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
                    <Image src="/images/contact/phone.png" alt="Call" width={24} height={24} />
                  </div>
                  <div className={styles.ciText}>
                    <span className={styles.ciLabel}>Phone:</span>
                    <span className={styles.ciValue}>+234 806 897 4616</span>
                  </div>
                </li>
                <li>
                  <div className={styles.ciIconBox}>
                    <Image src="/images/contact/mail.png" alt="Email" width={24} height={24} />
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
            <div id="contact" className={`${styles.contactFormCol} anim`} data-delay="2">
              <h3 className={styles.contactFormTitle}>Send Us a Message</h3>
              <p className={styles.contactFormSubtitle}>
                Fill in your contact details below to ensure we are able to get back to you.
              </p>
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="fullName">Name</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      placeholder="E.g John Doe" 
                      required 
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="john.doe@example.com" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="+234 000 000 0000" 
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="description">Message</label>
                  <textarea 
                    id="description" 
                    rows={4} 
                    placeholder="How can we help you?" 
                    required
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
                {submitStatus.message && (
                  <div className={`${styles.statusMessage} ${styles[submitStatus.type!]}`}>
                    {submitStatus.message}
                  </div>
                )}
                <Button as="button" type="submit" variant="primary" size="md" className={styles.submitBtn} disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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


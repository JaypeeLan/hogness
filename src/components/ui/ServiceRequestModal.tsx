'use client';

import React, { useState, useEffect } from 'react';
import { useServiceModal } from '@/contexts/ServiceModalContext';
import styles from './ServiceRequestModal.module.scss';
import Button from './Button';

export default function ServiceRequestModal() {
  const { isOpen, closeModal } = useServiceModal();
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsClosing(false);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
      setIsClosing(false);
    }, 300); // match animation duration
  };

  return (
    <div className={`${styles.overlay} ${isClosing ? styles.fadeOut : ''}`} onClick={handleClose}>
      <div 
        className={`${styles.modal} ${isClosing ? styles.slideDown : ''}`} 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className={styles.header}>
          <button className={styles.closeBtn} onClick={handleClose} aria-label="Close modal">
             X
          </button>
          <div className={styles.headerContent}>
            <span className={styles.brandName}>HOGENS TECHNOLOGIES LTD</span>
            <h2 id="modal-title" className={styles.title}>Request a Service</h2>
            <p className={styles.subtitle}>Tell us about your needs and how we can support your organization or project.</p>
          </div>
        </div>

        <div className={styles.body}>
          <form className={styles.form} onSubmit={(e) => { e.preventDefault(); /* Handle submit */ alert('Service Request Submitted!'); handleClose(); }}>
            
            <div className={styles.formGroup}>
              <label htmlFor="fullName">Full Name <span>*</span></label>
              <input type="text" id="fullName" placeholder="Input text" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address <span>*</span></label>
              <input type="email" id="email" placeholder="Input text" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number <span>*</span></label>
              <input type="tel" id="phone" placeholder="+234 800 000 0000" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="organization">Organization / Institution Name <span>*</span></label>
              <input type="text" id="organization" placeholder="Enter Organization / Institution Name" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="service">Service Interested In <span>*</span></label>
              <select id="service" required defaultValue="">
                <option value="" disabled>Select a service...</option>
                <option value="Data Analysis Solutions">Data Analysis Solutions</option>
                <option value="Instructional Design">Instructional Design</option>
                <option value="Tech Skills Training">Tech Skills Training</option>
                <option value="Educational Consultancy">Educational Consultancy</option>
                <option value="Educational Resources & Gadgets">Educational Resources & Gadgets</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="orgType">Type of Organization <span>*</span></label>
              <select id="orgType" required defaultValue="">
                <option value="" disabled>Select organization type...</option>
                <option value="Business / Company">Business / Company</option>
                <option value="School / Educational Institution">School / Educational Institution</option>
                <option value="Government Organization">Government Organization</option>
                <option value="Individual">Individual</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="timeline">When do you need this service?</label>
              <select id="timeline" defaultValue="">
                <option value="" disabled>Select a timeline...</option>
                <option value="As soon as possible">As soon as possible</option>
                <option value="Within 1 month">Within 1 month</option>
                <option value="Within 3 months">Within 3 months</option>
                <option value="Flexible timeline">Flexible timeline</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="description">Project or Service Description</label>
              <textarea id="description" placeholder="Input text" rows={4}></textarea>
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="consent" required />
              <label htmlFor="consent">I agree to be contacted by Hogens Technologies Ltd regarding my service request.</label>
            </div>

            <div className={styles.footer}>
              <Button type="submit" variant="primary" size="lg" style={{ width: '100%' }}>
                Submit Service Request
              </Button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import { useServiceModal } from '@/contexts/ServiceModalContext';
import styles from './ServiceRequestModal.module.scss';
import Button from './Button';

export default function ServiceRequestModal() {
  const { isOpen, selectedService, closeModal } = useServiceModal();
  const [isClosing, setIsClosing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    service: '',
    orgType: '',
    timeline: '',
    description: '',
    consent: false,
  });
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string | null }>({
    type: null,
    message: null,
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsClosing(false);
      // Pre-fill service if provided
      if (selectedService) {
        setFormData(prev => ({ ...prev, service: selectedService }));
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, selectedService]);

  if (!isOpen && !isClosing) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      closeModal();
      setIsClosing(false);
      // Reset form on close
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        organization: '',
        service: '',
        orgType: '',
        timeline: '',
        description: '',
        consent: false,
      });
    }, 300); // match animation duration
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [id]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
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
        setSubmitStatus({ type: 'success', message: 'Service Request Submitted Successfully!' });
        setTimeout(() => handleClose(), 2000);
      } else {
        const result = await response.json();
        setSubmitStatus({ type: 'error', message: `Failed: ${result.message || 'Unknown error'}` });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
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
          <form className={styles.form} onSubmit={handleSubmit}>
            
            <div className={styles.formGroup}>
              <label htmlFor="fullName">Full Name <span>*</span></label>
              <input 
                type="text" 
                id="fullName" 
                placeholder="Enter Full Name" 
                required 
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address <span>*</span></label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter Email Address" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number <span>*</span></label>
              <input 
                type="tel" 
                id="phone" 
                placeholder="+234 800 000 0000" 
                required 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="organization">Organization / Institution Name</label>
              <input 
                type="text" 
                id="organization" 
                placeholder="Enter Organization / Institution Name" 
                value={formData.organization}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="service">Service Interested In <span>*</span></label>
              <select 
                id="service" 
                required 
                value={formData.service}
                onChange={handleChange}
              >
                <option value="" disabled>Select a service...</option>
                <option value="Data Analysis Solutions">Data Analysis Solutions</option>
                <option value="Instructional Design">Instructional Design</option>
                <option value="Tech Skills Training">Tech Skills Training</option>
                <option value="Educational Consultancy">Educational Consultancy</option>
                <option value="Educational Resources & Gadgets">Educational Resources & Gadgets</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="orgType">Type of Organization</label>
              <select 
                id="orgType" 
                value={formData.orgType}
                onChange={handleChange}
              >
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
              <select 
                id="timeline" 
                value={formData.timeline}
                onChange={handleChange}
              >
                <option value="" disabled>Select a timeline...</option>
                <option value="As soon as possible">As soon as possible</option>
                <option value="Within 1 month">Within 1 month</option>
                <option value="Within 3 months">Within 3 months</option>
                <option value="Flexible timeline">Flexible timeline</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="description">Project or Service Description</label>
              <textarea 
                id="description" 
                placeholder="Tell us about your project" 
                rows={4}
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className={styles.checkboxGroup}>
              <input 
                type="checkbox" 
                id="consent" 
                required 
                checked={formData.consent}
                onChange={handleChange}
              />
              <label htmlFor="consent">I agree to be contacted by Hogens Technologies Ltd regarding my service request.</label>
            </div>

            <div className={styles.footer}>
              {submitStatus.message && (
                <div className={`${styles.statusMessage} ${styles[submitStatus.type!]}`}>
                  {submitStatus.message}
                </div>
              )}
              <Button type="submit" variant="primary" size="lg" style={{ width: '100%' }} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Service Request'}
              </Button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

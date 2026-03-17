'use client';

import React from 'react';
import Image from 'next/image';
import styles from './WhatsAppWidget.module.scss';

export default function WhatsAppWidget() {
  const phoneNumber = '+2348000000000'; // Replace with actual number if provided
  const message = 'Hello Hogens Technologies, I would like to inquire about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.whatsappWidget}
      aria-label="Chat with us on WhatsApp"
    >
      <Image 
        src="/whatsapp.png" 
        alt="WhatsApp" 
        width={181} 
        height={68} 
        className={styles.widgetIcon}
      />
    </a>
  );
}

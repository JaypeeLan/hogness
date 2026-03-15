'use client';

import { useState } from 'react';
import styles from '@/app/courses/[slug]/page.module.scss';

interface Module {
  title: string;
  summary: string;
  topics: string[];
}

interface Props {
  modules: Module[];
}

export default function ModuleList({ modules }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.modulesList}>
      {modules.map((module, i) => {
        const isOpen = openIndex === i;
        
        return (
          <div 
            key={i} 
            className={`${styles.moduleItem} ${isOpen ? styles.moduleOpen : ''}`} 
          >
            <div className={styles.moduleHeader} onClick={() => toggle(i)}>
              <h3 className={styles.moduleTitle}>
                Module {i + 1}: {module.title}
              </h3>
              <ChevronDownIcon className={isOpen ? styles.rotate : ''} />
            </div>
            
            <div className={`${styles.moduleBody} ${isOpen ? styles.show : ''}`}>
              <div className={styles.moduleBodyInner}>
                <p className={styles.moduleSummary}>{module.summary}</p>
                <ul className={styles.moduleTopics}>
                  {module.topics.map((topic, j) => (
                    <li key={j}>
                      <DotIcon /> {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className={className}
      style={{ transition: 'transform 0.3s ease' }}
    >
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  );
}

function DotIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className={styles.dot} style={{ flexShrink: 0 }}>
      <circle cx="4" cy="4" r="4" fill="#008EFF"/>
    </svg>
  );
}

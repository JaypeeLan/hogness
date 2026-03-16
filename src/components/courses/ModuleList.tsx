'use client';

import { useState } from 'react';
import styles from '@/app/courses/[slug]/page.module.scss';
import { ChevronDownIcon, DotIcon } from '@/components/ui/Icons';

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
              <ChevronDownIcon className={isOpen ? styles.rotate : ''} style={{ transition: 'transform 0.3s ease' }} />
            </div>
            
            <div className={`${styles.moduleBody} ${isOpen ? styles.show : ''}`}>
              <div className={styles.moduleBodyInner}>
                <p className={styles.moduleSummary}>{module.summary}</p>
                <ul className={styles.moduleTopics}>
                  {module.topics.map((topic, j) => (
                    <li key={j}>
                      <DotIcon color="#008EFF" className={styles.dot} /> {topic}
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


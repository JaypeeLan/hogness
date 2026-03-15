import Button from '@/components/ui/Button';
import styles from './CTABanner.module.scss';

interface Props {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export default function CTABanner({
  title = 'Start Your Learning Journey Today',
  description = 'Technology skills are becoming essential in almost every field. Whether you are a beginner or looking to advance your career skills, our programmes can help you take the next step.',
  ctaLabel = 'Register Now',
  ctaHref = '/courses',
}: Props) {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.desc}>{description}</p>
          <Button as="link" href={ctaHref} size="lg" style={{ backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}

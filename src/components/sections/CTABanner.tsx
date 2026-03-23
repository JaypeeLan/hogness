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
  ctaLabel = 'Get Started',
  ctaHref = '/courses',
}: Props) {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.desc}>{description}</p>
          <Button as="link" href={ctaHref} size="lg" className={styles.ctaBtn}>
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}

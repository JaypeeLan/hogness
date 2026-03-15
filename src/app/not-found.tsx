import Link from 'next/link';
import Button from '@/components/ui/Button';
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.errorCode}>404</div>
      <div className={styles.content}>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.description}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className={styles.actions}>
          <Link href="/">
            <Button variant="primary">Return Home</Button>
          </Link>
          <Link href="/courses">
            <Button variant="outline">Browse Courses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

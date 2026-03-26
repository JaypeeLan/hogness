import type { Metadata } from 'next';
import AboutClient from './AboutClient';

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

export default function AboutPage() {
  return <AboutClient />;
}


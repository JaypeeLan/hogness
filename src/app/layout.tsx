import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageLoader from '@/components/ui/PageLoader';
import SplashScreen from '@/components/ui/SplashScreen';
import PageTransition from '@/components/ui/PageTransition';
import AnimInit from '@/components/ui/AnimInit';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  metadataBase: new URL('https://hogness.vercel.app'), // Replace with actual domain if different
  title: {
    default: 'Hogens Technologies Ltd — Practical Tech Skills',
    template: '%s | Hogens Technologies Ltd',
  },
  description:
    'Hogens Technologies Ltd empowers individuals and organisations with practical technology skills through training, data solutions, and educational consultancy.',
  keywords: ['Technology Training', 'Data Analysis', 'Data Science', 'AI', 'Machine Learning', 'Digital Literacy', 'Coding for Kids', 'Nigeria Tech'],
  authors: [{ name: 'Hogens Technologies Ltd' }],
  creator: 'Hogens Technologies Ltd',
  publisher: 'Hogens Technologies Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hogness.vercel.app',
    siteName: 'Hogens Technologies Ltd',
    title: 'Hogens Technologies Ltd — Practical Tech Skills',
    description: 'Empowering individuals and organisations with practical technology skills through hands-on training and data solutions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hogens Technologies Ltd — Building Future-Ready Tech Skills',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hogens Technologies Ltd — Practical Tech Skills',
    description: 'Practical technology training for the modern economy.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SplashScreen />
        <NextTopLoader color="#6600C9" showSpinner={false} />
        <PageLoader />
        <Header />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <AnimInit />
      </body>
    </html>
  );
}

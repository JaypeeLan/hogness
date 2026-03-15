import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageLoader from '@/components/ui/PageLoader';
import PageTransition from '@/components/ui/PageTransition';
import AnimInit from '@/components/ui/AnimInit';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: {
    default: 'Hogens Technologies Ltd — Practical Tech Skills',
    template: '%s | Hogens Technologies Ltd',
  },
  description:
    'Hogens Technologies Ltd empowers individuals and organisations with practical technology skills through training, data solutions, and educational consultancy.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
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

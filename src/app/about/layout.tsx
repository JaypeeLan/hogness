import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Hogens Technologies Ltd',
  description: 'Empowering individuals and organizations with practical technology skills.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

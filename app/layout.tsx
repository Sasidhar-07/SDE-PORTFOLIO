import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Pannuru Sasidhar — Software Development Engineer',
  description: 'Portfolio of Pannuru Sasidhar, Software Development Engineer focused on full-stack systems and applied AI.',
  openGraph: { title: 'Pannuru Sasidhar — Software Development Engineer', description: 'Engineering useful things, thoughtfully.', type: 'website' }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

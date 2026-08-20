import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-inter' });
export const metadata: Metadata = {
  title: 'One Fix Pakistan | Home Repair, Renovation and Daily Services',
  description:
    'Book trusted electricians, plumbers, AC repair, home renovation, interior design and daily home services in Lahore, Karachi and Islamabad. Same day service, verified professionals.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="stylesheet" href="https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css" />
      </head>
      <body className="bg-paper font-sans text-ink antialiased">{children}</body>
    </html>
  );
}

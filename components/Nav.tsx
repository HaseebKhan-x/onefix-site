'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  { href: '/#services', label: 'Services' },
  { href: '/#renovation', label: 'Renovation' },
  { href: '/#guarantee', label: 'Our Promise' },
  { href: '/#how', label: 'How it works' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/#faq', label: 'FAQ' },
];

export default function Nav({ variant = 'home' }: { variant?: 'home' | 'detail' }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-[110] h-[2px] bg-accent-700" style={{ width: `${progress}%` }} />

      <nav className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-between gap-4 border-b border-divider bg-paper/90 px-5 py-3 backdrop-blur-md md:px-14">
        <Link href={variant === 'home' ? '#top' : '/'} className="flex items-center">
          <Image src="/images/logo.png" alt="One Fix" width={170} height={68} className="h-12 w-auto md:h-[68px]" priority />
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-300">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex flex-shrink-0 items-center gap-3">
          <a href="tel:+923435321012" className="hidden items-center gap-1.5 whitespace-nowrap text-sm text-ink xl:flex">
            <i className="ph ph-whatsapp-logo" /> +92 343 5321012
          </a>
          <a
            href="#book"
            className="whitespace-nowrap rounded-md bg-gradient-to-br from-accent-500 to-accent-800 px-5 py-2.5 text-sm text-white"
          >
            Book Now
          </a>
        </div>
      </nav>
    </>
  );
}

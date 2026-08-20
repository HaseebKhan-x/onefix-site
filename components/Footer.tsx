import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/lib/services-data';

export default function Footer({ variant = 'full' }: { variant?: 'full' | 'simple' }) {
  if (variant === 'simple') {
    return (
      <footer className="border-t border-divider px-5 pb-7 pt-12 text-center text-[13px] text-muted-600 md:px-16">
        <Link href="/" className="text-muted-400">
          &larr; Back to One Fix home
        </Link>
        <div className="mt-3">&copy; {new Date().getFullYear()} One Fix. All rights reserved.</div>
      </footer>
    );
  }
  const footerServices = SERVICES.slice(0, 6);
  return (
    <footer className="border-t border-divider px-5 pb-8 pt-14 md:px-16">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 md:grid-cols-4">
        <div>
          <Image src="/images/logo.png" alt="One Fix" width={160} height={52} className="mb-4 h-12 w-auto" />
          <p className="max-w-[280px] text-sm leading-relaxed text-muted-500">
            Home services and renovation, handled by one trusted team, from a quick repair to a full makeover, anywhere in Pakistan.
          </p>
        </div>
        <div>
          <div className="mb-3.5 text-[13px] uppercase tracking-wide text-muted-500">Services</div>
          <div className="flex flex-col gap-2.5">
            {footerServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="text-sm text-muted-300">
                {s.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-3.5 text-[13px] uppercase tracking-wide text-muted-500">Company</div>
          <div className="flex flex-col gap-2.5 text-sm text-muted-300">
            <a href="/#renovation">Renovation</a>
            <a href="/#guarantee">Our Promise</a>
            <a href="/#how">How it works</a>
            <a href="/#reviews">Reviews</a>
            <a href="/#faq">FAQ</a>
          </div>
        </div>
        <div>
          <div className="mb-3.5 text-[13px] uppercase tracking-wide text-muted-500">Contact</div>
          <div className="flex flex-col gap-2.5 text-sm text-muted-300">
            <span>
              <i className="ph ph-whatsapp-logo mr-1.5 text-accent-300" />
              +92 343 5321012
            </span>
            <span>
              <i className="ph ph-envelope-simple mr-1.5 text-accent-300" />
              info@onefix.com.pk
            </span>
            <span>
              <i className="ph ph-map-pin mr-1.5 text-accent-300" />
              Lahore, Pakistan
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1400px] flex-wrap justify-between gap-3 border-t border-divider pt-6 text-[13px] text-muted-600">
        <span>&copy; {new Date().getFullYear()} One Fix. All rights reserved.</span>
        <div className="flex gap-4">
          <i className="ph ph-instagram-logo" />
          <i className="ph ph-facebook-logo" />
          <i className="ph ph-whatsapp-logo" />
        </div>
      </div>
    </footer>
  );
}

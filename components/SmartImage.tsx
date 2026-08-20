import Image from 'next/image';
import { imageFor } from '@/lib/images';

export default function SmartImage({
  id,
  alt,
  className = '',
  rounded = '',
}: {
  id: string;
  alt: string;
  className?: string;
  rounded?: string;
}) {
  const src = imageFor(id);
  if (!src) {
    return (
      <div className={`relative flex items-center justify-center bg-accent-100 text-accent-400 ${rounded} ${className}`}>
        <span className="px-4 text-center text-sm opacity-70">{alt}</span>
      </div>
    );
  }
  return (
    <div className={`relative overflow-hidden ${rounded} ${className}`}>
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" />
    </div>
  );
}

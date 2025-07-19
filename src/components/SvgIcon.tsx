'use client';

interface SvgIconProps {
  src: string;
  className?: string;
  alt?: string;
}

export default function SvgIcon({ src, className, alt }: SvgIconProps) {
  return (
    <img 
      src={src} 
      alt={alt || 'icon'}
      className={className}
    />
  );
} 
'use client';

import { useEffect, useRef } from 'react';

interface ChromaTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function ChromaText({ children, className = '' }: ChromaTextProps) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    
    // Add the viewport class for intersection observer
    element.classList.add('chroma-text-viewport');

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <p ref={textRef} className={`w-fit text-2xl chroma-text ${className}`}>
      {children}
    </p>
  );
} 
'use client';

import { useEffect, useRef } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function FadeInSection({ children, className = "" }: FadeInSectionProps) {
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const current = domRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <div className={`fade-in ${className}`} ref={domRef}>
      {children}
    </div>
  );
}

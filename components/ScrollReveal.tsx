import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in ms
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  delay = 0 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setIsVisible(true);
          setHasTriggered(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // Cleanup handled by unobserve
    };
  }, [hasTriggered]);

  const transitionStyles = {
    transitionDuration: '800ms',
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: 'cubic-bezier(0.21, 0.45, 0.15, 1.00)', // Elegant easing
  };

  return (
    <div
      ref={ref}
      style={transitionStyles}
      className={`will-change-transform transform transition-all ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-8" 
      } ${className}`}
    >
      {children}
    </div>
  );
};
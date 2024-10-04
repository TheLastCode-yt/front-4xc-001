'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

const InfiniteMovingLetters = ({
  text = 'Olá Mundo',
  speed = 'fast',
  className,
}) => {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [animationDuration, setAnimationDuration] = useState('20s');

  useEffect(() => {
    // Ajusta a velocidade da animação
    switch (speed) {
      case 'fast':
        setAnimationDuration('20s');
        break;
      case 'normal':
        setAnimationDuration('40s');
        break;
      case 'slow':
        setAnimationDuration('80s');
        break;
      default:
        setAnimationDuration('20s');
    }
  }, [speed]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative overflow-hidden w-64 h-64 flex items-center justify-center',
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn('flex', {
          'animate-marquee': isHovering,
          'animate-none': !isHovering,
        })}
        style={{
          animationDuration: animationDuration,
          whiteSpace: 'nowrap',
        }}
      >
        <span className="text-6xl">{text}</span>
        {/* Repetir o texto para o efeito de rolagem contínua */}
        <span className="text-6xl">{text}</span>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
};

export default InfiniteMovingLetters;

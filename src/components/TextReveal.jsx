'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const TextReveal = ({
  children,
  color = 'red',
  as: Element = 'h1',
  duration = 1,
  direction = 'left',
}) => {
  const textRef = useRef(null);
  const [divWidth, setDivWidth] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false); // Para garantir que a animação ocorra apenas uma vez

  useEffect(() => {
    if (textRef.current) {
      setDivWidth(textRef.current.offsetWidth);
    }
  }, [children, color, duration, direction]);

  const variants = {
    hidden: {
      width: 0,
      transition: { duration: duration / 2 },
      x: direction === 'left' ? -divWidth : divWidth,
    },
    expanded: {
      width: divWidth,
      transition: { duration: duration / 2 },
      x: 0,
    },
    shrink: {
      width: 0,
      transition: { duration: duration / 2 },
      x: direction === 'left' ? -divWidth : divWidth,
    },
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial="hidden"
        whileInView={hasAnimated ? undefined : 'expanded'} // Inicia animação quando estiver na visualização
        animate={hasAnimated ? 'shrink' : undefined}
        variants={variants}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: color,
          height: '100%',
        }}
        onAnimationComplete={() => setHasAnimated(true)} // Garante que a animação ocorra apenas uma vez
      />
      <Element
        ref={textRef}
        style={{
          visibility: hasAnimated ? 'visible' : 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {children}
      </Element>
    </div>
  );
};

export default TextReveal;

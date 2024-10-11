'use client';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const MarqueeText = ({
  text,
  className = '',
  containerHeight = 'h-40', // Usando Tailwind para altura responsiva
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [offset, setOffset] = useState(0);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setOffset(prevOffset => {
        const textWidth = textRef.current?.offsetWidth || 0;
        const containerWidth = containerRef.current?.offsetWidth || 0;

        const newOffset = prevOffset - 2; // Mover da direita para a esquerda

        // Se o texto saiu completamente à esquerda, reiniciar para a direita
        if (newOffset <= -textWidth) {
          return containerWidth; // Reposicionar para o lado direito fora do container
        }

        return newOffset;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    if (isHovering) {
      animate();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering]);

  useEffect(() => {
    // Atualizar o tamanho da fonte com base na altura real do container
    const updateFontSize = () => {
      const containerHeightPx =
        containerRef.current?.getBoundingClientRect().height || 0;
      textRef.current.style.fontSize = `${containerHeightPx * 0.9}px`; // 90% da altura do container
    };

    updateFontSize(); // Atualiza o tamanho ao montar o componente

    window.addEventListener('resize', updateFontSize); // Atualiza em caso de resize
    return () => window.removeEventListener('resize', updateFontSize);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        `relative flex items-center justify-center cursor-pointer overflow-hidden ${containerHeight}`,
        className // Permitindo passar classes responsivas como w-full, h-20 etc.
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span
        ref={textRef}
        className="absolute whitespace-nowrap bg-green-500"
        style={{
          transform: `translateX(${offset}px)`, // Mover o texto horizontalmente
        }}
      >
        {text}
      </span>
    </div>
  );
};

const AchievementsSection = () => {
  return (
    <section>
      <div className="container mx-auto bg-purple-500 h-screen">
        <MarqueeText
          text="Banana"
          containerHeight="h-[800px]" // Usando Tailwind para altura
          className="w-[500px] md:w-[600px] lg:w-[400px] bg-black" // Responsivo com Tailwind
        />
      </div>
    </section>
  );
};

export default AchievementsSection;

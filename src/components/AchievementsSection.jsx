'use client';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const MarqueeText = ({
  carouselText,
  title,
  subtitle,
  text,
  className = '',
  containerHeight = 'h-40',
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

        const newOffset = prevOffset - 2; // Move text to the left

        if (newOffset <= -textWidth) {
          return containerWidth; // Reset text to the right
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
    // Ajustar tamanho da fonte para 600px
    const updateFontSize = () => {
      if (textRef.current) {
        textRef.current.style.fontSize = '600px'; // Font size fixo de 600px
      }
    };

    updateFontSize(); // Atualiza o tamanho ao montar o componente

    window.addEventListener('resize', updateFontSize); // Atualiza em caso de resize
    return () => window.removeEventListener('resize', updateFontSize);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        `relative flex z-10 flex-col gap-y-10 items-center justify-center cursor-pointer overflow-hidden ${containerHeight}`,
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        background:
          'linear-gradient(46.23deg, #000 50%, rgba(0, 0, 0, 0.8) 100%)',
      }}
    >
      {/* Marquee Text as a div with background and text clipping */}
      <div
        ref={textRef}
        className="absolute whitespace-nowrap -z-10 font-extrabold text-transparent capitalize block"
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 86, 255, 0.8) 0%, rgba(0, 86, 255, 0) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'rgba(0, 0, 0, 0)',
          lineHeight: '75%',
          fontWeight: 800,
          transform: `translateX(${offset}px)`, // Move text horizontally
        }}
      >
        {carouselText}
      </div>

      <div className="w-full">
        <h3 className="text-4xl font-semibold">{title}</h3>
        <p className="text-xl">{subtitle}</p>
      </div>

      <div className="w-full">
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

const AchievementsSection = () => {
  const achievementsData = [
    {
      title: '7,800,000+',
      subtitle: 'client accounts',
      text: 'FxPro has been providing online trading services to clients since 2002 and it currently serves 173 countries worldwide.',
      carouselText: 'client accounts',
      containerHeight: 'h-[460px]',
      className: 'w-[570px] pl-[135px]',
    },
    {
      title: '112+',
      subtitle: 'Awards',
      text: 'FxPro has received constant recognition in the industry, winning over 112 international awards to date for the quality of its services.',
      carouselText: 'Awards',
      containerHeight: 'h-[400px]',
      className: 'bg-blue-500',
    },
    {
      title: '5-star',
      subtitle: 'customer service',
      text: 'Our dedicated, multilingual customer service team works 24/5 to provide you with an exceptional level of support.',
      carouselText: 'customer service',
      containerHeight: 'h-[350px]',
      className: 'bg-green-500',
    },
    {
      title: '5',
      subtitle: 'industry regulations',
      text: 'FxPro is well-known throughout the industry as a trustworthy and reliable broker. We are regulated by the FCA, CySEC, FSCA and SCB.',
      carouselText: 'industry regulations',
      containerHeight: 'h-[500px]',
      className: 'bg-yellow-500',
    },
  ];

  return (
    <section>
      <div className="container mx-auto bg-purple-500 h-screen">
        <MarqueeText
          title={achievementsData[0].title}
          subtitle={achievementsData[0].subtitle}
          text={achievementsData[0].text}
          carouselText={achievementsData[0].carouselText}
          containerHeight={achievementsData[0].containerHeight}
          className={achievementsData[0].className}
        />
      </div>
    </section>
  );
};

export default AchievementsSection;

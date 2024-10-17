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
        `relative flex z-10 flex-col gap-y-10 items-center xl:items-start justify-center cursor-pointer overflow-hidden ${containerHeight}`,
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

      <div className="w-full xl:text-start text-center">
        <h3 className="text-4xl font-semibold">{title}</h3>
        <p className="text-xl">{subtitle}</p>
      </div>

      <div className="w-full max-w-[240px]">
        <p className="text-sm ">{text}</p>
      </div>
    </div>
  );
};

const AchievementsSection = () => {
  const achievementsData = [
    {
      title: '7,800,000+',
      subtitle: 'client accounts',
      text: 'Trader 4xc has been providing online trading services to clients since 2002 and it currently serves 173 countries worldwide.',
      carouselText: 'client accounts',
      containerHeight: 'h-[460px]',
      className: 'xl:w-[570px] xl:pl-[135px] xl:mt-[50px]',
    },
    {
      title: '112+',
      subtitle: 'Awards',
      text: 'Trader 4xc has received constant recognition in the industry, winning over 112 international awards to date for the quality of its services.',
      carouselText: 'Awards',
      containerHeight: 'h-[460px]',
      className: 'xl:w-[430px] xl:-ml-[160px] xl:mt-[150px] xl:pl-[30px]',
    },
    {
      title: '5-star',
      subtitle: 'customer service',
      text: 'Our dedicated, multilingual customer service team works 24/5 to provide you with an exceptional level of support.',
      carouselText: 'customer service',
      containerHeight: 'h-[460px]',
      className: 'xl:w-[400px] xl:pl-[30px] xl:-ml-[125px]',
    },
    {
      title: '5',
      subtitle: 'industry regulations',
      text: 'Trader 4xc is well-known throughout the industry as a trustworthy and reliable broker. We are regulated by the FCA, CySEC, FSCA and SCB.',
      carouselText: 'industry regulations',
      containerHeight: 'h-[460px]',
      className: 'xl:pl-[30px] xl:w-[480px] xl:-ml-[100px] xl:mt-[80px]',
    },
  ];

  return (
    <section>
      <div className="container mx-auto ">
        <div className="relative flex md:grid md:grid-cols-2 md:gap-x-6 xl:flex xl:gap-x-0 xl:flex-nowrap xl:flex-row flex-col gap-y-6">
          {achievementsData.map((achievement, index) => (
            <MarqueeText
              key={index}
              title={achievement.title}
              subtitle={achievement.subtitle}
              text={achievement.text}
              carouselText={achievement.carouselText}
              containerHeight={achievement.containerHeight}
              className={achievement.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;

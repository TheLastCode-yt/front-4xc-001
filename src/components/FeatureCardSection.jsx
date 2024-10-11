import Image from 'next/image';
import Link from 'next/link';

const FeatureCardSection = () => {
  const cardData = [
    {
      text: 'Análise Técnica da Central de Negociação',
      icon: 'candle-graphics',
      href: '/',
    },
    { text: 'FxPro.News', icon: 'news', href: '/' },
    { text: 'Calendário de Ganhos', icon: 'calculator', href: '/' },
    { text: 'Calendário econômico', icon: 'calendar', href: '/' },
  ];
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="flex items-center justify-center xl:gap-x-20 xl:flex-row flex-col gap-y-10">
          {cardData.map((item, index) => (
            <Link
              href={item.href}
              className="border border-[#212529] flex flex-col gap-y-6 items-center justify-center xl:h-[210px] px-4 py-10 xl:py-14 xl:px-5 flex-1 hover:bg-[#303135] transition-all duration-300 rounded-md group text-center w-full"
              key={index}
            >
              {/* icon */}
              <Image
                src={`/icons/${item.icon}.svg`}
                width={40}
                height={40}
                alt={item.icon}
                className="w-auto max-h-[40] max-w-[60px] group-hover:invert transition-all duration-300"
              />
              <p className="group-hover:text-white text-[#2d3436] transition-all duration-300">
                {item.text}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardSection;

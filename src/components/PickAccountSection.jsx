'use client';
import { useState } from 'react';
import ButtonOrLink from './ButtonOrLink';
import Image from 'next/image';
import ArrowSvg from './layout/ArrowSvg';

const PickAccountSection = () => {
  const [activeDiv, setActiveDiv] = useState(null);

  const handleMouseEnter = index => {
    setActiveDiv(index);
  };

  const accountsTypes = [
    {
      title: 'Standard',
      text: 'Uma conta excelente para todos os tipos de traders, com Spreads flexíveis em FX a partir de 1,2 pips via MT4/MT5, e trading em micro lotes disponível.',
      deposit: 'Depositar de $50',
      href: '/',
      carouselText: 'Standard',
    },
    {
      title: 'Raw+',
      text: 'Receba tratamento VIP com ZERO spreads (em mais de 90% do dia de trading) + comissão baixa (máx. 3,5 USD por lote, por transação) MT4/MT5',
      deposit: 'Depositar de $100',
      href: '/',
      carouselText: 'Raw+',
    },
    {
      title: 'Elite',
      text: 'Porquê escolher o VIP quando pode ser ELITE? Tal como na conta Raw+, irá beneficiar de ZERO spreads (em mais de 90% do dia de trading) + comissão baixa (máx. 3,5 USD por lote, por transação) e descontos de até 21% nas suas comissões! MT4/MT5',
      deposit: 'Depositar de $30k',
      href: '/',
      carouselText: 'Elite',
    },
    {
      title: 'cTrader',
      text: 'Use the cTrader platform range and get ultra-low spreads from 0.2 with a competitive commission of $35 per $1million traded.',
      deposit: 'Depositar de 50',
      href: '/',
      carouselText: 'cTrader',
    },
  ];

  return (
    <section>
      <div className="container mx-auto">
        <div className="w-full flex items-center justify-center gap-x-20">
          {accountsTypes.map((item, index) => (
            <PickAccountCard
              key={index}
              title={item.title}
              text={item.text}
              deposit={item.deposit}
              carouselText={item.carouselText}
              href={item.href}
              isActive={activeDiv === index}
              onMouseEnter={() => handleMouseEnter(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PickAccountCard = ({
  title,
  text,
  deposit,
  carouselText,
  href,
  isActive,
  onMouseEnter,
}) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={`transition-all h-[400px] max-w-[570px] max-h-[400px] p-16 bg-[#F8F8F8] text-black
        ${isActive ? 'w-[570px]' : 'w-[170px]'} overflow-hidden relative`}
    >
      {/* carrousel */}
      <div
        className={`text-[#F8F8F8] text-[300px] font-bold absolute left-0 h-[400px] 
            ${isActive ? 'carousel-active' : ''} w-full whitespace-nowrap z-0`}
      >
        <div>{carouselText}</div>
      </div>

      {/* arrow */}
      <div
        className={`
    absolute bottom-[10%] left-1/2 -translate-x-1/2
    ${isActive ? 'hidden' : 'opacity-100'}
    transition-opacity duration-500
  `}
      >
        <ArrowSvg className="w-4 h-4 fill-custom__blue" />
      </div>

      <div className="flex flex-col items-center justify-center gap-y-10 h-full z-10 relative">
        {/* title */}
        <div
          className={` text-center flex items-center justify-center ${
            isActive ? '' : 'transform -rotate-90 h-[170px]'
          }`}
        >
          <h3 className={`text-4xl font-bold ${isActive ? '' : 'w-full'}`}>
            {title}
          </h3>
        </div>

        {/* text */}
        <div
          className={`text-center transition-all duration-1000 
             ${isActive ? 'block opacity-100' : 'hidden opacity-0'} `}
        >
          <p
            className={`text-sm   
              ${isActive ? 'visible opacity-100' : 'invisible opacity-0'}
             `}
          >
            {text}
          </p>
        </div>

        {/* deposit */}
        <div
          className={`${
            isActive ? 'block opacity-100' : 'hidden opacity-0'
          } transition-all duration-1000`}
        >
          <p className="text-sm font-semibold">{deposit}</p>
        </div>

        {/* button */}
        <div
          className={`${isActive ? 'block opacity-100' : 'hidden opacity-0'}`}
        >
          <ButtonOrLink href={href} className={'bg-custom__blue'}>
            Abrir conta
          </ButtonOrLink>
        </div>
      </div>
    </div>
  );
};

export default PickAccountSection;

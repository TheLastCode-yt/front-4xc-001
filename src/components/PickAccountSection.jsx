'use client';
import { useState } from 'react';
import ButtonOrLink from './ButtonOrLink';
import Image from 'next/image';
import ArrowSvg from './layout/ArrowSvg';

const PickAccountSection = () => {
  const accountsTypes = [
    {
      title: 'Standard',
      text: 'Retorno Básico: Acesso a ativos com retorno padrão de 70%. Operações Simples: Acesso a operações de alta probabilidade com menor risco. Gestão de Risco: Ferramentas básicas de gestão de risco, como stop loss.',
      deposit: 'Depósito de 10 dólares',
      href: '/',
      carouselText: 'Standard',
    },
    {
      title: 'Raw+',
      text: 'Retorno Aumentado: Acesso a ativos com retorno de até 80%. Menores Spreads: Spreads mais baixos em operações. Gestão de Risco: Ferramentas básicas de gestão de risco, como stop loss.',
      deposit: 'Depósito de 50 dólares',
      href: '/',
      carouselText: 'Raw+',
    },
    {
      title: 'Elite',
      text: 'Retorno Premium: Acesso a ativos com retorno de até 90%. Análises Avançadas: Relatórios de mercado e análises técnicas. Atendimento Prioritário: Suporte ao cliente exclusivo e prioritário. Promoções e Bônus: Ofertas de bônus em depósitos. Gestão de Risco: Ferramentas básicas de gestão de risco, como stop loss.',
      deposit: 'Depósito de 100 dólares',
      href: '/',
      carouselText: 'Elite',
    },
    {
      title: 'Trader 4XC',
      text: 'Acesso a ativos com retorno de até 95%. Ferramentas Profundas: Plataforma avançada com ferramentas de trading e gráficos em tempo real. Acesso a Sinais de Trading: Sinais de operações diárias de especialistas. Copy trade Gestão de Risco: Ferramentas básicas de gestão de risco, como stop loss.',
      deposit: 'Depósito de 200 dólares',
      href: '/',
      carouselText: 'cTrader',
    },
  ];
  const [activeDiv, setActiveDiv] = useState(null);
  const [selectedDiv, setSelectedDiv] = useState(accountsTypes[0]);
  const handleMouseEnter = index => {
    setActiveDiv(index);
  };

  return (
    <section>
      <div className="container mx-auto">
        {/* Mobile Version */}
        <div className="flex items-center justify-between md:hidden">
          {accountsTypes.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedDiv(item)}
              className={` transition-all text-black bg-none rounded-full text-sm p-3 sm:p-5 sm:text-base 
                ${
                  selectedDiv.title === item.title &&
                  'border-custom__blue border'
                }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="w-full block md:hidden mt-10">
          <PickAccountCard
            title={selectedDiv.title}
            text={selectedDiv.text}
            deposit={selectedDiv.deposit}
            carouselText={selectedDiv.carouselText}
            href={selectedDiv.href}
            isActive={true}
          />
        </div>

        {/* desktop version */}
        <div className="w-full hidden md:flex items-center justify-center gap-x-20">
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
      className={`transition-all h-[400px] max-w-[570px] max-h-[400px] px-4 xl:p-16 bg-[#F8F8F8] text-black
        ${
          isActive ? 'md:w-[570px] w-full' : 'w-[170px]'
        } overflow-hidden relative`}
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

'use client';
import React, { useState } from 'react';
import Image from 'next/image';
/* components */
import ButtonOrLink from './ButtonOrLink';

const InteractiveGallery = () => {
  const items = [
    {
      title: 'Forex',
      subTitle: 'Forex',
      text: 'Negocie 70 pares de Forex grandes, pequenos e exóticos com condições de negociação competitivas.',
      btnText: 'Negociar Forex',
      imageUrl: '/images/frx@3x.webp',
    },
    {
      title: 'Metais',
      subTitle: 'Metais',
      text: (
        <>
          Negocie commodities metálicas como{' '}
          <strong className="underline">ouro</strong>,{' '}
          <strong className="underline">prata</strong> e{' '}
          <strong className="underline">platina.</strong>
        </>
      ),
      btnText: 'Negociar Metais',
      imageUrl: '/images/mtls@3x.webp',
    },
    {
      title: 'Cripto',
      subTitle: 'Criptomoedas CFDs',
      text: (
        <>
          Negocie <strong className="underline">CFDs de Bitcoin</strong>,{' '}
          <strong className="underline">CFDs de Ether</strong>,{' '}
          <strong className="underline">Doge CFDs</strong> e mais CFDs de
          criptomoedas e CFDs de altcoin
        </>
      ),
      btnText: 'Negociar Criptomoedas CFDs',
      imageUrl: '/images/crypt@3x.webp',
    },
    {
      title: 'Índices',
      subTitle: 'Índices',
      text: (
        <>
          Negocie CFDs de índices{' '}
          <strong className="underline">Principais</strong> e{' '}
          <strong className="underline">Menores</strong> à vista e futuros de
          todo o mundo.
        </>
      ),
      btnText: 'Negociar Índices',
      imageUrl: '/images/indices@3x.webp',
    },
    {
      title: 'Ações',
      subTitle: 'Ações',
      text: (
        <>
          Centenas de empresas públicas dos{' '}
          <strong className="underline">EUA</strong>,{' '}
          <strong className="underline">Reino Unido</strong>,{' '}
          <strong className="underline">França</strong> e{' '}
          <strong className="underline"> Alemanha</strong> disponível para
          negociação.
        </>
      ),
      btnText: 'Negociar Ações',
      imageUrl: '/images/shrs@3x.webp',
    },
    {
      title: 'Energia',
      subTitle: 'Energia',
      text: (
        <>
          Descubra oportunidades em contratos spot e futuros de petróleo bruto e
          gás natural no Reino Unido e nos EUA.
        </>
      ),
      btnText: 'Negociar Energia',
      imageUrl: '/images/energy@3x.webp',
    },
  ];
  const [activateItem, setActivateItem] = useState(items[0]);

  const handleSelectItem = index => {
    setActivateItem(items[index]);
  };

  return (
    <>
      <section className="py-10">
        <div className="border-y-[0.5px] border-gray-200/70">
          <div className="container mx-auto">
            <div className="w-full flex h-[520px] relative">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`w-full h-full flex-1 border-gray-200/70 group relative 
                ${index === 0 ? 'border-l-[0.5px]' : ''} 
                ${
                  index === items.length - 1
                    ? 'border-x-[0.5px]'
                    : 'border-l-[0.5px]'
                }
              `}
                  onClick={() => handleSelectItem(index)}
                >
                  <button
                    className={`w-full h-full inline-flex items-start justify-center group-hover:border-t-custom__blue 
                  border-t-[3px] border-t-transparent font-semibold text-sm
                  transition-all duration-300 pt-[4%] text-custom__blue group-hover:bg-[#0056ff]/5 
                  group-hover:backdrop-blur-sm group-hover:text-black
                  ${
                    activateItem.title === item.title
                      ? 'border-t-custom__blue bg-[#0056ff]/5 backdrop-blur-sm'
                      : ''
                  }
                `}
                    aria-pressed={activateItem.title === item.title}
                  >
                    {item.title}
                  </button>
                </div>
              ))}

              <Image
                src={activateItem.imageUrl}
                alt={activateItem.title}
                width={686}
                height={520}
                className="object-contain max-h-[520px] absolute -z-10 transition-opacity duration-300 top-[60px] bottom-0 right-0"
              />

              <div className="absolute flex items-center pl-[4%] w-full h-full text-black pointer-events-none">
                <div className="flex flex-col gap-y-4 max-w-[26%]">
                  <h3 className="text-5xl font-bold">{activateItem.title}</h3>
                  <p className="text-xl">{activateItem.text}</p>
                  <ButtonOrLink className={'bg-custom__blue z-10'}>
                    {activateItem.btnText}
                  </ButtonOrLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InteractiveGallery;

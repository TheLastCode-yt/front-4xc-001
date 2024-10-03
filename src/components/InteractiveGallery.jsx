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
      <div className="border-y-[0.5px] border-gray-200/20">
        <div className="container mx-auto">
          <div className="w-full flex h-[520px] relative">
            {items.map((item, index) => (
              <div
                key={index}
                className={`w-full h-full flex-1 border-gray-200/20 group z-10
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
                  className={`w-full  h-full inline-flex items-start justify-center group-hover:border-t-blue-500 
                  border-t-[3px] border-t-transparent
                group-hover:bg-gray-200/20 transition-all duration-300 pt-[4%]  
                ${activateItem.title === item.title ? 'border-t-blue-500' : ''}
                `}
                >
                  {item.title}
                </button>
              </div>
            ))}

            <div className="absolute flex items-center pl-[4%] w-full h-full">
              <div className="flex flex-col gap-y-4 max-w-[26%]">
                <h3 className="text-5xl">{activateItem.title}</h3>
                <p className="text-xl">{activateItem.text}</p>
                <ButtonOrLink className="w-fit btn bg-custom__blue z-10">
                  {activateItem.btnText}
                </ButtonOrLink>
              </div>

              <div>
                <Image
                  width={100}
                  height={100}
                  src={activateItem.imageUrl}
                  alt={activateItem.title}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InteractiveGallery;

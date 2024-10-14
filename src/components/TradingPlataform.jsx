import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import TextReveal from './TextReveal';
const TradingPlataform = () => {
  const plataforms = [
    {
      title: 'Plataforma de trading Trader 4xc',
      text: 'Eleve o seu trading com os nossos produtos',
      img: '/icons/logo-blue.svg',
      href: '/',
    },
    {
      title: 'Trader 4xc cTrader',
      text: 'Experiência dinâmica, sem interrupções',
      img: '/icons/fxpro-ctrader.svg',
      href: '/',
    },
    {
      title: 'Trader 4xc MetaTrader 4',
      text: 'A solução popular e clássica',
      img: '/icons/fxpro-mt4.svg',
      href: '/',
    },
    {
      title: 'Trader 4xc MetaTrader 5',
      text: 'Uma evolução nas funções de negociação',
      img: '/icons/fxpro-mt5.svg',
      href: '/',
    },
  ];

  return (
    <section className="py-20 text-black ">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-20 items-center justify-center">
          {/* text */}
          <div className="flex items-center flex-col gap-y-10 md:flex-row md:justify-between">
            <div className="flex-1">
              {/* <h2 className="text-4xl xl:text-5xl font-semibold">
                Navegue por toda a gama de plataformas
              </h2> */}
              <TextReveal
                as="h2"
                className="text-4xl xl:text-5xl font-semibold"
              >
                {' '}
                Navegue por toda a gama de plataformas
              </TextReveal>
            </div>

            <div className="flex-1">
              <p className="text-sm max-w-lg pl-10 border-l-4 border-black">
                Compreendemos que diferentes clientes têm necessidades
                diferentes. Portanto, oferecemos uma vasta seleção de
                plataformas fidedignas e{' '}
                <Link href="/awards" target="_blank" className="underline">
                  premiadas
                </Link>
                , com vários tipos de conta disponíveis.
              </p>
            </div>
          </div>

          {/* image */}
          <div className="relative w-full flex items-center justify-center flex-col  gap-y-3 xl:flex-row">
            <Image
              src="/images/teste22.webp"
              alt="platforms trading"
              width={720}
              height={400}
            />
            {/* card 1 */}
            <Card
              {...plataforms[0]}
              className={'xl:absolute xl:top-[12%] xl:left-[20%]'}
            />
            {/* card 2 */}
            <Card
              {...plataforms[1]}
              className={'xl:absolute xl:left-[11%] xl:bottom-[10%]'}
            />
            {/* card 3 */}
            <Card
              {...plataforms[2]}
              className={'xl:absolute xl:top-[15%] xl:right-[14%]'}
            />
            {/* card 4 */}
            <Card
              {...plataforms[3]}
              className={'xl:absolute xl:right-[18%] xl:bottom-[17%]'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ img, title, text, href, className }) => {
  return (
    <Link
      href={href}
      className={cn(
        'py-8 px-3 bg-[#f3f3f3] xl:bg-white hover:bg-black transition-all duration-300 text-black hover:text-white flex items-center gap-x-5 xl:w-fit xl:max-w-[310px] w-full',
        className
      )}
    >
      <picture>
        <Image
          width={50}
          height={50}
          src={img}
          alt={title}
          className="w-full max-w-[70px]"
        />
      </picture>

      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="font-normal text-sm">{text}</p>
      </div>
    </Link>
  );
};

export default TradingPlataform;

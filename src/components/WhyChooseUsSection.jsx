'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import TextReveal from './TextReveal';

const WhyChooseUsSection = () => {
  const data = [
    {
      title:
        'Trader 4XC: O Melhor Copy Trader de Opções Binárias com Inteligência Artificial e Robô HFT',
      text: 'Na Trader 4XC, oferecemos a melhor plataforma de copy trading para opções binárias, aliando a mais avançada inteligência artificial com o poder do robô HFT (High-Frequency Trading), o mais eficiente do mundo. Com nossa tecnologia de ponta, você pode maximizar seus ganhos, automatizar suas operações e seguir os traders de maior sucesso em tempo real. E o melhor? A Trader 4XC é a única corretora que aceita essa tecnologia revolucionária, permitindo que você opere com o robô HFT mais poderoso do mercado.',
    },
    {
      title: 'Por que a Trader 4XC é a escolha ideal para Opções Binárias?',
      text: 'Copy Trading Avançado: Siga e replique automaticamente as operações dos traders mais lucrativos, sem complicações. Inteligência Artificial: Nossa IA identifica as melhores oportunidades em frações de segundos, ajustando sua estratégia de forma autônoma e inteligente. Robô HFT: O mais poderoso robô de alta frequência do mercado, executando operações em velocidade máxima para aproveitar cada variação de preço com precisão. Plataforma Completa: Compatível com MetaTrader 4, MetaTrader 5 e WebTrader, tudo em uma única interface, pronta para atender traders de todos os níveis. Com a Trader 4XC, você tem a oportunidade de operar com a melhor tecnologia disponível e exclusiva, aumentando suas chances de sucesso em opções binárias. Aproveite agora o futuro do trading e eleve seus investimentos a outro nível com o melhor robô HFT e nossa inovadora IA.',
    },
  ];

  return (
    <section>
      <div className="container mx-auto px-4 py-8 text-black max-w-screen-xl">
        <div className="mb-20 text-center">
          <TextReveal as="h2" className="text-4xl xl:text-5xl font-semibold">
            {' '}
            Porque escolher a Trader 4XC{' '}
          </TextReveal>
        </div>

        <div className="flex flex-col md:flex-row  gap-y-10 justify-center items-center">
          {/* image */}
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/images/phones-redesign.webp"
              width={350}
              height={520}
              alt="telephones mockup image graphic"
            />
          </div>

          {/* cards */}
          <div className="flex-1">
            {data.map((item, index) => (
              <ExpandedBox key={index} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ExpandedBox = ({ title, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-6 p-4 rounded-2xl border-custom__blue border relative">
      <div className="flex justify-between items-center">
        {/* texts */}
        <div className="w-[90%]">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div
            className={`mt-4 text-gray-700 transition-all duration-500 ease-in-out overflow-hidden ${
              isExpanded ? 'max-h-[1000px]' : 'max-h-16'
            }`}
            style={{
              WebkitMaskImage: isExpanded
                ? 'none'
                : '-webkit-linear-gradient(top,#fff,hsla(0,0%,100%,.03))',
            }}
          >
            <p>{text}</p>
          </div>
        </div>
        {/* btn */}

        <div className="w-full h-full absolute flex items-end justify-end -left-[4%] bottom-[4%]">
          <button
            onClick={toggleExpand}
            className="text-2xl font-bold text-white focus:outline-none bg-custom__blue w-10 h-10 rounded-full transition-all duration-500"
          >
            {isExpanded ? '-' : '+'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;

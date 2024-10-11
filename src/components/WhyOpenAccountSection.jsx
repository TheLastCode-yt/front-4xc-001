import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WhyOpenAccountSection = () => {
  const cardsData = [
    {
      icon: 'pen',
      title: 'Registo',
      text: 'Preencha o formulário online e conte-nos um pouco sobre você, seu histórico financeiro e faça o upload do seu documento de identidade.',
      href: '/',
    },
    {
      icon: 'wallet',
      title: 'Financiar',
      text: 'Selecione entre uma variedade de métodos de pagamento convenientes, todos com 0 taxas de depósitos.',
      href: '/',
    },
    {
      icon: 'trade-bull',
      title: 'Negociar',
      text: 'Comece a negociar ao vivo sobre milhares de derivativos em Metais, Ações, Índices, Energias e Futuros.',
      href: '/',
    },
  ];

  const textsData = [
    {
      title: '112+ prêmios por excelência e confiabilidade',
      text: 'A maioria dos pedidos preenchidos em menos de 13ms',
    },
    {
      title: '8 Base Moedas',
      text: 'Variedade de plataformas e contas',
    },
    {
      title: 'Métodos de pagamento convenientes',
      text: 'Suporte ao cliente dedicado 24 horas por dia, 5 dias por semanas',
    },
  ];
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10">
          <div>
            <ul className="flex items-center justify-between flex-wrap gap-y-10 gap-x-4 w-full">
              {cardsData.map((item, index) => (
                <li className="xl:flex-1">
                  <Link
                    href={item.href}
                    key={index}
                    className="flex flex-col items-center gap-y-6 group hover:bg-[#303135] border border-[#3031351a] transition-all duration-300 xl:h-[310px] py-12 px-8 text-center"
                  >
                    <Image
                      src={`${`/icons/${item.icon}.svg`}`}
                      alt={item.icon}
                      width={40}
                      height={40}
                      className="group-hover:invert"
                    />
                    {/* Renderiza o ícone dinamicamente */}
                    <h3 className="text-[#2d3436] group-hover:text-white font-medium text-2xl inline-flex justify-center items-center gap-x-2">
                      {item.title}
                      <Image
                        src="/icons/arrow.svg"
                        alt="arrow icon"
                        width={14}
                        height={14}
                      />
                    </h3>
                    <p className="text-[#636e72] group-hover:text-white">
                      {item.text}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* texts */}
          <div className="text-center px-6 w-full flex items-center justify-center flex-col gap-y-6">
            <div className="flex flex-col items-center justify-center gap-y-6 xl:w-[55%]">
              <h2 className="text-2xl font-medium text-[#2d3436]">
                Por que abrir uma conta de negociação com a Trader 4xc?
              </h2>

              <p className="text-[#2d3436]">O corretor nº 1 do mundo*</p>

              <p className="text-[#2d3436]">
                Com as contas de negociação ao vivo da Trader 4xc, você pode
                experimentar o melhor em execução de ordens e tecnologia de
                negociação, juntamente com poderosas ferramentas de negociação e
                análise especializada.
              </p>

              <p className="text-[#2d3436]">
                Oferecemos contas em uma variedade de plataformas para facilitar
                seu estilo e preferências de negociação.
              </p>
            </div>

            {/* gif */}
            <Image
              src="/gif/desktop.gif"
              width={770}
              height={574}
              alt="gif desktop animation"
              className="w-auto"
            />
          </div>

          {/* section 3 */}
          <div className=" items-center relative hidden xl:flex">
            {textsData.map((text, index) => (
              <div
                key={index}
                className={`flex-1 flex items-start justify-center flex-col gap-y-6 border-[#a79582] py-2 px-4 min-h-[200px]
                  ${index === 0 && 'border-l'} 
                  ${index === textsData.length - 1 && 'border-r'}
                  ${index !== 0 && index !== textsData.length - 1 && 'border-x'}
                  `}
              >
                <TextItem iconSrc="/icons/correct.svg" title={text.title} />
                <TextItem iconSrc="/icons/correct.svg" text={text.text} />
              </div>
            ))}
          </div>

          {/* section 3 mobile */}
          <div className="xl:hidden flex flex-col gap-y-10">
            {textsData.map((text, index) => (
              <div key={index} className="flex flex-col gap-y-10">
                <TextItem iconSrc="/icons/correct.svg" title={text.title} />
                <TextItem iconSrc="/icons/correct.svg" text={text.text} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TextItem = ({ iconSrc, title, text }) => (
  <div className="flex items-center gap-x-2">
    <Image src={iconSrc} alt="check icon" width={32} height={32} />
    <h3 className="text-[#a79582] text-xl">{title || text}</h3>
  </div>
);

export default WhyOpenAccountSection;

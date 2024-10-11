import React from 'react';
import Image from 'next/image';
import TextReveal from './TextReveal';

const DiscoverExchangeSection = () => {
  const cardData = [
    {
      title: 'Sem mesa de negociação (NDD)',
      text: 'Executamos suas ordens sem qualquer intervenção da mesa de negociação*, garantindo transparência e justiça.',
    },
    {
      title: 'Tecnologias STP',
      text: 'Embora utilizemos tecnologias STP, nosso método de execução continua sendo NDD, refletindo nosso compromisso com a integridade da execução de ordens.',
    },
    {
      title: 'Risco minimizado',
      text: 'Com correspondência interna de pedidos e gerenciamento de riscos, mantemos a interferência no mínimo.',
    },
  ];

  const imagesData = ['colwma', 'oma', 'algo'];

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10">
          {/* texts */}
          <div className="text-black xl:max-w-md">
            <TextReveal
              as="h2"
              className="text-4xl md:text-5xl font-semibold leading-[120%] md:max-w-none max-w-[80%]"
            >
              Descubra a vantagem da Trader 4xc
            </TextReveal>
            <p className="my-10 text-sm">Nosso método de execução PRO</p>
          </div>

          {/* cards */}
          <div className="flex items-center flex-col xl:flex-row xl:justify-between gap-x-6 xl:gap-y-0 gap-y-10">
            {cardData.map((card, index) => (
              <Card key={index} title={card.title} text={card.text} />
            ))}
          </div>

          {/* image */}
          <div className="w-full grid xl:grid-cols-[1fr_568px_1fr] grid-cols-6 gap-y-10">
            {/* cards 1 content */}
            <div className="flex flex-col gap-y-8 justify-center text-black col-span-6 xl:col-auto">
              <article className="flex flex-col gap-y-8">
                <h3 className="text-2xl font-semibold leading-[120%]">
                  Correspondência de pedidos eficiente
                </h3>

                <p className="text-sm  leading-[170%]">
                  Nossos altos volumes de negociação nos permitem corresponder
                  internamente a uma parcela significativa de ordens, reduzindo
                  o risco sem afetar suas negociações.
                </p>
              </article>
              {/* card 2 */}
              <article className="flex flex-col gap-y-8">
                <h3 className="text-2xl font-semibold leading-[120%]">
                  Exposição residual
                </h3>

                <p className="text-sm  leading-[170%]">
                  Embora nem todas as posições dos clientes sejam Hedged,
                  qualquer exposição residual é mantida dentro dos nossos
                  limites de risco de mercado predefinidos.
                </p>
              </article>
            </div>

            {/* image */}
            <div className="px-12 xl:col-auto col-span-6">
              <Image
                src="/images/advantages.webp"
                width={1496}
                height={1722}
                alt="advantages"
              />
            </div>

            {/* cards 2 content */}
            <div className="flex flex-col gap-y-8 justify-center text-black  xl:col-auto col-span-6">
              <article className="flex flex-col gap-y-8">
                <h3 className="text-2xl font-semibold leading-[120%]">
                  Hedging Externo
                </h3>

                <p className="text-sm  leading-[170%]">
                  Em casos de exposição excessiva, podemos fazer hedge externo,
                  garantindo que o risco seja gerenciado de forma eficaz.
                </p>
              </article>
              {/* images */}
              <ul className="flex items-center justify-start gap-x-6 w-fit">
                {imagesData.map((image, index) => (
                  <li>
                    <Image
                      key={`${index}+${image}`}
                      src={`/images/${image}.webp`}
                      width={70}
                      height={50}
                      alt={`image ${index}`}
                      className="max-h-[50px] w-auto max-w-[70px]"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ title, text }) => {
  return (
    <article className="p-10 border-gradient_exchanges text-black min-h-[242px]">
      <div className="flex flex-col gap-y-8 w-[80%]">
        <h3 className="text-2xl font-semibold leading-[120%]">{title}</h3>
        <p className="text-sm  leading-[170%]">{text}</p>
      </div>
    </article>
  );
};

export default DiscoverExchangeSection;

import React from 'react';

const PricingOrdersSection = () => {
  const cardData = [
    {
      title: 'Negocie em velocidades extremamente rápidas!',
      text: 'A maioria dos pedidos executados em <12ms. Isso é apenas 0,012 segundos!',
      backgroundText: '<12',
    },
    {
      title: 'Descubra nossas excelentes estatísticas de Slippages',
      text: 'Mais de 84% das Ordens de Mercado foram executadas ao preço solicitado, ou até melhor!',
      backgroundText: '84%',
    },
    {
      title: 'Recotação… Que recotação?',
      text: 'Mais de 99% das Ordens Instantâneas foram executadas sem recotações!',
      backgroundText: '99%',
    },
  ];
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-20 items-center justify-center">
          <div className="flex items-center flex-col xl:flex-row xl:justify-between gap-10">
            {cardData.map((card, index) => (
              <Card
                key={`${index}-${card.title}m`}
                title={card.title}
                text={card.text}
                backgroundText={card.backgroundText}
              />
            ))}
          </div>

          <div className="w-fit relative">
            <span className="text-black absolute -left-[12%] -top-[64%] xl:-top-[10%] font-medium">
              MAIS <br />
              DO QUE
            </span>
            <p className="text-6xl xl:text-8xl relative text-center amount-orders__number">
              635,000,000
            </p>

            <span className="text-black absolute  -right-[10%] xl:-top-[50%] xl:-right-[40%] font-medium">
              ORDENS EXECUTADAS <br /> ATÉ O MOMENTO POR 100.000 <br /> DE
              TRADERS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ title, text, backgroundText }) => {
  return (
    <article className="min-h-[450px] bg-custom__blue w-full relative overflow-hidden">
      <span className="text-[#004DE4] text-[190px] font-black -tracking-[20px] absolute left-0 top-[52%]">
        {backgroundText}
      </span>

      <div className="flex flex-col gap-y-8 py-24 px-16 relative">
        <h2 className="text-2xl font-bold ">{title}</h2>
        <p className="text-lg font-medium">{text}</p>
      </div>
    </article>
  );
};

export default PricingOrdersSection;

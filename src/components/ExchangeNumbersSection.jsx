import React from 'react';

const ExchangeNumbersSection = () => {
  const numbersData = [
    { title: '€100.000.000', text: 'capital da empresa (nível Tier 1)' },
    { title: '22', text: 'anos de sucesso na indústria' },
    { title: '110+', text: 'prêmios internacionais' },
    { title: '9', text: 'patrocínios globais' },
    { title: '4', text: 'plataformas de negociação' },
    { title: '2100+', text: 'instrumentos financeiros' },
    { title: '<13 ms', text: 'tempo médio de execução' },
    { title: '600+', text: 'milhões de ordens executadas' },
  ];

  const textBackground = 'FxPro em números';

  return (
    <section className="py-10 bg-[#fbf9f7] relative">
      {/* Background text */}

      <div className="text-[166px] font-bold text-[#f8f4f1] uppercase absolute top-0 left-0 right-0 xl:flex justify-center -z-0 items-center translate-y-1/2 hidden ">
        {textBackground}
      </div>

      <div className="container mx-auto z-10 relative">
        <div className="w-full grid grid-cols-6 xl:grid-cols-12 gap-10">
          {numbersData.map((item, index) => {
            const isLastRowInXL =
              index >= Math.floor((numbersData.length - 1) / 4) * 4;

            const isLastRowInMD =
              index >= Math.floor((numbersData.length - 1) / 2) * 2;

            return (
              <div
                key={index}
                className={`flex flex-col gap-y-2 items-center py-8
                  border-b-[#e4d8cb] border-b 
                  xl:col-span-3 col-span-6 md:col-span-6
                  ${isLastRowInXL ? 'xl:border-b-0' : ''}
                  ${isLastRowInMD ? 'md:border-b-0' : ''}
                  ${index === numbersData.length - 1 ? 'last:border-b-0' : ''}
                `}
              >
                <span className="text-[#b68756] text-4xl">{item.title}</span>
                <strong className="text-lg text-[#2d3436]">{item.text}</strong>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExchangeNumbersSection;

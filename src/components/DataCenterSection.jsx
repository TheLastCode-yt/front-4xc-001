import React from 'react';
import Image from 'next/image';

const DataCenterSection = () => {
  return (
    <section className="bg-[#E5E8ED]">
      <div className="container mx-auto">
        <div className="flex items-center flex-col xl:flex-row xl:gap-y-0 gap-y-10 xl:justify-between text-black py-4 px-2">
          {/* text */}
          <div className="xl:max-w-sm flex flex-col gap-y-10 items-start justify-center">
            <h2 className="text-2xl font-semibold leading-[120%]">
              Centro de Dados de ponta e agregador interno
            </h2>
            <p className="text-sm leading-[170%]">
              Na Trader 4xc, nosso centro de dados de ponta em LD4 London posiciona
              estrategicamente nossos servidores de negociação para execução
              extremamente rápida. Co-localizado nesta instalação de última
              geração e perfeitamente conectado com bancos de Nível 1, nosso
              agregador proprietário, Quotix, garante que suas negociações sejam
              executadas rapidamente aos melhores preços, oferecendo eficiência
              incomparável
            </p>
          </div>

          {/* image */}
          <div>
            <Image
              src="/images/data-center.webp"
              alt="data center"
              height={2100}
              width={1350}
              className="xl:max-w-[800px] xl:max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataCenterSection;

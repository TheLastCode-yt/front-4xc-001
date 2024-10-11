import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
/* components */
import TextReveal from '@/components/TextReveal';
import PricingOrdersSection from '@/components/PricingOrdersSection';
import HistoryOrdersSection from '@/components/HistoryOrdersSection';
import DiscoverExchangeSection from '@/components/DiscoverExchangeSection';
import DataCenterSection from '@/components/DataCenterSection';
import HelpBottomSection from '@/components/HelpBottomSection';

const page = () => {
  return (
    <main className="overflow-x-hidden pt-[64px] flex flex-col gap-y-28">
      {/* py-4 px-2 md:p-10 xl:p-24 */}

      {/* section 1 */}
      <section className="">
        {/* min-h-[800px] */}
        <div
          className="bg-no-repeat bg-cover h-[550px]"
          style={{
            backgroundImage: "url('/images/pricing-model-bg-desktop-1x.webp')",
          }}
        >
          <div className="container mx-auto h-full">
            <div className="w-full flex flex-col justify-center gap-y-4 h-full">
              <TextReveal className={'text-6xl xl:text-8xl'} as="h2">
                Execução NDD
              </TextReveal>

              <TextReveal
                className={'text-xl sm:text-2xl xl:text-3xl text-wrap max-w-xl'}
                as="p"
              >
                Liquidez profunda, os melhores preços possíveis e execução
                ultrarrápida e precisa. O que mais você poderia desejar?
              </TextReveal>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <PricingOrdersSection />

      {/* section 3 */}
      <HistoryOrdersSection />

      {/* section 4 */}
      <section>
        <div className="container mx-auto">
          <div className="bg-custom__blue p-4 py-10 sm:p-14 grid grid-cols-6 md:grid-cols-12 sm:h-[254px] gap-10 items-center justify-center relative break-words">
            {/* img */}
            <div className="relative flex items-center justify-center col-span-full md:col-span-3 xl:col-span-2">
              <Image
                src="/icons/circle.svg"
                width={154}
                height={154}
                alt="circle icon"
                className="absolute -z-0 opacity-50"
              />

              <span className="text-lg font-semibold text-center">
                Best&nbsp;FX&nbsp;Execution, <br />
                Global
                <br />
                <span className="font-normal text-sm">CFI</span>
              </span>
            </div>

            {/* text */}
            <div className="md:border-l md:pl-10 border-white h-full col-span-full md:col-span-9 xl:col-span-10 flex items-center w-full relative">
              <p className="w-full">
                Nosso agregador spot interno e tecnologia avançada de
                correspondência de ordens fornecem aos nossos traders acesso a
                um pool de liquidez profundo e execução de negociações
                ultrarrápida, sem intervenção na mesa de negociação, para que os
                traders possam se beneficiar de spreads reduzidos e preços
                competitivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section 5 */}
      <DiscoverExchangeSection />

      {/* section 6 */}
      <DataCenterSection />

      {/* section 7 */}
      <section>
        <div className="container mx-auto bg-black">
          <div className="py-10 px-2 xl:p-[100px] flex items-center justify-center  text-center  xl:text-left flex-col gap-y-20 xl:gap-y-0 xl:flex-row xl:justify-between xl:gap-x-20">
            {/* grid grid-cols-[auto_170px_auto] */}
            {/* text 1 */}
            <div className="flex flex-col gap-y-8 xl:max-w-lg w-full flex-1">
              <h2 className="text-2xl font-semibold">Negociação Ética</h2>
              <p className="text-sm leading-[170%]">
                A Trader 4xc defende a adoção de maior transparência e padrões
                éticos dentro do setor de trading online. Sem manipulação, sem
                caça de stop loss, sem preocupações!
              </p>
            </div>

            {/* division */}
            {/* <div className="w-full h-[40px] relative  before:w-full before:h-[25px] xl:before:w-[23px] xl:before:h-[126px] before:bg-custom__blue before:absolute before:top-1/2 before:left-[51%] divion-before"></div> */}

            <div className="relative hidden xl:block before:w-[23px] before:h-[126px] before:bg-custom__blue before:absolute before:top-1/2 before:left-[51%] before:divion-before-xl"></div>

            {/* mobile division */}
            <div className="relative h-[40px] w-full sm:w-[80%] sm:-rotate-[3deg] block xl:hidden before:w-full before:h-[25px] before:bg-custom__blue before:absolute before:top-1/2 sm:before:top-[80%] before:left-[51%] before:divion-before"></div>

            {/* text 2 */}
            <div className="flex flex-col gap-y-8 xl:max-w-lg flex-1">
              <h2 className="text-2xl font-semibold">Execução premiada</h2>
              <p className="text-sm leading-[170%]">
                Nossa ampla gama de prêmios é uma prova clara de nossa execução
                excepcional, refletindo nosso comprometimento com a excelência
                em todos os empreendimentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section 8 */}
      <section>
        <div className="container mx-auto flex flex-col gap-y-12 text-black items-center justify-center">
          <p className="max-w-xl text-5xl leading-[120%] text-center">
            Desbloqueie o poder da <strong>execução NDD</strong> com a Trader
            4xc hoje mesmo!
          </p>

          <Link
            href={'/'}
            className="btn bg-custom__blue hover:bg-[#0044CA] focus:bg-[#0044CA] w-fit"
          >
            Registre-se com os Pros
          </Link>
        </div>
      </section>

      {/* section 9 */}
      <HelpBottomSection />
    </main>
  );
};

export default page;

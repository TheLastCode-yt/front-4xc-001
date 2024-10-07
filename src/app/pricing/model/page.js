import React from 'react';
/* components */
import TextReveal from '@/components/TextReveal';
import PricingOrdersSection from '@/components/PricingOrdersSection';
import HistoryOrdersSection from '@/components/HistoryOrdersSection';

const page = () => {
  return (
    <main className="overflow-x-hidden pt-[64px]">
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
              <TextReveal className={'text-8xl'} as="h2">
                Execução NDD
              </TextReveal>

              <TextReveal className={'text-3xl text-wrap max-w-xl'} as="p">
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
    </main>
  );
};

export default page;

import Link from 'next/link';
import Image from 'next/image';
/* components */
import WhyOpenAccountSection from '@/components/WhyOpenAccountSection';
import AppDoownloadSection from '@/components/AppDoownloadSection';
import FeatureCardSection from '@/components/FeatureCardSection';
import CustomTradingSolutionsSection from '@/components/CustomTradingSolutionsSection';
import OurHistorySection from '@/components/OurHistorySection';
import ExchangeNumbersSection from '@/components/ExchangeNumbersSection';
import FaqSection from '@/components/FaqSection';
import HelpBottomSection from '@/components/HelpBottomSection';
import ServicesSection from '@/components/ServicesSection';
const page = () => {
  return (
    <main className="overflow-x-hidden pt-[64px] flex flex-col gap-y-28">
      {/* py-4 px-2 md:p-10 xl:p-24 */}
      {/* section 1 */}
      <section>
        <div className="container mx-auto text-center flex flex-col gap-y-6 items-center justify-center">
          <h1 className="text-5xl text-[#2d3436]">Abrir conta Forex</h1>

          <p className="text-[#636e72]">
            Negocie milhares de CFDs em{' '}
            <Link href={'/'} className="text-[#b68756]">
              Forex
            </Link>
            ,{' '}
            <Link href={'/'} className="text-[#b68756]">
              Metais
            </Link>{' '}
            ,{' '}
            <Link href={'/'} className="text-[#b68756]">
              Índices
            </Link>{' '}
            e{' '}
            <Link href={'/'} className="text-[#b68756]">
              mais
            </Link>
          </p>

          <Link
            /*  hover:shadow-[0_6px_10px_0_#00000040] */
            href={'/'}
            className="text-lg relative inline-flex items-center justify-center bg-[#303135] text-white rounded-lg w-fit min-w-[230px] min-h-[70px] text-center transition-all hover:-translate-y-0.5 
            px-8 hover:shadow hover:shadow-[#00000040]"
          >
            Abra Conta
          </Link>
        </div>
      </section>

      {/* section 2 */}
      <WhyOpenAccountSection />

      {/* section 3 */}
      <AppDoownloadSection />

      {/* section 4 */}
      <FeatureCardSection />

      {/* section 5 */}
      <CustomTradingSolutionsSection />

      {/* section 6 */}
      <OurHistorySection />

      {/* section 7 */}
      <section>
        <div className="container mx-auto flex items-center justify-center">
          <div className="w-full xl:w-[66.6%] 2xl:w-[50%]">
            <p className="text-center max- text-[#2d3436] text-xl sm:text-2xl">
              Desde a nossa criação, a Trader 4xc expandiu-se com sucesso para servir
              clientes de varejo e institucionais em mais de 170 países - e
              continuamos a crescer.
            </p>
          </div>
        </div>
      </section>

      {/* section 8 */}
      <ExchangeNumbersSection />

      {/* section 9 */}
      <FaqSection />

      {/* section 10 */}
      <ServicesSection />

      {/* section 11 */}
      <HelpBottomSection />
    </main>
  );
};

export default page;

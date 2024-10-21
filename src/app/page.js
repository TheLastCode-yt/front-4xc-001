import Link from 'next/link';
/* components */
import Hero from '@/components/Hero';
import InteractiveGallery from '@/components/InteractiveGallery';
import ButtonOrLink from '@/components/ButtonOrLink';
import AppSection from '@/components/AppSection';
import TradingPlataform from '@/components/TradingPlataform';
import PickAccountSection from '@/components/PickAccountSection';
import AchievementsSection from '@/components/AchievementsSection';
import Hero2 from '@/components/Hero2';
import LiveMarketSection from '@/components/LiveMarketSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-[64px] flex flex-col gap-y-20">
      {/* <Hero /> */}
      <Hero2 />

      <LiveMarketSection />

      <section className="w-full px-[10px]">
        <div className="container mx-auto bg-custom__blue">
          <div className="px-[12px] py-[24px] sm:px-[20px] sm:py-[30px] xl:px-[70px] xl:py-[50px] flex items-center justify-between flex-col md:flex-row gap-y-10">
            <div className="flex-1">
              <h1 className="text-4xl xl:text-5xl">
                Forex, Índices, Ações e mais com a Trader 4xc - corretora online
                n.º 1
              </h1>
            </div>

            <div className="xl:flex-1  text-right">
              <ButtonOrLink className={'bg-white text-custom__blue'}>
                Negocie como um pro
              </ButtonOrLink>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUsSection />

      <PickAccountSection />

      <TradingPlataform />

      <AppSection />

      <InteractiveGallery />

      <AchievementsSection />

      <section className="text-black py-10">
        <div className="container mx-auto">
          <div className="flex flex-col gap-y-6 items-center justify-center text-center">
            <h2 className="text-5xl">Negocie como um pro!</h2>

            <p className="text-lg max-w-[800px] leading-normal">
              Negocie CFDs de uma vasta gama de instrumentos, incluindo os{' '}
              <Link
                href="/trading/forex"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                pares FX
              </Link>{' '}
              mais populares,{' '}
              <Link
                href="/trading/futures"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Futuros
              </Link>
              ,{' '}
              <Link
                href="/trading/indices"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Índices
              </Link>
              ,{' '}
              <Link
                href="/trading/metals"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Metais
              </Link>
              ,{' '}
              <Link
                href="/trading/energies"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Energias
              </Link>{' '}
              e{' '}
              <Link
                href="/trading/shares"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Ações
              </Link>
              , com os mercados globais na palma da sua mão.
            </p>

            <ButtonOrLink className="bg-custom__blue text-white" href={'/'}>
              Registre-se com os Pros
            </ButtonOrLink>
          </div>
        </div>
      </section>
    </main>
  );
}

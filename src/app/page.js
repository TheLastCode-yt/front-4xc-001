import Link from 'next/link';
/* components */
import Hero from '@/components/Hero';
import InteractiveGallery from '@/components/InteractiveGallery';
import ButtonOrLink from '@/components/ButtonOrLink';
import AppSection from '@/components/AppSection';
import TradingPlataform from '@/components/TradingPlataform';
import PickAccountSection from '@/components/PickAccountSection';
import AchievementsSection from '@/components/AchievementsSection';

export default function Home() {
  const items = [
    {
      quote:
        'A única maneira de fazer um excelente trabalho é amar o que você faz.',
      name: 'Steve Jobs',
      title: 'Co-Fundador da Apple',
    },
    {
      quote: 'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
      name: 'Robert Collier',
      title: 'Autor',
    },
    {
      quote: 'Não importa o quão devagar você vá, desde que você não pare.',
      name: 'Confúcio',
      title: 'Filósofo',
    },
    {
      quote:
        'A vida é realmente simples, mas insistimos em torná-la complicada.',
      name: 'Confúcio',
      title: 'Filósofo',
    },
  ];

  return (
    <main className="overflow-x-hidden pt-[64px] flex flex-col gap-y-20">
      <Hero />

      <section className="w-full">
        <div className="container mx-auto bg-custom__blue">
          <div className="px-[70px] py-[50px] flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-5xl">
                Forex, Índices, Ações e mais com a Trader 4xc - corretora online
                n.º 1
              </h1>
            </div>

            <div className="flex-1  text-right">
              <ButtonOrLink className={'bg-white text-custom__blue'}>
                Negocie como um pro
              </ButtonOrLink>
            </div>
          </div>
        </div>
      </section>

      <PickAccountSection />

      <AppSection />

      <TradingPlataform />

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

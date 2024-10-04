/* components */
import Hero from '@/components/Hero';

import TextReveal from '@/components/TextReveal';
import InteractiveGallery from '@/components/InteractiveGallery';
import ButtonOrLink from '@/components/ButtonOrLink';
import AppSection from '@/components/AppSection';
import InfiniteMovingLetters from '@/components/InfiniteMovingLetters';
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
    <main className="pt-[64px]">
      <Hero />
      <section className="w-full">
        <div className="container mx-auto bg-custom__blue">
          <div className="px-[70px] py-[50px] flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-5xl">
                Forex, Índices, Ações e mais com a FxPro - corretora online n.º
                1
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

      {/* <div className="container mx-auto">
        <InfiniteMovingLetters
          text="Olá Mundo! Esta é uma animação de marquee."
          speed="normal"
          className="bg-gray-800 p-4 rounded-md text-white"
        />
      </div> */}

      {/* app section */}
      <AppSection />

      <InteractiveGallery />

      {/* Animação da esquerda para a direita */}
      {/* <TextReveal color="lightblue" direction="left" duration={1}>
        Texto Revelado da Esquerda
      </TextReveal> */}
      {/* Animação da direita para a esquerda */}
      {/* <TextReveal color="lightgreen" direction="right" duration={1}>
        Texto Revelado da Direita
      </TextReveal> */}

      <div className="w-full h-[200vw] bg-custom__blue"></div>
    </main>
  );
}

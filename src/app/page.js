/* components */
import Hero from '@/components/Hero';

import TextReveal from '@/components/TextReveal';
import InteractiveGallery from '@/components/InteractiveGallery';
import ButtonOrLink from '@/components/ButtonOrLink';
import AppSection from '@/components/AppSection';
export default function Home() {
  return (
    <main className="pt-[64px]">
      <Hero />
      {/*  */}
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

      <div className="w-full h-[200vw] bg-purple-500"></div>
    </main>
  );
}

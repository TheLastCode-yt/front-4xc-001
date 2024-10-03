/* components */
import Hero from '@/components/Hero';

import TextReveal from '@/components/TextReveal';
export default function Home() {
  return (
    <main>
      {/* <Hero /> */}
      {/* Animação da esquerda para a direita */}
      {/* <TextReveal color="lightblue" direction="left" duration={1}>
        Texto Revelado da Esquerda
      </TextReveal> */}
      {/* Animação da direita para a esquerda */}
      <TextReveal color="lightgreen" direction="right" duration={1}>
        Texto Revelado da Direita
      </TextReveal>
    </main>
  );
}

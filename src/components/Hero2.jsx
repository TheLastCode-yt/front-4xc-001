import React from 'react';
import Image from 'next/image';
import ButtonOrLink from './ButtonOrLink';
import TextReveal from './TextReveal';

const Hero2 = () => {
  return (
    <section
      className="bg-contain bg-no-repeat bg-black  py-[50px]"
      style={{ backgroundImage: 'url("/images/testando3000.png")' }}
    >
      <div />
      <div className="w-full min-h-[40vw] bg-no-repeat py-20">
        <div className="container mx-auto relative pt-10 ">
          {/* titles */}
          <div className="flex items-center justify-between h-full flex-col xl:flex-row gap-y-20">
            <div className="flex flex-col gap-y-10 flex-1">
              <div className="flex flex-col gap-y-6">
                <TextReveal as="h1" className={'text-5xl font-semibold'}>
                  Transforme conhecimento em lucro com a Trader 4xc
                </TextReveal>

                <TextReveal as="h2" className={'text-xl'} direction="right">
                  Com mais de 18 anos de experiência no mercado, somos a
                  corretora de opções binárias mais utilizada na Europa. Nossa
                  trajetória é marcada por transparência, confiabilidade e
                  inovação, tornando-nos uma escolha preferencial para traders
                  em busca de segurança e desempenho.
                </TextReveal>
              </div>

              <div>
                <ButtonOrLink
                  href={'/'}
                  className="btn bg-custom__blue border border-custom__blue"
                >
                  Registre-se com os Pros
                </ButtonOrLink>
              </div>
            </div>

            {/* image */}
            <div className="flex-1">
              <Image
                src="/images/russ.png"
                width={2177}
                height={1172}
                alt="background devices"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;

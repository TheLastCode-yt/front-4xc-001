import React from 'react';
import Image from 'next/image';
import ButtonOrLink from './ButtonOrLink';
import TextReveal from './TextReveal';

const Hero2 = () => {
  return (
    <section>
      <div className="w-full min-h-[40vw] bg-no-repeat py-20 text-black">
        <div className="container mx-auto relative pt-10 h-[708px] bg-green-500">
          {/* titles */}
          <div className="flex items-center justify-center h-full">
            <div className="flex flex-col">
              <div>
                <TextReveal as="h1" className={'text-5xl'}>
                  Transforme conhecimento em lucro com a 4xc
                </TextReveal>

                <TextReveal as="h2" className={'text-5xl'} direction="right">
                  Estratégias personalizadas para cada trader.
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;

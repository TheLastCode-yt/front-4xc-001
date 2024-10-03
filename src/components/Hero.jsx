import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section>
      <div
        className="w-full min-h-screen bg-no-repeat"
        style={{
          backgroundImage: "url('/images/trump-kamala-desktop-2x.webp')",
        }}
      >
        <div className="container mx-auto relative pt-10">
          {/* logo */}
          <div className="w-[130px] h-[130px] bg-[#F41112] flex items-center justify-center">
            <Image src="/icons/fxPro.svg" width={94} height={42} alt="logo" />
          </div>

          {/* titles */}

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div>
                <span className="text-4xl">
                  Negocie
                  <br />e participe
                </span>

                <h1 className="text-8xl">1 Milhão</h1>
              </div>
              <div>
                <h2 className="text-8xl">em prêmios</h2>
              </div>
            </div>

            {/* btn */}
            <div>
              <Link
                href={'/'}
                className="btn bg-custom__blue border border-custom__blue"
              >
                Registre-se com os Pros
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

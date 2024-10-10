import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HistoryOrdersSection = () => {
  return (
    <section
      className="bg-no-repeat bg-cover h-[80vh] bg-bottom hidden xl:block"
      style={{
        backgroundImage: "url('/images/bg-section-new.webp')",
      }}
    >
      <div className="container mx-auto relative h-full flex items-end justify-center py-[10%]">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/rocket.webp"
            alt="rocket Image"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <span className="z-10 text-white text-opacity-50 absolute top-[6%] left-0">
          *Total histórico de ordens executadas
        </span>

        <Link href={'/'} className="btn bg-custom__blue">
          Comece a negociar agora
        </Link>
      </div>
    </section>
  );
};

export default HistoryOrdersSection;

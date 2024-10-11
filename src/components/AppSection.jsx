import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
/* components */
import TextReveal from './TextReveal';

const AppSection = () => {
  return (
    <section className="relative py-[100px]">
      <div className="w-full h-full absolute top-0 right-[160px] bg-black -z-10 mr-[100px]" />

      <div className="container mx-auto z-10">
        <div className="w-full grid  grid-cols-[135px_auto_370px] items-center justify-start gap-20 ">
          <div className="flex flex-col gap-y-6 ">
            {/* apple btn */}
            <Link href={'/'} className="bg-white rounded w-fit">
              <Image
                alt="apple store"
                src="/icons/apple-store.svg"
                width={135}
                height={40}
              />
            </Link>
            {/* google btn*/}
            <Link href={'/'} className="bg-white rounded w-fit">
              <Image
                alt="google play"
                src="/icons/google-play.svg"
                width={135}
                height={40}
              />
            </Link>
            {/* qr code icon */}
            <div className="flex gap-x-2 items-center">
              <Image
                alt="qr code icon"
                src="/icons/qr-code.svg"
                width={16}
                height={26}
              />
              <span>Escaneie para baixar o aplicativo de negociação FxPro</span>
            </div>
          </div>

          {/* image */}
          <div className=" ">
            <Image
              src="/images/trade-on-mobile.webp"
              alt="trader app mobile"
              width={400}
              height={619}
              className="w-auto max-h-[620px]"
            />
          </div>

          {/* text */}
          <div className="flex items-start flex-col gap-y-6">
            <TextReveal as="h2" className={'text-4xl'} duration={2}>
              Negocie em dispositivos móveis
            </TextReveal>

            <p>
              Negocie no mercados de CFDs de onde estiver com o nosso aplicativo
              móvel e aproveite a infraestrutura de negociação de latência
              ultrabaixa, execução de ordens premiada e liquidez profunda.
            </p>

            <p>
              Disponível em{' '}
              <Link href="/" target="_blank" className="onelink onelink-ios">
                iOS
              </Link>
              e
              <Link
                href="/"
                target="_blank"
                className="onelink onelink-android"
              >
                Android
              </Link>{' '}
              dispositivos.
            </p>

            <div className="flex items-center gap-x-6">
              {/* rating stars */}
              <div className="flex gap-x-2">
                <span className="text-3xl font-bold">4.7</span>
                <div>
                  <Image
                    src={'/icons/rating-stars.svg'}
                    width={75}
                    height={13}
                    alt="rating stars"
                  />
                  <span>Avaliação</span>
                </div>
              </div>
              {/* downloads */}
              <div className="flex gap-x-2">
                <span className="text-3xl font-bold">15M</span>
                <div className="text-sm">
                  <span>
                    mais de 15 milhões de <br /> downloads
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;

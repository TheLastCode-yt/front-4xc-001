import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
/* components */
import GoogleButton from './layout/GoogleButton';
import AppleButton from './layout/AppleButton';

const AppSection = () => {
  return (
    <section className="relative">
      <div className="w-full h-full absolute top-0 right-[165px] bg-black -z-10 mr-[165px]" />

      <div className="container mx-auto  flex items-center justify-center ">
        <div className="w-full flex items-center justify-start">
          <div className="flex flex-col gap-y-6">
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
          <div>
            <Image
              src="/images/trade-on-mobile.webp"
              alt="trader app mobile"
              width={337}
              height={523}
            />
          </div>

          {/* text */}
          <div className="flex items-start flex-col gap-y-6">
            <h2>Negocie em dispositivos móveis</h2>

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
                <div>
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

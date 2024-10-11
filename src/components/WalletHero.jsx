import Image from 'next/image';
import Link from 'next/link';

const WalletHero = () => {
  return (
    <section className="py-10">
      <div className="mx-auto container relative overflow-hidden min-h-[60vh] flex flex-col gap-y-10">
        <div className="w-full h-fit xl:hidden">
          <Image
            src="/images/key.webp"
            alt="key"
            width={1158}
            height={583}
            className="object-contain"
          />
        </div>

        <div className="xl:max-w-[40%] xl:absolute left-[10%]">
          <h1 className="text-[#2d3436] text-4xl xl:text-5xl xl:leading-[1.22] 2xl:leading-[1.3] font-medium">
            Financie através da Carteira Trader 4xc -
            <small>
              uma ferramenta inovadora de gestão de dinheiro e risco
            </small>
          </h1>
        </div>

        <div className="flex flex-col gap-y-10 xl:max-w-[40%] xl:absolute bottom-0 left-[10%]">
          <p className="text-[#636e72]">
            A Trader 4xc tornou o depósito e a retirada de fundos ainda mais fáceis
            com a Carteira Trader 4xc. Agora você pode transferir fundos entre sua
            carteira Trader 4xc e contas de negociação a qualquer momento que
            desejar.
          </p>

          <Link
            href={'/docs/fxpro-wallet-how-it-works.pdf'}
            target="_blank"
            className="text-[#636e72]  hover:text-[#b68756] transition-all flex gap-x-2 items-center"
          >
            <Image
              src={'/icons/pdf.svg'}
              alt="pdf icon"
              width={27}
              height={31}
            />
            Como funciona a Carteira Trader 4xc
          </Link>
        </div>

        <div className="w-full h-full absolute min-h-[583px] top-0 -z-10 hidden xl:block">
          {/* <Image src="/images/key.webp" alt="key" width={1158} height={583} /> */}
          <Image
            src="/images/key.webp"
            alt="key"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WalletHero;

import Image from 'next/image';
import Link from 'next/link';

const AppDoownloadSection = () => {
  return (
    <section className="">
      <div className="container mx-auto">
        <div className="flex items-center justify-center relative flex-col xl:flex-row gap-y-10">
          {/* image gif */}
          <div className="w-full xl:flex-1 flex items-center justify-center">
            <Image
              src="/gif/FxPro_App.gif"
              alt="gif"
              width={300}
              height={600}
              className="w-auto"
            />
          </div>

          {/* texts */}
          <div className="flex-1  xl:min-h-[600px]">
            <div className="flex flex-col items-start gap-y-10 xl:w-[60%] w-full">
              <h2 className="text-[#2d3436] text-2xl md:text-3xl">
                Registre-se e negocie em qualquer lugar, com o aplicativo Trader
                4xc Mobile
              </h2>

              <p className="text-[#636e72]">
                Baixe nosso aplicativo Trader 4xc Mobile para iOS e Android para
                registrar e gerenciar suas contas em qualquer lugar. Você também
                pode negociar na plataforma de negociação integrada.
              </p>

              {/* btns download */}
              <div className="flex items-center gap-x-4 border-b-[#3031351a] border-b pb-10">
                {/* apple btn */}
                <Link href={'/'}>
                  <Image
                    src="/icons/apple-button.svg"
                    width={135}
                    height={40}
                    className=""
                  />
                </Link>

                {/* google btn */}
                <Link href={'/'}>
                  <Image
                    src="/icons/google-button.svg"
                    width={135}
                    height={40}
                    className=""
                  />
                </Link>
              </div>

              <p className="text-lg text-[#2d3436]">
                Complemente sua negociação com nosso conteúdo exclusivo e
                ferramentas de negociação. Todas as contas de negociação recebem
                execução ultrarrápida sob nosso modelo avançado de preços de
                intervenção NDD**.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDoownloadSection;

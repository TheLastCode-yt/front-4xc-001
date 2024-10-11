import Link from 'next/link';
import Image from 'next/image';
const ServicesSection = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-6  gap-y-10 md:gap-10 xl:gap-20 items-center justify-center">
          {/* card 1 */}
          <div className=" flex items-center justify-center col-span-6 md:col-span-3 h-full">
            <Link
              href="/"
              className="flex items-center text-center xl:text-left xl:flex-row flex-col xl:items-start p-10 justify-center gap-x-6 xl:max-w-[80%] bg-[#f5f6f7] rounded-lg h-full"
            >
              <div className="bg-white p-6 rounded-full">
                <Image
                  src="/icons/chat.svg"
                  alt="icon"
                  width={40}
                  height={40}
                  className="min-w-[40px] min-h-[40px]"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[#b68756] text-2xl font-medium">
                  Chat ao vivo
                </p>
                <p className="text-[#2d3436]">
                  Ajuda instantânea do nosso suporte qualificado escreva-nos
                  para{' '}
                  <span className="text-xl text-[#b68756]">
                    support@trader4xc.com
                  </span>
                </p>
              </div>
            </Link>
          </div>

          {/* card 2 */}
          <div className=" flex items-center justify-center col-span-6 w-full md:col-span-3 h-full">
            <Link
              href="/"
              className="flex items-center text-center xl:text-left xl:items-start flex-col xl:flex-row p-10 justify-center gap-x-6 xl:max-w-[80%] bg-[#f5f6f7] rounded-lg h-full"
            >
              <div className="bg-white p-6 rounded-full">
                <Image
                  src="/icons/telephone.svg"
                  alt="icon"
                  width={40}
                  height={40}
                  className="min-w-[40px] min-h-[40px]"
                />
              </div>
              <div className="flex flex-col">
                <p className="text-[#b68756] text-2xl font-medium">
                  Solicite uma chamada de volta
                </p>
                <p className="text-[#2d3436]">
                  Fale conosco conforme sua conveniência ou ligue para o Suporte
                  Global (Inglês){' '}
                  <span className="text-xl text-[#b68756]">
                    +55 11 99999-9999
                  </span>
                </p>
              </div>
            </Link>
          </div>

          {/* card 4 */}
          <div className="flex items-center justify-center col-span-6 md:col-span-3 h-full w-full">
            <Link
              className="flex flex-col bg-[#f5f6f7] gap-y-6 items-center justify-center p-10 rounded-lg  xl:max-w-[80%] h-full w-full"
              href={'/'}
            >
              {/* image */}
              <div>
                <Image
                  width={300}
                  height={320}
                  alt="image"
                  src="/images/learn.webp"
                />
              </div>
              {/* text */}
              <p className="text-[#b68756] text-xl font-medium">
                Assista e Aprenda
              </p>
              <p className="text-[#2d3436]">
                Suas perguntas respondidas em vídeos
              </p>
            </Link>
          </div>
          {/* card 3 */}
          <div className=" flex items-center justify-center col-span-6 md:col-span-3">
            <Link
              className="flex flex-col bg-[#f5f6f7] gap-y-6 items-center justify-center p-10 rounded-lg  xl:max-w-[80%] h-full w-full"
              href={'/'}
            >
              {/* image */}
              <div>
                <Image
                  width={300}
                  height={320}
                  alt="image"
                  src="/images/guides.webp"
                />
              </div>
              {/* text */}
              <p className="text-[#b68756] text-xl font-medium">
                Baixar os Guias
              </p>
              <p className="text-[#2d3436]">
                Todas as instruções em PDF em um só lugar
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
const HereHelpSection = () => {
  const helpData = [
    {
      img: 'live-chat',
      link: '/',
      title: 'Apoio ao Vivo por Chat',
      text: 'Ajuda instantânea de suporte qualificado',
    },
    {
      img: 'message',
      link: '/',
      title: 'Apoio ao Vivo por Chat',
      text: 'Ajuda instantânea de suporte qualificado',
    },
  ];

  const cardData = [
    {
      title: 'Baixar os Guias',
      text: 'Todas as instruções em PDF em um só lugar',
      href: '/',
      img: 'guides',
      className: 'bg-custom__blue text-white',
    },
    {
      title: 'Assista e Aprenda',
      text: 'Suas perguntas respondidas em vídeos',
      href: '/',
      img: 'learn',
    },
  ];

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-20">
          <div className="grid grid-cols-12 text-4xl font-semibold gap-y-20 bg-[#F4F4F4] text-black  py-4 px-2 md:p-10 xl:p-24">
            <div className="col-span-12 md:col-span-6">
              <h2>
                Estamos aqui <br /> para ajudar!
              </h2>
            </div>

            <div className="col-span-12 md:col-span-6 pl-6 border-l-4 border-black items-center flex flex-col gap-y-4">
              {helpData.map((item, index) => (
                <HelpButton key={index} {...item} />
              ))}
            </div>
          </div>

          {/* cards */}

          <div className="col-span-12">
            <ul className="flex  justify-between gap-x-10 flex-col md:flex-row">
              {cardData.map((item, index) => (
                <li key={index}>
                  <Card {...item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const HelpButton = ({ link, img, title, text }) => {
  return (
    <Link
      className="flex items-center gap-x-4 py-6 px-8 bg-[#0056ff19] text-[#0051FF]"
      href={link}
    >
      {/* img */}
      <div>
        <Image src={`/icons/${img}.svg`} width={30} height={27} alt="icon" />
      </div>

      <div className="flex flex-col gap-y-2 text-xs">
        <p className="font-semibold text-sm">{title}</p>
        {text}
      </div>
    </Link>
  );
};

const Card = ({ img, title, text, href, className }) => {
  return (
    <Link
      href={href}
      className={cn(
        'bg-[#F4F4F4] text-black flex flex-col justify-center items-center gap-y-6 w-fit h-full p-24 text-center',
        className
      )}
    >
      <picture>
        <Image
          width={390}
          height={273}
          src={`/images/${img}.webp`}
          alt={title}
          className="max-h-[320px] w-auto"
        />
      </picture>

      <div>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="font-normal text-sm">{text}</p>
      </div>
    </Link>
  );
};

export default HereHelpSection;

import Image from 'next/image';

const OurHistorySection = () => {
  const historyData = [
    {
      img: 'logo-history-1',
      title: 'Ideia concebida 2002',
      text: 'Remodelando o comércio online',
    },
    {
      img: 'logo-history-2',
      title: 'Primeiro site',
      text: '2006',
    },
    {
      title: '2008',
      text: 'Primeira corretora a patrocinar uma equipe de F1',
    },
    {
      img: 'logo-history-3',
      title: 'Expansão exponencial',
      text: '2012',
    },
    {
      title: '2015',
      text: 'Votada como a "Melhor Corretora" pela Financial Times 2010-2019.',
    },
    {
      img: 'logo-history-4',
      title: 'Grande transformação da marca',
      text: '2017',
    },
    {
      title: '2018',
      text: 'Patrocinador da equipa McLaren F1.',
    },
    {
      img: 'logo-history-5',
      title: 'Trader 4xc hoje',
      text: '2023',
    },
    {
      img: 'logo-history-6',
      title: 'Trader 4xc Amanhã',
      text: '2025',
    },
  ];
  return (
    <section className="w-full  xl:block hidden">
      <div className="flex flex-col xl:gap-y-24 items-center justify-center">
        <h2 className="text-[#2d3436] text-5xl">Nossa História</h2>

        <div className="w-full bg-[#f8f8f8] py-10">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              {/* cards */}
              {historyData.map((item, index) => (
                <Card
                  key={index}
                  img={item.img}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ img, title, text }) => {
  return (
    <div className="px-3 flex flex-col relative gap-y-3 items-center text-center">
      {/* img */}
      <div className={`${img ? 'block' : 'hidden'}`}>
        <Image
          width={170}
          height={170}
          alt={img}
          src={`/icons/${img}.svg`}
          className="2xl:min-w-[170px] 2xl:min-h-[170px] 2xl:max-w-none max-w-[140px]"
        />
      </div>

      {/* line */}
      <div
        className={`w-[1px] bg-[#c4c4c4] 
          ${img ? 'h-[20px] -mt-[20px]' : 'h-[85px] mt-[170px]'}`}
      />

      {/* text */}
      <p className="text-center font-semibold text-[#2d3436]">{title}</p>
      <span className="text-xs 2xl:text-sm text-[#636e72]">{text}</span>
    </div>
  );
};

export default OurHistorySection;

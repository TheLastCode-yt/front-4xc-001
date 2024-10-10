import Image from 'next/image';
const AwardsSection = () => {
  const awardsData = [
    {
      img: 'global',
      title: 'MELHOR PROVEDOR DE SERVIÇOS FX, 2018',
      text: 'City of London Wealth Management Awards',
    },
    {
      img: 'medal',
      title: 'BEST FX PROVIDER 2020',
      text: 'Prêmios Pessoais de Riqueza',
    },
    {
      img: 'reward',
      title: 'MARCA FOREX MAIS CONFIADA, Reino Unido, 2017',
      text: 'Revista Global Brands',
    },
    {
      img: 'plataform',
      title: 'MELHOR PROVEDOR FOREX, 2017',
      text: 'Investors Chronicle & Financial Times Investment and Wealth Management Awards',
    },
  ];

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 items-center justify-center">
          <h2 className="text-[#2d3436] text-2xl sm:text-4xl xl:text-5xl text-center">
            112+ prêmios no Reino Unido e internacional
          </h2>

          <div className="w-full">
            <ul className="flex items-center justify-center gap-10 xl:justify-between flex-wrap">
              {awardsData.map((award, index) => (
                <li key={index} className=" xl:flex-1 xl:max-w-[25%]">
                  <AwardCard {...award} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const AwardCard = ({ img, title, text }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-3  uppercase text-center max-w-[300px]">
      <Image
        src={`/icons/${img}.svg`}
        alt="award icon"
        width={40}
        height={40}
        className="w-auto max-h-[40px] max-w-[45px]"
      />
      <p className="font-semibold text-[#2d3436]">{title}</p>
      <span className="font-normal text-[#636e72]">{text}</span>
    </div>
  );
};

{
  /* <li>
<Image
  key={`${index}+${image}`}
  src={`/images/${image}.webp`}
  width={70}
  height={50}
  alt={`image ${index}`}
  className="max-h-[50px] w-auto max-w-[70px]"
/>
</li> */
}

export default AwardsSection;

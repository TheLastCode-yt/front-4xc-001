import Image from 'next/image';
import Link from 'next/link';

const CustomTradingSolutionsSection = () => {
  const solutionsData = [
    {
      title: 'Profissional Negociação',
      text: 'Se você for um trader experiente, poderá recategorizar-se como profissional eletivo e renunciar a algumas das proteções regulatórias oferecidas aos clientes de varejo. Verifique os critérios de elegibilidade aqui.',
      items: [
        'Você não estará sujeito às restrições de alavancagem aplicáveis ​​aos comerciantes de varejos',
        'Continuaremos a fornecer proteção de saldo negativo',
        'Você pode não ter direito à compensação regulatória do investidor***',
      ],
      btnText: 'Registe-se agora',
      btnLink: '/',
    },
  ];
  return (
    <section>
      <div className="container mx-auto">
        <h2>Soluções de negociação sob medida</h2>

        <div className="flex items-center justify-center">
          {solutionsData.map((item, index) => (
            <div className="px-10">
              <p>{item.title}</p>
              <p>{item.text}</p>
              {/* items */}
              <ul>
                {item.items.map((item, index) => (
                  <TextCheckItem key={index} text={item} />
                ))}
              </ul>
              {/* button */}
              <Link
                href={item.btnLink}
                // className="border-[#303135] border text-[#2d3436] text-lg font-medium min-h-[65px] min-w-[250px] py-6 rounded hover:bg-[#303135] hover:text-white transition-all duration-300"
                className="btn-common border-[#303135] border text-[#2d3436] hover:bg-[#303135] hover:text-white"
              >
                {item.btnText}
              </Link>

              {/* link */}
              <Link href={'/'}>
                ou aberto <span>Conta Demo</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TextCheckItem = ({ text }) => {
  return (
    <li className="flex items-start gap-x-2 text-[#636e72]">
      <Image src="/icons/check.svg" alt="check icon" width={15} height={15} />
      {text}
    </li>
  );
};

export default CustomTradingSolutionsSection;

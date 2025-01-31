'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
/* variants */
import { slideUp } from '@/animations/slideVariants';

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
    {
      title: ['VIP ', <br key="line-break" />, 'Conta de negociação'],

      text: 'As contas Trader 4xc VVIP são contas de negociação exclusivas para indivíduos de elevados rendimentos, que negoceiam grandes volumes',
      items: [
        'Até 30% de desconto nos spreads de mercado',
        'Acesso a VPS grátis',
        'Comissão até 30% menor em contas cTrader',
      ],
      btnText: 'Abrir Conta Vip',
      btnLink: '/',
    },
  ];
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 items-center justify-center text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={slideUp}
            viewport={{ once: true }}
            className="text-[#2d3436] text-3xl sm:text-4xl"
          >
            Soluções de negociação sob medida
          </motion.h2>

          <div className="flex items-start  flex-col gap-y-10 xl:flex-row xl:justify-between xl:gap-x-20 2xl:gap-x-36 relative h-full px-2">
            {solutionsData.map((item, index) => (
              <div
                className=" flex flex-col items-center gap-y-6 border border-[#3031351a] rounded-lg xl:py-20 p-4 py-6 xl:px-24 h-full flex-1 xl:min-h-[646px]"
                key={index}
              >
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  variants={slideUp}
                  viewport={{ once: true }}
                  className="text-[#2d3436] text-3xl text-center"
                >
                  {item.title}
                </motion.p>
                <p className="text-[#636e72] text-lg">{item.text}</p>
                {/* items */}
                <ul className="flex flex-col gap-y-3 w-full">
                  {item.items.map((item, index) => (
                    <TextCheckItem key={index} text={item} />
                  ))}
                </ul>
                {/* button */}
                <Link
                  href={item.btnLink}
                  // className="border-[#303135] border text-[#2d3436] text-lg font-medium min-h-[65px] min-w-[250px] py-6 rounded hover:bg-[#303135] hover:text-white transition-all duration-300"
                  className="btn-common border-[#013178] border text-[#2d3436] hover:bg-[#013178] hover:text-white w-fit"
                >
                  {item.btnText}
                </Link>

                {/* link */}
                <Link href={'/'} className="text-[#636e72]">
                  ou aberto <span className="text-[#b68756]">Conta Demo</span>
                </Link>
              </div>
            ))}
          </div>
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

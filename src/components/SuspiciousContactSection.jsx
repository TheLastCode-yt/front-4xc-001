import Image from 'next/image';
import TextReveal from './TextReveal';
const SuspiciousContactSection = () => {
  const textData = [
    'Não fornece troca física ou serviços de pagamento relacionados a Criptomoedas.',
    'Nunca solicitará que você faça transferências de e para sua conta. Faça pagamentos apenas através do nosso portal Trader 4xc Direct.',
    'Nunca solicitará sua(s) senha(s) ou outras informações confidenciais.',
    'Os serviços não incluem a gestão de ativos ou a garantia de qualquer retorno sobre o investimento.',
    'Não se envolverá em nenhum conselho de investimento ou negociação.',
  ];

  return (
    <section>
      <div className="container mx-auto text-black">
        <div className="grid grid-cols-12  py-4 px-2 md:p-10 xl:p-24 bg-[#F4F4F4] text-4xl font-semibold gap-y-10 xl:gap-y-20">
          {/* texts */}
          <div className="col-span-12 md:col-span-6">
            {/* <h2>Contato suspeito alegando ser Trader 4xc</h2> */}
            <TextReveal as="h2" duration={2}>
              Contato suspeito alegando ser Trader 4xc
            </TextReveal>
          </div>

          <div className="col-span-12 md:col-span-6 pl-6 border-l-4 border-black items-center flex">
            <p className="text-sm">
              Para maior clareza, gostaríamos de destacar que o Trader 4xc:
            </p>
          </div>

          {/* cards */}
          <div className="col-span-12">
            <ul className="grid grid-cols-1 md:grid-cols-12 gap-10">
              {textData.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-x-3 bg-white p-5 text-black justify-center col-span-6"
                >
                  <div>
                    <Image
                      src="/icons/exclamation.svg"
                      width={20}
                      height={20}
                      alt="danger exclamation icon"
                    />
                  </div>
                  <p className="text-sm">{item}</p>
                </li>
              ))}
            </ul>

            <p className="text-sm mt-20">
              Qualquer um dos itens acima deve ser considerado suspeito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuspiciousContactSection;

import Image from 'next/image';
import TextReveal from './TextReveal';
const DataSecuritySection = () => {
  const itemsData = [
    'Usamos os mais altos níveis de criptografia de dados em nossos sites e aplicativos',
    'Uma forte equipe de profissionais está em constante monitoramento e sempre preparada para responder a qualquer incidente ou atividades irregulares em pagamentos online',
    'Assumimos todos os controles para manter o portal Trader 4xc Direct como um local seguro para executar suas transações',
    'As senhas devem ser de certa complexidade e comprimento',
    'Para qualquer atualização de informações pessoais/processamento de qualquer uma de suas solicitações de dados pessoais, verificaremos se você fez essa solicitação antes de tomar qualquer ação',
    'Opção de verificação em 2 etapas',
    'Confirmações de e-mail automatizadas para alterações na senha da sua conta',
    'Temos um responsável pela proteção de dados monitorando a conformidade com o GDPR e somos auditados regularmente por partes externas em relação a todos os controles que temos para proteger nossos sistemas e dados',
  ];

  return (
    <section>
      <div className="container mx-auto text-black">
        <div className="grid grid-cols-12 py-4 px-2 md:p-10 xl:p-24 bg-[#F4F4F4] text-4xl font-semibold gap-y-10">
          {/* texts */}
          <div className="col-span-12 md:col-span-6">
            <TextReveal
              className="col-span-12 md:col-span-6"
              as="h2"
              duration={2}
            >
              Como a Trader 4xc
              <br />
              protege seus dados
            </TextReveal>
          </div>

          <div className="col-span-12 md:col-span-6 pl-6 border-l-4 border-black items-center flex">
            <p className="text-sm">
              Na Trader 4xc, a segurança dos dados do cliente é uma prioridade e
              temos medidas de segurança sofisticadas projetadas para proteger
              suas informações pessoais, privacidade e fundos.
            </p>
          </div>

          {/* items */}
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Primeira coluna */}
            <ul className="flex flex-col gap-6 col-span-6">
              {itemsData.slice(0, 4).map((item, index) => (
                <ItemText text={item} key={index} />
              ))}
            </ul>

            {/* Segunda coluna */}
            <ul className="flex flex-col gap-6 col-span-6">
              {itemsData.slice(4).map((item, index) => (
                <ItemText text={item} key={`${index}+xambra?`} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const ItemText = ({ text }) => {
  return (
    <li className="flex items-start gap-x-2 text-lg">
      <Image
        src="/icons/check-green.svg"
        width={20}
        height={20}
        alt="arrow icon"
      />
      {text}
    </li>
  );
};

export default DataSecuritySection;

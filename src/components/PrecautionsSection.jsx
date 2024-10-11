import Link from 'next/link';
import Image from 'next/image';
import TextReveal from './TextReveal';
const PrecautionsSection = () => {
  const dangersData = [
    {
      img: 'hook',
      title: 'Cuidado com Phishing',
      text: (
        <>
          E-mails de phishing são uma tática comum usada por fraudadores, usada
          para obter informações pessoais se passando por uma empresa confiável.{' '}
          <span className="text-blue-500">
            Nunca abra anexos ou clique em links em e-mails suspeitos, nem
            responda a eles.
          </span>{' '}
          Cuidado com golpistas que usam domínios de e-mail com nomes
          semelhantes para parecer que a comunicação é de uma fonte oficial.
          Embora nem sempre seja o caso, esses e-mails geralmente contêm erros
          de ortografia ou formatação inadequada, o que pode ser uma indicação
          de que algo não está certo.
          <br />
          <br />
          Phishing de voz e falsificação de número são outros métodos usados
          para convencer as vítimas a divulgar dados confidenciais, portanto,
          sempre confirme a autenticidade, mesmo que seja de um número que você
          reconheça.
        </>
      ),
    },
    {
      img: 'bug',
      title: 'Vírus e malware',
      text: (
        <>
          Malwares e vírus maliciosos podem enviar informações do seu
          dispositivo ou alterar detalhes de transações em uma tentativa de
          roubar sua identidade ou fundos.{' '}
          <span className="text-blue-500">
            Não baixe arquivos ou programas de fontes desconhecidas.
          </span>{' '}
          <br /> <br />
          Configure um software antimalware em todos os dispositivos que você
          pode usar e atualize-os com frequência. Você também deve garantir que
          tenha as últimas atualizações do sistema operacional no seu
          dispositivo.
        </>
      ),
    },
    {
      img: 'padlock',
      title: 'Navegação segura',
      text: (
        <>
          Ao navegar on-line, verifique se o site tem{' '}
          <span className="text-blue-500">https://</span> e o ícone de cadeado
          seguro na barra de URL. Cuidado com o spoofing de site, onde um site
          legítimo é clonado e usado para coletar informações do cliente,
          geralmente enviadas por e-mails de phishing ou janelas pop-up do
          navegador. <br /> <br />
          Use apenas conexões de internet seguras e não Wi-Fi público, pois
          essas redes são mais abertas a hackers. Se você usa um computador
          compartilhado, nunca salve as informações de login e limpe o cache e
          os cookies após cada sessão.
        </>
      ),
    },
    {
      img: 'anonymous',
      title: 'Não divulgue seus dados!',
      text: (
        <>
          Nunca compartilhe sua(s) senha(s) ou informações confidenciais da
          conta com ninguém, nem anote nenhuma senha ou código de acesso.
          Desconfie de qualquer contato que peça para você fornecer detalhes da
          conta ou informações pessoais, como sua identidade. <br /> <br />
          <span className="text-blue-500">
            A Trader 4xc e outras empresas respeitáveis ​​nunca pediriam tais
            detalhes e você deve considerar qualquer contato ou solicitação como
            suspeito.{' '}
          </span>
        </>
      ),
    },
    {
      img: 'key',
      title: 'Não facilite',
      text: (
        <>
          Às vezes, é fácil para fraudadores simplesmente por falta de
          complexidade de senha ou alteração.{' '}
          <span className="text-blue-500">
            Altere sua(s) senha(s) com frequência e use uma combinação de
            símbolos, números, letras maiúsculas e minúsculas.
          </span>{' '}
          Não use senhas que contenham nomes de família, animais de estimação ou
          apelidos, pois são facilmente adivinhados. Use senhas diferentes para
          sites diferentes e habilite a autenticação multifator sempre que
          possível.
        </>
      ),
    },
  ];

  return (
    <section>
      <div className="container mx-auto text-black">
        <div className="flex flex-col gap-y-20">
          <div className="grid grid-cols-6 xl:grid-cols-12 py-4 px-2 md:p-10 xl:p-24 bg-[#F4F4F4] text-4xl font-semibold gap-y-10 gap-x-12">
            {/* texts */}
            <div className="col-span-6 md:col-span-6">
              {/* <h2>
                Como a Trader 4xc
                <br />
                protege seus dados
              </h2> */}
              <TextReveal as="h2" duration={2}>
                Como a Trader 4xc
                <br />
                protege seus dados
              </TextReveal>
            </div>

            <div className="col-span-6 pl-6 border-l-4 border-black items-center flex w-full">
              <p className="text-sm">
                Na Trader 4xc, a segurança dos dados do cliente é uma prioridade
                e temos medidas de segurança sofisticadas projetadas para
                proteger suas informações pessoais, privacidade e fundos.
              </p>
            </div>

            <div className="col-span-6 xl:col-span-12 max-w-sm text-lg ">
              Nesta página, você encontrará diretrizes e dicas para manter seus
              dados e finanças seguros e protegidos online.
            </div>

            {/* container for download pdfs */}
            <div className="col-span-6  bg-white flex gap-x-8 p-8 w-full">
              <CardDownloadPdf
                img="fraudulent-websites-img"
                link="/"
                text={'Como identificar sites fraudulentos'}
              />
            </div>

            <div className="col-span-6 bg-white flex gap-x-8 p-8">
              <CardDownloadPdf
                img={'fraudulent-websites-protect'}
                link="/"
                text={'Principais dicas para segurança online'}
              />
            </div>
          </div>

          <div className="overflow-hidden w-full">
            <ul className="grid grid-cols-6 gap-10">
              {dangersData.map((item, index) => (
                <CardDangers key={index} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const CardDownloadPdf = ({ text, link, img }) => {
  return (
    <Link href={link} className=" bg-white flex gap-x-8 p-2 md:p-8">
      <Image
        src={`/icons/${img}.svg`}
        width={100}
        height={144}
        alt="image pdf"
      />

      <div className="flex flex-col gap-y-3 max-w-[40%] sm:max-w-none">
        <Image
          src="/icons/pdf-doc-icon.svg"
          width={27}
          height={31}
          alt="icon pdf download"
        />
        <p className="font-medium text-lg md:text-2xl xl:text-3xl block">
          {text}
        </p>
      </div>
    </Link>
  );
};

const CardDangers = ({ img, title, text }) => {
  return (
    <li className="pt-6 border-t border-[#D9D9D9] col-span-6 md:col-span-3 flex flex-col gap-y-3 w-full">
      <div className="flex gap-x-2 items-center">
        <Image
          height={25}
          width={25}
          src={`/icons/${img}.svg`}
          className="max-h-[25px] w-auto"
          alt={img}
        />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <div className="">
        <p className="text-sm text-black text-wrap">{text}</p>
      </div>
    </li>
  );
};

export default PrecautionsSection;

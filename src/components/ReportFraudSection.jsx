import Link from 'next/link';
const ReportFraudSection = () => {
  const textsData = [
    <>
      Se você receber chamadas, e-mails ou SMS não solicitados alegando ser
      FxPro, não se envolva em nenhuma comunicação e informe-nos imediatamente
      por meio de nossos{' '}
      <Link href={'/'} className="underline">
        canais de comunicação oficiais
      </Link>{' '}
      em nosso site.
    </>,
    <>
      Informe-{' '}
      <Link href={'/'} className="underline">
        nos
      </Link>{' '}
      também caso perceba quaisquer transações não autorizadas em sua conta ou
      suspeite que um terceiro possa ter acesso às informações de sua conta.
    </>,
  ];

  return (
    <section>
      <div className="container mx-auto  py-4 px-2 md:p-10 xl:p-24 bg-[#130F0F]">
        <div className="grid grid-cols-12 text-4xl font-semibold xl:gap-y-20 gap-y-10">
          <div className="md:col-span-6 col-span-12">
            <h2>Software Oficial e Comunicação</h2>
          </div>

          <div className="col-span-12 md:col-span-6 pl-6 border-l-4 border-white items-center flex">
            <p className="text-sm">
              Lembramos que você deve ser cauteloso com canais de comunicação
              não autorizados e não divulgar quaisquer dados pessoais ou
              informações confidenciais da conta nas mídias sociais.
            </p>
          </div>

          {/* cards */}
          <div className="col-span-12">
            <ul className="grid grid-cols-1 md:grid-cols-12 gap-10">
              {textsData.map((item, index) => (
                <li
                  key={index}
                  className="bg-[#303030] p-7 text-base col-span-6"
                >
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportFraudSection;

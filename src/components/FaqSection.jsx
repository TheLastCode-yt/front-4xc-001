import Link from 'next/link';
const FaqSection = () => {
  const faqData = [
    {
      question: 'Como abro uma conta de negociação ao vivo?',
      link: '/',
    },
    {
      question: 'Quais documentos você precisa?',
      link: '/',
    },
    {
      question: 'Como posso verificar meu perfil?',
      link: '/',
    },
    {
      question: 'Posso abrir mais de uma conta com a FxPro?',
      link: '/',
    },
    {
      question: 'Em quais moedas base posso abrir uma conta?',
      link: '/',
    },
    {
      question: 'Quais tipos de conta você oferece?',
      link: '/',
    },
  ];

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 items-center justify-center">
          <h2 className="text-[#2d3436] text-4xl">Perguntas frequentes</h2>
          <div className="grid grid-cols-6 gap-6 xl:gap-10">
            {faqData.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="col-span-6 md:col-span-3 xl:col-span-2 px-5 text-center flex items-center justify-center text-[#303135] bg-[#30313508] text-xl font-medium h-[80px]"
              >
                {item.question}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

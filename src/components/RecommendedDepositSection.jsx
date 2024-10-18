import Image from 'next/image';
import Link from 'next/link';

const RecommendedDepositSection = () => {
  const currencyData = [
    { title: 'USD', text: '$5' },
    { title: 'EUR', text: '€5' },
    { title: 'GBP', text: '£5' },
    { title: 'CHF', text: '₣5' },
    { title: 'AUD', text: '$5' },
    { title: 'BRL', text: 'R$50' },
  ];
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 items-center justify-center">
          <Image
            src="/icons/wallet.svg"
            alt="wallet icon"
            width={40}
            height={40}
          />
          <h2 className="text-[#2d3436] text-2xl sm:text-4xl text-center">
            Métodos de Pagamento e Tempos de Processamento
          </h2>
          <p className="text-lg text-[#636e72]">Depósito Mínimo Recomendado</p>

          <div className="py-8 flex items-center border-y border-[#dfe6e9] w-full xl:overflow-x-hidden overflow-x-scroll gap-10">
            {currencyData.map((item, index) => (
              <CurrencyCard key={index} title={item.title} text={item.text} />
            ))}
          </div>

          <div className="text-center">
            <Link href={'/'} className="btn bg-[#013178] mb-4">
              Comece a negociar agora
            </Link>

            <small className="text-[#636e72] text-sm">
              ou{' '}
              <Link href={'/'} className="text-[#b68756] ml-1">
                Tente uma conta de demonstração
              </Link>{' '}
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

const CurrencyCard = ({ title, text }) => {
  return (
    <div className="flex flex-col flex-1 items-center">
      <span className="text-lg font-bold text-[#2d3436]">{title}</span>
      <span className="text-4xl font-light text-[#b68756]">{text}</span>
    </div>
  );
};

export default RecommendedDepositSection;

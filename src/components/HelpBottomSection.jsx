import Link from 'next/link';

const HelpBottomSection = () => {
  return (
    <div className="">
      <div className="container mx-auto bg-black py-4 text-center">
        <p className="text-2xl font-normal">
          Necessita de ajuda? Visite a nossa{' '}
          <Link href={'/'} className="underline">
            Seção de Ajuda
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HelpBottomSection;

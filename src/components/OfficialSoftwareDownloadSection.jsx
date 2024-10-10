import Image from 'next/image';
import Link from 'next/link';

const OfficialSoftwareDownloadSection = () => {
  const socialsData = [
    { link: '/', img: 'facebook-logo' },
    { link: '/', img: 'instagram-logo' },
    { link: '/', img: 'youtube-logo' },
    { link: '/', img: 'linkedin-logo' },
    { link: '/', img: 'telegram-logo' },
    { link: '/', img: 'twitter-logo' },
  ];

  return (
    <section>
      <div className="container mx-auto text-black">
        <div className="flex flex-col gap-y-20">
          <div className="grid grid-cols-12 text-4xl font-semibold gap-y-10 xl:gap-y-20">
            <div className="col-span-12 md:col-span-6">
              <h2>Software Oficial e Comunicação</h2>
            </div>

            <div className="col-span-12 md:col-span-6 pl-6 border-l-4 border-white items-center flex">
              <p className="text-sm">
                Lembramos que você deve ser cauteloso com canais de comunicação
                não autorizados e não divulgar quaisquer dados pessoais ou
                informações confidenciais da conta nas mídias sociais.
              </p>
            </div>
          </div>

          <div className="col-span-12">
            <div className=" bg-[#F4F4F4] p-6 md:p-10 xl:p-12 flex items-center justify-center w-full">
              <ul className="flex items-center justify-between w-full xl:w-[80%]">
                {socialsData.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link}>
                      <Image
                        src={`/icons/${item.img}.svg`}
                        width={40}
                        height={40}
                        alt={`${item.img} icon`}
                        className="max-w-[30px] max-h-[30px] xl:max-w-none xl:max-h-none"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-12 gap-10 sm:gap-0">
            {/* grid 1 */}
            <div className="flex flex-col gap-y-3 md:col-span-6 md:pr-10 col-span-12">
              <p>
                O aplicativo móvel oficial da FxPro está disponível para
                download apenas na Apple App Store e na Google Play Store.
                Outros softwares de negociação oficiais fornecidos por nós podem
                ser encontrados em nosso{' '}
                <Link href="/" className="underline">
                  centro de download
                </Link>{' '}
                .
              </p>
              <div className="flex items-center gap-x-4">
                <Link href={'/'}>
                  <Image
                    src="/icons/apple-button.svg"
                    width={135}
                    height={40}
                    className=""
                  />
                </Link>

                <Link href={'/'}>
                  <Image
                    src="/icons/google-button.svg"
                    width={135}
                    height={40}
                    className=""
                  />
                </Link>
              </div>
            </div>

            {/* grid 2 */}
            <div className="flex flex-col gap-y-3 md:col-span-6 md:pl-10 col-span-12">
              <p>
                Certifique-se de que está usando apenas aplicativos e softwares
                de fontes oficiais. Se você tem suspeitas sobre um aplicativo ou
                canal de mídia social e deseja verificar a autenticidade, entre
                em contato conosco por meio de um de nossos canais oficiais de
                comunicação, que se encontram em nossa{' '}
                <Link href="/">página de contatos</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficialSoftwareDownloadSection;

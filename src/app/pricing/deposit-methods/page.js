import React from 'react';
/* components */
import HelpBottomSection from '@/components/HelpBottomSection';
import WalletHero from '@/components/WalletHero';
import RecommendedDepositSection from '@/components/RecommendedDepositSection';
import AwardsSection from '@/components/AwardsSection';

const page = () => {
  return (
    <main className="overflow-x-hidden pt-[64px] flex flex-col gap-y-28">
      <WalletHero />
      <RecommendedDepositSection />
      <AwardsSection />
      <HelpBottomSection />
    </main>
  );
};

export default page;



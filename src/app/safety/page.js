import React from 'react';
/* COMPONENTS */
import DataSecuritySection from '@/components/DataSecuritySection';
import PrecautionsSection from '@/components/PrecautionsSection';
import SuspiciousContactSection from '@/components/SuspiciousContactSection';
import ReportFraudSection from '@/components/ReportFraudSection';
import OfficialSoftwareDownloadSection from '@/components/OfficialSoftwareDownloadSection';
import HereHelpSection from '@/components/HereHelpSection';
import HelpBottomSection from '@/components/HelpBottomSection';

const page = () => {
  /* py-4 px-2 md:p-10 xl:p-24*/
  return (
    <main className="overflow-x-hidden pt-[64px] flex flex-col gap-y-28">
      {/* section 1 */}
      <section>
        <div className="container mx-auto text-black">
          <h1 className="text-5xl font-semibold">Mantendo-se seguro on-line</h1>
          <span className="text-2xl font-semibold">
            Informações importantes sobre segurança online
          </span>
        </div>
      </section>

      {/* section 2 */}
      <DataSecuritySection />

      {/* section 3 */}
      <PrecautionsSection />

      {/* section 4 */}
      <SuspiciousContactSection />

      {/* section 5 */}
      <ReportFraudSection />

      {/* section 6 */}
      <OfficialSoftwareDownloadSection />

      {/* section 7 */}
      <HereHelpSection />

      {/* section 8 */}
      <HelpBottomSection />
    </main>
  );
};

export default page;


"use client"
import FooterPrimary from '@/components/atomic/sections/footer/FooterPrimary';
import LayoutPrimary from '@/components/atomic/sections/layouts/LayoutPrimary';
import NavbarPrimary from '@/components/atomic/sections/navbars/NavbarPrimary';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <LayoutPrimary navbar={<NavbarPrimary />} footer={<FooterPrimary />}>
      {/* <div className="bg-white">
        <Button variant={'default'} className="text-black">
          Shadcn Test
        </Button>
        <h1 className="text-black">{t('Home')}</h1>
      </div> */}
      <div className="flex flex-col gap-2 max-w-[1340px] w-full ">{t('Home')}</div>
    </LayoutPrimary>
  );
}

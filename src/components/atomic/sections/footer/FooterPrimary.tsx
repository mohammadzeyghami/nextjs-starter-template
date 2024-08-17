'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import H5 from '../../atoms/typography/H5';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import P from '../../atoms/typography/P';
import routes from '@/routes';
import SvgInstagram from '@/assets/svgs/instagram';
import SvgWhatsApp from '@/assets/svgs/whatsapp';
import SvgLinkedIn from '@/assets/svgs/linkedin';
import SvgTelegram from '@/assets/svgs/telegram';
import { useTheme } from 'next-themes';

const FooterPrimary = () => {
  const { theme } = useTheme();

  const { locale } = useParams();
  const t = useTranslations();

  const linkGroups = [
    [
      { path: routes.Home.root, label: 'Home' },
      { path: routes.ContactUs.root, label: 'ContactUs' },
    ],
    [
      { path: routes.AboutUS.root, label: 'AboutUs' },
    ],
  ];

  

  return (
    <div className="w-full flex justify-center bg-bg-primary dark:bg-[#040D12]  p-4 shadow border-t-[1px]">
      <div className="w-full max-w-[1340px] flex flex-col">
        <div className="flex w-full pb-4">
          <div className="w-[30%]">Logo</div>
          <div className="w-[70%] flex justify-between">
            {linkGroups.map((group, index) => (
              <div key={index} className="flex flex-col gap-4">
                {group.map((link) => (
                  <Link key={link.path} href={`/${locale}${link.path}`}>
                    <P className="hover:text-primary dark:hover:text-primary !font-medium duration-300 ease-in-out">{t(link.label)}</P>
                  </Link>
                ))}
              </div>
            ))}
            <div className="flex">
              {/* we set Map later */}
              map
            </div>
          </div>
        </div>
        {/* <div className="flex w-full justify-between items-center border-t-[1px] border-gray-300 py-4">
          <H5 className="w-full !font-medium">{t('FollowUs')} :</H5>
          
        </div> */}
      </div>
    </div>
  );
};

export default FooterPrimary;

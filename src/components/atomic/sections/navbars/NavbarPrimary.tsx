'use client';
import routes from '@/routes';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { useTranslations } from 'use-intl';
import { cn } from '@/lib/utils';
import P from '../../atoms/typography/P';
import { Button } from '../../molecules/buttons/Button';
import { useTheme } from 'next-themes';
import SvgMoon from '@/public/svgs/moon';
import SvgSun from '@/public/svgs/sun';

const navItems = [
  { label: 'Home', route: routes.Home.root },
  { label: 'ContactUs', route: routes.ContactUs.root },
  { label: 'AboutUs', route: routes.AboutUS.root },
];

const NavbarPrimary: React.FC = () => {
  const { setTheme, theme } = useTheme();
  const t = useTranslations();
  const { locale } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-bg-primary dark:bg-[#040D12] shadow-md dark:shadow-dark-shadow-1">
      <div className="container mx-auto py-4 px-2 md:px-0 flex items-center justify-between">
        <div className="text-xl hidden lg:block font-bold text-black dark:text-white">Icon</div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill={theme === 'dark' ? '#fff' : '#000'} stroke={theme === 'dark' ? '#fff' : '#000'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex gap-6 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={`/${locale}${item.route}`} className="hover:text-gray-300">
                <P className="hover:text-primary dark:hover:text-primary ease-in-out duration-200 !font-medium">{t(item.label)}</P>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 items-center">
          {theme === 'light' ? (
            <SvgMoon className="cursor-pointer" onClick={() => setTheme('dark')} />
          ) : theme === 'dark' ? (
            <SvgSun className="cursor-pointer" onClick={() => setTheme('light')} />
          ) : (
            <SvgMoon className="cursor-pointer" onClick={() => setTheme('dark')} />
          )}
          <Button>{t('SignUp')}</Button>
          <Button variant={'ghost'}>{t('Login')}</Button>
        </div>
      </div>
      {/* Drawer for mobile menu */}
      <div
        className={cn(
          'fixed top-0 h-full bg-[#F7FAFC] w-[30vw] dark:border-e-[1px] dark:border-gray-500 dark:bg-[#040D12] shadow-md transform transition-transform duration-300 ease-in-out',
          menuOpen ? (locale === 'en' ? 'translate-x-0 left-0' : 'translate-x-0 right-0') : locale === 'en' ? '-translate-x-full left-0' : 'translate-x-full right-0'
        )}
      >
        <div className="p-4">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill={theme === 'dark' ? '#fff' : '#000'} stroke={theme === 'dark' ? '#fff' : '#000'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center gap-6 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={`/${locale}${item.route}`} className="hover:text-gray-300" onClick={toggleMenu}>
                <P className="hover:text-primary dark:hover:text-primary ease-in-out duration-200 !font-medium">{t(item.label)}</P>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarPrimary;

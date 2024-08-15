import { DirectionProvider } from '@/components/atomic/molecules/providers/Direction';
import { ThemeProvider } from '@/components/atomic/molecules/providers/Theme';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { cn } from '@/lib/utils';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Starter Template',
  description: 'Starter Template ',
};

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <Head>
        <title>عنوان صفحه</title>
        <meta name="description" content="توضیحات صفحه" />
        <meta name="keywords" content="کلمات کلیدی" />
        <meta property="og:title" content="عنوان برای اشتراک‌گذاری در شبکه‌های اجتماعی" />
        <meta property="og:description" content="توضیحات برای اشتراک‌گذاری در شبکه‌های اجتماعی" />
        <meta property="og:image" content="/path/to/image.jpg" />
      </Head>
      <body className={cn(inter.className, 'overflow-x-hidden font-iranYekan')}>
        <NextIntlClientProvider messages={messages}>
          <DirectionProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
              {children}
            </ThemeProvider>
          </DirectionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

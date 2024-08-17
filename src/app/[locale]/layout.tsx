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

export const metadata = {
  title: "PWA with Next 14",
  description: "PWA application with Next 14",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs14", "next14", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Mohammad Zeighami" },
    {
      name: "Mohammad Zeighami",
      url: "https://www.linkedin.com/in/alldofaiz/",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
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

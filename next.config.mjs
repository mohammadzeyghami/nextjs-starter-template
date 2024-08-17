import createNextIntlPlugin from 'next-intl/plugin';
import nextPwa from 'next-pwa';

const withNextIntl = createNextIntlPlugin();

const withPWA = nextPwa({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPWA(withNextIntl(nextConfig));

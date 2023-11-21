import GlobalStyles from '@/styles/app.styles';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Noto_Sans } from 'next/font/google';
import { ReactElement, ReactNode } from 'react';

const noto_sans = Noto_Sans({
  subsets: ['latin'],
  weight: '400',
});
export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${noto_sans.style.fontFamily};
        }
      `}</style>
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

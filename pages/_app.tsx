import GlobalStyles from '@/styles/app.styles';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import { ReactElement, ReactNode } from 'react';

export const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' });

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
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

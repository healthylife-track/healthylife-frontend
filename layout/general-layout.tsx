import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import Head from 'next/head';
import { ReactNode } from 'react';

interface GeneralLayoutProps {
  pageTitle: string;
  children: ReactNode;
}

const GeneralLayout = ({ pageTitle, children }: GeneralLayoutProps) => {
  const title = `${pageTitle} | MedAidSync`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Revolutionizing Medical Adherence with Digital Solutions!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/pulse.svg" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default GeneralLayout;

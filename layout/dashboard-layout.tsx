import Logo from '@/components/logo/logo';
import { DashboardNav } from '@/styles/dashboard.styles';
import Head from 'next/head';
import { ReactNode } from 'react';

interface IDashboardLayoutProps {
  pageTitle: string;
  children: ReactNode;
}
const DashboardLayout = ({ children, pageTitle }: IDashboardLayoutProps) => {
  const title = `${pageTitle} | Dashboard | MedAidSync`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Revolutionizing Medical Adherence with Digital Solutions!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <DashboardNav>
        <Logo />
      </DashboardNav>
      <main>{children}</main>
    </>
  );
};

export default DashboardLayout;

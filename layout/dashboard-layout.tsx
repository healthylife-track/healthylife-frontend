import Button from '@/components/button/button';
import Logo from '@/components/logo/logo';
import SvgIcon from '@/components/svg-icon/svg-icon';
import {
  DashboardNav,
  LogoutButton,
  UserImageContainer,
} from '@/styles/dashboard.styles';
import getRemValue from '@/utils/getRemValue';
import Head from 'next/head';
import Image from 'next/image';
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

        <LogoutButton>
          <UserImageContainer>
            <div>
              <Image
                src="/assets/user-icon.svg"
                placeholder="blur"
                blurDataURL="data:/assets/blurred-image.png"
                sizes={`${getRemValue(34)}`}
                alt="med-aid-sync-logo"
                fill
              />
            </div>
          </UserImageContainer>
          <Button primary>
            <p>Logout</p>
            <SvgIcon name="arrow-right" />
          </Button>
        </LogoutButton>
      </DashboardNav>
      <main>{children}</main>
    </>
  );
};

export default DashboardLayout;

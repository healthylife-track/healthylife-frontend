import GeneralLayout from '@/layout/general-layout';
import { NextPageWithLayout } from './_app';
import {
  HeroImageContainer,
  HeroTextContainer,
  HeroWrapper,
} from '@/styles/home.styles';
import Button from '@/components/button/button';
import SvgIcon from '@/components/svg-icon/svg-icon';
import Link from 'next/link';
import routes from '@/lib/routes';
import Image from 'next/image';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <HeroWrapper>
        <HeroTextContainer>
          <h1>
            Revolutionizing <span>Medical</span> Adherence with Digital
            Solutions!
          </h1>

          <p>
            Harnessing technology to simplify medication management and improve
            patient well-being.
          </p>

          <div>
            <Link href={routes.signUp()}>
              <Button primary block>
                <p>Get Started</p>
                <SvgIcon name="arrow-right" />
              </Button>
            </Link>

            <Link href={'#'}>
              <Button block>
                <p>Learn More...</p>
              </Button>
            </Link>
          </div>
        </HeroTextContainer>
        <HeroImageContainer>
          <Image src="/assets/hero-image.png" alt="hero image" fill />
        </HeroImageContainer>
      </HeroWrapper>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <GeneralLayout pageTitle="Home">{page}</GeneralLayout>;
};

export default Home;

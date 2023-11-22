import GeneralLayout from '@/layout/general-layout';
import { NextPageWithLayout } from './_app';
import {
  HeroImageContainer,
  HeroTextContainer,
  HeroWrapper,
  HowItWorksContainer,
  HowItWorksImageContainer,
  HowItWorksSubContainer,
  ServiceSectionImageContainer,
  ServicesSection,
  ServicesSectionTextContainer,
} from '@/styles/home.styles';
import Button from '@/components/button/button';
import SvgIcon from '@/components/svg-icon/svg-icon';
import Link from 'next/link';
import routes from '@/lib/routes';
import Image from 'next/image';
import HowItWorksCard from '@/components/cards/how-it-works-card/how-it-works-card';
import { SectionHeaderText } from '@/styles/common.styles';

const Home: NextPageWithLayout = () => {
  return (
    <>
      {/* Hero Section */}
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
          <Image
            src="/assets/hero-image.png"
            alt="hero image"
            placeholder="blur"
            blurDataURL="data:/assets/blurred-image.png"
            sizes="(min-width: 56.25em) 45vw, 90vw"
            fill
          />
        </HeroImageContainer>
      </HeroWrapper>

      {/* How it works section  */}
      <HowItWorksContainer>
        <SectionHeaderText isCentered>How It Works</SectionHeaderText>
        <p>Easy steps to set reminders.</p>
        <HowItWorksSubContainer>
          <HowItWorksImageContainer>
            <Image
              src="/assets/overlay-image.png"
              alt="overlay image"
              placeholder="blur"
              blurDataURL="data:/assets/blurred-image.png"
              sizes="90vw"
              fill
            />
          </HowItWorksImageContainer>
          <HowItWorksCard
            icon="add-user"
            title="Set Up Your Account"
            description="Sign up and get started on your health journey today."
            buttonText="Get Started"
          />
          <HowItWorksCard
            isPrimary
            icon="done-ring"
            title="Enter Medication Details"
            description="Enter Medication details and take control of your health."
            buttonText="Enter Details"
          />
          <HowItWorksCard
            isTertiary
            icon="notification-bell"
            title="Get Reminders"
            description="Get daily reminders and track your medical adherence."
            buttonText="Set Reminders"
          />
        </HowItWorksSubContainer>
      </HowItWorksContainer>

      {/* Our Services Section */}
      <ServicesSection isReversed>
        <ServicesSectionTextContainer>
          <SectionHeaderText isPrimary>
            Your Health, Our Priority
          </SectionHeaderText>

          <p>
            We provide you with highly skilled and compassionate doctors to help
            you keep track of your exceptional medical care. Your health journey
            is important to us, and our doctors are committed to guiding you
            every step of your way.
          </p>

          <button>Learn More...</button>
        </ServicesSectionTextContainer>

        <ServiceSectionImageContainer>
          <Image
            src="/assets/standing-male-doctor.png"
            alt="standing-male-doctor"
            placeholder="blur"
            blurDataURL="data:/assets/blurred-image.png"
            sizes="(min-width: 56.25em) 45vw, 90vw"
            fill
          />
        </ServiceSectionImageContainer>
      </ServicesSection>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <GeneralLayout pageTitle="Home">{page}</GeneralLayout>;
};

export default Home;

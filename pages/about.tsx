import {
  AboutHeroContainer,
  AboutImageContainer,
  AboutHeroTextContainer,
  AboutPageWrapper,
  MissionSection,
  SectionTitleText,
  SolutionSection,
  SolutionSectionImageContainer,
  SolutionText,
} from '@/styles/about.styles';
import { NextPageWithLayout } from './_app';
import { SectionHeaderText } from '@/styles/common.styles';
import GeneralLayout from '@/layout/general-layout';
import Image from 'next/image';
import getRemValue from '@/utils/getRemValue';
import Button from '@/components/button/button';
import SvgIcon from '@/components/svg-icon/svg-icon';
import { useRouter } from 'next/router';
import routes from '@/lib/routes';
import { useEffect } from 'react';

const AboutPage: NextPageWithLayout = () => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(routes.signUp());
  }, [router]);

  return (
    <AboutPageWrapper>
      <SectionHeaderText isCentered>About Us</SectionHeaderText>

      <AboutHeroContainer>
        <AboutImageContainer>
          <Image
            src="/assets/about-hero-image.png"
            alt="man showing 2 people something on laptop"
            placeholder="blur"
            blurDataURL="data:/assets/blurred-image.png"
            sizes="90vw"
            fill
          />
        </AboutImageContainer>
        <AboutHeroTextContainer>
          <p>What we do</p>
          <p>
            Our digital solution utilizes user-friendly interfaces and reminders
            to help patients stay on track with their medication regimens. It
            also provides health care professionals with tools to monitor and
            support patients” adherence.
          </p>
        </AboutHeroTextContainer>
      </AboutHeroContainer>

      <MissionSection>
        <div>
          <SectionTitleText>Our Mission</SectionTitleText>

          <SectionHeaderText>
            To improve medical adherence for chronic patients and enhance their
            overall healthcare outcomes
          </SectionHeaderText>

          <p>
            Our mission is to revolutionize medication adherence for chronic
            patients by providing a user friendly digital solution that promotes
            medication management, personalized reminders, and real-time
            tracking. It’s all empowering patients and improving their
            healthcare outcomes.
          </p>
        </div>
      </MissionSection>

      <SolutionSection>
        <SectionTitleText>Our Solution</SectionTitleText>

        <SectionHeaderText isCentered isPrimary>
          MedAidSync
        </SectionHeaderText>

        <SolutionSectionImageContainer>
          <Image
            src="/assets/med-aid-sync-hero.png"
            alt="med-aid-sync-hero screenshot"
            placeholder="blur"
            blurDataURL="data:/assets/blurred-image.png"
            sizes={`${getRemValue(350)}`}
            fill
          />
        </SolutionSectionImageContainer>

        <SolutionText>
          Our solution sends reminders and notifications to help you remember to
          take your medication. In case you miss a dose, it can provide prompts
          and suggestions to help you get back on track.
        </SolutionText>

        <Button secondary onClick={() => router.push(routes.signUp())}>
          <p>Get Started</p>
          <SvgIcon name="arrow-right" />
        </Button>
      </SolutionSection>
    </AboutPageWrapper>
  );
};

AboutPage.getLayout = function (page) {
  return <GeneralLayout pageTitle="About Us">{page}</GeneralLayout>;
};

export default AboutPage;

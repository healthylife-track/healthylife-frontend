import getRemValue from '@/utils/getRemValue';
import styled, { css } from 'styled-components';

export const AboutPageWrapper = styled.div`
  padding: 3rem 0;

  & > section {
    padding: 2rem ${getRemValue(24)};
  }
`;

export const AboutHeroContainer = styled.section`
  @media screen and (min-width: 56.25em) {
    display: flex;
    gap: 2rem;
    justify-content: center;

    & > div {
      max-width: ${getRemValue(350)};
      width: 100%;
    }
  }
`;

const aboutImageContainerStyles = css`
  position: relative;
  aspect-ratio: 1;

  & > img {
    object-fit: contain;
  }
`;

export const AboutImageContainer = styled.div`
  ${aboutImageContainerStyles}
`;

export const AboutHeroTextContainer = styled.div`
  & > p:first-child {
    font-weight: 700;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 56.25em) {
    padding-top: ${getRemValue(43)};
  }
`;

export const MissionSection = styled.section`
  background-color: rgb(var(--color-secondary-o), 0.1);

  & > div {
    @media screen and (min-width: 56.25em) {
      width: 80%;
      margin: 0 auto;
    }
  }
`;

export const SectionTitleText = styled.p`
  font-weight: 700;
  color: rgb(var(--color-primary));
  margin-bottom: 1rem;
`;

export const SolutionSection = styled.section`
  text-align: center;

  & > button {
    margin: 1rem auto;
  }
`;

export const SolutionSectionImageContainer = styled.div`
  ${aboutImageContainerStyles}
  max-width: ${getRemValue(400)};
  margin: 2rem auto;
  box-shadow: var(--box-shadow);
  border-radius: ${getRemValue(15)};

  &::before {
    content: '';
    display: block;
    width: ${getRemValue(100)};
    height: ${getRemValue(100)};
    background: url(/assets/vector-arrow-down.png) no-repeat center center;
    background-size: cover;
    position: absolute;
    bottom: ${getRemValue(-20)};
    left: ${getRemValue(-40)};
    transform: rotate(-20deg);
    z-index: 0;
  }
`;

export const SolutionText = styled.p`
  max-width: ${getRemValue(500)};
  margin: ${getRemValue(10)} auto;
`;

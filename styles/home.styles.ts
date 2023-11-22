import getRemValue from '@/utils/getRemValue';
import styled, { css } from 'styled-components';

interface IHomePageStyleProps {
  isReversed?: boolean;
}

const sectionsWithImageStyle = css<IHomePageStyleProps>`
  padding: 3rem ${getRemValue(24)};

  @media screen and (min-width: 56.25em) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--max-width);
    margin: 0 auto;

    ${({ isReversed }) =>
      isReversed &&
      `
    flex-direction: row-reverse;
  `}

    & > div {
      flex-basis: 48%;
    }
  }
`;

const sectionImageContainerStyle = css`
  aspect-ratio: 1;
  position: relative;

  & > img {
    object-fit: contain;
  }
`;

export const HeroWrapper = styled.section<IHomePageStyleProps>`
  ${sectionsWithImageStyle};
`;

export const HeroTextContainer = styled.div`
  & > h1 {
    font-size: ${getRemValue(30)};
    margin-bottom: 1rem;

    & > span {
      color: rgb(var(--color-secondary-o));
    }

    @media screen and (min-width: 43.75em) {
      font-size: ${getRemValue(35)};
    }

    @media screen and (min-width: 62.5em) {
      font-size: ${getRemValue(50)};
    }
  }

  & > div {
    display: flex;
    gap: 1rem;
    margin: 2rem 0;

    & > * {
      flex-basis: 50%;

      @media screen and (min-width: 43.75em) {
        flex-basis: ${getRemValue(200)};
      }
    }
  }
`;

export const HeroImageContainer = styled.div`
  ${sectionImageContainerStyle}
`;

export const HowItWorksContainer = styled.section`
  padding: 1rem ${getRemValue(24)};

  & > p {
    text-align: center;
    font-weight: 600;
  }
`;

export const HowItWorksSubContainer = styled.div`
  max-width: var(--max-width);
  position: relative;
  margin: 2rem auto;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 43.75em) {
    justify-content: center;
    gap: ${getRemValue(10)};
  }
`;

export const HowItWorksImageContainer = styled.div`
  border-radius: ${getRemValue(20)};
  width: 95%;
  aspect-ratio: 3/0.5;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: -1;

  & > img {
    object-fit: fill;
    border-radius: ${getRemValue(20)};
  }

  @media screen and (max-width: 43.75rem) {
    aspect-ratio: 1/3;
    width: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-80%, -50%);
  }
`;

export const ServicesSection = styled.section<IHomePageStyleProps>`
  ${sectionsWithImageStyle}
  padding: 2rem;
  font-weight: 600;
`;

export const ServiceSectionImageContainer = styled.div`
  ${sectionImageContainerStyle}
`;

export const ServicesSectionTextContainer = styled.div`
  padding: 0 1rem;

  & > button {
    color: rgb(var(--color-secondary-o));
    font-weight: 700;
    font-size: ${getRemValue(18)};
    margin-top: 2rem;
  }
`;

export const FaqWrapper = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1rem ${getRemValue(24)};
`;

export const FaqContainer = styled.div`
  padding: 3rem ${getRemValue(20)};
  width: 100%;
  border-radius: 0.8rem;
  margin: 2rem 0;
  flex-basis: 55%;
`;

export const FaqDetails = styled.details`
  padding-top: 1rem;
  transition: 0.5s ease-in-out;
  border-bottom: 1px solid rgb(var(--color-secondary-gr), 0.5);

  & > summary {
    font-weight: 600;
    cursor: pointer;
    font-size: ${getRemValue(20)};
    list-style-type: none;
    position: relative;
    padding-right: 1rem;

    &::-webkit-details-marker,
    &::marker {
      display: none;
    }

    &::after {
      content: url(/assets/arrow-down.svg);
      position: absolute;
      top: 0.3rem;
      right: -0.5rem;
    }

    @media screen and (min-width: 56.25em) {
      font-size: ${getRemValue(30)};
    }
  }

  &[open] > summary {
    &::after {
      content: url(/assets/arrow-up.svg);
    }
  }

  & > p {
    margin-top: 1rem;
  }
`;

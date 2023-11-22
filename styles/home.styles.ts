import getRemValue from '@/utils/getRemValue';
import styled from 'styled-components';

export const HeroWrapper = styled.section`
  padding: 3rem ${getRemValue(24)};

  @media screen and (min-width: 56.25em) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--max-width);
    margin: 0 auto;

    & > div {
      flex-basis: 48%;
    }
  }
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
  aspect-ratio: 1;
  position: relative;

  & > img {
    object-fit: contain;
  }
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
  position: absolute;

  @media screen and (min-width: 56.25em) {
    background-color: rgb(var(--color-primary));
    border-radius: ${getRemValue(20)};
    width: 95%;
    aspect-ratio: 3/0.5;
    z-index: -1;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

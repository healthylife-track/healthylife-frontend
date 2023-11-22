import getRemValue from '@/utils/getRemValue';
import styled from 'styled-components';

export const HeroWrapper = styled.section`
  padding: 2rem ${getRemValue(24)};

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

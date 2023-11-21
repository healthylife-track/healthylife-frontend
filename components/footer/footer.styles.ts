import getRemValue from '@/utils/getRemValue';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: rgb(var(--color-primary));
  padding: 2rem 1rem;
  color: rgb(var(--color-white));
  font-weight: 600;

  & > div {
    @media screen and (min-width: 56.25em) {
      display: flex;
      gap: 7rem;
    }
  }

  & > p {
    padding-top: 1rem;
    padding-left: 2rem;

    @media screen and (min-width: 56.25em) {
      text-align: center;
    }
  }
`;

export const FooterLogoContainer = styled.div`
  max-width: ${getRemValue(250)};
  margin-bottom: 1rem;

  & > p {
    margin-left: 2rem;
    font-weight: 500;
  }
`;

export const FooterLinksContainer = styled.ul`
  gap: 2rem;
  padding: 2rem;
  @media screen and (min-width: 56.25em) {
    display: flex;
    align-items: center;
  }

  & > li {
    margin-bottom: 1rem;
  }
`;

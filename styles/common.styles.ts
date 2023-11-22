import getRemValue from '@/utils/getRemValue';
import styled from 'styled-components';

export const SectionHeaderText = styled.p`
  font-size: ${getRemValue(30)};
  font-weight: 700;
  text-align: center;
  position: relative;
  margin: 0 auto;
  margin-bottom: ${getRemValue(10)};
  width: max-content;

  &::before {
    display: block;
    content: '';
    position: absolute;
    border-bottom: 4px solid rgb(var(--color-secondary-o));
    width: 75%;
    bottom: 0;
  }

  @media screen and (min-width: 43.75em) {
    font-size: ${getRemValue(35)};
  }

  @media screen and (min-width: 62.5em) {
    font-size: ${getRemValue(50)};
  }
`;

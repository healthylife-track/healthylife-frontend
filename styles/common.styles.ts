import getRemValue from '@/utils/getRemValue';
import styled from 'styled-components';

interface ICommonStyleProps {
  isPrimary?: boolean;
  isCentered?: boolean;
}

export const SectionHeaderText = styled.p<ICommonStyleProps>`
  font-size: ${getRemValue(30)};
  font-weight: 700;
  position: relative;
  margin-bottom: ${getRemValue(18)};
  width: max-content;
  color: rgb(var(--color-black));

  ${({ isCentered }) =>
    isCentered &&
    `
    margin: 0 auto;
    text-align: center;
  `}

  &::before {
    display: block;
    content: '';
    position: absolute;
    border-color: rgb(var(--color-secondary-o));
    border-style: solid;
    border-bottom: 4px;
    width: 75%;
    bottom: 0;

    ${({ isPrimary }) =>
      isPrimary &&
      `
      border-color: rgb(var(--color-primary));
  `}
  }

  @media screen and (min-width: 43.75em) {
    font-size: ${getRemValue(35)};
  }

  @media screen and (min-width: 62.5em) {
    font-size: ${getRemValue(40)};
  }
`;

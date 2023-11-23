import getRemValue from '@/utils/getRemValue';
import styled, { css } from 'styled-components';

export interface ICommonStyleProps {
  isPrimary?: boolean;
  isCentered?: boolean;
  isTertiary?: boolean;
  bg1?: boolean;
  bg2?: boolean;
  bg3?: boolean;
}

export const SectionHeaderText = styled.p<ICommonStyleProps>`
  font-size: ${getRemValue(25)};
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
    width: 70%;
    bottom: 0;

    ${({ isPrimary }) =>
      isPrimary &&
      `
      border-color: rgb(var(--color-primary));
  `}
  }

  @media screen and (min-width: 43.75em) {
    font-size: ${getRemValue(25)};
  }

  @media screen and (min-width: 62.5em) {
    font-size: ${getRemValue(35)};
  }
`;

export const cardStyles = css<ICommonStyleProps>`
  background-color: rgb(var(--color-white));
  border-radius: ${getRemValue(20)};
  padding: ${getRemValue(50)} ${getRemValue(30)};
  margin-bottom: ${getRemValue(50)};
  width: 100%;
  max-width: ${getRemValue(300)};
  box-shadow: 0px 12px 26px rgba(var(--color-black), 0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  ${({ bg1 }) =>
    bg1 &&
    `
      background-color: rgb(var(--color-secondary-o), 0.1);
   `}

  ${({ bg2 }) =>
    bg2 &&
    `
      background-color: rgb(var(--color-secondary-b), 0.1);
   `}

   ${({ bg3 }) =>
    bg3 &&
    `
      background-color: rgb(var(--color-primary), 0.1);
   `}
  
  &:hover {
    transform: scale(1.03);
  }

  & > p {
    margin: 1rem 0;
  }

  & > p:first-of-type {
    font-size: ${18};
    font-weight: 700;
  }

  & > button {
    color: rgb(var(--color-secondary-o));
    font-weight: 700;
    display: flex;
    gap: 1rem;

    ${({ isPrimary }) =>
      isPrimary &&
      `
      color: rgb(var(--color-primary));
   `}

    ${({ isTertiary }) =>
      isTertiary &&
      `
      color: rgb(var(--color-tertiary));
   `}

      & > svg {
      width: ${getRemValue(20)};
      height: ${getRemValue(20)};
      fill: currentColor;
    }
  }
`;

export const CardIconContainer = styled.div<ICommonStyleProps>`
  width: ${getRemValue(80)};
  height: ${getRemValue(80)};
  padding: ${getRemValue(15)};
  background-color: rgb(var(--color-secondary-o));
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  ${({ isPrimary }) =>
    isPrimary &&
    `
      background-color: rgb(var(--color-primary));
   `}

  ${({ isTertiary }) =>
    isTertiary &&
    `
      background-color: rgb(var(--color-tertiary));
   `}

   ${({ bg2 }) =>
    bg2 &&
    `
      background-color: rgb(var(--color-secondary-b));
   `}

   ${({ bg3 }) =>
    bg3 &&
    `
      background-color: rgb(var(--color-primary));
   `}

   & > svg {
    fill: rgb(var(--color-white));
    width: ${getRemValue(60)};
    height: ${getRemValue(60)};
  }
`;

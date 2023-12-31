import getRemValue from '@/utils/getRemValue';
import styled from 'styled-components';

export interface IButtonStyleProps {
  primary?: boolean;
  secondary?: boolean;
  isTertiary?: boolean;
  isTertiaryBorder?: boolean;
  block?: boolean;
}

export const Btn = styled.button<IButtonStyleProps>`
  display: flex;
  gap: ${getRemValue(10)};
  padding: ${getRemValue(10)} 1rem;
  border: 1px solid rgb(var(--color-primary));
  border-radius: ${getRemValue(20)};
  font-weight: 700;
  justify-content: center;
  align-items: center;

  & > svg {
    width: ${getRemValue(15)};
    height: ${getRemValue(15)};
  }

  ${({ primary }) =>
    primary &&
    `
      color: rgb(var(--color-white));
      background-color: rgb(var(--color-primary));

      & > svg {
      fill: currentColor;
   }
   `}

  ${({ secondary }) =>
    secondary &&
    `
      color: rgb(var(--color-white));
      background-color: rgb(var(--color-secondary-o));
      border-color: rgb(var(--color-secondary-o));

      & > svg {
      fill: currentColor;
   }
   `}

    ${({ isTertiary }) =>
    isTertiary &&
    `
      color: rgb(var(--color-white));
      background-color: rgb(var(--color-tertiary));
      border-color: rgb(var(--color-tertiary));

      & > svg {
      fill: currentColor;
   }
   `}

    ${({ isTertiaryBorder }) =>
    isTertiaryBorder &&
    `
      background-color: rgb(var(--color-white));
      border-color: rgb(var(--color-tertiary));

      & > svg {
      fill: currentColor;
   }
   `}

  ${({ block }) =>
    block &&
    `
      width: 100%;
   `}
`;

import getRemValue from '@/utils/getRemValue';
import styled from 'styled-components';

export interface IButtonStyleProps {
  primary?: boolean;
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

  ${({ block }) =>
    block &&
    `
      width: 100%;
   `}
`;

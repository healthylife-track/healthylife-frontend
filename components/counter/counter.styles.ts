import getRemValue from '@/utils/getRemValue';
import styled from 'styled-components';

export interface ICounterStyleProps {
  isSecondary?: boolean;
}

export const CounterContainer = styled.div<ICounterStyleProps>`
  border-radius: 5px;
  border: 1px solid rgb(var(--color-primary), 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 1rem;
  margin-top: 1rem;
  position: relative;
  font-weight: 700;

  ${({ isSecondary }) =>
    isSecondary &&
    `
      width: 100%;
      height: min-content;
      border: 1px solid rgb(var(--color-black));
      border-radius: 10px;
      padding: 1rem;
      padding-top: ${getRemValue(24)};
      padding-left: ${getRemValue(24)};

    `};

  input[type='number'] {
    font-size: inherit;
    font-weight: inherit;
    width: 80%;
    color: inherit;
    border: none;
    outline: none;
    background: none;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    display: none;
  }
`;

export const CounterButtonsContainer = styled.div<ICounterStyleProps>`
  display: flex;
  gap: ${getRemValue(10)};

  & > button > svg {
    width: ${getRemValue(20)};
    height: ${getRemValue(20)};
    fill: rgb(var(--color-primary));

    ${({ isSecondary }) =>
      isSecondary &&
      `
    
      width: 30px;
      height: 30px;
      `}
  }
`;

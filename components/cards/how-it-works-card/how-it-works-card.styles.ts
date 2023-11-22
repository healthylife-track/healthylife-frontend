import getRemValue from '@/utils/getRemValue';
import styled from 'styled-components';

export interface IHowItWorksCardStyleProps {
  isPrimary?: boolean;
  isTertiary?: boolean;
}

export const HowItWorksCardContainer = styled.div<IHowItWorksCardStyleProps>`
  background-color: rgb(var(--color-white));
  border-radius: ${getRemValue(20)};
  padding: ${getRemValue(50)} ${getRemValue(30)};
  margin: 0 auto;
  margin-bottom: ${getRemValue(50)};
  max-width: ${getRemValue(300)};
  box-shadow: 0px 12px 26px rgba(var(--color-black), 0.1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

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

export const CardIconContainer = styled.div<IHowItWorksCardStyleProps>`
  width: ${getRemValue(80)};
  height: ${getRemValue(80)};
  padding: ${getRemValue(10)};
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

   & > svg {
    fill: rgb(var(--color-white));
    width: ${getRemValue(60)};
    height: ${getRemValue(60)};
  }
`;

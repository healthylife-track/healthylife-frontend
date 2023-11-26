import getRemValue from '@/utils/getRemValue';
import styled from 'styled-components';

export const SetReminderWrapper = styled.div`
  padding: ${getRemValue(24)} 0;

  & > p:first-of-type {
    font-size: ${getRemValue(18)};
    font-weight: 700;
  }
`;

export const SetReminderFormContainer = styled.form`
  margin-top: 2rem;

  @media screen and (min-width: 43.75em) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      'drug_details intervals'
      'button button';
    gap: 1rem;
  }
`;

export const IntervalsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin: 1rem 0;
`;

export const SelectIntervalButton = styled.button<{ isSelected?: boolean }>`
  border: 1px solid rgb(var(--color-primary));
  width: ${getRemValue(30)};
  height: ${getRemValue(30)};
  display: grid;
  place-items: center;
  font-weight: 600;
  border-radius: 5px;
  transition-property: color, background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;

  &:hover {
  }

  ${({ isSelected }) =>
    isSelected &&
    `
   background-color: rgb(var(--color-primary));
   color: rgb(var(--color-white));
   `}
`;

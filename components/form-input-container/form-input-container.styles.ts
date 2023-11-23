import getRemValue from '@/utils/getRemValue';
import styled from 'styled-components';

export const FormInputStyles = styled.div`
  position: relative;

  & > label {
    font-size: ${getRemValue(20)};
    font-weight: 600;
    display: block;
  }

  & > button {
    font-weight: 700;
    font-size: ${getRemValue(11)};
    position: relative;
    top: -10px;
  }
`;

export const InputFormField = styled.div`
  position: relative;

  & > label {
    font-size: ${getRemValue(15)};
    font-weight: 600;
    display: block;

    @media screen and (min-width: 56.25em) {
      font-size: ${getRemValue(20)};
    }
  }

  & > button {
    font-weight: 700;
    font-size: ${getRemValue(11)};
    position: relative;
    top: -10px;
  }
`;

export const Input = styled.input`
  border: 1px solid rgb(var(--color-primary), 0.7);
  outline: none;
  margin: 1rem 0;
  width: 100%;
  padding: 1rem 2rem;
  border-radius: ${getRemValue(25)};

  &::placeholder {
    font-family: inherit;
    font-weight: 600;
    opacity: 0.6;
  }
`;

export const InputFlexContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const TogglePasswordBtn = styled.button`
  position: absolute;
  width: max-content;
  height: max-content;
  right: 1rem;
  bottom: 50%;
  transform: translateY(50%);

  & > svg {
    cursor: pointer;
    width: ${getRemValue(20)};
    height: ${getRemValue(20)};
    opacity: 0.4;
  }
`;

export const InputFooterText = styled.small`
  position: relative;
  font-size: ${getRemValue(10)};
  color: red;
  left: 5px;
  top: ${getRemValue(-14)};
`;

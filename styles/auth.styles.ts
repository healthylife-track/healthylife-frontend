import getRemValue from '@/utils/getRemValue';
import styled from 'styled-components';

export const AuthMainContainer = styled.div`
  padding: 2rem ${getRemValue(24)};
`;

export const AuthContainer = styled.div`
  padding: 4rem 2rem;
  border-radius: ${getRemValue(20)};
  background-color: rgb(var(--color-white));
  box-shadow: var(--box-shadow);
  width: 100%;
  max-width: ${getRemValue(600)};
  margin: 0 auto;
`;

export const AuthHeaderText = styled.p`
  font-size: ${getRemValue(20)};
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`;

export const AuthFormContainer = styled.form`
  width: 100%;
`;

export const FormButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  border-radius: 25px;
  text-align: center;
  background-color: rgb(var(--color-primary));
  color: rgb(var(--color-white));
  margin-top: ${getRemValue(30)};
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: ${getRemValue(20)};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${getRemValue(10)};

  & > p > span {
    text-transform: capitalize;
  }

  & > svg {
    width: ${getRemValue(20)};
    height: ${getRemValue(20)};
  }
`;

export const AuthCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 700;
  margin: 1rem 0;

  & > input[type='checkbox'] {
    width: ${getRemValue(20)};
    height: ${getRemValue(20)};
    border: 1px solid rgb(var(--color-primary));
    border-radius: 2px;

    &:checked {
      background-color: rgb(var(--color-primary));
    }
  }
`;

export const ForgotPassword = styled.p`
  font-weight: 700;
  margin: ${getRemValue(24)} 0;
  border-bottom: 1px solid rgb(var(--color-secondary-gr));
  width: 100%;
  text-align: center;
  padding-bottom: 1rem;
`;

export const UserSelectWrapper = styled.div`
  padding: 3rem 0;
`;

export const UserSelectContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  padding: 1rem ${getRemValue(24)};
  color: rgb(var(--color-black));
  text-align: left;
  box-shadow: var(--box-shadow);
  margin-bottom: 3rem;
  border-radius: ${getRemValue(10)};
  border: 2px solid;
  border-color: rgb(var(--color-white));
  transition: border 0.2s ease-in-out;

  &:hover {
    border-color: rgb(var(--color-primary));
  }

  & > svg {
    width: ${getRemValue(50)};
    height: ${getRemValue(50)};
  }

  & > div {
    & > p:first-child {
      font-weight: 700;
      font-size: ${getRemValue(18)};
      text-transform: capitalize;
      margin-bottom: ${getRemValue(10)};
    }
  }
`;
export const AuthFooterContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  font-weight: 700;

  & > a {
    color: rgb(var(--color-primary));
  }
`;

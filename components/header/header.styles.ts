import getRemValue from '@/utils/getRemValue';
import styled from 'styled-components';

interface IHeaderStyleProps {
  isOpen?: boolean;
  active?: boolean;
  hasMarginTop?: boolean;
}

export const Headr = styled.header`
  box-shadow: var(--box-shadow);
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: rgb(var(--color-white));
  padding: 1rem ${getRemValue(24)};

  @media screen and (min-width: 56.25em) {
    padding: 0 ${getRemValue(24)};
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: var(--max-width);
  margin: 0 auto;
  align-items: center;
  gap: 2rem;
`;

export const NavSubContainer = styled.div<IHeaderStyleProps>`
  align-items: center;
  justify-content: space-between;
  flex: 0.8;
  gap: 1rem;
  display: flex;

  @media screen and (max-width: 56.25em) {
    display: block;
    background-color: rgb(var(--color-white));
    height: 100vh;
    width: 80vw;
    position: fixed;
    top: 0;
    left: 0;
    padding: 5rem 3rem;
    transform: translateX(-100%);
    visibility: hidden;
    transition-property: transform, visibility;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    border-top-right-radius: ${getRemValue(100)};
    z-index: 1;
    border-bottom-right-radius: ${getRemValue(100)};
    box-shadow: 2px -2px 5px #d6d6d6;

    ${({ isOpen }) =>
      isOpen &&
      `
      visibility: visible;
      transform: translateX(0);
  `}
  }
`;

export const NavItems = styled.ul<IHeaderStyleProps>`
  list-style: none;

  @media screen and (min-width: 56.25em) {
    display: flex;
    align-items: center;
  }

  ${({ hasMarginTop }) =>
    hasMarginTop &&
    `
      @media screen and (max-width: 56.25em) {
      margin-top: 3rem;
  }
  `}
`;

export const NavItem = styled.li<IHeaderStyleProps>`
  font-size: ${getRemValue(18)};
  text-align: center;
  padding: 1rem;
  margin-bottom: 1rem;
  position: relative;

  @media screen and (min-width: 56.25em) {
    padding: 1rem;
    margin-bottom: 0;
  }

  & > a {
    width: 100%;
    display: block;
    color: #636363;
  }

  & > button {
    margin: 0 auto;
    width: max-content;
  }

  ${({ active }) =>
    active &&
    `
      & > a {
         font-weight: 700;
         color: rgb(var(--color-black));

         &::after {
            border-bottom: 3px solid rgb(var(--color-black));
            width: ${getRemValue(30)};
            content: '';
            display: block;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
         
      }
   }
  `}
`;

export const NavMenuButton = styled.button`
  & > svg {
    height: ${getRemValue(30)};
    width: ${getRemValue(30)};
    fill: rgb(var(--color-primary));
  }

  @media screen and (min-width: 56.25em) {
    display: none;
  }
`;

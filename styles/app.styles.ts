import getRemValue from '@/utils/getRemValue';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    :root {
      --color-black: 0, 0, 0;
      --color-primary: 29, 68, 255;
      --color-secondary-o: 255, 92, 0; 
      --color-secondary-b: 99, 99, 99;
      --color-secondary-gr: 214, 214, 214;
      --color-tertiary: 0, 177, 48;
      --color-white: 255, 255, 255;
      --color-error: 255, 0, 0;
      --box-shadow: 0px 3px 6px rgb(var(--color-secondary-gr));
      --max-width: ${getRemValue(1400)};
      --box-shadow: 0px 21px 45px rgba(var(--color-black), 0.1);
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
    appearance: none;
    -webkit-appearance: none;
  }

  html {
    font-size: 85%;
  }

  body {
    color: rgb(var(--color-secondary-b));
    background: rgb(var(--color-primary), 0.05);
    font-size: ${getRemValue(15)};
    font-weight: 400;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
    background: none;
  }

  label {
    cursor: pointer;
  }

  button {
    background: inherit;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    transition-property: opacity;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }

  *:disabled{
    cursor: not-allowed;
    opacity: 0.3;
  }

  ul > li {
    list-style: none;
  }

  ol > li {
    margin-left: 1rem;
  }


  `;

export default GlobalStyles;

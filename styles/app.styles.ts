import getRemValue from '@/utils/getRemValue';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    :root {
      --color-black: 0, 0, 0;
      --color-primary: 84, 109, 211;
      --color-white: 255, 255, 255;
      --color-error: 255, 0, 0;
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
    appearance: none;
    -webkit-appearance: none;
  }

  body {
    color: rgb(var(--color-black));
    background: rgb(var(--color-white));
    font-size: ${getRemValue(15)};
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


  `;

export default GlobalStyles;

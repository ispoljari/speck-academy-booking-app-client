import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  *, *:after, *:before {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;

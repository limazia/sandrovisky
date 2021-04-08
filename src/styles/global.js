import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #app {
    height: 100vh;
  }

  body {
    background: #f2f2f2;
    font-family: "Roboto", Helvetica, Arial, sans-serif;
  }
`;
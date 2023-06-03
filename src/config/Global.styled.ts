import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }
  html{
    font-size: 62.5%;
    overflow-x: hidden;
  }
  body{
    font-family: 'Inter', sans-serif;
    font-size: 3rem;
  }
`;
export default GlobalStyle;
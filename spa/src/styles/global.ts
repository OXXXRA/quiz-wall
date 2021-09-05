import { createGlobalStyle } from "styled-components";
import generateSpacings from "./spacing";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Open Sans", sans-serif;
  }

  body {
    height: 100vh;
  }
  .container {
    margin: 0 auto;
    padding-right: 10px;
    padding-left: 10px;
    max-width: 600px;
  }

  .d-flex {
    display: flex;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .align-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  a {
    text-decoration: none;
  }

  input,
  textarea {
    font-size: 14px;
    font-family: inherit;
  }

  .text-center {
    text-align: center;
  }

  ${generateSpacings()}

`;

export default GlobalStyle
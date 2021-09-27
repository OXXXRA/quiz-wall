import { createGlobalStyle } from "styled-components";
import display from "./display";
import reset from "./reset";
import generateSpacings from "./spacing";
import quiz from './_quiz';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  ${display}
  
  ${generateSpacings()}
  
  .container {
    margin: 0 auto;
    padding-right: 10px;
    padding-left: 10px;
    max-width: 600px;
  }

  /* TODO move to modules */
  ${quiz}
`;

export default GlobalStyle
import { css } from "styled-components";

export default css`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: "Roboto", sans-serif;

    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  body {
    height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  input,
  textarea {
    font-family: inherit;
  }

  p {
    margin-bottom: 0;
  }
`;

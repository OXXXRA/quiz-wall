import styled from "styled-components";

const AuthContent = styled.div<{ show: boolean }>`
  @media (max-width: 720px) {
    display: ${({ show }) => (show ? "flex" : "none")} !important;
  }
`;
export default AuthContent;

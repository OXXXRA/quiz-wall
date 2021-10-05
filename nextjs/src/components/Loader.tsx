import React from "react";
import styled from "styled-components";

interface Props {}

const StyledLoader = styled.div`
  cursor: default;
  position: absolute;
  top: calc(50% - 1em);
  right: calc(50% - 1em);
  border: 1em solid currentcolor;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: 1s magic linear infinite;

  @keyframes magic {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = (props: Props) => {
  return <StyledLoader></StyledLoader>;
};

export default Loader;

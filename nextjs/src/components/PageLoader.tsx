import { useStore } from "effector-react";
import React from "react";
import styled from "styled-components";
import { $routerStore } from "../effector/router-state";

interface Props {}

const Loader = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 4px solid ${({ theme }) => theme.colors.primary.main};
  border-radius: ${({ theme }) => theme.radius};
  animation: loader 2s infinite ease;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }

    25% {
      transform: rotate(180deg);
    }

    50% {
      transform: rotate(180deg);
    }

    75% {
      transform: rotate(360deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoaderInner = styled.div`
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.accent};
  animation: loader-inner 2s infinite ease-in;

  @keyframes loader-inner {
    0% {
      height: 0%;
    }

    25% {
      height: 0%;
    }

    50% {
      height: 100%;
    }

    75% {
      height: 100%;
    }

    100% {
      height: 0%;
    }
  }
`;

const PageLoader = (props: Props) => {
  const routerStore = useStore($routerStore);

  if (!routerStore.isLoading) return null;

  return (
    <Loader>
      <LoaderInner></LoaderInner>
    </Loader>
  );
};

export default PageLoader;

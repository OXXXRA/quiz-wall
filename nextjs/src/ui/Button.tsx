import clsx from "clsx";
import React, { FC } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import theme from "../styles/theme";

const TYPES = {
  primary: theme.colors.primary.main,
  success: theme.colors.success,
  error: theme.colors.error,
  accent: theme.colors.accent,
};

interface IButton {
  flat?: boolean;
  fab?: boolean;
  color?: string;
  height?: any;
  width?: any;
}

const StyledButton = styled.button<IButton>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  position: relative;
  border: none;
  border-radius: 5px;
  border: 0.1px solid transparent;
  background: ${({ color }) => TYPES[color] || color || "black"};

  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};

  border: none;
  border-radius: 5px;

  border: 0.1px solid transparent;

  background: ${({ color }) => TYPES[color] || color || TYPES["primary"]};
  color: white;

  ${({ flat, color, theme }) =>
    flat &&
    `
    background: ${theme.colors.white} !important;
    color: ${TYPES[color] || color || TYPES["primary"]};
  `}

  ${({ width, height }) =>
    (width || height) &&
    `
    padding:0px !important;
  `}

  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.05em;
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    filter: saturate(300%);
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Button: FC<IButton & any> = ({
  icon: Icon,
  className,
  children,
  loading = false,
  ...props
}) => {
  const Component = props.tag || "button";
  return (
    <StyledButton
      className={clsx("p-1 px-2", className)}
      as={Component}
      {...props}
    >
      {Icon}
      {children}
      {loading && <Loader />}
    </StyledButton>
  );
};

export default Button;

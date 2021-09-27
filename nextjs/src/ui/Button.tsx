import clsx from "clsx";
import { FC } from "hoist-non-react-statics/node_modules/@types/react";
import styled from "styled-components";
import theme from "../styles/theme";

const TYPES = {
  primary: theme.colors.primary.main,
  success: theme.colors.success,
  error: theme.colors.error,
};

interface IButton {
  flat?: boolean;
  fab?: boolean;
  color?: string;
}

const StyledButton = styled.button<IButton>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  border: 0.1px solid transparent;
  background: ${({ color }) => TYPES[color] || color || "black"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};

  border: none;
  border-radius: 5px;

  border: 0.1px solid transparent;

  background: ${({ color }) => TYPES[color] || color || "black"};
  color: white;

  ${({ flat, theme, color }) =>
    flat &&
    `
    background: ${
      color === "white" ? theme.colors.white : theme.colors.primary.light
    };
    color: ${theme.colors.primary.main};
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
    </StyledButton>
  );
};

export default Button;

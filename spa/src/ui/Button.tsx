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
  border: none;
  border-radius: 5px;

  letter-spacing: 1px;
  font-size: 1em;

  border: 1px solid transparent;
  background: ${({ color }) => TYPES[color] || color || "black"};
  color: white;

  ${({ flat, theme }) =>
    flat &&
    `
    background:${theme.colors.primary.light};
    color:${theme.colors.primary.main};
  `}

  font-size: 12px;

  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:active {
    border: 1px solid lightblue;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Button = (props) => {
  const Component = props.tag || "button";
  return <StyledButton className="p-1" {...props} as={Component} />;
};

export default Button;

import styled from "styled-components";
import theme from "../styles/theme";


interface IButton {
  flat?: boolean;
  fab?: boolean;
  color?: string;
};

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ width }) => width || "122px"};
  aspect-ratio: ${({ ratio, fab, round }) => fab || round ? '1' : ratio || '3.59'};
 
  border: ${({ borders }) => borders ? `1px solid #4E68EF` : `none`};
  border-radius: ${({ round }) => round ? `50%` : '5px'};
  background: ${({ colorsTheme }) => colorsTheme ? theme.colorsTheme[colorsTheme].background : theme.colorsTheme.blueWhite.background};

  font-weight: bold;
  color: ${({ colorsTheme }) => colorsTheme ? theme.colorsTheme[colorsTheme].color : theme.colorsTheme.blueWhite.color};

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
  return <StyledButton {...props} as={Component} />;
};

export default Button;

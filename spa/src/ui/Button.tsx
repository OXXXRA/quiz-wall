import styled from "styled-components";
import theme from "../styles/theme";


const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ square, round, sizeRect, width }) => 
                (square || round) ? (square || round) : 
                      sizeRect ? theme.sizeRect[sizeRect].width : 
                                                      width || "100%"};
  height: ${({ square, round, sizeRect, height }) => 
                (square || round) ? (square || round) : 
                      sizeRect ? theme.sizeRect[sizeRect].height : 
                                                      height || "100%"};
 
  border: ${({ borders }) => borders ? `1px solid #4E68EF` : `none`};
  border-radius: ${({ round }) => round ? `50%` : '5px'};
  background: ${({ colors }) => colors ? theme.colors[colors].background : 'black'};

  font-weight: bold;
  color: ${({ colors }) => colors ? theme.colors[colors].color : 'white'};

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

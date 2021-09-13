import styled from "styled-components";
import theme from "../styles/theme";


const StyledButton = styled.button`
  
  width: ${({ square, round }) => (square || round) ? (square || round) : '40px'};
  height: ${({ square, round }) => (square || round) ? (square || round) : '40px'};
                                                      
  position: relative;

  border: none;
  border-radius: ${({ round }) => round ? `50%` : '5px'};
  background: ${({ colors }) => colors ? theme.colors[colors].background : 'black'};
  z-index: 200;

  &::before, &::after {
    content: "";
    position: absolute;
    z-index: -1;
    background: ${({ colors }) => colors ? theme.colors[colors].color : 'white'};
  }

  &::before {
    left: 50%;
    width: 5%;
    height: 35%;
    margin-left: -2.5%;
    transform: ${({ close }) => close ? 'rotate(45deg)' : 'none'};
  }

  &::after {
    top: 50%;
    height: 5%;
    width: 35%;
    margin-top: -2.5%;
    transform: ${({ close }) => close ? 'rotate(45deg)' : 'none'};
  }

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

export default function ButtonAddClose(props) {
  const Component = props.tag || "button";
  return <StyledButton {...props} as={Component} />;
}
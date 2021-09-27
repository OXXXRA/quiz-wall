import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;

  width: ${({ width }) => width || "40px"};
  height: ${({ height }) => height || "40px"};

  position: relative;

  border: 1px solid transparent;
  background: #58e0b7;
  z-index: 1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    background: white;
  }

  &::before {
    left: 50%;
    width: 5%;
    height: 35%;
    margin-left: -2.5%;
  }

  &::after {
    top: 50%;
    height: 5%;
    width: 35%;
    margin-top: -2.5%;
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

export default function ButtonAdd(props) {
  const Component = props.tag || "button";
  return <StyledButton {...props} as={Component} />;
}

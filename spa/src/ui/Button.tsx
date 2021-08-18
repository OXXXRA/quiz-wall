import styled from "styled-components";

const TYPES = {
  primary: "",
  success: "linear-gradient(90deg, #06F62C 0%, #2AE78D 100%)",
};

const StyledButton = styled.button`
  border: none;
  border-radius: 5px;

  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};

  padding: ${({ padding }) => padding || "10px"};

  letter-spacing: 1px;
  font-size: 1em;

  border: 1px solid transparent;
  background: ${({ color, type }) => TYPES[type] || color || "black"};
  color: white;

  ${({ gradient }) => {
    gradient
      ? `-webkit-background-clip: text;  
    background-clip: text;`
      : "";
  }}

  font-style: normal;
  font-size: 12px;
  line-height: 14px;

  font-weight: 400;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:active {
    border: 1px solid lightblue;
  }
`;

export default function Button(props) {
  const Component = props.tag || "button";
  return <StyledButton {...props} as={Component} />;
}

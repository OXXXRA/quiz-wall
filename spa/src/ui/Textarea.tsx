import styled from "styled-components";

const StyledTextarea = styled.textarea`
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 10px;

  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 5px;

  resize: ${({ resize }) => resize || "none"};
`;

export default function Textarea(props) {
  return <StyledTextarea {...props} />;
}

import styled from "styled-components";

const Checkbox = styled.div`
  cursor: pointer;

  display: flex;
  gap: 10px;

  align-content: center;

  position: relative;

  &::before {
    content: " ";

    color: white;

    width: 20px;
    height: 20px;

    display: inline-block;

    border-radius: 5px;

    background: linear-gradient(180deg, #bb6be7 0%, #e83fb5 100%);
  }

  ${({ active }) =>
    active &&
    `
    &::after {
      position: absolute;
      content: " ";
      color: #fff;
      margin-left: 4px;
      margin-top: 5px;
      width: 10px;
      height: 5px;
      border-bottom: solid 3px;
      border-left: solid 3px;
      transform: rotate(-45deg);
      
  `}
`;

export default Checkbox;

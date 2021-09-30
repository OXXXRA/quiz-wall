import styled from "styled-components";

const Card = styled.div<{ blur?: boolean }>`
  color: ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 4px 7px rgba(64, 64, 64, 0.2);
  border-radius: 10px;

  ${({ blur }) =>
    blur &&
    `
    border-radius: ${({ theme }) => theme.radius};
    backdrop-filter: blur(3px);
    background-color: rgba(255, 255, 255, 0.371);
  `}
`;

export default Card;

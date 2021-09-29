import styled from "styled-components";

const Card = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 2px 4px 7px rgba(64, 64, 64, 0.2);
  border-radius: 10px;
`;

export default Card;

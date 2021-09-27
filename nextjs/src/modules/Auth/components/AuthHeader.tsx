import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
}
const Title = styled.h1`
  font-weight: bold;
  font-size: 48px;
`;

const SubTitle = styled.p`
  line-height: 16px;
`;

const AuthHeader = (props: Props) => {
  return (
    <>
      <Title className="m-0">{props.title}</Title>
      <SubTitle className="flex-grow">
        прими участие в уникальных опросах
      </SubTitle>
    </>
  );
};

export default AuthHeader;

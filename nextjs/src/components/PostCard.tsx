import React, { FC } from "react";
import styled from "styled-components";
import { Card } from "../ui";
import CardHeader from "./CardHeader";

interface Props {
  user?: any;
  title: string;
  created_at: string;
  body: string;
}

const Title = styled.h3`
  margin: 0;
  font-size: 24px;
  line-height: 28px;
  opacity: 0.8;
`;

const Content = styled.p`
  font-size: 14px;
  line-height: 16px;
  text-align: justify;
`;

const PostCard: FC<Props | any> = ({
  title,
  body,
  user,
  created_at,
  ...rest
}) => {
  return (
    <Card {...rest}>
      <CardHeader className="mb-1" title="Человек" caption={created_at} />
      <Title>{title}</Title>
      <Content>{body}</Content>
    </Card>
  );
};

export default PostCard;

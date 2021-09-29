import * as React from "react";
import styled from "styled-components";
import clsx from "clsx";

interface ICardHeaderProps {
  avatar?: string;
  title: string;
  caption: string;
  className?: string;
}

const Avatar = styled.div`
  margin-right: 10px;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  background: ${({ theme }) => theme.colors.primary.light};
`;

const Title = styled.p`
  margin: 0;
  font-size: 24px;
  line-height: 28px;
`;

const Caption = styled.div`
  font-size: 14px;
  line-height: 16px;
  opacity: 0.5;
`;

const CardHeader: React.FunctionComponent<ICardHeaderProps> = ({
  title,
  caption,
  className,
}) => {
  return (
    <div className={clsx("d-flex", className)}>
      <Avatar />

      <div className="d-flex flex-column">
        <Title>{title}</Title>
        <Caption>{caption}</Caption>
      </div>
    </div>
  );
};

export default CardHeader;

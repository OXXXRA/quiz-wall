import React, { FC, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Card from "./../ui/Card";
import clsx from "clsx";
import CardHeader from "./CardHeader";
import { Button } from "../ui";
import useCountdown from "./../hooks/useCountdown";
import Link from './Link';

interface Props {
  id: number;
  start_at?: string;
  end_at?: string;
  name: string;
  question_count?: number;
  question_time: number;
  className?: string;
}

const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.white};
  border-bottom-right-radius: ${({ theme }) => theme.radius};
  border-bottom-left-radius: ${({ theme }) => theme.radius};
`;

const Title = styled.h2`
  margin-top: 0;
  text-align: center;
`;

const TimerTile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme }) => theme.colors.accent};

  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
`;

const TestingCard: FC<Props & any> = ({
  id,
  start_at,
  end_at,
  name,
  question_count,
  question_time,
  className,
}) => {
  const { days, hours, minutes, seconds, isFinish } = useCountdown(start_at);

  const isStarted = useMemo(() => {
    if (!start_at) return true;
    return start_at.getTime() < Date.now();
  }, [start_at, isFinish]);

  return (
    <Card className={clsx(className)}>
      <CardHeader className="p-2" title="Опрос" caption="12 авгруста 20:12" />
      <Content className="p-4 d-flex flex-column align-center">
        <Title className="mb-2">{name}</Title>
        {isStarted ? (
          <Link href={"/testing/passing/" + id}>
            <Button className="mb-2" flat color="accent">
              Принять участие
            </Button>
          </Link>
        ) : (
          <>
            <div className="d-flex gap-10 mb-1">
              <TimerTile>{days}д</TimerTile>
              <TimerTile>{hours}ч</TimerTile>
              <TimerTile>{minutes}м</TimerTile>
              <TimerTile>{seconds}с</TimerTile>
            </div>
            <Button className="mb-1" color="success">
              Хочу участвовать
            </Button>
          </>
        )}

        <p className="m-0">
          {question_count} вопросов - {question_time} минут
        </p>
        {end_at && <p>Завершение: {end_at.toLocaleString()}</p>}
      </Content>
    </Card>
  );
};

export default TestingCard;

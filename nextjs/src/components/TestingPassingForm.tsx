import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { Button, Card } from "../ui";

interface Props {}

const TestingHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius};
`;

const Progress = styled.div<{ procent: number }>`
  min-height: 20px;

  flex-grow: 1;

  position: relative;

  border-radius: ${({ theme }) => theme.radius};

  z-index: 0;

  text-align: right;

  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary.main};
  padding: 0 5px;

  font-size: 12px;
  line-height: 20px;
  font-weight: bold;

  &::after {
    position: absolute;
    content: " ";

    z-index: -1;
    left: 0;

    height: 100%;
    width: ${({ procent }) => procent + "%"};

    background-color: ${({ theme }) => theme.colors.success};

    border-radius: ${({ theme }) => theme.radius};
  }
`;

const Timer = styled.div`
  height: 20px;

  font-size: 12px;
  line-height: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 4px;

  border-radius: ${({ theme }) => theme.radius};

  background-color: ${({ theme }) => theme.colors.error};
`;

const TestingWrapper = styled(Card)`
  overflow: "auto";
  border-radius: ${({ theme }) => theme.radius};

  width: 90vw;
  max-width: 600px;

  background-color: ${({ theme }) => theme.colors.primary.light};
`;

const Question = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: -40px;

  font-size: 24px;
  line-height: 28px;

  border-radius: ${({ theme }) => theme.radius};
  background-color: ${({ theme }) => theme.colors.primary.main};

  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
`;

const TestingAnswer = styled.div`
  cursor: pointer;
  padding: 10px;

  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary.main};

  border-radius: ${({ theme }) => theme.radius};

  font-size: 18px;
  line-height: 21px;

  transition: 0.3s all;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const TestingPassingForm = (props: Props) => {
  return (
    <TestingWrapper>
      <TestingHeader className="p-2 mb-2">
        <p className="m-0 mb-1">Тестирование по математике</p>
        <div className="d-flex align-center">
          <Progress className="mr-1" procent={25}>
            25%
          </Progress>
          <Timer>12:12</Timer>
        </div>
        <Question className="p-2">Сколько будет 5 + 5</Question>
      </TestingHeader>

      <div className="p-2">
        <TestingAnswer className="mb-2">10 (дума правильно)</TestingAnswer>
        <TestingAnswer className="mb-2">10 (дума правильно)</TestingAnswer>
        <TestingAnswer className="mb-2">10 (дума правильно)</TestingAnswer>

        <div className="d-flex justify-between">
          <Button flat>Отменить</Button>
          {/* <Button>Далее</Button> */}
        </div>
      </div>
    </TestingWrapper>
  );
};

export default TestingPassingForm;

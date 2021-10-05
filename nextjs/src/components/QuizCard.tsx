import clsx from "clsx";
import * as React from "react";
import styled from "styled-components";
import { Button, Checkbox } from "../ui";
import Card from "./../ui/Card";
import CardHeader from "./CardHeader";
import { confetti } from "./../utils/runConfitti";

const QuizBody = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.white};

  border-radius: ${({ theme }) => "0 0 " + theme.radius + " " + theme.radius};
`;

const Title = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  color: #ffffff;
`;

interface IQuizCardProps {
  className?: string;
}

const QuizCard: React.FunctionComponent<IQuizCardProps> = ({ className }) => {
  const chooseOption = (e) => {
    confetti(e.target);
  };
  return (
    <Card className={className}>
      <CardHeader className="p-2" title="Опрос" caption="12 авгруста 20:12" />
      <QuizBody>
        <Title className="mb-2">Что нужно делать чтобы быть счастливым?</Title>

        {[1, 3].map((_, index) => (
          <Option
            className="mb-1"
            name="Первая опция"
            total="34"
            procent={56}
            checked={true}
            key={index}
          />
        ))}
        <Button onClick={chooseOption} color="accent">
          Голосовать
        </Button>
      </QuizBody>
    </Card>
  );
};

export default QuizCard;

const NameText = styled.span`
  font-size: 18px;
  line-height: 21px;
`;

const Wrapper = styled.div`
  z-index: 0;

  display: flex;
  padding: 10px;

  position: relative;
  background: rgba(234, 238, 255, 0.2);

  border-radius: ${({ theme }) => theme.radius};
`;

const Progress = styled.div<{ procent: number }>`
  height: 100%;
  width: ${({ procent }) => procent + "%"};

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.4;

  background-color: ${({ theme }) => theme.colors.primary.main};
`;

const TotalText = styled.span`
  margin-left: 5px;
  font-size: 13px;
  line-height: 15px;
  opacity: 0.5;
`;

const Option = ({ name, total, procent, checked, className }) => {
  return (
    <>
      <Wrapper className={clsx(className, "d-flex")}>
        <Progress procent={procent} />
        <Checkbox checked={false} className="mr-1" />
        <NameText className="mr-auto">
          {name}
          <TotalText>{total}</TotalText>
        </NameText>
        <span>{procent}%</span>
      </Wrapper>
    </>
  );
};

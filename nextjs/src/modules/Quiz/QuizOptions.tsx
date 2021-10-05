import React, { FC, useState } from "react";
import { Check, X } from "react-feather";
import styled from "styled-components";
import { Button, Checkbox, Input } from "../../ui";
import uid from "./../../utils/uid";
import VariantImages from "./VariantImages";

interface Props {}

const Title = styled.p`
  margin-top: 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`;

const booleanOptions = [
  {
    value: "is_anonymous",
    text: "Анонимно,",
  },
  {
    value: "is_discussing",
    text: "Без обсуждения,",
  },
  {
    value: "is_anonymous_discussing",
    text: "Анонимное обсуждение",
  },
];

const Option = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;

  box-sizing: border-box;

  padding: 10px;

  background: ${({ theme, active }) =>
    active ? theme.colors.white : theme.colors.primary.main};
  border: 1px solid ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme, active }) =>
    active ? theme.colors.primary.main : theme.colors.white};
  border-radius: ${({ theme }) => theme.radius};

  font-size: 14px;

  transition: all 0.3s;

  cursor: pointer;
`;

export const QuizOptions: FC<Props> = (props) => {
  const [options, setOptions] = useState<any>({});
  const [isImages, setIsImages] = useState(false);

  const [variants, setVariants] = useState([
    { id: uid(), name: "", is_correct: false },
    { id: uid(), name: "", is_correct: true },
  ]);

  const toggleOption = (key) => {
    setOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCorrect = (id) => {
    setVariants((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, is_correct: !item.is_correct };
        }
        return item;
      });
    });
  };

  const deleteVariant = (id) => {
    if (variants.length < 3) return;
    setVariants((prev) => prev.filter(({ id: _id }) => _id !== id));
  };

  const createVariant = () => {
    if (variants.length > 9) return;
    setVariants([...variants, { id: uid(), name: "", is_correct: false }]);
  };

  const changeName = (id, value) => {
    setVariants((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, name: value };
        }
        return item;
      });
    });
  };
  return (
    <>
      <Title className="mb-1">Опции тестирования</Title>

      <div className="d-flex gap-10 flex-wrap mb-2">
        {booleanOptions.map(({ value, text }) => (
          <Option
            onClick={() => toggleOption(value)}
            key={value}
            active={options[value]}
          >
            {options[value] ? <X /> : <Check />}
            {text}
          </Option>
        ))}
      </div>

      <div className="mb-1 d-flex align-center justify-between">
        <Title>Варианты ответов</Title>
        <div
          className="d-flex align-center pointer"
          onClick={() => setIsImages(!isImages)}
        >
          <span className="mr-1">картинки</span>
          <Checkbox checked={isImages} />
        </div>
      </div>

      {isImages ? (
        <VariantImages />
      ) : (
        <>
          {variants.map(({ id, name, is_correct }, index) => (
            <Input
              className="mb-1"
              placeholder={"Вариант " + (index + 1)}
              key={id}
              append={
                <Checkbox
                  checked={is_correct}
                  onClick={() => toggleCorrect(id)}
                  style={{ marginLeft: 10 }}
                />
              }
              icon={<X onClick={() => deleteVariant(id)} />}
              onChange={(e) => changeName(id, e.target.value)}
            />
          ))}

          <div className="d-flex justify-space">
            <Button onClick={createVariant}>Добавить вариант</Button>
          </div>
        </>
      )}
    </>
  );
};

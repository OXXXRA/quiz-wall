import { default as React, useState } from "react";
import styled from "styled-components";
import PostForm from "../../modules/Record/components/PostForm";
import { Card } from "../../ui";

interface Props {}

const RECORD_TYPES = {
  QUIZ: 1,
  POST: 2,
  // TESTING: 3,
};

const RECORD_TYPES_TEXT = {
  [RECORD_TYPES.QUIZ]: "Быстрый опрос",
  [RECORD_TYPES.POST]: "Запись",
  // [RECORD_TYPES.TESTING]: "Тестирование",
};

const TypeRadioGroup = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const TypeRadio = styled.div`
  padding: 35px 10px 10px;

  flex-basis: 100%;

  background: ${({ active }) =>
    active ? "linear-gradient(180deg, #bb6be7 0%, #e83fb5 100%);" : "white"};

  border: 2px solid #ffffffff;

  cursor: pointer;

  border-color: ${({ active }) => (active ? "#ffffffff" : "#BB6BE7;")};

  border-radius: 5px;

  font-weight: bold;
  font-size: 16px;
  line-height: 21px;

  color: ${({ active }) => (active ? "white" : "#BB6BE7;")};

  transition: color 0.5s;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const CreateQuiz = (props: Props) => {
  const [type, setType] = useState(RECORD_TYPES.QUIZ);
  return (
    <div className="container" style={{ marginTop: 20 }}>
      <Card className="p-10">
        <h1 className="mt-0 mb-1">Создание записи</h1>
        <TypeRadioGroup
          name="setYAxis"
          onClickRadioButton={(value) => setType(value)}
          selectedValue={type}
        >
          {Object.values(RECORD_TYPES).map((key) => (
            <TypeRadio
              onClick={() => setType(key)}
              key={key}
              active={type === key}
            >
              {RECORD_TYPES_TEXT[key]}
            </TypeRadio>
          ))}
        </TypeRadioGroup>

        {type === RECORD_TYPES.POST && <PostForm />}
      </Card>
    </div>
  );
};

export default CreateQuiz;

import React, { useState } from "react";
import { useField } from "../../../../hooks";
import { Button, Checkbox, Input } from "../../../../ui";
import Variants from "./Variants";

const OPTIONS = {
  IS_ANONIMUS: "IS_ANONIMUSh",
  NOT_DISCUSSING: "NOT_DISCUSSING",
  ANONIMUS_DISCUSSING: "ANONIMUS_DISCUSSING",
};

const OPTIONS_TEXT = {
  [OPTIONS.IS_ANONIMUS]: "Анонимный опрос",
  [OPTIONS.NOT_DISCUSSING]: "Без обсуждения",
  [OPTIONS.ANONIMUS_DISCUSSING]: "Анонимное обсуждение",
};

const QuizForm = () => {
  const name = useField("");
  const [options, setOptions] = useState([]);

  const toggleOption = (value) => {
    setOptions((prev) => {
      if (prev.includes(value)) return prev.filter((v) => v !== value);
      return [...prev, value];
    });
  };

  return (
    <>
      <div className="d-flex mb-2">
        <Input
          {...name}
          className="mr-1"
          placeholder="Название вопроса"
          autoFocus
        />

        <Button type="primary" style={{ width: "100px" }}>
          Дальше
        </Button>
      </div>

      <p>Настройка опроса</p>
      <div className="d-flex flex-wrap mb-2" style={{ gap: 10 }}>
        {Object.keys(OPTIONS_TEXT).map((key) => (
          <Checkbox
            checked={options.includes(key)}
            key={key}
            onClick={() => toggleOption(key)}
          >
            {OPTIONS_TEXT[key]}
          </Checkbox>
        ))}
      </div>

      <p>Варианты ответов</p>
      <Variants />
      <Button onClick={() => {}} type="success">
        Опубликовать
      </Button>
    </>
  );
};

export default QuizForm;

import React from "react";
import styled from "styled-components";
import { QuizOptions } from "../../modules/Quiz/QuizOptions";
import { Button, Card, Input } from "../../ui";

interface Props {}

const CreateTestring = (props: Props) => {
  return (
    <div className="container">
      <Card blur className="p-2">
        <h1 className="m-0 mb-2">Создание тестирования</h1>

        <Input
          className="mb-2"
          label="Название тестирование"
          placeholder="Например, что ты знаешь о моде?"
        />
        <QuizOptions />
        <div className="d-flex justify-end">
          <Button color="success">Опубликовать</Button>
        </div>
      </Card>
    </div>
  );
};

export default CreateTestring;

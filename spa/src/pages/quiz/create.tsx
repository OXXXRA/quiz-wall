import { default as React, FC } from "react";
import { X } from "react-feather";
import { Button, Card, Input } from "../../ui";

interface Props {}

const QuizVariants: FC = () => {
  const [variants, setVariants] = React.useState([
    {
      name: "Вариант 1",
    },
    {
      name: "Вариант 1",
    },
    {
      name: "Вариант 1",
    },
  ]);

  return variants.map((variant, index) => (
    <div
      style={{ marginBottom: 20 }}
      className="d-flex align-center"
      key={index}
    >
      <input style={{ marginRight: 20 }} type="checkbox" />
      <Input style={{ marginRight: 20 }} placeholder={variant.name}></Input>
      <Button padding={"auto"} width={"30px"} height={"30px"}>
        <X />
      </Button>
    </div>
  ));
};

const CreateQuiz = (props: Props) => {
  return (
    <div className="container" style={{ marginTop: 20 }}>
      <Card>
        <h1>Создание опроса</h1>
        <Input placeholder="Как будет называться ваш опрос?" />

        <h3>Варианты ответа</h3>
        <QuizVariants />
      </Card>
    </div>
  );
};

export default CreateQuiz;

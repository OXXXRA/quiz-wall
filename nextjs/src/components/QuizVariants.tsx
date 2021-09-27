import React from "react";
import { X } from "react-feather";
import { Button, Input } from "../ui";

const QuizVariants = () => {
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
      <input style={{ marginRight: 20 }} type="Checkbox" />

      <Input style={{ marginRight: 20 }} placeholder={variant.name}></Input>
      <Button padding={"auto"} width={"30px"} height={"30px"}>
        <X />
      </Button>
    </div>
  ));
};

export default QuizVariants;

import React from "react";
import { useField } from "../../../../hooks";
import { Button, Input, Textarea } from "../../../../ui";

const PostForm = () => {
  const name = useField("");
  const body = useField("");

  const handleCreate = () => {
    alert("created");
  };

  return (
    <>
      <Input {...name} className="mb-10" placeholder="Название записи" />
      <Textarea
        {...body}
        className="mb-10"
        rows="7"
        placeholder="Описание записи"
      />

      <Button onClick={handleCreate} type="success">
        Создать
      </Button>
    </>
  );
};

export default PostForm;

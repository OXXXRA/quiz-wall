import React from "react";
import { Button, ButtonAdd } from "../ui";

const Index = () => {
  return (
    <div className="container p-1">
      {/* <Feed /> */}

      <div>
        <Button flat>Игнорировать</Button>
        <ButtonAdd />

        <Button color="primary">Войти</Button>
        <Button color="success">Игнорировать</Button>
        <Button color="error">Войти</Button>
        <Button>Войти</Button>
      </div>
    </div>
  );
};

export default Index;

import React from "react";
import { Button, ButtonAddClose, Input, EmailForm } from "../ui";

const Index = () => {
  return (
    <div className="container p-1">
      {/* <Feed /> */}

      <div>
        <ButtonAddClose colors='greenWhite'/>
        <ButtonAddClose colors='greyBlue' round='60px' close/>
        <Button colors='greyBlue' sizeRect='middle'>Игнорировать</Button>
        <Button colors='blueWhite' sizeRect='small'>Войти</Button>
        <Button colors='greenWhite' round='150px'>Опубликовать</Button>
        <Button colors='whiteBlue' borders sizeRect='big'>Публикация</Button>
        <Button>Войти</Button>
        <Input />
      </div>
      <div style={{background: 'lightgray', paddingLeft: '20px'}}>
          <EmailForm type='error' colors='greyBlack' placeholder='exmaple@gmai.'/>
          <EmailForm close colors='whiteBlack' placeholder='exmaple@gmai.'/>
      </div>
      

      </div>
  );
};

export default Index;

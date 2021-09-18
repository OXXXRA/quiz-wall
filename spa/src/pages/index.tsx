import React from "react";
import { Button, Input, EmailForm } from "../ui";

const Index = () => {
  return (
    <div className="container p-1">
      {/* <Feed /> */}

      <div>
        <Button className='btn-add' colorsTheme='greenWhite' width='40px'></Button>
        <Button className='btn-add' round colorsTheme='greenWhite' width='50px'></Button>
        <Button colorsTheme='greyBlue' width='198px' ratio='5.8'>Игнорировать</Button>
        <Button>Войти</Button>
        <Button colorsTheme='greenWhite'>Опубликовать</Button>
        <Button colorsTheme='whiteBlue' borders >Публикация</Button>
        <Button fab width='40px'></Button>
      </div>
      <div style={{background: 'lightgray', padding: '20px', height: '400px'}}>
          <EmailForm type='error' width='470px' placeholder='exmaple@gmai.'style={{marginBottom: '10px'}} />
          <EmailForm icon type='error' width='470px' placeholder='exmaple@gmai.' style={{marginBottom: '10px'}} />
          <EmailForm close colorsTheme='whiteBlack' placeholder='exmaple@gmai.'/>
          <Input type='error' width='298px' placeholder='Поиск' style={{marginBottom: '10px'}} />
          <Input type='error' icon width='470px' colorsTheme='whiteBlack' placeholder='exmaple@gmai.'/>
      </div>
      

      </div>
  );
};

export default Index;

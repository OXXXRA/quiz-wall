import React from 'react'
import styled from 'styled-components'
import Empty from '../layouts/Empty'
import { Button, Input } from '../ui/index'

const Container  = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

`

const Card = styled.div`
  text-align: center;
  width: 400px;
  height: min-content;
  box-shadow: 20px 20px 50px rgba(0,0,0, 0.5);
  padding: 10px;
  border-radius: 5px;
  background: rgba(255,255,255, 0.1);
  border-top: 1px solid rgba(255,255,255, 0.5);
  border-left: 1px solid rgba(255,255,255, 0.5);
  backdrop-filter: blur(5px);
`

const login = () => {
  return (
    <Container>
      <Card>
        <h1>Quiz Wall</h1>
        <Input className="mb-1" type="text" placeholder="Логин" />
        <Input className="mb-1" type="text" placeholder="Пароль" />
        <Button className="mb-1">Войти</Button>
        Регистраця | Забыли пароль?
      </Card>
    </Container>
  )
}
login.Layout = Empty
export default login

import React from "react";
import styled from "styled-components";
import Link from "../components/Link";
import Empty from "../layouts/Empty";
import { Button, Card, Input } from "../ui/index";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const login = () => {
  return (
    <Container>
      <Card
        style={{
          textAlign: "center",
          width: 400,
          paddingRight: 20,
          paddingLeft: 20,
        }}
      >
        <h1>Quiz Wall</h1>
        <Input className="mb-1" type="text" placeholder="Логин" />
        <Input className="mb-1" type="text" placeholder="Email" />
        <Input className="mb-1" type="text" placeholder="Пароль" />
        <Button className="mb-1">Создать пользователя</Button>
        <Link href="/login">Войти</Link>| Забыли пароль?
      </Card>
    </Container>
  );
};
login.Layout = Empty;
export default login;

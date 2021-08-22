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
          width: 300,
          paddingRight: 20,
          paddingLeft: 20,
        }}
      >
        <h1 className="text-center">Quiz Wall</h1>
        <Input className="mb-10" type="text" placeholder="Логин" />
        <Link href="/">Не помню</Link>
        {/* <Input className="mb-10" type="text" placeholder="Пароль" /> */}
        <Button className="mt-10 mb-10">Войти</Button>
        <Button type="success" className="mb-10">
          Создать
        </Button>
      </Card>
    </Container>
  );
};
login.Layout = Empty;
export default login;

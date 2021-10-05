import { useStore } from "effector-react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import PrimaryLink from "../modules/Auth/components/PrimaryLink";
import Register from "../modules/Auth/components/Register";
import { api } from "./../api/axios";
import Empty from "./../layouts/Empty";
import {
  authFormStore,
  setEmail,
  setPassword,
  setToken,
  toggleLoginForm,
} from "./../modules/Auth/auth-store";
import AuthContent from "./../modules/Auth/components/AuthContent";
import AuthHeader from "./../modules/Auth/components/AuthHeader";
import { setUser } from "./../modules/User/user-store";
import Button from "./../ui/Button";
import Checkbox from "./../ui/Checkbox";
import Input from "./../ui/Input";

interface Props {}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary.light};
`;

const Content = styled.div`
  display: flex;

  height: 800px;
  max-height: 100%;
  width: 1100px;

  position: relative;

  border-radius: ${({ theme }) => theme.radius};

  color: ${({ theme }) => theme.colors.grey};

  background: ${({ theme }) => theme.colors.white};

  & > div {
    width: 50%;

    @media (max-width: 720px) {
      width: 100%;
    }
  }
`;

const MovedBackground = styled.div<{ left?: boolean }>`
  background: ${({ theme }) => theme.colors.primary.main};
  z-index: 5;
  position: absolute;
  width: 50%;
  height: 100%;
  left: ${({ left }) => (left ? 0 : 50)}%;
  transition: all 0.3s;

  @media (max-width: 720px) {
    display: none;
  }
`;

const Auth = (props: Props) => {
  const [remember, setRemember] = useState(false);
  const authForm = useStore(authFormStore);
  const router = useRouter();

  const handleLogin = () => {
    const params = {
      email: authForm.email,
      password: authForm.password,
    };
    api
      .post("/auth/login", params)
      .then(({ data }) => {
        const { token, user } = data;

        setUser(user);
        setToken(token);

        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrapper>
      <Content>
        <MovedBackground left={authForm.isLoginForm} />
        <AuthContent
          show={authForm.isLoginForm}
          className="d-flex flex-column p-4"
        >
          <AuthHeader title="Войти" />
          <div>
            <Input
              className="mb-2"
              placeholder="example@gmail.com"
              primary
              label="Ваш логин или email"
              value={authForm.email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <Input
              className="mb-2"
              placeholder="Минимум 8 символов"
              primary
              label="Пароль"
              type="password"
              value={authForm.password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>

            <Button onClick={handleLogin} className="mb-2" color="primary">
              Войти
            </Button>

            <div className="mb-2 d-flex justify-between">
              <Checkbox
                checked={remember}
                onClick={() => setRemember(!remember)}
              >
                {" "}
                Запомнить меня
              </Checkbox>
              <PrimaryLink href="#register">Забыли пароль?</PrimaryLink>
            </div>

            <p onClick={toggleLoginForm} style={{ fontWeight: "bold" }}>
              Ещё нет аккаунта?{" "}
              <PrimaryLink href="#register">Создать аккаунт</PrimaryLink>
            </p>
          </div>
          <div className="flex-grow" />
          <p>2021 DCLever все права защищены</p>
        </AuthContent>
        <Register />
      </Content>
    </Wrapper>
  );
};

Auth.Layout = Empty;

export default Auth;

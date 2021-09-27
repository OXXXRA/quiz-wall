import { useStore } from "effector-react";
import { useRouter } from "next/router";
import * as React from "react";
import styled from "styled-components";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import {
  setEmail,
  setIsExistsEmail,
  setPassword,
  setToken,
  toggleLoginForm,
} from "../auth-store";
import { api } from "./../../../api/axios";
import { setUser } from "./../../User/user-store";
import { authFormStore } from "./../auth-store";
import AuthContent from "./AuthContent";
import AuthHeader from "./AuthHeader";
import PrimaryLink from "./PrimaryLink";

export interface IAppProps {}

const YourEmailHelper = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;

  color: #404040;
`;

const Register: React.FC<IAppProps> = (props) => {
  const router = useRouter();

  const authForm = useStore(authFormStore);
  const [isEnterPassword, setIsEnterPassword] = React.useState(false);

  const handleVerifyEmail = () => {
    const params = {
      email: authForm.email,
    };
    api
      .get("/user", { params })
      .then(({ data }) => {
        if (data.length === 0) {
          setIsEnterPassword(true);
          setIsExistsEmail(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRegister = () => {
    const params = {
      email: authForm.email,
      password: authForm.password,
    };
    api
      .post("/auth/register", params)
      .then(({ data }) => {
        const { user, token } = data;
        setUser(user);
        setToken(token);

        router.push('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthContent
      show={!authForm.isLoginForm}
      className="d-flex flex-column p-4"
    >
      <AuthHeader title="Регистрация" />
      <div className="mb-auto">
        {authForm.isExistsEmail && isEnterPassword ? (
          <>
            <YourEmailHelper className="mb-2">
              Ваша почта: <span className="weight-bold">{authForm.email}</span>
            </YourEmailHelper>
            <Input
              className="mb-2"
              placeholder="Минимум 8 символов"
              primary
              label="Введите ваш пароль"
              type="password"
              value={authForm.password}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
            <Button
              onClick={() => setIsEnterPassword(false)}
              className="mb-2 mr-2"
              color="primary"
              flat
            >
              Назад
            </Button>
            <Button
              onClick={handleRegister}
              disabled={!authForm.password}
              className="mb-2"
              color="primary"
            >
              Создать аккаунт
            </Button>
          </>
        ) : (
          <>
            <Input
              className="mb-2"
              placeholder="example@gmail.com"
              primary
              label="Введите вашу почту"
              value={authForm.email}
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <Button
              disabled={!authForm.email}
              onClick={handleVerifyEmail}
              className="mb-2"
              color="primary"
            >
              Продолжить
            </Button>
          </>
        )}
      </div>
      <p onClick={toggleLoginForm} style={{ fontWeight: "bold" }}>
        Уже есть аккаунт? <PrimaryLink href="#register">Войти</PrimaryLink>
      </p>
      <div className="flex-grow" />
      <p>2021 DCLever все права защищены</p>
    </AuthContent>
  );
};

export default Register;

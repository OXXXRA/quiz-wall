import App from "next/app";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import Main from "../layouts/Main";
import { setToken } from "../modules/Auth/auth-store";
import theme from "../styles/theme";
import GlobalStyle from "../styles/_index";
import { api } from "./../api/axios";
import { setUser } from "./../modules/User/user-store";
class MyApp extends App<any> {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");

    if (!token) return;

    setToken(token);

    api
      .get("/auth/me")
      .then(({ data }) => {
        setUser(data);
      })
      .catch(() => {
        localStorage.removeItem("token");
      });
  }

  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || Main;

    return (
      <>
        <Head>
          <link
            href="http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <Layout>
            <GlobalStyle />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;

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
import Router from "next/router";
import { setLoadingPage } from "./../effector/router-state";
import PageLoader from "../components/PageLoader";

//Binding events.
Router.events.on("routeChangeStart", () => setLoadingPage(true));
Router.events.on("routeChangeComplete", () => setLoadingPage(false));
Router.events.on("routeChangeError", () => setLoadingPage(false));

class MyApp extends App<any> {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (process.browser) {
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

    return { pageProps };
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
            <PageLoader />
          </Layout>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;

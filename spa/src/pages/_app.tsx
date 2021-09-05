import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import Main from "../layouts/Main";
import GlobalStyle from "../styles/global";
import "../styles/globals.scss";
import theme from "../styles/theme";
class MyApp extends App<any> {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || Main;

    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default MyApp;

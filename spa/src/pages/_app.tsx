import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import Main from "../layouts/Main";
import theme from "../styles/theme";
import GlobalStyle from "../styles/_index";
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

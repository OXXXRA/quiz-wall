import App from "next/app";
import React from "react";
import Main from "../layouts/Main";
import "../styles/globals.scss";

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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;

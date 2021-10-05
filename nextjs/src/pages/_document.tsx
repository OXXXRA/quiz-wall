import Document, { Html, NextScript } from "next/document";
import React from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <Html>
            {initialProps.styles}
            {sheet.getStyleElement()}
            <body>
              <NextScript />
            </body>
            <div id="modal" />
          </Html>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

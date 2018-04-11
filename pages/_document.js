import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet, injectGlobal } from "styled-components";
import { GA_TRACKING_ID } from "../lib/gtag";

// This is OK
/* eslint-disable */
injectGlobal`
  /* Hack to style __next div, will be solved in v6 of react */
  body > div:first-child,
    #__next {
      height: 100%;
  }

  /* A little normalize stuff */
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: monospace;
    line-height: 1.25;
    font-size: 16px;
  }
  code,
  pre {
    font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    font-size: 1em;
  }
`;
/* eslint-enable */

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Javascript Key Codes</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Look up Javascript key codes for keypress events and map kap keys to number" />
          <meta charSet="utf-8" />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          {/* eslint-disable */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
            }}
          />
          {/* eslint-enable */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

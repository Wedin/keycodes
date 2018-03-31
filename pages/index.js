import React from "react";
import KeyCodeListener from "../components/KeyCodeListener";
import Layout from "../components/Layout";

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <KeyCodeListener />
      </Layout>
    );
  }
}

IndexPage.displayName = "Index";

// Until KeyboardEvent.key is used by all modern browsers
// https://caniuse.com/#feat=keyboardevent-key

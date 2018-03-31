import React from "react";
import Layout from "../components/Layout";
import KeyCodeSearcher from "../components/KeyCodeSearcher";

export default class FromKeyCode extends React.Component {
  render() {
    return (
      <Layout>
        <KeyCodeSearcher />
      </Layout>
    );
  }
}

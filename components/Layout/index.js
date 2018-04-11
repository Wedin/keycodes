import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Router from "next/router";
import Navigation from "../Navigation";
import GithubSource from "../GithubSource";
import * as gtag from "../../lib/gtag";

const CenterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  top: 25%;
  left: 0;
  margin: 0 auto;
`;

const InnerWrapper = styled.div`
  max-width: 550px;
  min-width: 300px;
  margin: 20px 0;
`;

Router.onRouteChangeComplete = url => {
  gtag.pageview(url);
};

export default class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CenterWrapper>
          <InnerWrapper>{this.props.children}</InnerWrapper>
        </CenterWrapper>
        <Navigation />
        <GithubSource />
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Layout.defaultProps = {
  children: [],
};

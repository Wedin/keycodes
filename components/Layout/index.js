import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Navigation from "../Navigation";

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
  margin: 20px 0;
`;

export default class Layout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CenterWrapper>
          <InnerWrapper>{this.props.children}</InnerWrapper>
        </CenterWrapper>
        <Navigation />
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

// Until KeyboardEvent.key is used by all modern browsers
// https://caniuse.com/#feat=keyboardevent-key

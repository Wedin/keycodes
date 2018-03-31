import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  color: black;
  position: fixed;

  right: 0;
  top: 10px;

  @media (max-width: 768px) {
    bottom: 12px;
    top: auto;
  }
`;

const SourceLink = styled.a`
  color: black;
  padding: 12px;
  background: #fadce1;

  &:hover {
    background; #f57b90;
  }
`;

export default class GithubSource extends React.Component {
  render() {
    return (
      <Wrapper>
        <SourceLink href="https://github.com/Wedin/keycodes" target="_blank" rel="noopener noreferrer">
          View code at Github
        </SourceLink>
      </Wrapper>
    );
  }
}

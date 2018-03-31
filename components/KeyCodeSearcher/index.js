import React from "react";
import styled from "styled-components";
import lookupKeyCode from "../keyCodes";

const Wrapper = styled.div`
  text-align: center;
`;

const IntroText = styled.p`
  margin-bottom: 50px;
`;

const Input = styled.input`
  border: 5px solid black;
  display: block;
  font-size: 20px;
  padding: 15px;
  width: 300px;
  text-align: center;
  margin: 0 auto;

  &:focus,
  &:active {
    outline: 15px solid #ffff004f;
  }
`;

const SearchResultWrapper = styled.div`
  margin-top: 75px;
  font-size: 18px;
`;

const KeySearchResult = styled.span`
  font-size: 24px;
`;

export default class KeyCodeSearcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keySearch: "",
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const parsedValue = parseInt(e.target.value, 10) || "";

    this.setState({
      keySearch: parsedValue,
    });
  }

  render() {
    const keySearchResult = lookupKeyCode(this.state.keySearch);
    const keySearch = keySearchResult ? (
      <KeySearchResult>Key: {keySearchResult}</KeySearchResult>
    ) : (
      <span>Sorry we can&apos;t find that key code</span>
    );

    return (
      <Wrapper>
        <IntroText>Search for a key from its keycode</IntroText>
        <Input
          type="number"
          step="1"
          pattern="d"
          min="0"
          max="350"
          maxLength="3"
          onFocus={() => {
            this.setState({
              keySearch: "",
            });
          }}
          onChange={this.onChange}
          value={this.state.keySearch}
        />

        {this.state.keySearch && <SearchResultWrapper>{keySearch} </SearchResultWrapper>}
      </Wrapper>
    );
  }
}

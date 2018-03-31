import React from 'react';
import styled from 'styled-components';
import KeyCodeListener from '../components/KeyCodeListener';

const MODES = {
  KEY_CODE_LISTENER: 'KEY_CODE_LISTENER',
  REVERSE_CODE: 'REVERSE_CODE',
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const InnerWrapper = styled.div`
  max-width: 500px;
  margin: 20px 0;
`;

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    // MODE HERE
    this.state = {
      mode: MODES.KEY_CODE_LISTENER,
    };
  }

  render() {
    return (
      <Wrapper>
        <InnerWrapper>
          {/* <Title>Press any key to get the key code.</Title> */}
          {this.state.mode === MODES.KEY_CODE_LISTENER ? <KeyCodeListener /> : <div>TODO</div>}
        </InnerWrapper>
      </Wrapper>
    );
  }
}

IndexPage.displayName = 'Index';

// Until KeyboardEvent.key is used by all modern browsers
// https://caniuse.com/#feat=keyboardevent-key

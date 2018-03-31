import React from 'react';
import styled from 'styled-components';
import keyLookup from './keyLookup';

const KeyCodes = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
`;

const MainKey = styled.h2`
  font-size: 120px;
  margin: 10px 0;
`;

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleKeyEvent = this.handleKeyEvent.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyEvent, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyEvent, false);
  }

  handleKeyEvent(event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    console.log(event.key, event.which || event.keyCode);

    this.setState({
      currentKey: event.key,
      currentKeyCode: event.which || event.keyCode,
    });
    event.preventDefault();
  }

  render() {
    const lookupCode = keyLookup(this.state.currentKeyCode);

    const keyCodeContent = this.state.currentKeyCode ? (
      <KeyCodes>
        <div>{lookupCode}</div>
        <MainKey>{this.state.currentKeyCode}</MainKey>
        {this.state.currentKey && (
          <div>
            <code>Event.key:</code> {this.state.currentKey}
          </div>
        )}
      </KeyCodes>
    ) : (
      <div>
        <Title>
          Press any key to get the KeyboardEvent key code{' '}
          <span aria-label="sunglasses" role="img">
            😎
          </span>
        </Title>
      </div>
    );

    return <div>{keyCodeContent && keyCodeContent}</div>;
  }
}

import React from "react";
import styled from "styled-components";
import lookupKeyCode from "../keyCodes";
import Start from "../Start";

const KeyCodes = styled.div`
  text-align: center;
  background: #003cda;
  padding: 40px;
  color: white;
`;

const MainKey = styled.h2`
  font-size: 120px;
  font-weight: 300;
  margin: 25px 0;
`;

const KeySection = styled.div`
  display: block;
  margin-top: 50px;
`;

const PrintKey = styled.h3`
  font-size: 25px;
  font-weight: 300;
  margin: 0;
`;

const OutLink = styled.a``;

export default class KeyCodeListener extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleKeyEvent = this.handleKeyEvent.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyEvent, false);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyEvent, false);
  }

  handleKeyEvent(event) {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    this.setState({
      currentKey: event.key,
      currentKeyCode: event.which || event.keyCode,
    });
    event.preventDefault();
  }

  render() {
    const lookupCode = lookupKeyCode(this.state.currentKeyCode);

    if (!this.state.currentKeyCode) {
      return <Start />;
    }

    return (
      <div>
        <KeyCodes>
          <div>
            <PrintKey>{lookupCode}</PrintKey>
          </div>
          <MainKey>{this.state.currentKeyCode}</MainKey>
        </KeyCodes>
        {this.state.currentKey && (
          <KeySection>
            <code>Event.key:</code> {this.state.currentKey}
            <p>
              Learn more about <code>Event.key</code> at the{" "}
              <OutLink href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key" target="_blank" rel="noopener noreferrer">
                MDN docs
              </OutLink>
            </p>
          </KeySection>
        )}
      </div>
    );
  }
}

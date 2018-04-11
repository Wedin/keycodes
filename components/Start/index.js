import styled from "styled-components";

const StartWrapper = styled.div`
  background: #d66854;
  color: white;
  padding: 30px;
`;

const Emoji = styled.span`
  display: block;
  margin-top: 10px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  margin-top: 50px;
  text-align: center;
  font-weight: 300;
  font-size: 20px;
`;

const Start = () => (
  <StartWrapper>
    <Title>
      Press any key to get the KeyboardEvent key code
      <Emoji>
        <span aria-label="sunglasses" role="img">
          😎
        </span>
      </Emoji>
    </Title>
    <SubTitle>A tool to translate Javascript key codes</SubTitle>
  </StartWrapper>
);

export default Start;

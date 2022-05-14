import React from "react";
import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: ${({ theme }) => theme.textColor};
`;
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

const rotationAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    border-radius:100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji}:hover {
    font-size: 98px;
  }
`;

const Box2 = styled.div`
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box2)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: tomato;
`;

const Input = styled.input.attrs({ required: true, maxLength: 3 })`
  color: tomato;
`;

function App1() {
  return (
    <>
      <Wrapper>
        <Title>Hello</Title>
      </Wrapper>
    </>
  );
}

export default App1;

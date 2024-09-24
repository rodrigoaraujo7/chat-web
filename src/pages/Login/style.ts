import styled, { keyframes } from "styled-components";

const boxshadowAnimate = keyframes`
  0% {
    box-shadow: 0 0 15px 5px #000;
  }

  15% {
    box-shadow: 0 0 15px 5px #5a5a5a;
  }

  85% {
    box-shadow: 0 0 15px 5px #5a5a5a;
  }

  100% {
    box-shadow: 0 0 15px 5px #000;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: #000;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 42px;

  h1 {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 8px;
    color: #fff;
    text-transform: uppercase;
  }

  button {
    border: 0;

    padding: 15px 35px;
    border-radius: 50px;

    font-size: 18px;
    color: #000;
    font-weight: 500;

    display: flex;
    align-items: center;
    gap: 25px;

    animation: ${boxshadowAnimate} 5s infinite ease-in-out;
    cursor: pointer;

    svg {
      width: 35px;
      height: 35px;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f7f8fa;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;
`;

export const Chat = styled.div`
  height: 100%;
  width: 688px;

  border-radius: 20px;
  background-color: #fff;

  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    padding: 34px 87px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 36px;
      font-weight: 800;
      text-transform: uppercase;
    }

    div {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    button {
      display: flex;
      align-items: center;
      gap: 12px;

      color: #ff2e2e;
      font-size: 22px;
      font-weight: 400;

      background-color: transparent;
      border: 0;

      cursor: pointer;
    }

    img {
      width: 50px;
      height: 50px;

      box-shadow: 0 4px 5px #00000025;
      border-radius: 50px;
    }
  }
`;

export const ConversationBox = styled.div`
  flex: 1;
  border-radius: 0 0 20px 20px;
  position: relative;

  .messages-list {
    display: flex;
    flex-direction: column;
  }
`;

export const Message = styled.div<{ $class: "primary" | "secondary" }>``;

export const InputContainer = styled.form`
  position: absolute;
  right: 89px;
  left: 89px;
  bottom: 34px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 20px 25px;
  border-radius: 50px;
  border: 2px solid #e5e9ee;

  transition: 0.15s;

  input[type="text"] {
    border: 0;
    width: 100%;

    color: #000;
    font-size: 20px;
    font-weight: 400;

    outline: none;

    &::placeholder {
      color: #979797;
      font-style: italic;
      font-weight: 300;
    }
  }

  svg {
    path {
      transition: 0.15s;
    }
  }

  &:focus-within {
    border-color: #979797;

    svg {
      path {
        stroke: #000;
      }
    }
  }
`;

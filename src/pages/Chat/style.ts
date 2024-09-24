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

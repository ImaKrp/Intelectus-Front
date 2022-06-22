import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: gray;
`;

export const Selector = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 60px;
  overflow: hidden;
  background-color: white;
  > a {
    height: 100%;
    width: 100%;

    > img {
      height: 100%;
      width: 100%;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a3cef1;
`;

export const Card = styled.div`
  padding: 2.4rem;
  border-radius: 0.8rem;
  background-color: white;

  .highcharts-credits {
    display: none;
  }
`;

export const User = styled.div`
  background-color: white;
  height: 4rem;
  width: 4rem;
  border-radius: 2rem;
  position: absolute;
  top: 1rem;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fb5607;

  &:hover > div {
    display: flex;
  }

  > div {
    display: none;
    flex-direction: column;
    position: absolute;
    background-color: red;
    height: fit-content;
    width: 6rem;
    top: 3rem;
    left: -1rem;
    border-radius: 0.4rem;
    overflow: hidden;

    > button {
      width: 100%;
      height: 2.4rem;
      font-size: 1.4rem;
      cursor: pointer;
    }
  }
`;
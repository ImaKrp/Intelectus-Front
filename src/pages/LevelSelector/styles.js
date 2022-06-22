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
  gap: 20px;
`;

export const Selector = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 60px;
  overflow: hidden;
  background-color: white;

  &:hover .hover {
    opacity: 1;
  }

  > a {
    height: 100%;
    width: 100%;
    position: relative;

    .hover {
      display: flex;
      position: absolute;
      background-color: #000000ad;
      height: 120px;
      width: 120px;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.6rem;
      text-transform: capitalize;
      opacity: 0;
      transition: opacity 0.4s ease-in-out;
    }

    > img {
      height: 100%;
      width: 100%;
    }
  }
`;

export const User = styled.div`
  background-color: white;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  position: absolute;
  top: 10px;
  right: 20px;

  &:hover > div {
    display: flex;
  }

  > div {
    display: none;
    flex-direction: column;
    position: absolute;
    background-color: red;
    height: fit-content;
    width: 60px;
    bottom: -1.6rem;
    left: -10px;
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

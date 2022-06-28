import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 0 calc(50vw - 130px);
  height: fit-content;
`;

export const Selector = styled.div`
  height: 12rem;
  width: 12rem;
  border-radius: 6rem;
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
      height: 12rem;
      width: 12rem;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.6rem;
      text-transform: capitalize;
      opacity: 0;
      transition: opacity 0.4s ease-in-out;
      text-align: center;
    }

    > img {
      height: 100%;
      width: 100%;
    }
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

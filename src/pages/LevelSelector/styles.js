import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a3cef1;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a3cef1;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 0 calc(50vw - 30rem);
  height: fit-content;
`;

export const Selector = styled.div`
  height: 20rem;
  width: 20rem;
  border-radius: 15rem;
  overflow: hidden;
  background-color: white;
  border: 2px solid #fb5607;

  &:hover .hover {
    opacity: 1;
  }

  > a {
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .hover {
      display: flex;
      position: absolute;
      background-color: #000000ad;
      height: 20rem;
      width: 20rem;
      padding: 3rem;
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
      width: 75%;
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
  right: 3rem;
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
    width: 8rem;
    top: 3rem;
    left: -2rem;
    border-radius: 0.4rem;
    overflow: hidden;

    > button {
      width: 100%;
      height: 2.4rem;
      font-size: 1.4rem;
      cursor: pointer;
      color: #fb5607;
      font-weight: bold;
    }
  }
`;

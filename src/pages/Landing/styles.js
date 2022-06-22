import styled from "styled-components";

export const Header = styled.header`
  height: 6.5rem;
  width: 100%;
  display: flex;
  padding-inline: 3rem;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;

  .nav {
    display: flex;
    justify-content: space-between;
    gap: 1.2rem;
    font-size: 1.6rem;
  }
`;

export const Game = styled.section`
  padding: 3rem;
  height: calc(100vh - 6.5rem);
  width: 100%;
  display: flex;
  justify-content: center;
  background: rgb(124, 124, 124);

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    max-width: 18rem;
  }
  button {
    margin-top: 1.5rem;
    border-radius: 50%;
    background-color: rgb(187, 187, 187);
    width: 6rem;
    height: 6rem;
    margin-inline: auto;
    box-shadow: 0 0.3rem 0.7rem 0 rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    cursor: pointer;
  }
  img {
    margin-inline: auto;
    max-width: 80%;
    border-radius: 0.5rem;
  }
`;

export const About = styled.section`
  padding: 3rem;
  height: 40rem;
  width: 100%;
  background-color: rgba(141, 141, 141, 0.473);
  div {
    width: 98%;
    margin-inline: auto;
    padding: 1.4rem;
  }
  h1 {
    margin-bottom: 0.6rem;
    font-size: 2rem;
    font-weight: 500;
  }
  p {
    font-size: 1.5rem;
    line-height: 2.2rem;
  }
`;

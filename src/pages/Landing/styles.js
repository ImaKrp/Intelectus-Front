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
  background: #a3cef1;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    max-width: 18rem;
  }
  button {
    margin-top: 1.5rem;
    border-radius: 50%;
    background-color: #f55e17;
    width: 6rem;
    height: 6rem;
    margin-inline: auto;
    box-shadow: 0 0.3rem 0.7rem 0 rgb(0 0 0 / 40%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    cursor: pointer;
    color: #a3cef1;
  }
  img {
    margin-inline: auto;
    max-width: 80%;
    border-radius: 0.5rem;
  }
`;

export const About = styled.section`
  padding: 3rem;
  height: 100%;
  width: 100%;
  background-color: #a3cef1;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  div {
    width: 98%;
    margin-inline: auto;
    padding: 1.4rem;
  }
  h1 {
    font-size: 2rem;
    font-weight: 500;
  }
  p {
    font-size: 1.5rem;
    line-height: 2.2rem;
  }
`;

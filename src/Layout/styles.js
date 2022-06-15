import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: auto 20vw;
  grid-template-rows: auto;
  grid-template-areas: "Game Aside";
`;

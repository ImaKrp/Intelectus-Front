import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 4rem auto;
  ${({ isAGame }) =>
    isAGame
      ? css`
          grid-template-columns: 80vw 20vw;
          grid-template-areas: "Header Aside" "Game Aside";
        `
      : css`
          grid-template-columns: auto;
          grid-template-areas: "Header" "Game";
        `};
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Game;
`;

export const Grid = styled.div`
  display: grid;
  grid-column-gap: 1.2rem;
  grid-template-columns: repeat(3, 12rem);
  grid-template-rows: 16rem;
`;

import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  display: grid;
  height: fit-content;
  grid-column-gap: 1.2rem;
  grid-row-gap: 1.4rem;
  grid-template-columns: repeat(4, 6vw);
  grid-template-rows: repeat(${({ cardsLenght }) => Number(cardsLenght) / 4}, 8vw);
`;

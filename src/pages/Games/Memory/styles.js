import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: #a3cef1;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Game;
`;

export const Grid = styled.div`
  display: grid;
  height: fit-content;
  grid-column-gap: 1.2rem;
  grid-row-gap: 1.4rem;
  grid-template-columns: repeat(4, 12rem);
  grid-template-rows: repeat(
    ${({ cardsLenght }) => Number(cardsLenght) / 4},
    16rem
  );
`;

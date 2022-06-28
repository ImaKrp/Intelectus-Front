import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: #a3cef1;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: Game;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.8rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-column-gap: 1.2rem;
  grid-template-columns: repeat(3, 20rem);
  grid-template-rows: 16rem;
`;

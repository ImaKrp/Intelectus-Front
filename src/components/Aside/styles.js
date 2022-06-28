import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-area: Aside;
  padding: 2rem;
  gap: 1.6rem;
  > div {
    text-transform: capitalize;
    font-size: 1.8rem;
    text-align: center;
  }

  .time {
    font-weight: bold;
  }
`;

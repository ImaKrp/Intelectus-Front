import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  grid-area: Aside;
  padding: 4rem 2rem;
  gap: 1.6rem;

  > div {
    text-transform: capitalize;
    font-size: 2rem;
    text-align: center;
  }

  .time {
    font-weight: bold;
    margin: 3rem 0;
    color: #3a86ff;
  }

  .errors {
    color: #ff006e;
  }

  .task {
    color: #fb5607;
  }
`;

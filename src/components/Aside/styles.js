import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  gap: 16px;
  > div {
    text-transform: capitalize;
    font-size: 1.8rem;
  }

  .time {
    font-weight: bold;
  }
`;

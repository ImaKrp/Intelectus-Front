import styled from "styled-components";

export const Container = styled.form`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SpanError = styled.span`
  color: var(--red);
  font-size: 1.4rem;
  font-weight: 300;
`;

export const Input = styled.input`
  height: 4rem;
  width: 32rem;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 0 1rem;
  font-size: 1.4rem;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  line-height: 3rem;
  font-weight: 400;
  margin-left: 0.8rem;
`;

export const InputDiv = styled.div`
  width: 32rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
`;

export const Submit = styled.button`
  height: 4rem;
  width: 32rem;
  border: 1px solid black;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.6rem;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem;
  span {
    font-size: 1.4rem;
  }
`;

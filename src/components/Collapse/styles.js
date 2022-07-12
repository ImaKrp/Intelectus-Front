import styled from "styled-components";

export const Wrapper = styled.div`
  max-height: ${({ active }) => (active ? `450px` : "4.6rem")};
  padding: 0 !important;
  border: 2px solid #f55e17;
  background: #f55e17;
  color: white;
  overflow: hidden;
`;

export const Title = styled.button`
  height: 4.6rem;
  width: 100%;
  background-color: transparent;
  cursor: pointer;
  font-size: 3rem;
  display: flex;
  padding: 0 0.8rem;
  align-items: center;
  justify-content: space-between;
  color: white;

  > h3 {
    font-size: 2.4rem;
    cursor: pointer;
  }

  > svg {
    transform: rotate(${({ active }) => (active ? "180deg" : 0)});
    transition: opacity 0.2s, transform 0.3s;
  }
`;

export const CollapsedContainer = styled.div`
  max-height: ${({ active }) => (active ? `400px` ?? 0 : 0)};
  transition: max-height 0.6s;
  overflow: hidden;

  a {
    color: white;
    font-weight: bold;
    text-decoration: underline;
  }
`;

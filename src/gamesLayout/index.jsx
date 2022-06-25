import React from "react";
import { Container } from "./styles";
import { Aside } from "../components/Aside";
import { Header } from "../components/Header";
import { useRecord } from "../hooks/useRecord";

export const GamesLayout = ({ children }) => {
  const { task } = useRecord();
  return (
    <Container isAGame={task}>
      <Header />
      {children}
      {task && <Aside />}
    </Container>
  );
};

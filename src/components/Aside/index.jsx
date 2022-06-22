import React from "react";
import { Container } from "./styles";
import { useRecord } from "../../hooks/useRecord";

export const Aside = () => {
  const { task, time, errors } = useRecord();
  return (
    <Container>
      <div>{task?.game}</div>
      <div>{task?.type}</div>
      <div className="time">{time}</div>
      <div>Erros: {errors}</div>
    </Container>
  );
};

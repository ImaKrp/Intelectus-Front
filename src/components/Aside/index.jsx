import React from "react";
import { Container } from "./styles";
import { useRecord } from "../../hooks/useRecord";

export const Aside = () => {
  const { task, time, errors } = useRecord();
  return (
    <Container>
      <div className="task">{task?.name}</div>
      <div className="task">{task?.type}</div>
      <div className="time">{time}</div>
      <div className="errors">Erros: {errors}</div>
    </Container>
  );
};

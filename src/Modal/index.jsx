import React from "react";
import { Wrapper, ModalUI, Restart } from "./styles";
import { useRecord } from "../hooks/useRecord";
import { useNavigate } from "react-router-dom";

export const Modal = ({ children }) => {
  const navigate = useNavigate();
  const { task, time, errors, done, setTask } = useRecord();
  const resetTask = () => {
    setTask();
    navigate("/", { replace: true });
  };

  return (
    <>
      {done && task && (
        <Wrapper>
          <ModalUI>
            <div>{task?.game}</div>
            <div>{task?.type}</div>
            <div className="time">{time}</div>
            <div>Erros: {errors}</div>
            <Restart onClick={resetTask}>Voltar</Restart>
          </ModalUI>
        </Wrapper>
      )}
      {children}
    </>
  );
};

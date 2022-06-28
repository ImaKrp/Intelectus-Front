import React from "react";
import { Wrapper, ModalUI, Restart } from "./styles";
import { useRecord } from "../hooks/useRecord";
import { useNavigate, useLocation } from "react-router-dom";

export const Modal = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { task, time, errors, done, setTask, taskValue } = useRecord();
  const resetTask = () => {
    setTask();
    navigate("/", { replace: true });
  };

  const redirectTo = location.pathname.split("/")[1];

  return (
    <>
      {done && task && (
        <Wrapper>
          <ModalUI>
            <div>{task?.name}</div>
            <div>{taskValue}</div>
            <div>{task?.type}</div>
            <div className="time">{time}</div>
            <div>Erros: {errors}</div>
            <Restart
              onClick={() => navigate(`/${redirectTo}`, { replace: true })}
            >
              Jogar Novamente
            </Restart>
            <Restart onClick={resetTask}>Voltar</Restart>
          </ModalUI>
        </Wrapper>
      )}
      {children}
    </>
  );
};

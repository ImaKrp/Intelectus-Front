import React from "react";
import { Wrapper, ModalUI } from "./styles";
import { useRecord } from "../hooks/useRecord";

export const Modal = ({ children }) => {
  const { task, time, errors, done } = useRecord();
  return (
    <>
      {done && (
        <Wrapper>
          <ModalUI>
            <div>{task?.game}</div>
            <div>{task?.type}</div>
            <div className="time">{time}</div>
            <div>Erros: {errors}</div>
          </ModalUI>
        </Wrapper>
      )}
      {children}
    </>
  );
};

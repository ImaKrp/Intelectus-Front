import React from "react";
import { Wrapper, ModalUI, Restart, Flex } from "./styles";
import { useRecord } from "../hooks/useRecord";
import { useNavigate, useLocation } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";
import { IoMdReturnLeft } from "react-icons/io";
import Circle from "react-circle";

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
            <div style={{ fontSize: "2.4rem", fontWeight: "bold" }}>
              Resumo da Partida
            </div>
            <div>{task?.name}</div>
            <div className="time">{time}</div>
            <Flex>
              <div>{task?.type}</div>
              <Circle
                animate
                animationDuration="3s"
                responsive={false}
                size={50}
                lineWidth={40}
                progress={taskValue > 100 ? 100 : taskValue}
                progressColor="#FB5607"
                bgColor="#EBEBEB"
                roundedStroke
                textStyle={{
                  fontSize: "0px",
                }}
                showPercentage={false}
                showPercentageSymbol={false}
              />
            </Flex>

            <div className="erros">Total de Erros: {errors}</div>
            <Flex>
              <Restart
                style={{ backgroundColor: "#E01E3799" }}
                onClick={resetTask}
              >
                <IoMdReturnLeft />
              </Restart>
              <Restart
                style={{ backgroundColor: "#38B00099" }}
                onClick={() => navigate(`/${redirectTo}`, { replace: true })}
              >
                <BsPlayFill />
              </Restart>
            </Flex>
          </ModalUI>
        </Wrapper>
      )}
      {children}
    </>
  );
};

import React, { useState, useEffect } from "react";
import { Wrapper, Grid } from "./styles";
import { useRecord } from "../../../hooks/useRecord";
import { useParams } from "react-router-dom";

export const Recognition = () => {
  const {
    increaseErrors,
    setTaskDone,
    setTask,
    setSeconds: setReduxSeconds,
  } = useRecord();

  const { game, type } = useParams();
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setTask({
      game: "Jogo de Reconhecimento",
      type,
    });
  }, [setTask, type]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // if (isConcluded) clearInterval(interval);
  }, []);

  useEffect(() => {
    // if (!isConcluded) setReduxSeconds(seconds / 2);
    setReduxSeconds(seconds / 2);
  }, [seconds, setReduxSeconds]);

  return (
    <Wrapper>
      <Grid></Grid>
    </Wrapper>
  );
};

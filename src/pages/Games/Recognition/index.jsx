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

  useEffect(() => {
    setTask({
      game: "Jogo de Reconhecimento",
      type,
    });
  }, [setTask, type]);

  return (
    <Wrapper>
      <Grid></Grid>
    </Wrapper>
  );
};

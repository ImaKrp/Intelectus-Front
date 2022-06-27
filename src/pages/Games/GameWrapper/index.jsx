import React from "react";
import { useParams } from "react-router-dom";
import { Memory } from "../Memory";
import { Recognition } from "../Recognition";

export const GameWrapper = () => {
  const { game } = useParams();
  const gamesList = {
    memoria: <Memory />,
    reconhecimento: <Recognition />,
  };
  return gamesList[game];
};

import React from "react";
import { useParams } from "react-router-dom";
import { Memory } from "../Memory";

export const GameWrapper = () => {
  const { game } = useParams();
  const gamesList = {
    memoria: <Memory />,
  };
  return gamesList[game];
};

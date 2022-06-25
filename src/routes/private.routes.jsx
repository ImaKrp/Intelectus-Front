import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LevelSelector } from "../pages/LevelSelector";
import { GameWrapper } from "../pages/Games/GameWrapper";
import { GamesLayout } from "../gamesLayout";

export const PrivateRoutes = () => {
  return (
    <GamesLayout>
      <Routes>
        <Route exact path="/" element={<LevelSelector />} />
        <Route exact path="/:game" element={<LevelSelector />} />
        <Route exact path="/:game/:type" element={<GameWrapper />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </GamesLayout>
  );
};

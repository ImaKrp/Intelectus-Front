import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LevelSelector } from "../pages/LevelSelector";
import { Memory } from "../pages/Games/Memory";
import { GamesLayout } from "../gamesLayout";

export const PrivateRoutes = () => {
  return (
    <GamesLayout>
      <Routes>
        <Route exact path="/memory" element={<LevelSelector />} />
        <Route exact path="/memory/:type" element={<Memory />} />
        <Route path="*" element={<Navigate to="/memory" replace />} />
      </Routes>
    </GamesLayout>
  );
};

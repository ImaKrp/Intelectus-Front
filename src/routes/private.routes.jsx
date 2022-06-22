import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LevelSelector } from "../pages/LevelSelector";
import { Memory } from "../pages/Games/Memory";
import { GamesLayout } from "../gamesLayout";
import { Modal } from "../Modal";

export const PrivateRoutes = () => {
  return (
    <Modal>
      <GamesLayout>
        <Routes>
          <Route exact path="/memoria" element={<LevelSelector />} />
          <Route exact path="/memoria/:type" element={<Memory />} />
          <Route path="*" element={<Navigate to="/memoria" replace />} />
        </Routes>
      </GamesLayout>
    </Modal>
  );
};

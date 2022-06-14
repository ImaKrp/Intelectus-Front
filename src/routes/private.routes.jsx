import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Memory } from "../pages/Games/Memory";
import { Layout } from "../layout";

export const PrivateRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path="/memory" element={<Memory />} />
        <Route path="*" element={<Navigate to="/memory" replace />} />
      </Routes>
    </Layout>
  );
};

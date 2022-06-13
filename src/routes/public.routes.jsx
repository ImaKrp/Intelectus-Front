import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { SignIn } from "../pages/Sign/SignIn";
import { SignUp } from "../pages/Sign/SignUp";

export const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { SignIn } from "../pages/Sign/SignIn";
import { SignUp } from "../pages/Sign/SignUp";
import { ForgotPassword } from "../pages/Sign/ForgotPassword";
import { ChangePassword } from "../pages/Sign/ChangePassword";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/signin" element={<SignIn />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/password" element={<ForgotPassword />} />
      <Route exact path="/recover/:id" element={<ChangePassword />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

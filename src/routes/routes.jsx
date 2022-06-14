import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./private.routes";
import { PublicRoutes } from "./public.routes";
import { useSession } from "../hooks/useSession";

export const Routes = () => {
  const { logged } = useSession();
  return (
    <BrowserRouter>
      {logged ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
};

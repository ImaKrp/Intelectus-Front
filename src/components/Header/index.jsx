import React from "react";
import { Wrapper, NavBack } from "./style";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Wrapper>
      {location.pathname !== "/" ? (
        <NavBack onClick={() => navigate(-1)} />
      ) : (
        <div />
      )}
    </Wrapper>
  );
};

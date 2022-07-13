import React from "react";
import { Wrapper, NavBack } from "./style";
import { useNavigate, useLocation } from "react-router-dom";
import { ImArrowLeft } from "react-icons/im";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Wrapper>
      {location.pathname !== "/" ? (
        <NavBack
          onClick={() => {
            location.pathname === "/historico" ? navigate("/") : navigate(-1);
          }}
        >
          <ImArrowLeft />
        </NavBack>
      ) : (
        <div />
      )}
    </Wrapper>
  );
};

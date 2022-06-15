import React from "react";
// import React, { useState } from "react";
import { Container } from "./styles";
import { Aside } from "../components/Aside";

export const Layout = ({ children }) => {
  return (
    <Container>
      {children}
      <Aside />
    </Container>
  );
};

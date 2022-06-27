import React, { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { Wrapper, Title, CollapsedContainer } from "./styles";

export const Collapse = ({ title, children }) => {
  const [active, setActive] = useState(false);
  return (
    <Wrapper active={active}>
      <Title active={active} onClick={() => setActive(!active)}>
        <h3>{title}</h3>
        <IoMdArrowDropup />
      </Title>
      <CollapsedContainer active={active}>{children}</CollapsedContainer>
    </Wrapper>
  );
};

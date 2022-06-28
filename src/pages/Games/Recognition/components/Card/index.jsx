import React from "react";
import { Wrapper, Image } from "./styles";

export const Card = ({ status, item, handleClick }) => {
  return (
    <Wrapper status={status} onClick={handleClick}>
      <Image
        status={status}
        src={require(`../../../../../images/${item?.img}`)}
      />
    </Wrapper>
  );
};

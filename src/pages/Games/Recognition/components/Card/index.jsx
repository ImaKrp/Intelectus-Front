import React from "react";
import { Wrapper, Image } from "./styles";

export const Card = ({ status, item, handleClick }) => {
  return (
    <Wrapper status={status} onClick={handleClick}>
      <Image
        status={status}
        src={`https://github.com/ImaKrp/JogandoAutistas/tree/main/public/images/${item?.img}`}
      />
    </Wrapper>
  );
};

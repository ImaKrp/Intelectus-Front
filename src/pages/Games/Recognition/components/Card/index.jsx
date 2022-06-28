import React from "react";
import { Wrapper, Image } from "./styles";

export const Card = ({ status, item, handleClick }) => {
  return (
    <Wrapper status={status} onClick={handleClick}>
      <Image
        status={status}
        src={`https://raw.githubusercontent.com/ImaKrp/JogandoAutistas/main/public/images//${item?.img}`}
      />
    </Wrapper>
  );
};

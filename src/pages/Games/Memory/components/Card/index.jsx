import React from "react";
import { Wrapper, Image } from "./styles";

export const Card = ({ active, item, handleClick }) => {
  return (
    <Wrapper active={active} onClick={handleClick}>
      <Image
        active={active}
        src={`https://raw.githubusercontent.com/ImaKrp/JogandoAutistas/main/public/images//${item?.img}`}
      />
      <span>{item?.name}</span>
    </Wrapper>
  );
};

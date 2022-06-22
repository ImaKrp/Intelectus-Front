import React from "react";
import { Link } from "react-router-dom";
import { Levels } from "./levels/levels";
import { Container, Selector } from "./styles";

export const LevelSelector = () => {
  return (
    <Container>
      {Levels?.map((level) => (
        <Selector key={`level-${level?.name}`}>
          <Link to={`/memory/${level?.name}`}>
            <img src={`/images/${level?.img}`} alt={`level-${level?.name}`} />
          </Link>
        </Selector>
      ))}
    </Container>
  );
};

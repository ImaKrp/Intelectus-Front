import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Levels } from "../../utils/levels/levels";
import { Container, Selector } from "./styles";
import { useRecord } from "../../hooks/useRecord";

export const LevelSelector = () => {
  const { setTask } = useRecord();

  useEffect(() => {
    setTask();
  }, [setTask]);

  return (
    <Container>
      {Levels?.map((level) => (
        <Selector key={`level-${level?.name}`}>
          <Link to={`/memory/${level?.link}`}>
            <div className="hover">{level?.name}</div>
            <img src={`/images/${level?.img}`} alt={`level-${level?.name}`} />
          </Link>
        </Selector>
      ))}
    </Container>
  );
};

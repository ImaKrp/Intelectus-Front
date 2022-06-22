import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Levels } from "../../utils/levels/levels";
import { Container, Selector, User } from "./styles";
import { useRecord } from "../../hooks/useRecord";
import { useSession } from "../../hooks/useSession";

export const LevelSelector = () => {
  const { setTask } = useRecord();
  const { signOut } = useSession();

  useEffect(() => {
    setTask();
  }, [setTask]);

  return (
    <Container>
      <User>
        <div>
          <button type="button" onClick={signOut}>
            Sair
          </button>
        </div>
      </User>
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

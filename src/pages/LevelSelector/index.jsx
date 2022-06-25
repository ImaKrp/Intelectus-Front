import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Levels, Games } from "../../utils/levels/levels";
import { useParams } from "react-router-dom";
import { Container, Selector, User } from "./styles";
import { useRecord } from "../../hooks/useRecord";
import { useSession } from "../../hooks/useSession";

export const LevelSelector = () => {
  const { setTask } = useRecord();
  const { signOut } = useSession();
  const { game } = useParams();

  useEffect(() => {
    setTask();
  }, [setTask]);

  const toMap = game ? Levels(game) : Games;

  return (
    <Container>
      <User>
        <div>
          <button type="button" onClick={signOut}>
            Sair
          </button>
        </div>
      </User>
      {toMap?.map((level) => (
        <Selector key={`level-${level?.name}`}>
          <Link to={`/${level?.link}`}>
            <div className="hover">{level?.name}</div>
            <img src={`/images/${level?.img}`} alt={`level-${level?.name}`} />
          </Link>
        </Selector>
      ))}
    </Container>
  );
};

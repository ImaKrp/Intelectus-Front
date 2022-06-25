import React, { useState, useEffect } from "react";
import { Wrapper, Grid } from "./styles";
import { Card } from "./components/Card";
import { gamesThemes } from "../../../utils/themes/themes";
import { useRecord } from "../../../hooks/useRecord";
import { useParams } from "react-router-dom";
export const Memory = () => {
  const {
    increaseErrors,
    setTaskDone,
    setTask,
    setSeconds: setReduxSeconds,
  } = useRecord();

  const { game, type } = useParams();

  useEffect(() => {
    setTask({
      game: "Jogo da Memória",
      type,
    });
  }, [setTask, type]);

  const themeItems = gamesThemes[game][type];
  const [seconds, setSeconds] = useState(0);
  const [prev, setPrev] = useState();
  const [canClick, setCanClick] = useState(true);
  const [items, setItems] = useState([
    undefined,
    ...[...themeItems, ...themeItems]
      .map((themeItem) => {
        return { ...themeItem, active: false };
      })
      .sort(() => Math.random() - 0.5),
  ]);

  const isConcluded = !items.find((item, i) =>
    i === 0 ? false : !item?.active
  );

  useEffect(() => {
    if (isConcluded) setTaskDone();
  }, [isConcluded, setTaskDone]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    if (isConcluded) clearInterval(interval);
  }, [isConcluded]);

  useEffect(() => {
    if (!isConcluded) setReduxSeconds(seconds / 2);
  }, [seconds, setReduxSeconds, isConcluded]);

  const check = (current) => {
    if (current !== prev && items[current].img === items[prev].img) {
      items[current].active = true;
      items[prev].active = true;
      setItems([...items]);
      setPrev();
    } else {
      items[current].active = true;
      items[prev].active = true;
      setCanClick((prevValue) => !prevValue);
      setItems([...items]);
      increaseErrors();
      setPrev();
      setTimeout(() => {
        setCanClick((prevValue) => !prevValue);
        items[current].active = false;
        items[prev].active = false;
        setItems([...items]);
      }, 600);
    }
  };

  const handleClick = (id) => {
    if (!canClick) return;
    if (!prev) {
      items[id].active = true;
      setItems([...items]);
      setPrev(id);
    }
    if (prev && prev !== id) {
      check(id);
    }
  };

  return (
    <Wrapper>
      <Grid cardsLenght={items?.length - 1}>
        {items.map(
          (item, index) =>
            index > 0 && (
              <Card
                key={index}
                item={item}
                handleClick={() => handleClick(index)}
                active={items[index]?.active}
              />
            )
        )}
      </Grid>
    </Wrapper>
  );
};

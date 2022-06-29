import React, { useState, useEffect } from "react";
import { Wrapper, Grid } from "./styles";
import { useRecord } from "../../../hooks/useRecord";
import { useParams } from "react-router-dom";
import { gamesThemes } from "../../../utils/themes/themes";
import { Card } from "./components/Card";

export const Recognition = () => {
  const {
    increaseErrors,
    setTaskDone,
    setTask,
    setSeconds: setReduxSeconds,
  } = useRecord();

  const { game, type } = useParams();

  const [item, setItem] = useState();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!item) {
      const themeItems = [...gamesThemes[game][type].values];
      const actualItem = themeItems.sort(() => Math.random() - 0.5)[0];
      setItem(actualItem);
      const actualItems = [
        ...themeItems
          .filter((item) => item.name !== actualItem.name)
          .sort(() => Math.random() - 0.5)
          .slice(0, 2)
          .map((item) => {
            return { ...item, status: "" };
          }),
        { ...actualItem, status: "" },
      ].sort(() => Math.random() - 0.5);
      setItems(actualItems);
    }
  }, [item, game, type]);

  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setTask({
      name: "Jogo de Reconhecimento",
      type,
      game,
    });
  }, [setTask, type, game]);

  const isConcluded = !!items.find((item) => item?.status === "right") ?? false;

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    if (isConcluded) clearInterval(interval);
  }, [isConcluded]);

  useEffect(() => {
    if (!isConcluded) setReduxSeconds(seconds / 2);
    setReduxSeconds(seconds / 2);
  }, [seconds, setReduxSeconds, isConcluded]);

  useEffect(() => {
    if (isConcluded) setTaskDone();
  }, [isConcluded, setTaskDone]);

  const handleClick = (index) => {
    if (items[index].status) return;
    if (items[index].name === item.name) items[index].status = "right";
    else {
      items[index].status = "wrong";
      increaseErrors();
    }
    setItems([...items]);
  };

  return (
    <Wrapper>
      <h3>Selecione: {item?.name}</h3>
      <Grid>
        {items.map((item, index) => (
          <Card
            key={index}
            item={item}
            handleClick={() => handleClick(index)}
            status={items[index]?.status}
          />
        ))}
      </Grid>
    </Wrapper>
  );
};

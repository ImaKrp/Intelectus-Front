import React, { useState, useEffect } from "react";
import { Wrapper, Grid } from "./styles";
import { Card } from "./components/Card";
import { animals as themeItems } from "./themes/themes";
import { useRecord } from "../../../hooks/useRecord";

export const Memory = () => {
  const { increaseErrors, setTaskDone, setTask } = useRecord();

  useEffect(() => {
    setTask({
      game: "Jogo da Memória",
      type: "animais",
    });
  }, [setTask]);

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

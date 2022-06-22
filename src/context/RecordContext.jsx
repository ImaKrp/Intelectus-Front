import React, { useState, useEffect, createContext } from "react";
// import { api } from "../api/api";

const initialState = [];
export const RecordContext = createContext(initialState);

export const RecordProvider = ({ children }) => {
  const [done, setDone] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [errors, setErrors] = useState(0);
  const [task, setTask] = useState();
  const [time, setTime] = useState("00:00");
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!done) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.ceil(seconds % 60);

      const value = `${minutes >= 10 ? minutes : `0${minutes}`}:${
        remainingSeconds >= 10 ? remainingSeconds : `0${remainingSeconds}`
      }`;

      setTime(value);
      setDuration(seconds);
    }
  }, [seconds, done]);

  useEffect(() => {
    if (task && !done) {
      setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  }, [task, done]);

  const setTaskDone = () => {
    setDone(true);
  };

  const increaseErrors = () => {
    setErrors((prev) => prev + 1);
  };

  const clearTaskDone = () => {
    setTask();
  };

  return (
    <RecordContext.Provider
      value={{
        setTaskDone,
        done,
        seconds,
        errors,
        increaseErrors,
        setTask,
        time,
        task,
        clearTaskDone,
        duration,
      }}
    >
      {children}
    </RecordContext.Provider>
  );
};

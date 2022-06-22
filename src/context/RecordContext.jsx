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
    if (!task) {
      setErrors(0);
      setTime("00:00");
      setDuration(0);
	  setDone();
    }
  }, [task]);

  const setTaskDone = () => {
    setDone(true);
  };

  const increaseErrors = () => {
    setErrors((prev) => prev + 1);
  };
  return (
    <RecordContext.Provider
      value={{
        setTaskDone,
        done,
        errors,
        increaseErrors,
        setTask,
        time,
        task,
        duration,
        setSeconds,
      }}
    >
      {children}
    </RecordContext.Provider>
  );
};

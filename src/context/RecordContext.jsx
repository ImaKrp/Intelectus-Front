import React, { useState, useEffect, createContext, useCallback } from "react";
import { api } from "../api/api";

const initialState = [];
export const RecordContext = createContext(initialState);

export const RecordProvider = ({ children }) => {
  const [done, setDone] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [errors, setErrors] = useState(0);
  const [task, setTask] = useState();
  const [time, setTime] = useState("00:00");
  const [duration, setDuration] = useState(0);
  const [submited, setSubmited] = useState(false);
  const [taskValue, setTaskValue] = useState(0);
  const [history, setHistory] = useState([]);

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
      setSubmited(false);
      setTaskValue(0);
    }
  }, [task]);

  const submitTaskData = useCallback(async () => {
    setSubmited(true);
    const { game, type } = task;
    const { data } = await api.post("/game/result", {
      game,
      type,
      time: duration,
      error: errors,
    });
    setTaskValue(data.value);
  }, [duration, errors, task]);

  const setTaskDone = async () => {
    setDone(true);
    if (!submited) await submitTaskData();
  };

  const increaseErrors = () => {
    setErrors((prev) => prev + 1);
  };

  const fetchHistory = useCallback(async () => {
    const { data } = await api.get("/game/results");
    setHistory(data);
  }, []);

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
        taskValue,
        fetchHistory,
        history,
      }}
    >
      {children}
    </RecordContext.Provider>
  );
};

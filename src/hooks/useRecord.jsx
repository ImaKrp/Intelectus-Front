import { useContext } from "react";
import { RecordContext } from "../context/RecordContext";

export function useRecord() {
  const context = useContext(RecordContext);

  return context;
}

import { useActor, useMachine } from "@xstate/react";
import { useContext } from "react";
import { ConfidenceContext } from "./confidence";

export const PositiveButton = () => {
  const globalState = useContext(ConfidenceContext)
  const [state, send] = useActor(globalState?.confidenceService);

  return (
    <button onClick={() => send("POSITIVE_WORD")}>Negative Word</button>
  ) 
}
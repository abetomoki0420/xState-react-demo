import { useActor, useMachine } from "@xstate/react";
import { useContext } from "react";
import { ConfidenceContext } from "./confidence";

export const NegativeButton = () => {
  const globalState = useContext(ConfidenceContext)
  const [state, send] = useActor(globalState?.confidenceService);

  return (
    <button onClick={() => send("NEGATIVE_WORD")}>Negative Word</button>
  ) 
}
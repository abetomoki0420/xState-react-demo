import { useActor } from "@xstate/react";
import { ConfidenceContext } from "./confidence";
import { useContext } from "react";

export const ConfidenceStatus = () => {
  const globalState = useContext(ConfidenceContext)
  const [state, send] = useActor(globalState?.confidenceService);
  const isConfident = state.matches("confidence");

  return (
    <h2>{isConfident ? "Have Confidence" : "No Confidence"}</h2>
  )
}
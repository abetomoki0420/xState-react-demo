import { createMachine, Interpreter, EventObject, Typestate, TypegenDisabled, BaseActionObject, ResolveTypegenMeta, ServiceMap } from "xstate";
import { useInterpret } from "@xstate/react";
import { createContext, ReactNode } from "react";

type ConfidenceEvent =
  | { type: "NEGATIVE_WORD" }
  | { type: "POSITIVE_WORD" };

interface ConfidenceContext {
  confidence: string;
}

type ConfidenceState =
  | {
      value: "confidence";
      context: ConfidenceContext;
    }
  | {
      value: "noConfidence";
      context: ConfidenceContext;
    };

const confidenceMachine = createMachine<ConfidenceContext, ConfidenceEvent, ConfidenceState>({
  id: "confidence",
  initial: "confidence",
  context: {
    confidence: '',
  },
  states: {
    confidence: {
      on: {
        NEGATIVE_WORD: "noConfidence",
      },
    },
    noConfidence: {
      on: {
        POSITIVE_WORD: "confidence",
      },
    },
  },
});

interface ConfidenceContextType {
  confidenceService: Interpreter<ConfidenceContext, any, ConfidenceEvent, ConfidenceState, ResolveTypegenMeta<TypegenDisabled, ConfidenceEvent, BaseActionObject, ServiceMap>>;
}

const defaultConfidenceContextValue: ConfidenceContextType = {
  confidenceService: (null as any) as Interpreter<ConfidenceContext, any, ConfidenceEvent, ConfidenceState, ResolveTypegenMeta<TypegenDisabled, ConfidenceEvent, BaseActionObject, ServiceMap>>,
};

export const ConfidenceContext = createContext(defaultConfidenceContextValue);

export const ConfidenceProvider = ({ children }: { children: ReactNode }) => {
  const confidenceService = useInterpret(confidenceMachine);

  return (
    <ConfidenceContext.Provider value={{ confidenceService }}>
      {children}
    </ConfidenceContext.Provider>
  );
};

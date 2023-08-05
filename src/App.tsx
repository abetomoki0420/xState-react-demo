import { PositiveButton } from "./stateMachine/PosiveButton";
import { NegativeButton } from "./stateMachine/NegativeButton";
import { ConfidenceStatus } from "./stateMachine/ConfidenceStatus";
import { ConfidenceProvider } from "./stateMachine/confidence";

function App() {
  return (
    <div>
      <h1>Confidence State Machine</h1>
      <ConfidenceProvider>
        <div>
          <ConfidenceStatus/>
          <PositiveButton />
          <NegativeButton />
        </div>
      </ConfidenceProvider>
    </div>
  );
}

export default App;
// Issue: - When the component made change, the state reset to default value
import { useState } from "react";

export const ClickCounter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)} className="bg-red-400 px-6 py-3">Count {count}</button>
    </div>
  );
};
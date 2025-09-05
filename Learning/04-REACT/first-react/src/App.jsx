import { useState } from "react";
import "./App.css";
import { Greet } from "./Greet";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Greet />
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./page/login/Index";
import Routers from "./route/Routers";

function App() {
  const [count, setCount] = useState(0);

  return <Routers />;
}

export default App;

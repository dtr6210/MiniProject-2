import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./pages/Homepage";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <NavBar />
      <AppRoutes />
    </>
  );
}

export default App;

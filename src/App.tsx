import PokeDex from "./comp/pokeDex";
import "./App.css";
import { Router, RouterProvider } from "react-router-dom";
import { router } from "./comp/store/router/router";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

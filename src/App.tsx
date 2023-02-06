import PokeDex from "./comp/pokeDex";
import "./App.css";
import { Router, RouterProvider } from "react-router-dom";
import { router } from "./comp/store/router/router";
import { Provider } from "jotai";

function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import PokeDex from "../../pokeDex";
import PoekDetail from "../../pokeBoard/pekeDetail/pekeDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PokeDex />,
  },
  {
    path: "/:itemName",
    element: <PoekDetail />,
  },
]);

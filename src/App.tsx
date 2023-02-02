import PokeDex from "./comp/pokeDex";
import "./App.css";
import { Router, RouterProvider } from "react-router-dom";
import { router } from "./comp/store/router/router";
import { Provider } from "react-redux";
import { store } from "./comp/store/redux/index";
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

import { configureStore } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
import { useDispatch } from "react-redux";
import { imageTypeReducer } from "./pokeSlice";

export const store = configureStore({
  reducer: {
    imageType: imageTypeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useAppDispatch<AppDispatch>();

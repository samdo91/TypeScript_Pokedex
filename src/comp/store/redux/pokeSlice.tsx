import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { POKE_IMAGE_TYPE } from "../pokeType";

export type pokeImageKeyType =
  typeof POKE_IMAGE_TYPE[keyof typeof POKE_IMAGE_TYPE];

export interface IimageTypeState {
  type: pokeImageKeyType;
}

const initialState: IimageTypeState = {
  type: POKE_IMAGE_TYPE.OFFCIAL_ARTWORK,
};

export const PokeImeTypeSlice = createSlice({
  name: "imageType",
  initialState,
  reducers: {
    changeImageType: (state, action) => {
      state.type = action.payload.type;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeImageType } = PokeImeTypeSlice.actions;

export const imageTypeReducer = PokeImeTypeSlice.reducer;

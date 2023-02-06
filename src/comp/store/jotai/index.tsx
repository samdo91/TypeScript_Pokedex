import { atom } from "jotai";

export const POKE_IMAGE_TYPE = {
  OFFCIAL_ARTWORK: "official_artwork",
  DREAM_WORLD: "dream_world",
  FRONT_DEFAULT: "front_default",
};

export type pokeImageKeyType =
  typeof POKE_IMAGE_TYPE[keyof typeof POKE_IMAGE_TYPE];

export interface IimageTypeState {
  type: pokeImageKeyType;
}

export const pokeImageType = atom<IimageTypeState>({
  type: POKE_IMAGE_TYPE.OFFCIAL_ARTWORK,
});

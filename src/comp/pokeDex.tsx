import React from "react";
import PokeHeader from "./pokeHeader/pokeHeader";
import PokeBoard from "./pokeBoard/pokeBoard";
import styled from "@emotion/styled";

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

function PokeDex() {
  return (
    <div>
      <PokeHeader />
      <PokeBoard />
    </div>
  );
}

export default PokeDex;

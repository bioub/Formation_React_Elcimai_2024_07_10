import { configureStore } from "@reduxjs/toolkit";
import { compareReducer, CompareSlice } from "./compareSlice";
import { pokemonReducer, PokemonSlice } from "./pokemonsSlice"

// J'ai créé 2 slices pour la démo
// dans la vraie vie j'aurai tout mis dans pokemonsSlicex
export type AppState = {
  pokemons: PokemonSlice;
  compare: CompareSlice;
}

export const store = configureStore<AppState>({
  reducer: {
    pokemons: pokemonReducer,
    compare: compareReducer,
  }
});
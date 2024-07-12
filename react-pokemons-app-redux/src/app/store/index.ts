import { configureStore } from "@reduxjs/toolkit";
import { CompareSlice } from "./compareSlice";
import { pokemonReducer, PokemonSlice } from "./pokemonsSlice"


export type AppState = {
  pokemons: PokemonSlice;
  compare?: CompareSlice;
}

export const store = configureStore<AppState>({
  reducer: {
    pokemons: pokemonReducer,
  }
});
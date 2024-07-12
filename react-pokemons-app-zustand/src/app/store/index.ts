import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { Pokemon } from "../models/pokemon";

export type PokemonState = {
  pokemons: Pokemon[];
  loading: boolean;
  pokemonsIdsToCompare: number[];
  requestPokemons: () => void,
  requestPokemonsSuccess: (pokemons: Pokemon[]) => void,
  toggleSelectId: (id: number) => void,
};

export const usePokemonsStore = create<PokemonState>()(devtools((set) => ({
  pokemons: [],
  loading: false,
  pokemonsIdsToCompare: [],
  requestPokemons: () => set((state) => ({ loading: true })),
  requestPokemonsSuccess: (pokemons) => set({ pokemons: pokemons, loading: false }),
  toggleSelectId: (id) => set((state) => {
    if (state.pokemonsIdsToCompare.includes(id)) {
      // immuable (return obligatoire)
      return {
        // ...state, <- déjà fait par Zustand
        pokemonsIdsToCompare: state.pokemonsIdsToCompare.filter((pokemonId) => pokemonId !== id)
      };
    } else if (state.pokemonsIdsToCompare.length < 2) {
      return {
        // ...state, <- déjà fait par Zustand
        pokemonsIdsToCompare: [...state.pokemonsIdsToCompare, id],
      }
    } else {
      return {};
    }
  }),
})))
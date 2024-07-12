import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../models/pokemon';

export type PokemonSlice = {
  data: Pokemon[];
  loading: boolean;
};

const initialState: PokemonSlice = {
  data: [],
  loading: false,
};

const pokemonsSlice = createSlice({
  initialState,
  name: 'pokemons',
  reducers: {
    requestPokemons(state, action: PayloadAction<void>) {
      state.loading = true;
    },
    requestPokemonsSuccess(state, action: PayloadAction<Pokemon[]>) {
      state.loading = false;
      state.data = action.payload;
    },
  }
});

export const { requestPokemons, requestPokemonsSuccess } = pokemonsSlice.actions;
export const pokemonReducer = pokemonsSlice.reducer;
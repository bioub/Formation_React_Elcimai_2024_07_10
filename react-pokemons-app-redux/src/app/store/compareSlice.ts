import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CompareSlice = {
  pokemonsIdsToCompare: number[];
};

const initialState: CompareSlice = {
  pokemonsIdsToCompare: [],
};

const compareSlice = createSlice({
  initialState: initialState,
  name: 'compare',
  reducers: {
    toggleSelectId(state, action: PayloadAction<number>) {
      if (state.pokemonsIdsToCompare.includes(action.payload)) {
        // muable
        const indexToDelete = state.pokemonsIdsToCompare.indexOf(action.payload);
        state.pokemonsIdsToCompare.splice(indexToDelete, 1);

        // immuable (return obligatoire)
        // return {
        //   ...state,
        //   pokemonsIdsToCompare: state.pokemonsIdsToCompare.filter((pokemonId) => pokemonId !== action.payload)
        // };
      } else if (state.pokemonsIdsToCompare.length < 2) {
        state.pokemonsIdsToCompare.push(action.payload);
        // setPokemonsIdsToCompare([...pokemonsIdsToCompare, id]);
      }
    }
  }
})

export const { toggleSelectId } = compareSlice.actions;
export const compareReducer = compareSlice.reducer;

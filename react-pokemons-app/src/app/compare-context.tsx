import { createContext, ReactNode, useState } from 'react';

type CompareContextType = {
  pokemonsIdsToCompare: number[];
  toggleSelectId(id: number): void;
};

export const CompareContext = createContext<CompareContextType>({
  pokemonsIdsToCompare: [],
  toggleSelectId(id: number) {
    throw new Error('Missing CompareContext.Provider');
  },
});

type CompareProviderProps = {
  children: ReactNode;
};

export function CompareProvider({ children }: Readonly<CompareProviderProps>) {
  const [pokemonsIdsToCompare, setPokemonsIdsToCompare] = useState<number[]>([]);

  function toggleSelectId(id: number) { /* finir d'écrire cette fonction et appeler useContext dans PokemonCard et PokemonCompare */}

  return <CompareContext.Provider value={{pokemonsIdsToCompare, toggleSelectId}}>{children}</CompareContext.Provider>;
}

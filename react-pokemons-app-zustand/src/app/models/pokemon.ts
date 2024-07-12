export type pokemonTypes =
  | 'Feu'
  | 'Eau'
  | 'Plante'
  | 'Insecte'
  | 'Normal'
  | 'Vol'
  | 'Poison'
  | 'Fée'
  | 'Psy'
  | 'Electrik'
  | 'Combat';

export interface Pokemon {
  id?: number;
  hp?: number;
  cp?: number;
  name?: string;
  picture?: string;
  types?: pokemonTypes[];
  created?: Date;
}

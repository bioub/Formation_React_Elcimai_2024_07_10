import { pokemonTypes } from '../models/pokemon';

export function formatType(type: pokemonTypes): string {
  const colors: Record<pokemonTypes, string> = {
    Feu: 'red lighten-1',
    Eau: 'blue lighten-1',
    Plante: 'green lighten-1',
    Insecte: 'brown lighten-1',
    Normal: 'grey lighten-3',
    Vol: 'blue lighten-3',
    Poison: 'deep-purple accent-1',
    Fée: 'pink lighten-4',
    Psy: 'deep-purple darken-2',
    Electrik: 'lime accent-1',
    Combat: 'deep-orange',
  };

  return `chip ${colors[type] ?? 'grey'}`;
}

export function formatDate(date: Date = new Date()): string {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pokemon } from '../models/pokemon';
import { searchPokemon } from '../services/pokemon-service';

type Props = {
  filter: string;
  onType(val: string): void;
}

function PokemonSearch({filter, onType}: Props) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const term = event.target.value;
    onType(term);

    if (term.length <= 1) {
      setPokemons([]);
      return;
    }

    searchPokemon(term).then((pokemons) => setPokemons(pokemons));
  }

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <div className="card-content">
            <div className="input-field">
              <input
                type="text"
                placeholder="Rechercher un pokémon"
                value={filter}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="collection">
              {pokemons.map((pokemon) => (
                <Link
                  key={pokemon.id}
                  to={`/pokemons/${pokemon.id}`}
                  className="collection-item"
                >
                  {pokemon.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonSearch;

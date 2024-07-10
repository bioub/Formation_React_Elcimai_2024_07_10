import { useEffect, useState } from 'react';
import PokemonCardDetails from '../components/pokemon-card-details';
import { Pokemon } from '../models/pokemon';
import { getPokemon } from '../services/pokemon-service';

function PokemonCompare() {
  const [pokemon1, setPokemon1] = useState<Pokemon | undefined>();
  const [pokemon2, setPokemon2] = useState<Pokemon | undefined>();

  // useEffect(() => {
  //   getPokemon(Number(1)).then((pokemon) => setPokemon1(pokemon));
  // }, []);

  // useEffect(() => {
  //   getPokemon(Number(2)).then((pokemon) => setPokemon2(pokemon));
  // }, []);

  useEffect(() => {
    Promise.all([getPokemon(Number(1)), getPokemon(Number(2))]).then(
      ([pokemon1, pokemon2]) => {
        setPokemon1(pokemon1);
        setPokemon2(pokemon2);
      }
    );
    // (async () => {
    //   const [pokemon1, pokemon2] = await Promise.all([
    //     getPokemon(Number(1)),
    //     getPokemon(Number(2))
    //   ]);
    //   setPokemon1(pokemon1);
    //   setPokemon2(pokemon2);
    // })()
  }, []);

  return (
    <div className="row">
      <div className="col s6">
        <PokemonCardDetails pokemon={pokemon1} />
      </div>
      <div className="col s6">
        <PokemonCardDetails pokemon={pokemon2} />
      </div>
    </div>
  );
}

export default PokemonCompare;

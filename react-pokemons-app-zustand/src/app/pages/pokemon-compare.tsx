import { useContext, useEffect, useState } from 'react';
import PokemonCardDetails from '../components/pokemon-card-details';
import { Pokemon } from '../models/pokemon';
import { getPokemon } from '../services/pokemon-service';
import { CompareContext } from '../compare-context';
import { useNavigate } from 'react-router-dom';
import { usePokemonsStore } from '../store';

function PokemonCompare() {
  const navigate = useNavigate();
  const pokemonsIdsToCompare = usePokemonsStore((state) => state.pokemonsIdsToCompare);
  // const { pokemonsIdsToCompare } = useContext(CompareContext);

  const [pokemon1, setPokemon1] = useState<Pokemon | undefined>();
  const [pokemon2, setPokemon2] = useState<Pokemon | undefined>();

  // useEffect(() => {
  //   getPokemon(Number(1)).then((pokemon) => setPokemon1(pokemon));
  // }, []);

  // useEffect(() => {
  //   getPokemon(Number(2)).then((pokemon) => setPokemon2(pokemon));
  // }, []);

  useEffect(() => {
    Promise.all([getPokemon(pokemonsIdsToCompare[0]), getPokemon(pokemonsIdsToCompare[1])]).then(
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

  if (pokemonsIdsToCompare.length < 2) {
    navigate('/pokemons')
    return null;
  }

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

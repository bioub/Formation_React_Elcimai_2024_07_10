import { useState, useEffect, useContext, useCallback } from 'react';
import { Pokemon } from '../models/pokemon';
import PokemonCard from '../components/pokemon-card';
import { getPokemons } from '../services/pokemon-service';
import { Link, Navigate } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';
import { isAuthenticated } from '../services/authentication-service';
import List from '../components/list';
import { CompareContext } from '../compare-context';
import classNames from 'classnames';
import { usePokemonsStore } from '../store';

function useApiPokemons() {
  const loading = usePokemonsStore((state) => state.loading);
  const pokemons = usePokemonsStore((state) => state.pokemons);
  const requestPokemons = usePokemonsStore((state) => state.requestPokemons);
  const requestPokemonsSuccess = usePokemonsStore((state) => state.requestPokemonsSuccess);


  useEffect(() => {
    requestPokemons();
    getPokemons().then((pokemons) => {
      requestPokemonsSuccess(pokemons);
    });
  }, []);

  return {
    pokemons,
    loading,
  };
}

function PokemonList() {

  const [term, setTerm] = useState('');
  const pokemonsIdsToCompare = usePokemonsStore((state) => state.pokemonsIdsToCompare);
  const { pokemons } = useApiPokemons();

  // const renderItemMemo = useMemo(() => (pokemon: Pokemon) => (
  //   <PokemonCard key={pokemon.id} pokemon={pokemon} />
  // ), []);

  // en raccourci
  const renderItemMemo = useCallback((pokemon: Pokemon) => (
    <PokemonCard key={pokemon.id} pokemon={pokemon} />
  ), []);

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login/' }} />;
  }

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          <PokemonSearch filter={term} onType={setTerm} />
          <List
            items={pokemons}
            renderItem={renderItemMemo}
          ></List>
          {/* {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))} */}
        </div>
      </div>
      <Link
        className={classNames(
          'btn-floating btn-large waves-effect waves-light blue z-depth-3',
          { disabled: pokemonsIdsToCompare.length !== 2 }
        )}
        style={{ position: 'fixed', bottom: '25px', right: '100px' }}
        to="/pokemon/compare"
      >
        <i className="material-icons">compare</i>
      </Link>
      <Link
        className="btn-floating btn-large waves-effect waves-light red z-depth-3"
        style={{ position: 'fixed', bottom: '25px', right: '25px' }}
        to="/pokemon/add"
      >
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
}

export default PokemonList;

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
import { useDispatch, useSelector } from 'react-redux';
import {
  requestPokemons,
  requestPokemonsSuccess,
} from '../store/pokemonsSlice';
import { AppState } from '../store';

function useApiPokemons() {
  // const [loading, setLoading] = useState(false);
  // const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const dispatch = useDispatch();
  const pokemons = useSelector(
    (state: AppState) => state.pokemons.data
  );
  const loading = useSelector(
    (state: AppState) => state.pokemons.loading
  );

  useEffect(() => {
    // setLoading(true);
    dispatch(requestPokemons());
    getPokemons().then((pokemons) => {
      dispatch(requestPokemonsSuccess(pokemons));
      // setPokemons(pokemons);
      // setLoading(false);
    });
  }, []);

  return {
    pokemons,
    loading,
  };
}

function PokemonList() {
  const [term, setTerm] = useState('');
  const pokemonsIdsToCompare = useSelector((state: AppState) => state.compare.pokemonsIdsToCompare);
  // const { pokemonsIdsToCompare } = useContext(CompareContext);
  const { pokemons, loading } = useApiPokemons();

  // const renderItemMemo = useMemo(() => (pokemon: Pokemon) => (
  //   <PokemonCard key={pokemon.id} pokemon={pokemon} />
  // ), []);

  // en raccourci
  const renderItemMemo = useCallback(
    (pokemon: Pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />,
    []
  );

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login/' }} />;
  }

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          <PokemonSearch filter={term} onType={setTerm} />
          {loading ? (
            <p>Loading...</p>
          ) : (
            <List items={pokemons} renderItem={renderItemMemo}></List>
          )}
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

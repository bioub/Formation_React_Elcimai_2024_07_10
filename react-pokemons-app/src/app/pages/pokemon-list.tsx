import { useState, useEffect } from 'react';
import { Pokemon } from '../models/pokemon';
import PokemonCard from '../components/pokemon-card';
import { getPokemons } from '../services/pokemon-service';
import { Link, Navigate } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';
import { isAuthenticated } from '../services/authentication-service';
import List from '../components/list';

function useApiPokemons() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    setLoading(true);
    getPokemons().then((pokemons) => {
      setPokemons(pokemons)
      setLoading(false);
    });
  }, []);

  return {
    pokemons,
    loading
  }
}

function PokemonList() {
  const { pokemons, loading } = useApiPokemons();

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />;
  }

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          <PokemonSearch />
          <List items={pokemons} renderItem={(pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />}></List>
          {/* {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))} */}
        </div>
      </div>
      <Link
        className="btn-floating btn-large waves-effect waves-light blue z-depth-3"
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

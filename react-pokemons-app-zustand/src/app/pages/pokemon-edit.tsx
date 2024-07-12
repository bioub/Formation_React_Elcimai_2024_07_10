import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import PokemonForm from '../components/pokemon-form';
import { Pokemon } from '../models/pokemon';
import Loader from '../components/loader';
import { isAuthenticated } from '../services/authentication-service';
import { getPokemon } from '../services/pokemon-service';

function PokemonEdit() {
  const params = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();

  useEffect(() => {
    getPokemon(Number(params.id)).then((pokemon) => setPokemon(pokemon));
  }, [params.id]);

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />;
  }

  return (
    <div>
      {pokemon ? (
        <div className="row">
          <h2 className="header center">Éditer {pokemon.name}</h2>
          <PokemonForm pokemon={pokemon} isEditForm={true}></PokemonForm>
        </div>
      ) : (
        <h4 className="center">
          <Loader />
        </h4>
      )}
    </div>
  );
}

export default PokemonEdit;

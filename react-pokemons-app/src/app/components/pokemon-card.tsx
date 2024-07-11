import { useNavigate } from 'react-router-dom';
import { Pokemon } from '../models/pokemon';
import './pokemon-card.css';
import { formatDate, formatType } from '../helpers';
import { MouseEvent, useContext } from 'react';
import { CompareContext } from '../compare-context';
import classNames from 'classnames';

type Props = {
  pokemon: Pokemon;
  borderColor?: string;
};

function PokemonCard({ pokemon }: Props) {
  const { pokemonsIdsToCompare, toggleSelectId } = useContext(CompareContext);
  const navigate = useNavigate();

  function goToPokemon(id: number) {
    navigate(`/pokemons/${id}`);
  }

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    goToPokemon(pokemon.id ?? 0)
  }

  return (
    <div className={classNames("col s6 m4", {'blue': pokemonsIdsToCompare.includes(pokemon.id!)})} onClick={() => { toggleSelectId(pokemon.id!) }}>
      <div className="card horizontal">
        <div className="card-image">
          <img src={pokemon.picture} alt={pokemon.name} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p>
              <small>{formatDate(pokemon.created)}</small>
            </p>
            {pokemon.types?.map((type) => (
              <span key={type} className={formatType(type)}>
                {type}
              </span>
            ))}
            <button onClick={handleClick}>Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;

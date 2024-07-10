import { useNavigate } from 'react-router-dom';
import { Pokemon } from '../models/pokemon';
import './pokemon-card.css';
import { formatDate, formatType } from '../helpers';

type Props = {
  pokemon: Pokemon;
  borderColor?: string;
};

function PokemonCard({ pokemon }: Props) {
  const navigate = useNavigate();

  function goToPokemon(id: number) {
    navigate(`/pokemons/${id}`);
  }

  return (
    <div className="col s6 m4" onClick={() => goToPokemon(pokemon.id ?? 0)}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;

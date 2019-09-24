import React, { useContext, memo } from 'react';
import styled from 'styled-components';
import { PokemonContext } from '../../../context';
import { PokemonCard } from '../';

//todo: move into a ui/elements folder
const PokemonGrid = styled.div`
  width: 100%;
  max-width: 95vw;
  height: 100%;
  margin: 20px auto;
  border: 3px solid red;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
`;

//todo: this should be a connected container, and all data should be passed into a reusable memoized List instead
function PokemonList({ history }) {
  const [state, dispatch] = useContext(PokemonContext);
  const { pokemon, savedPokemon, showSaved } = state;

  const toggleView = (pokemon, id) => e => {
    e.preventDefault();

    history.push({
      pathname: `/detailed/${pokemon.name}`,
      state: { selected: pokemon, id }
    });

    dispatch({
      type: 'SELECT_POKEMON',
      payload: { pokemon, id }
    });
  };

  const renderList = pokemon => {
    if (!pokemon.length) return null;

    return pokemon.map((pokemon, id) => (
      <PokemonCard
        key={`${pokemon.name}__${id}`}
        spriteId={id + 1}
        pokemon={pokemon}
        onClick={toggleView(pokemon, id)}
      />
    ));
  };
  return (
    <PokemonGrid>{renderList(showSaved ? savedPokemon : pokemon)}</PokemonGrid>
  );
}

export default PokemonList;

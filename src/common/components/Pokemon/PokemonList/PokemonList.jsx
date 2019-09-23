import React, { useContext, memo } from 'react';
import styled from 'styled-components';
import { PokemonContext } from '../../../context';
import { PokemonCard } from '../';

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

function PokemonList({ history }) {
  const [state] = useContext(PokemonContext);
  const { pokemon } = state;

  //
  const toggleView = ({ url }) => e => {
    e.preventDefault();

    history.push({
      pathname: `/detailed/${pokemon.name}`,
      state: { url }
    });
  };

  return (
    <PokemonGrid>
      {pokemon.length &&
        pokemon.map((pokemon, id) => (
          <PokemonCard
            key={`${pokemon.name}__${id}`}
            spriteId={id + 1}
            pokemon={pokemon}
            onClick={toggleView(pokemon)}
          />
        ))}
    </PokemonGrid>
  );
}

export default memo(PokemonList);

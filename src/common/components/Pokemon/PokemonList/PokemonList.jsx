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

function PokemonList(props) {
  const [state] = useContext(PokemonContext);
  const { pokemon } = state;

  const pokemonList = Object.values(pokemon);

  return (
    <PokemonGrid>
      {pokemonList.length &&
        pokemonList.map((pokemon, key) => (
          <PokemonCard key={key} pokemon={pokemon} />
        ))}
    </PokemonGrid>
  );
}

export default memo(PokemonList);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

function PokemonList({ data, onClickItem }) {
  if (!data.length) return null;

  return (
    <PokemonGrid>
      {data.map((pokemon, id) => (
        <PokemonCard
          key={`${pokemon.name}__${id}`}
          spriteId={id + 1}
          name={pokemon.name}
          onClick={onClickItem(pokemon, id)}
        />
      ))}
    </PokemonGrid>
  );
}

PokemonList.propTypes = {
  data: PropTypes.array.isRequired,
  onClickItem: PropTypes.func.isRequired
};

export default memo(PokemonList);

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PokemonCard } from '../';

const PokemonGrid = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 40px;
  min-height: 500px;
  margin-bottom: 60px;
`;

function PokemonList({ data, onClickItem }) {
  if (!data.length) return <PokemonGrid />;

  return (
    <PokemonGrid>
      {data.map((pokemon, id) => (
        <PokemonCard
          key={`${pokemon.name}__${id}`}
          spriteId={pokemon.spriteId}
          name={pokemon.name}
          onClick={onClickItem(pokemon, id)}
        />
      ))}
    </PokemonGrid>
  );
}

PokemonList.propTypes = {
  data: PropTypes.array,
  onClickItem: PropTypes.func
};
PokemonList.defaultProps = {
  data: []
};

export default memo(PokemonList);

import React, { useState, useContext, memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PokemonContext } from '../../../context';
import { PokemonCard } from '../';

const PokemonGrid = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid red;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 8px;
`;

//todo: this should ujse Pokemon Provider and consumer
//todo: How should I save the pokemon?

//todo: this should render w.e is passed in, trust props

//todo; build a container in styled components that renders Pokemon components
function PokemonList(props) {
  const { pokemon } = useContext(PokemonContext);

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

PokemonList.propTypes = {
  pokemon: PropTypes.object //todo: update shape
};
PokemonList.defaultProps = {
  pokemon: {}
};

export default memo(PokemonList);

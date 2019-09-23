import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  height: 100%;
  width: 100%;
  min-height: 200px;
  border: 2px solid orange;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

//todo: this should be wrapped in a ReactRouter Link and go to detailed page
function PokemonCard({ pokemon }) {
  return <Card>{JSON.stringify(pokemon.name)}</Card>;
}

//todo: update pokemon shape
PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired
};
PokemonCard.defaultProps = {};

export default PokemonCard;

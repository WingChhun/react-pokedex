import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.div`
  height: 100%;
  width: 100%;
  border: 2px solid orange;
`;

function PokemonCard({ pokemon }) {
  return <Card>{JSON.stringify(pokemon)}</Card>;
}

//todo: update pokemon shape
PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired
};
PokemonCard.defaultProps = {};

export default PokemonCard;

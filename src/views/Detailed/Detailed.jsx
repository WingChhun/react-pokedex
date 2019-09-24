import React, { Component, useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PokemonContext } from '../../common/context';
import { PokemonCard } from '../../common/components';

//todo: How to hook in google map?
const Detailed = props => {
  const [state, dispatch] = useContext(PokemonContext);
  const [detailed, setDetailed] = useState({});
  const { pokemon, id } = state.selected;

  
  useEffect(() => {
    async function fetchDetailed() {
      try {
        const res = await fetch(pokemon.url);
        const { height, weight, abilities, types, moves } = await res.json();

        setDetailed({
          height,
          weight,
          abilities,
          types,
          moves
        });
      } catch (err) {
        console.warn('Error fetching detailed Pokemon request');
      }
    }

    fetchDetailed();
  });

  return <div>DETAILED VIEW!</div>;
};

Detailed.propTypes = {
  location: PropTypes.object
};

Detailed.defaultProps = {
  location: {}
};

export default Detailed;

import React, { ComponentCo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import memoize from 'memoize-one';
import {
  PokemonList,
  PokemonTextField,
  PokemonToggle
} from '../../common/components';

function Main(props) {
  return (
    <div>
      <PokemonToggle />
      <PokemonTextField />
      <PokemonList />
    </div>
  );
}

export default Main;

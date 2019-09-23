import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import memoize from 'memoize-one';
import { PokemonProvider } from '../../common/context';
import { PokemonList, PokemonTextField, Toggle } from '../../common/components';

function Main(props) {
  return (
    <PokemonProvider {...props}>
      {/* <Toggle /> */}
      {/* <PokemonTextField /> */}
      <PokemonList />
    </PokemonProvider>
  );
}

export default Main;

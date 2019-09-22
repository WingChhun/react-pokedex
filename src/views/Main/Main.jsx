import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import memoize from 'memoize-one';
import { PokemonProvider } from '../../common/context';
import { PokemonList, TextField } from '../../common/components';

//todo: Hook in Toggle Component
//todo:
function Main(props) {
  return (
    <div>
      <PokemonProvider>
        <PokemonList />
      </PokemonProvider>
    </div>
  );
}

export default Main;

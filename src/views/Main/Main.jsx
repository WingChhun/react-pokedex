import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import memoize from 'memoize-one';
import _filter from 'lodash/filter';
import { PokemonContext } from '../../common/context';
import { PokemonList, TextField, Toggle } from '../../common/components';

//todo: Have this in charge of managing context and separate logic from views
const Main = ({ history }) => {
  const [state, dispatch] = useContext(PokemonContext);
  const [filtered, setFiltered] = useState([]);
  const { filterStr, pokemon, savedPokemon, showSaved } = state;

  useEffect(() => {
    const data = showSaved ? savedPokemon : pokemon;

    setFiltered(_filter(data, ({ name = '' }) => name.includes(filterStr)));
  }, [filterStr, pokemon, savedPokemon, showSaved]);

  const onClickToggle = () => dispatch({ type: 'TOGGLE_SHOW_SAVED' });

  const onClickPokemon = (pokemon, id) => e => {
    e.preventDefault();

    history.push({
      pathname: `/detailed/${pokemon.name}`,
      state: { selected: pokemon, id }
    });

    dispatch({
      type: 'SELECT_POKEMON',
      payload: { pokemon, id }
    });
  };

  const handleChange = e =>
    dispatch({ type: 'CHANGE_FILTER', payload: e.target.value });

  return (
    <div>
      <Toggle checked={showSaved} onClick={onClickToggle} />
      <TextField onChange={handleChange} value={filterStr} />
      <PokemonList data={filtered} onClickItem={onClickPokemon} />
    </div>
  );
};

export default Main;

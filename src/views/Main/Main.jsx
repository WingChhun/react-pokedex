import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import _filter from 'lodash/filter';
import {CHANGE_FILTER, SELECT_POKEMON, TOGGLE_SHOW_SAVED } from '../../common/constants';
import { PokemonContext } from '../../common/context';
import { TextField, Toggle } from '../../common/components';

const PokemonList = React.lazy(() =>
  import('../../common/components/Pokemon/PokemonList')
);

const MainContainer = styled.div`
  width: 70vw;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 16px;
`;

//note: disable prettier before formatting
function Main({ history }) {
  const [state, dispatch] = useContext(PokemonContext);
  const [filtered, setFiltered] = useState([]);
  const { filterStr, pokemon, savedPokemon, showSaved } = state;

  //Update on filter
  useEffect(() => {
    const data = showSaved ? savedPokemon : pokemon;

    setFiltered(_filter(data, ({ name = '' }) => name.includes(filterStr)));
  }, [filterStr, showSaved, savedPokemon, pokemon]);

  const onClickToggle = () => dispatch({ type: TOGGLE_SHOW_SAVED });

  const onClickPokemon = (pokemon, id) => e => {
    e.preventDefault();

    history.push({
      pathname: `/detailed/${pokemon.name}`,
      state: { selected: pokemon, id }
    });

    dispatch({
      type: SELECT_POKEMON,
      payload: { pokemon, id }
    });
  };

  const handleChange = e =>
    dispatch({ type: CHANGE_FILTER, payload: e.target.value });

  return (
    <MainContainer>
      <TopContainer>
        <Toggle checked={showSaved} onClick={onClickToggle} width={'17.5vw'} />
        <TextField
          onChange={handleChange}
          value={filterStr}
          placeholder="Search"
          width={'17.5vw'}
          marginTop
        />
      </TopContainer>

      <React.Suspense fallback={<div>Loading...</div>}>
        <PokemonList data={filtered} onClickItem={onClickPokemon} marginTop />
      </React.Suspense>
    </MainContainer>
  );
}

export default Main;

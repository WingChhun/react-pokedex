import React, { createContext, useReducer, useEffect } from 'react';
import { POKEMON } from '../constants';
import { fetchPokemon } from '../api';
import { pokemonReducer } from './reducers';
import LocalStorageMgr from '../LocalStorageMgr';

const LIMIT = 151;
const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, {
    filterStr: '',
    showSaved: false,
    pokemon: {},
    savedPokemon: [],
    selected: LocalStorageMgr.getReducer(POKEMON.SELECT) || {}
  });

  useEffect(() => {
    const cachedPokemon = LocalStorageMgr.getReducer(POKEMON.ALL) || {};

    async function getPokemon() {
      try {
        const { results: payload } = await fetchPokemon(LIMIT);

        dispatch({
          type: 'READ_POKEMON',
          payload
        });

        LocalStorageMgr.setReducer(POKEMON.ALL, payload);
      } catch (err) {
        console.warn('Error in PokemonContext fetching request', err);
      }
    }

    //Call fetchPokemon if none are cached
    Object.keys(cachedPokemon).length === 0
      ? getPokemon()
      : dispatch({ type: 'READ_POKEMON', payload: cachedPokemon });
  }, []);

  return (
    <PokemonContext.Provider value={[state, dispatch]}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonProvider, PokemonContext };

import React, { createContext, useReducer, useEffect } from 'react';
import { POKEMON } from '../constants';
import { fetchPokemon } from '../api';
import { pokemonReducer } from './reducers';
import LocalStorageMgr from '../LocalStorageMgr';
import _map from 'lodash/map';

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
        const { results } = await fetchPokemon(LIMIT);
        //Note: preserve the spriteId to be used for filtering images
        const mappedByIndex = results.map((pokemon, spriteId) => ({
          ...pokemon,
          spriteId: spriteId + 1
        }));

        dispatch({
          type: 'READ_POKEMON',
          payload: mappedByIndex
        });

        LocalStorageMgr.setReducer(POKEMON.ALL, mappedByIndex);
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

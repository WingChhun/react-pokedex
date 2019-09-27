import React, { createContext, useReducer, useEffect } from 'react';
import { SELECT_POKEMON, READ_POKEMON } from '../constants';
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
    selected: LocalStorageMgr.getReducer(SELECT_POKEMON) || {}
  });

  useEffect(() => {
    const cachedPokemon = LocalStorageMgr.getReducer(READ_POKEMON) || {};

    async function getPokemon() {
      try {
        const { results } = await fetchPokemon(LIMIT);
        const mappedByIndex = results.map((pokemon, spriteId) => ({
          ...pokemon,
          spriteId: spriteId + 1
        }));

        dispatch({
          type:READ_POKEMON,
          payload: mappedByIndex
        });

        LocalStorageMgr.setReducer(READ_POKEMON, mappedByIndex);
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

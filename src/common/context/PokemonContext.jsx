import React, { createContext, useReducer, useEffect } from 'react';
import { POKEMON, API } from '../constants';
import { pokemonReducer } from './reducers';
import LocalStorageMgr from '../LocalStorageMgr';

const LIMIT = 151;
const PokemonContext = createContext();

const PokemonProvider = ({ children, history, ...rest }) => {
  const [state, dispatch] = useReducer(pokemonReducer, {
    filterStr: '',
    showSaved: false,
    pokemon: {},
    savedPokemon: [],
    selected: LocalStorageMgr.getReducer(POKEMON.SELECT) || {}
  });

  useEffect(() => {
    const cachedPokemon = LocalStorageMgr.getReducer(POKEMON.ALL) || {};

    async function fetchPokemon() {
      try {
        const res = await fetch(`${API.BASE}/pokemon?limit=${LIMIT}`);
        const { results: payload } = await res.json();

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
      ? fetchPokemon()
      : dispatch({ type: 'READ_POKEMON', payload: cachedPokemon });
  }, []);

  return (
    <PokemonContext.Provider value={[state, dispatch]}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonProvider, PokemonContext };

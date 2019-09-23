import React, { createContext, useReducer, useEffect } from 'react';
import _keyBy from 'lodash/keyBy';
import { POKEMON, API } from '../constants';
import LocalStorageMgr from '../LocalStorageMgr';

const LIMIT = 151;
const PokemonContext = createContext();

const initialState = {
  filterStr: '',
  showSaved: false,
  pokemon: {}
};

//todo: Make constants for this reducer
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_FILTER':
      return {
        filterStr: payload
      };

    case 'READ_POKEMON':
      return {
        pokemon: payload
      };

    case 'TOGGLE_SHOW_SAVED':
      return { showSaved: payload };

    default:
      throw new Error('Action type must be defined');
  }
};

const PokemonProvider = ({ children, ...rest }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //componentDidMount
  useEffect(() => {
    const cachedPokemon = LocalStorageMgr.getReducer(POKEMON.ALL) || {};

    async function fetchPokemon() {
      try {
        const res = await fetch(`${API.BASE}/pokemon?limit=${LIMIT}`);
        const { results = [] } = await res.json();
        const payload = _keyBy(results, 'name');

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
    <PokemonContext.Provider value={[state, dispatch]} {...rest}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonProvider, PokemonContext };

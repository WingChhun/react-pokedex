import { LocalStorageMgr } from '../../LocalStorageMgr';
import {
  CHANGE_FILTER,
  READ_POKEMON,
  TOGGLE_SHOW_SAVED,
  SAVED_POKEMON,
  SELECT_POKEMON
} from '../../constants';
import _findIndex from 'lodash/findIndex';

export const pokemonReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_FILTER:
      return {
        ...state,
        filterStr: payload
      };

    case READ_POKEMON:
      LocalStorageMgr.setReducer(READ_POKEMON, payload);

      return {
        ...state,
        pokemon: payload
      };

    case TOGGLE_SHOW_SAVED:
      return {
        ...state,
        showSaved: !state.showSaved
      };

    case SAVED_POKEMON:
      const savedPokemon = [...state.savedPokemon];
      let found = -1;

      //Check if exists
      if (savedPokemon.length || payload) {
        const foundIndex = _findIndex(
          savedPokemon,
          ({ spriteId }) => spriteId === payload.spriteId
        );

        foundIndex >= 0
          ? savedPokemon.splice(foundIndex, 1)
          : savedPokemon.push(payload);

        LocalStorageMgr.setReducer(SAVED_POKEMON, savedPokemon);

        return {
          ...state,
          savedPokemon
        };
      }

      return { ...state };

    case SELECT_POKEMON:
      LocalStorageMgr.setReducer(SELECT_POKEMON, payload);
      return {
        ...state,
        selected: payload
      };

    default:
      throw new Error('Action type must be defined');
  }
};

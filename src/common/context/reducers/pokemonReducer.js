import LocalStorageMgr from '../../LocalStorageMgr';
import {
  CHANGE_FILTER,
  READ_POKEMON,
  TOGGLE_SHOW_SAVED,
  SAVED_POKEMON,
  SELECT_POKEMON
} from '../../constants';

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
      const data = [...state.savedPokemon, payload];
      LocalStorageMgr.setReducer(SAVED_POKEMON, data);

      return {
        ...state,
        savedPokemon: data
      };

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

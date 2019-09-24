import LocalStorageMgr from '../../LocalStorageMgr';
import { POKEMON } from '../../constants';

export const pokemonReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_FILTER':
      return {
        ...state,
        filterStr: payload
      };

    case 'READ_POKEMON':
      LocalStorageMgr.setReducer(POKEMON.ALL, payload);

      return {
        ...state,
        pokemon: payload
      };

    case 'TOGGLE_SHOW_SAVED':
      return {
        ...state,
        showSaved: !state.showSaved
      };

    case 'SAVED_POKEMON':
      return {
        ...state,
        savedPokemon: [...state.savedPokemon, payload]
      };

    case 'SELECT_POKEMON':
      LocalStorageMgr.setReducer(POKEMON.SELECT, payload);
      return {
        ...state,
        selected: payload
      };

    default:
      throw new Error('Action type must be defined');
  }
};

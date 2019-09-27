import { LocalStorageMgr } from '../../LocalStorageMgr';
import { pokemonReducer } from './pokemonReducer';
import {
  CHANGE_FILTER,
  READ_POKEMON,
  TOGGLE_SHOW_SAVED,
  SAVED_POKEMON,
  SELECT_POKEMON
} from '../../constants';

describe(`pokemon Reducer`, () => {
  let setReducerSpy = jest.spyOn(LocalStorageMgr, 'setReducer');

  beforeEach(() => {
    setReducerSpy.mockClear();
  });

  it(`CHANGE_FILTER returns new object with filterStr`, () => {
    const action = { type: CHANGE_FILTER, payload: 'some value' };

    expect(pokemonReducer({}, action)).toEqual({
      filterStr: action.payload
    });
  });

  it(`READ_POKEMON`, () => {
    const action = { type: READ_POKEMON, payload: 'some value' };
    expect(pokemonReducer({}, action)).toEqual({
      pokemon: action.payload
    });

    expect(setReducerSpy).toHaveBeenCalledWith(READ_POKEMON, 'some value');
  });

  it(`TOGGLE_SHOW_SAVED`, () => {
    const action = { type: TOGGLE_SHOW_SAVED, payload: 'some value' };

    expect(
      pokemonReducer(
        {
          showSaved: false
        },
        action
      )
    ).toEqual({
      showSaved: true
    });
  });

  it(`SAVED_POKEMON`, () => {
    const action = { type: SAVED_POKEMON, payload: { spriteId: 1 } };

    //ADD
    expect(
      pokemonReducer(
        {
          savedPokemon: []
        },
        action
      )
    ).toEqual({
      savedPokemon: [{ spriteId: 1 }]
    });

    expect(setReducerSpy).toHaveBeenCalledWith(SAVED_POKEMON, [
      { spriteId: 1 }
    ]);

    setReducerSpy.mockClear();

    //REMOVES
    expect(
      pokemonReducer(
        {
          savedPokemon: [{ spriteId: 1 }]
        },
        action
      )
    ).toEqual({
      savedPokemon: []
    });

    expect(setReducerSpy).toHaveBeenCalledWith(SAVED_POKEMON, []);
  });

  it(`SELECT_POKEMON`, () => {
    const action = { type: SELECT_POKEMON, payload: 'some value' };

    expect(pokemonReducer({}, action)).toEqual({
      selected: action.payload
    });
  });
});

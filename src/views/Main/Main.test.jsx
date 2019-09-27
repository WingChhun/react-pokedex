import React from 'react';
import Main from './Main';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { PokemonContext } from '../../common/context';
import {
  CHANGE_FILTER,
  TOGGLE_SHOW_SAVED,
  SELECT_POKEMON
} from '../../common/constants';

configure({ adapter: new Adapter() });

describe(`<Main/>`, () => {
  const props = {
    history: []
  };
  const dispatch = jest.fn();
  const state = {
    filterStr: '',
    pokemon: [
      {
        name: 'hello',
        url: 'some url',
        spriteId: 2
      }
    ]
  };

  let wrapper = beforeEach(() => {
    wrapper = mount(
      <PokemonContext.Provider value={[state, dispatch]}>
        <Main {...props} />
      </PokemonContext.Provider>
    );
  });

  afterEach(() => {
    dispatch.mockClear();
  });

  //todo: how to test useEffect?
  it(`renders properly`, () => {
    const wrapper = shallow(
      <PokemonContext.Provider>
        <Main {...props} />
      </PokemonContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it(`handleChange dispatches CHANGE_FILTER`, () => {
    wrapper
      .find('input')
      .simulate('change', { target: { value: 'some value' } });

    expect(dispatch).toHaveBeenCalledWith({
      type: CHANGE_FILTER,
      payload: 'some value'
    });
  });

  it(`onClickToggle dispatches TOGGLE_SHOW_SAVED`, () => {
    wrapper.find('Toggle').simulate('click');

    expect(dispatch).toHaveBeenCalledWith({
      type: TOGGLE_SHOW_SAVED
    });
  });

  it(`onClickPokemon dispatches`, () => {
    const PokemonList = wrapper.find('#pokemonList');
    const PokemonCard = wrapper.find('PokemonCard');

    expect(PokemonList.exists()).toBeTruthy();
    expect(PokemonCard.exists()).toBeTruthy();
    PokemonList.find('PokemonCard')
      .first()
      .simulate('click', {});

    expect(props.history.length).toBe(1);

    expect(dispatch).toHaveBeenCalledWith({
      type: SELECT_POKEMON,
      payload: { pokemon: state.pokemon[0], id: 0 }
    });
  });
});

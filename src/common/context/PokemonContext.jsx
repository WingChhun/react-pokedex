import React, { PureComponent, createContext } from 'react';
import _keyBy from 'lodash/keyBy';
import { POKEMON } from '../constants';
import { fetchPokemon } from '../api';
import LocalStorageMgr from '../LocalStorageMgr';

const LIMIT = 151;

const PokemonContext = createContext();
const { Provider, Consumer } = PokemonContext;

class PokemonProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filterStr: '',
      pokemon: LocalStorageMgr.getReducer(POKEMON.ALL) || {},
      onChange: this.onChangeFilter
    };
  }

  async componentDidMount() {
    const { pokemon } = this.state;

    if (!pokemon.length) {
      //fixme: remove later
      console.warn('Fetching Pokemon in PokemonContext');
      try {
        const { results = [] } = await fetchPokemon(LIMIT);

        if (results.length) {
          const keyedPokemon = _keyBy(results, 'name');
          LocalStorageMgr.setReducer(POKEMON.ALL, keyedPokemon);
          this.setState({ pokemon: keyedPokemon });
        }
      } catch (err) {
        //todo: this could go into a snackbar
        console.warn('Error in PokemonContext fetching request', err);
      }
    }
  }

  onChangeFilter = value => this.setState({ filterStr: value });

  render() {
    const { children, ...rest } = this.props;
    const { pokemon } = this.state; //remove after debugging

    return (
      <Provider value={this.state} {...rest}>
        <p>{JSON.stringify(pokemon)}</p>
        {children}
      </Provider>
    );
  }
}

export { PokemonProvider, PokemonContext };

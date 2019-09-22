import React, { PureComponent, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { API, POKEMON } from '../constants';
import { fetchPokemon } from '../api';
import { logger } from '../utils';
import LocalStorageMgr from '../LocalStorageMgr';

const LIMIT = 151;
const initialPokemon = LocalStorageMgr.getReducer(POKEMON.ALL) || {};

const PokemonContext = createContext();
const { Provider, Consumer } = PokemonContext;

class PokemonProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      filterStr: '',
      pokemon: initialPokemon || [],
      onChange: this.onChangeFilter
    };
  }

  async componentDidMount() {
    const { pokemon } = this.state;

    if (!pokemon.length) {
      try {
        const { results = [] } = await fetchPokemon(LIMIT);

        if (results.length) {
          LocalStorageMgr.setReducer(POKEMON.ALL, results);
          this.setState({ pokemon: results });
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

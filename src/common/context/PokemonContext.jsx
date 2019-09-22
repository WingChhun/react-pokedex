import React, { PureComponent, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { API } from '../constants';
import { fetchPokemon } from '../api';
import { logger } from '../utils';


const LIMIT = 151;

//todo: default createContext to localStorage
const PokemonContext = createContext({
  pokemon: localStorage.getItem('ALL_POKEMON') || []
});
const { Provider, Consumer } = PokemonContext;

class PokemonProvider extends PureComponent {
  static getPokemon = () => {
    const { pokemon } = useContext(PokemonContext);

  return pokemon;
  };

  constructor(props) {
    super(props);

    this.state = {
      filterStr: '',
      pokemon: this.getPokemon || [],
      onChange: this.onChangeFilter
    };  
  }

  //todo: async await request to API
  //todo: response can be cached into localStorage
  async componentDidMount() {
    const { pokemon } = this.state;

    if (!pokemon.length) {
      try {
        const response = await fetch(`${API.BASE}/pokemon?limit=${LIMIT}`);
        const { results = [] } = await response.json();

        if (results.length) {
          localStorage.setItem('ALL_POKEMON');
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

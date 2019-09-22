import { API } from '../constants';

//todo: return
export const fetchPokemon = () => {
  return fetch(API.BASE)
    .then(res => res.json())
    .catch(e => console.warn(e));
};

import { API } from '../constants';

export const fetchPokemon = (LIMIT = 0) => {
  return new Promise((resolve, reject) => {
    fetch(`${API.BASE}/pokemon?limit=${LIMIT}`)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
};

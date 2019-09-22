export const API = Object.freeze({
  BASE: 'https://pokeapi.co/api/v2',
  LOCATION: 'https://api.craft-demo.net/pokemon',
  KEY: 'HHko9Fuxf293b3w56zAJ89s3IcO9D5enaEPIg86l'
});

export const HEADERS = new Headers({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
});

export const MODE_CORS = 'cors';

//LocalStorage
export const SESSION = 'SESSION';
export const POKEMON = Object.freeze({
  ALL: 'ALL_POKEMON'
});

export const API = Object.freeze({
  BASE: 'https://pokeapi.co/api/v2',
  LOCATION: 'https://api.craft-demo.net/pokemon',
  KEY: 'HHko9Fuxf293b3w56zAJ89s3IcO9D5enaEPIg86l',
  GOOGLE: 'AIzaSyDjzymPhwBLoKbgXeB5EdFMtr0X0jUxPwU'
});

export const HEADERS = new Headers({
  'X-Api-Key': API.KEY
});

//LocalStorage
export const SESSION = 'SESSION';

export const CHANGE_FILTER = 'CHANGE_FILTER';
export const READ_POKEMON = 'READ_POKEMON';
export const TOGGLE_SHOW_SAVED = 'TOGGLE_SHOW_SAVED';
export const SAVED_POKEMON = 'SAVED_POKEMON';
export const SELECT_POKEMON = 'SELECT_POKEMON';

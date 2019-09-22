import { POKEMON, SESSION } from './constants';
import _keyBy from 'lodash/keyBy';

//Manages get/set(ing) of cached data, resembles the structure of a redux reducer
class LocalStorage {
  _session = {};

  init() {
    //todo: this should check localStorage

    this._session = localStorage.getItem(SESSION) || {};
  }

  set session(session) {
    this._session = session;
  }

  get session() {
    return this._session;
  }

  cacheOnClose = () => {
    localStorage.setItem(SESSION, this._session);
  };

  setReducer = (action, payload) => {
    if (!action || !payload) return;

    this._session = {
      ...this._session,
      [action]: payload
    };
  };

  getReducer = action => {
    if (!action) return null;

    switch (action) {
      case POKEMON.ALL:
        //note: ALL_POKEMON resembles collection ([{name:string , url:string}])

        return this._session[POKEMON.ALL]
          ? _keyBy(this._session[POKEMON.ALL], 'name')
          : {};
    }

    return this._session;
  };
}

const LocalStorageMgr = new LocalStorage();
export default LocalStorageMgr;

import { POKEMON, SESSION } from './constants';

//Manages get/set(ing) of cached data, resembles the structure of a redux reducer
class LocalStorage {
  _session = {};

  init() {
    this._session = JSON.parse(localStorage.getItem(SESSION)) || {};
  }

  set session(session) {
    this._session = session;
  }

  get session() {
    return this._session;
  }

  cacheOnClose = () => {
    localStorage.setItem(SESSION, JSON.stringify(this._session));
  };

  setReducer = (action, payload) => {
    if (!action || !payload) return;

    Object.assign(this._session, {
      [action]: payload
    });
  };

  getReducer = action => {
    if (!action) return null;

    return this._session[action];
  };
}

const LocalStorageMgr = new LocalStorage();

export { LocalStorageMgr, LocalStorage };

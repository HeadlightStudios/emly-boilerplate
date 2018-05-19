
import Auth0Store from './Auth0Store';
import AppStore from './AppStore';

const store = {
  auth: new Auth0Store(), 
  app: new AppStore(),
};

export default store;
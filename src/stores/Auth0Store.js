import { observable, computed, action } from 'mobx';
import { AUTH_CONFIG } from '../_config/auth0-config';
import auth0 from 'auth0-js';

export default class AuthStore {

  @observable uid = null;
  @observable sms_phone_number = null;
  @observable expires_at = null;
  webAuth = null;

  constructor() {

    this.webAuth = new auth0.WebAuth({
      clientID: AUTH_CONFIG.clientId,
      domain: AUTH_CONFIG.domain
    });


    var user = localStorage.getItem('user') || null;
   
    if (user !== null)
      this._setUserInfo(JSON.parse(user));
    else
      this._clearUserInfo();

  }

  @action doStartLogin() {

    var url = this.webAuth.client.buildAuthorizeUrl({
      clientID: AUTH_CONFIG.clientId,
      responseType: 'token id_token',
      redirectUri: window.location.protocol === "file:" ? 'https://' + AUTH_CONFIG.domain + '/mobile' : window.location.href,
      state: 'HEADLIGHT_STATE',
      nonce: 'HEADLIGHT_NONCE'
    });

    window.location.href = url;

  }

  @action doVerifyCallback() {

    var self = this;
    this.webAuth.parseHash({ state: 'HEADLIGHT_STATE', nonce: 'HEADLIGHT_NONCE', hash: window.location.hash }, function (err, authResult) {
      if (err) {
        console.log(err);
         return 
      }

      var userjson = {
        access_token: authResult.accessToken,
        id_token: authResult.idToken,
        expires_at: JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
      }

      self.webAuth.client.userInfo(authResult.accessToken, function (err, user) {
        userjson.uid = user.sub;
        self._setUserInfo(userjson);
       
      });
    });

  }

  @computed get isAuthenticated() {
    if (!!this.uid) {
      if (new Date().getTime() < this.expires_at)
      {
         return true;
      }
      else {
        return false;
      }
    }
    return false;
  }

  @action
  doLogout() {
    this._clearUserInfo();
  }

  _setUserInfo(user) {
    if (!user || !user.uid) return this._clearUserInfo();
    this.uid = user.uid;
    this.expires_at = JSON.parse(user.expires_at);

    localStorage.setItem('user', JSON.stringify(user));
  }

  _clearUserInfo() {
    this.uid = '';
    this.expires_at = null;
    localStorage.setItem('user', null);
  }

}

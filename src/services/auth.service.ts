import { Injectable, NgZone } from '@angular/core';
import Auth0Cordova from '@auth0/cordova';

const authConfig: any = {
  // needed for auth0
  clientID: '',
  // needed for auth0cordova
  clientId: '',
  domain: '',
  callbackURL: location.href,
  packageIdentifier: ''
};

@Injectable()
export class AuthService {
  // private authObject: Auth0.WebAuth;
  // private accessToken: string;
  // private idToken: string;
  // private userData: any;

  constructor(public zone: NgZone) {}

  public login(): void {
    const options = { scope: 'openid profile offline_access' };
    const client = new Auth0Cordova(authConfig);

    client.authorize(options, (err, authResult) => {
      if ( err ) throw err;

      console.log(authResult);
    });

  }

}

/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {AxiosPromise} from 'axios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';

import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from '../../shared/src';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace oauth2_v2 {
  export interface Options extends GlobalOptions {
    version: 'v2';
  }

  /**
   * Google OAuth2 API
   *
   * Obtains end-user authorization grants for use with other Google APIs.
   *
   * @example
   * const {google} = require('googleapis');
   * const oauth2 = google.oauth2('v2');
   *
   * @namespace oauth2
   * @type {Function}
   * @version v2
   * @variation v2
   * @param {object=} options Options for Oauth2
   */
  export class Oauth2 {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    userinfo: Resource$Userinfo;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.userinfo = new Resource$Userinfo(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * oauth2.getCertForOpenIdConnect
     * @alias oauth2.getCertForOpenIdConnect
     * @memberOf! oauth2(v2)
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getCertForOpenIdConnect(
        params?: Params$$Getcertforopenidconnect,
        options?: MethodOptions): AxiosPromise<Schema$Jwk>;
    getCertForOpenIdConnect(
        params: Params$$Getcertforopenidconnect,
        options: MethodOptions|BodyResponseCallback<Schema$Jwk>,
        callback: BodyResponseCallback<Schema$Jwk>): void;
    getCertForOpenIdConnect(
        params: Params$$Getcertforopenidconnect,
        callback: BodyResponseCallback<Schema$Jwk>): void;
    getCertForOpenIdConnect(callback: BodyResponseCallback<Schema$Jwk>): void;
    getCertForOpenIdConnect(
        paramsOrCallback?: Params$$Getcertforopenidconnect|
        BodyResponseCallback<Schema$Jwk>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Jwk>,
        callback?: BodyResponseCallback<Schema$Jwk>):
        void|AxiosPromise<Schema$Jwk> {
      let params = (paramsOrCallback || {}) as Params$$Getcertforopenidconnect;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$$Getcertforopenidconnect;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/oauth2/v2/certs').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Jwk>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Jwk>(parameters);
      }
    }


    /**
     * oauth2.tokeninfo
     * @alias oauth2.tokeninfo
     * @memberOf! oauth2(v2)
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.access_token
     * @param {string=} params.id_token
     * @param {string=} params.token_handle
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    tokeninfo(params?: Params$$Tokeninfo, options?: MethodOptions):
        AxiosPromise<Schema$Tokeninfo>;
    tokeninfo(
        params: Params$$Tokeninfo,
        options: MethodOptions|BodyResponseCallback<Schema$Tokeninfo>,
        callback: BodyResponseCallback<Schema$Tokeninfo>): void;
    tokeninfo(
        params: Params$$Tokeninfo,
        callback: BodyResponseCallback<Schema$Tokeninfo>): void;
    tokeninfo(callback: BodyResponseCallback<Schema$Tokeninfo>): void;
    tokeninfo(
        paramsOrCallback?: Params$$Tokeninfo|
        BodyResponseCallback<Schema$Tokeninfo>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Tokeninfo>,
        callback?: BodyResponseCallback<Schema$Tokeninfo>):
        void|AxiosPromise<Schema$Tokeninfo> {
      let params = (paramsOrCallback || {}) as Params$$Tokeninfo;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$$Tokeninfo;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/oauth2/v2/tokeninfo')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Tokeninfo>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Tokeninfo>(parameters);
      }
    }
  }

  export interface Schema$Jwk {
    keys?: any[];
  }
  export interface Schema$Tokeninfo {
    /**
     * The access type granted with this token. It can be offline or online.
     */
    access_type?: string;
    /**
     * Who is the intended audience for this token. In general the same as
     * issued_to.
     */
    audience?: string;
    /**
     * The email address of the user. Present only if the email scope is present
     * in the request.
     */
    email?: string;
    /**
     * The expiry time of the token, as number of seconds left until expiry.
     */
    expires_in?: number;
    /**
     * To whom was the token issued to. In general the same as audience.
     */
    issued_to?: string;
    /**
     * The space separated list of scopes granted to this token.
     */
    scope?: string;
    /**
     * The token handle associated with this token.
     */
    token_handle?: string;
    /**
     * The obfuscated user id.
     */
    user_id?: string;
    /**
     * Boolean flag which is true if the email address is verified. Present only
     * if the email scope is present in the request.
     */
    verified_email?: boolean;
  }
  export interface Schema$Userinfoplus {
    /**
     * The user&#39;s email address.
     */
    email?: string;
    /**
     * The user&#39;s last name.
     */
    family_name?: string;
    /**
     * The user&#39;s gender.
     */
    gender?: string;
    /**
     * The user&#39;s first name.
     */
    given_name?: string;
    /**
     * The hosted domain e.g. example.com if the user is Google apps user.
     */
    hd?: string;
    /**
     * The obfuscated ID of the user.
     */
    id?: string;
    /**
     * URL of the profile page.
     */
    link?: string;
    /**
     * The user&#39;s preferred locale.
     */
    locale?: string;
    /**
     * The user&#39;s full name.
     */
    name?: string;
    /**
     * URL of the user&#39;s picture image.
     */
    picture?: string;
    /**
     * Boolean flag which is true if the email address is verified. Always
     * verified because we only return the user&#39;s primary email address.
     */
    verified_email?: boolean;
  }

  export interface Params$$Getcertforopenidconnect {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;
  }
  export interface Params$$Tokeninfo {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     *
     */
    access_token?: string;
    /**
     *
     */
    id_token?: string;
    /**
     *
     */
    token_handle?: string;
  }

  export class Resource$Userinfo {
    root: Oauth2;
    v2: Resource$Userinfo$V2;
    constructor(root: Oauth2) {
      this.root = root;
      this.getRoot.bind(this);
      this.v2 = new Resource$Userinfo$V2(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * oauth2.userinfo.get
     * @alias oauth2.userinfo.get
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Userinfo$Get,
        options?: MethodOptions): AxiosPromise<Schema$Userinfoplus>;
    get(params: Params$Resource$Userinfo$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Userinfoplus>,
        callback: BodyResponseCallback<Schema$Userinfoplus>): void;
    get(params: Params$Resource$Userinfo$Get,
        callback: BodyResponseCallback<Schema$Userinfoplus>): void;
    get(callback: BodyResponseCallback<Schema$Userinfoplus>): void;
    get(paramsOrCallback?: Params$Resource$Userinfo$Get|
        BodyResponseCallback<Schema$Userinfoplus>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Userinfoplus>,
        callback?: BodyResponseCallback<Schema$Userinfoplus>):
        void|AxiosPromise<Schema$Userinfoplus> {
      let params = (paramsOrCallback || {}) as Params$Resource$Userinfo$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userinfo$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/oauth2/v2/userinfo')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Userinfoplus>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Userinfoplus>(parameters);
      }
    }
  }

  export interface Params$Resource$Userinfo$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;
  }

  export class Resource$Userinfo$V2 {
    root: Oauth2;
    me: Resource$Userinfo$V2$Me;
    constructor(root: Oauth2) {
      this.root = root;
      this.getRoot.bind(this);
      this.me = new Resource$Userinfo$V2$Me(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Userinfo$V2$Me {
    root: Oauth2;
    constructor(root: Oauth2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * oauth2.userinfo.v2.me.get
     * @alias oauth2.userinfo.v2.me.get
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Userinfo$V2$Me$Get,
        options?: MethodOptions): AxiosPromise<Schema$Userinfoplus>;
    get(params: Params$Resource$Userinfo$V2$Me$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Userinfoplus>,
        callback: BodyResponseCallback<Schema$Userinfoplus>): void;
    get(params: Params$Resource$Userinfo$V2$Me$Get,
        callback: BodyResponseCallback<Schema$Userinfoplus>): void;
    get(callback: BodyResponseCallback<Schema$Userinfoplus>): void;
    get(paramsOrCallback?: Params$Resource$Userinfo$V2$Me$Get|
        BodyResponseCallback<Schema$Userinfoplus>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$Userinfoplus>,
        callback?: BodyResponseCallback<Schema$Userinfoplus>):
        void|AxiosPromise<Schema$Userinfoplus> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Userinfo$V2$Me$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Userinfo$V2$Me$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://www.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/userinfo/v2/me').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: [],
        pathParams: [],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Userinfoplus>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Userinfoplus>(parameters);
      }
    }
  }

  export interface Params$Resource$Userinfo$V2$Me$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;
  }
}

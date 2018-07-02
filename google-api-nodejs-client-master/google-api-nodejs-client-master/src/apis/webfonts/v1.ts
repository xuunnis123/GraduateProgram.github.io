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

export namespace webfonts_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * Google Fonts Developer API
   *
   * Accesses the metadata for all families served by Google Fonts, providing a
   * list of families currently available (including available styles and a list
   * of supported script subsets).
   *
   * @example
   * const {google} = require('googleapis');
   * const webfonts = google.webfonts('v1');
   *
   * @namespace webfonts
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Webfonts
   */
  export class Webfonts {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    webfonts: Resource$Webfonts;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.webfonts = new Resource$Webfonts(this);
    }

    getRoot() {
      return this.root;
    }
  }

  export interface Schema$Webfont {
    /**
     * The category of the font.
     */
    category?: string;
    /**
     * The name of the font.
     */
    family?: string;
    /**
     * The font files (with all supported scripts) for each one of the available
     * variants, as a key : value map.
     */
    files?: any;
    /**
     * This kind represents a webfont object in the webfonts service.
     */
    kind?: string;
    /**
     * The date (format &quot;yyyy-MM-dd&quot;) the font was modified for the
     * last time.
     */
    lastModified?: string;
    /**
     * The scripts supported by the font.
     */
    subsets?: string[];
    /**
     * The available variants for the font.
     */
    variants?: string[];
    /**
     * The font version.
     */
    version?: string;
  }
  export interface Schema$WebfontList {
    /**
     * The list of fonts currently served by the Google Fonts API.
     */
    items?: Schema$Webfont[];
    /**
     * This kind represents a list of webfont objects in the webfonts service.
     */
    kind?: string;
  }


  export class Resource$Webfonts {
    root: Webfonts;
    constructor(root: Webfonts) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * webfonts.webfonts.list
     * @desc Retrieves the list of fonts currently served by the Google Fonts
     * Developer API
     * @alias webfonts.webfonts.list
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {string=} params.sort Enables sorting of the list
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Webfonts$List, options?: MethodOptions):
        AxiosPromise<Schema$WebfontList>;
    list(
        params: Params$Resource$Webfonts$List,
        options: MethodOptions|BodyResponseCallback<Schema$WebfontList>,
        callback: BodyResponseCallback<Schema$WebfontList>): void;
    list(
        params: Params$Resource$Webfonts$List,
        callback: BodyResponseCallback<Schema$WebfontList>): void;
    list(callback: BodyResponseCallback<Schema$WebfontList>): void;
    list(
        paramsOrCallback?: Params$Resource$Webfonts$List|
        BodyResponseCallback<Schema$WebfontList>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$WebfontList>,
        callback?: BodyResponseCallback<Schema$WebfontList>):
        void|AxiosPromise<Schema$WebfontList> {
      let params = (paramsOrCallback || {}) as Params$Resource$Webfonts$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Webfonts$List;
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
              url: (rootUrl + '/webfonts/v1/webfonts')
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
        createAPIRequest<Schema$WebfontList>(parameters, callback);
      } else {
        return createAPIRequest<Schema$WebfontList>(parameters);
      }
    }
  }

  export interface Params$Resource$Webfonts$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Enables sorting of the list
     */
    sort?: string;
  }
}

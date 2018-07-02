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

export namespace groupsmigration_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * Groups Migration API
   *
   * Groups Migration Api.
   *
   * @example
   * const {google} = require('googleapis');
   * const groupsmigration = google.groupsmigration('v1');
   *
   * @namespace groupsmigration
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Groupsmigration
   */
  export class Groupsmigration {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    archive: Resource$Archive;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.archive = new Resource$Archive(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * JSON response template for groups migration API.
   */
  export interface Schema$Groups {
    /**
     * The kind of insert resource this is.
     */
    kind?: string;
    /**
     * The status of the insert request.
     */
    responseCode?: string;
  }


  export class Resource$Archive {
    root: Groupsmigration;
    constructor(root: Groupsmigration) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * groupsmigration.archive.insert
     * @desc Inserts a new mail into the archive of the Google group.
     * @alias groupsmigration.archive.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.groupId The group ID
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(params?: Params$Resource$Archive$Insert, options?: MethodOptions):
        AxiosPromise<Schema$Groups>;
    insert(
        params: Params$Resource$Archive$Insert,
        options: MethodOptions|BodyResponseCallback<Schema$Groups>,
        callback: BodyResponseCallback<Schema$Groups>): void;
    insert(
        params: Params$Resource$Archive$Insert,
        callback: BodyResponseCallback<Schema$Groups>): void;
    insert(callback: BodyResponseCallback<Schema$Groups>): void;
    insert(
        paramsOrCallback?: Params$Resource$Archive$Insert|
        BodyResponseCallback<Schema$Groups>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Groups>,
        callback?: BodyResponseCallback<Schema$Groups>):
        void|AxiosPromise<Schema$Groups> {
      let params = (paramsOrCallback || {}) as Params$Resource$Archive$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Archive$Insert;
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
              url: (rootUrl + '/groups/v1/groups/{groupId}/archive')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        mediaUrl: (rootUrl + '/upload/groups/v1/groups/{groupId}/archive')
                      .replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['groupId'],
        pathParams: ['groupId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Groups>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Groups>(parameters);
      }
    }
  }

  export interface Params$Resource$Archive$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The group ID
     */
    groupId?: string;


    /**
     * Media metadata
     */
    media?: {
      /**
       * Media mime-type
       */
      mediaType?: string;

      /**
       * Media body contents
       */
      body?: any;
    };
  }
}

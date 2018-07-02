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

export namespace acceleratedmobilepageurl_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * Accelerated Mobile Pages (AMP) URL API
   *
   * Retrieves the list of AMP URLs (and equivalent AMP Cache URLs) for a given
   * list of public URL(s).
   *
   * @example
   * const {google} = require('googleapis');
   * const acceleratedmobilepageurl = google.acceleratedmobilepageurl('v1');
   *
   * @namespace acceleratedmobilepageurl
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Acceleratedmobilepageurl
   */
  export class Acceleratedmobilepageurl {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    ampUrls: Resource$Ampurls;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.ampUrls = new Resource$Ampurls(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * AMP URL response for a requested URL.
   */
  export interface Schema$AmpUrl {
    /**
     * The AMP URL pointing to the publisher&#39;s web server.
     */
    ampUrl?: string;
    /**
     * The [AMP Cache URL](/amp/cache/overview#amp-cache-url-format) pointing to
     * the cached document in the Google AMP Cache.
     */
    cdnAmpUrl?: string;
    /**
     * The original non-AMP URL.
     */
    originalUrl?: string;
  }
  /**
   * AMP URL Error resource for a requested URL that couldn&#39;t be found.
   */
  export interface Schema$AmpUrlError {
    /**
     * The error code of an API call.
     */
    errorCode?: string;
    /**
     * An optional descriptive error message.
     */
    errorMessage?: string;
    /**
     * The original non-AMP URL.
     */
    originalUrl?: string;
  }
  /**
   * AMP URL request for a batch of URLs.
   */
  export interface Schema$BatchGetAmpUrlsRequest {
    /**
     * The lookup_strategy being requested.
     */
    lookupStrategy?: string;
    /**
     * List of URLs to look up for the paired AMP URLs. The URLs are
     * case-sensitive. Up to 50 URLs per lookup (see [Usage
     * Limits](/amp/cache/reference/limits)).
     */
    urls?: string[];
  }
  /**
   * Batch AMP URL response.
   */
  export interface Schema$BatchGetAmpUrlsResponse {
    /**
     * For each URL in BatchAmpUrlsRequest, the URL response. The response might
     * not be in the same order as URLs in the batch request. If
     * BatchAmpUrlsRequest contains duplicate URLs, AmpUrl is generated only
     * once.
     */
    ampUrls?: Schema$AmpUrl[];
    /**
     * The errors for requested URLs that have no AMP URL.
     */
    urlErrors?: Schema$AmpUrlError[];
  }


  export class Resource$Ampurls {
    root: Acceleratedmobilepageurl;
    constructor(root: Acceleratedmobilepageurl) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * acceleratedmobilepageurl.ampUrls.batchGet
     * @desc Returns AMP URL(s) and equivalent [AMP Cache
     * URL(s)](/amp/cache/overview#amp-cache-url-format).
     * @alias acceleratedmobilepageurl.ampUrls.batchGet
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().BatchGetAmpUrlsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    batchGet(
        params?: Params$Resource$Ampurls$Batchget,
        options?: MethodOptions): AxiosPromise<Schema$BatchGetAmpUrlsResponse>;
    batchGet(
        params: Params$Resource$Ampurls$Batchget,
        options: MethodOptions|
        BodyResponseCallback<Schema$BatchGetAmpUrlsResponse>,
        callback: BodyResponseCallback<Schema$BatchGetAmpUrlsResponse>): void;
    batchGet(
        params: Params$Resource$Ampurls$Batchget,
        callback: BodyResponseCallback<Schema$BatchGetAmpUrlsResponse>): void;
    batchGet(callback: BodyResponseCallback<Schema$BatchGetAmpUrlsResponse>):
        void;
    batchGet(
        paramsOrCallback?: Params$Resource$Ampurls$Batchget|
        BodyResponseCallback<Schema$BatchGetAmpUrlsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$BatchGetAmpUrlsResponse>,
        callback?: BodyResponseCallback<Schema$BatchGetAmpUrlsResponse>):
        void|AxiosPromise<Schema$BatchGetAmpUrlsResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Ampurls$Batchget;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Ampurls$Batchget;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://acceleratedmobilepageurl.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/ampUrls:batchGet')
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
        createAPIRequest<Schema$BatchGetAmpUrlsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$BatchGetAmpUrlsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Ampurls$Batchget {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$BatchGetAmpUrlsRequest;
  }
}

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

export namespace gamesConfiguration_v1configuration {
  export interface Options extends GlobalOptions {
    version: 'v1configuration';
  }

  /**
   * Google Play Game Services Publishing API
   *
   * The Publishing API for Google Play Game Services.
   *
   * @example
   * const {google} = require('googleapis');
   * const gamesConfiguration = google.gamesConfiguration('v1configuration');
   *
   * @namespace gamesConfiguration
   * @type {Function}
   * @version v1configuration
   * @variation v1configuration
   * @param {object=} options Options for Gamesconfiguration
   */
  export class Gamesconfiguration {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    achievementConfigurations: Resource$Achievementconfigurations;
    imageConfigurations: Resource$Imageconfigurations;
    leaderboardConfigurations: Resource$Leaderboardconfigurations;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.achievementConfigurations =
          new Resource$Achievementconfigurations(this);
      this.imageConfigurations = new Resource$Imageconfigurations(this);
      this.leaderboardConfigurations =
          new Resource$Leaderboardconfigurations(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * This is a JSON template for an achievement configuration resource.
   */
  export interface Schema$AchievementConfiguration {
    /**
     * The type of the achievement. Possible values are:   -
     * &quot;STANDARD&quot; - Achievement is either locked or unlocked.  -
     * &quot;INCREMENTAL&quot; - Achievement is incremental.
     */
    achievementType?: string;
    /**
     * The draft data of the achievement.
     */
    draft?: Schema$AchievementConfigurationDetail;
    /**
     * The ID of the achievement.
     */
    id?: string;
    /**
     * The initial state of the achievement. Possible values are:   -
     * &quot;HIDDEN&quot; - Achievement is hidden.  - &quot;REVEALED&quot; -
     * Achievement is revealed.  - &quot;UNLOCKED&quot; - Achievement is
     * unlocked.
     */
    initialState?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed
     * string gamesConfiguration#achievementConfiguration.
     */
    kind?: string;
    /**
     * The read-only published data of the achievement.
     */
    published?: Schema$AchievementConfigurationDetail;
    /**
     * Steps to unlock. Only applicable to incremental achievements.
     */
    stepsToUnlock?: number;
    /**
     * The token for this resource.
     */
    token?: string;
  }
  /**
   * This is a JSON template for an achievement configuration detail.
   */
  export interface Schema$AchievementConfigurationDetail {
    /**
     * Localized strings for the achievement description.
     */
    description?: Schema$LocalizedStringBundle;
    /**
     * The icon url of this achievement. Writes to this field are ignored.
     */
    iconUrl?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed
     * string gamesConfiguration#achievementConfigurationDetail.
     */
    kind?: string;
    /**
     * Localized strings for the achievement name.
     */
    name?: Schema$LocalizedStringBundle;
    /**
     * Point value for the achievement.
     */
    pointValue?: number;
    /**
     * The sort rank of this achievement. Writes to this field are ignored.
     */
    sortRank?: number;
  }
  /**
   * This is a JSON template for a ListConfigurations response.
   */
  export interface Schema$AchievementConfigurationListResponse {
    /**
     * The achievement configurations.
     */
    items?: Schema$AchievementConfiguration[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed
     * string games#achievementConfigurationListResponse.
     */
    kind?: string;
    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * This is a JSON template for a number affix resource.
   */
  export interface Schema$GamesNumberAffixConfiguration {
    /**
     * When the language requires special treatment of &quot;small&quot; numbers
     * (as with 2, 3, and 4 in Czech; or numbers ending 2, 3, or 4 but not 12,
     * 13, or 14 in Polish).
     */
    few?: Schema$LocalizedStringBundle;
    /**
     * When the language requires special treatment of &quot;large&quot; numbers
     * (as with numbers ending 11-99 in Maltese).
     */
    many?: Schema$LocalizedStringBundle;
    /**
     * When the language requires special treatment of numbers like one (as with
     * the number 1 in English and most other languages; in Russian, any number
     * ending in 1 but not ending in 11 is in this class).
     */
    one?: Schema$LocalizedStringBundle;
    /**
     * When the language does not require special treatment of the given
     * quantity (as with all numbers in Chinese, or 42 in English).
     */
    other?: Schema$LocalizedStringBundle;
    /**
     * When the language requires special treatment of numbers like two (as with
     * 2 in Welsh, or 102 in Slovenian).
     */
    two?: Schema$LocalizedStringBundle;
    /**
     * When the language requires special treatment of the number 0 (as in
     * Arabic).
     */
    zero?: Schema$LocalizedStringBundle;
  }
  /**
   * This is a JSON template for a number format resource.
   */
  export interface Schema$GamesNumberFormatConfiguration {
    /**
     * The curreny code string. Only used for CURRENCY format type.
     */
    currencyCode?: string;
    /**
     * The formatting for the number. Possible values are:   -
     * &quot;NUMERIC&quot; - Numbers are formatted to have no digits or a fixed
     * number of digits after the decimal point according to locale. An optional
     * custom unit can be added. - &quot;TIME_DURATION&quot; - Numbers are
     * formatted to hours, minutes and seconds. - &quot;CURRENCY&quot; - Numbers
     * are formatted to currency according to locale.
     */
    numberFormatType?: string;
    /**
     * The number of decimal places for number. Only used for NUMERIC format
     * type.
     */
    numDecimalPlaces?: number;
    /**
     * An optional suffix for the NUMERIC format type. These strings follow the
     * same  plural rules as all Android string resources.
     */
    suffix?: Schema$GamesNumberAffixConfiguration;
  }
  /**
   * This is a JSON template for an image configuration resource.
   */
  export interface Schema$ImageConfiguration {
    /**
     * The image type for the image.
     */
    imageType?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed
     * string gamesConfiguration#imageConfiguration.
     */
    kind?: string;
    /**
     * The resource ID of resource which the image belongs to.
     */
    resourceId?: string;
    /**
     * The url for this image.
     */
    url?: string;
  }
  /**
   * This is a JSON template for an leaderboard configuration resource.
   */
  export interface Schema$LeaderboardConfiguration {
    /**
     * The draft data of the leaderboard.
     */
    draft?: Schema$LeaderboardConfigurationDetail;
    /**
     * The ID of the leaderboard.
     */
    id?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed
     * string gamesConfiguration#leaderboardConfiguration.
     */
    kind?: string;
    /**
     * The read-only published data of the leaderboard.
     */
    published?: Schema$LeaderboardConfigurationDetail;
    /**
     * Maximum score that can be posted to this leaderboard.
     */
    scoreMax?: string;
    /**
     * Minimum score that can be posted to this leaderboard.
     */
    scoreMin?: string;
    /**
     * The type of the leaderboard. Possible values are:   -
     * &quot;LARGER_IS_BETTER&quot; - Larger scores posted are ranked higher.  -
     * &quot;SMALLER_IS_BETTER&quot; - Smaller scores posted are ranked higher.
     */
    scoreOrder?: string;
    /**
     * The token for this resource.
     */
    token?: string;
  }
  /**
   * This is a JSON template for a leaderboard configuration detail.
   */
  export interface Schema$LeaderboardConfigurationDetail {
    /**
     * The icon url of this leaderboard. Writes to this field are ignored.
     */
    iconUrl?: string;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed
     * string gamesConfiguration#leaderboardConfigurationDetail.
     */
    kind?: string;
    /**
     * Localized strings for the leaderboard name.
     */
    name?: Schema$LocalizedStringBundle;
    /**
     * The score formatting for the leaderboard.
     */
    scoreFormat?: Schema$GamesNumberFormatConfiguration;
    /**
     * The sort rank of this leaderboard. Writes to this field are ignored.
     */
    sortRank?: number;
  }
  /**
   * This is a JSON template for a ListConfigurations response.
   */
  export interface Schema$LeaderboardConfigurationListResponse {
    /**
     * The leaderboard configurations.
     */
    items?: Schema$LeaderboardConfiguration[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed
     * string games#leaderboardConfigurationListResponse.
     */
    kind?: string;
    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * This is a JSON template for a localized string resource.
   */
  export interface Schema$LocalizedString {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed
     * string gamesConfiguration#localizedString.
     */
    kind?: string;
    /**
     * The locale string.
     */
    locale?: string;
    /**
     * The string value.
     */
    value?: string;
  }
  /**
   * This is a JSON template for a localized string bundle resource.
   */
  export interface Schema$LocalizedStringBundle {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed
     * string gamesConfiguration#localizedStringBundle.
     */
    kind?: string;
    /**
     * The locale strings.
     */
    translations?: Schema$LocalizedString[];
  }


  export class Resource$Achievementconfigurations {
    root: Gamesconfiguration;
    constructor(root: Gamesconfiguration) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * gamesConfiguration.achievementConfigurations.delete
     * @desc Delete the achievement configuration with the given ID.
     * @alias gamesConfiguration.achievementConfigurations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.achievementId The ID of the achievement used by this method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Achievementconfigurations$Delete,
        options?: MethodOptions): AxiosPromise<void>;
    delete(
        params: Params$Resource$Achievementconfigurations$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Achievementconfigurations$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Achievementconfigurations$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Achievementconfigurations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Achievementconfigurations$Delete;
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
              url: (rootUrl +
                    '/games/v1configuration/achievements/{achievementId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['achievementId'],
        pathParams: ['achievementId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * gamesConfiguration.achievementConfigurations.get
     * @desc Retrieves the metadata of the achievement configuration with the
     * given ID.
     * @alias gamesConfiguration.achievementConfigurations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.achievementId The ID of the achievement used by this method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Achievementconfigurations$Get,
        options?: MethodOptions): AxiosPromise<Schema$AchievementConfiguration>;
    get(params: Params$Resource$Achievementconfigurations$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$AchievementConfiguration>,
        callback: BodyResponseCallback<Schema$AchievementConfiguration>): void;
    get(params: Params$Resource$Achievementconfigurations$Get,
        callback: BodyResponseCallback<Schema$AchievementConfiguration>): void;
    get(callback: BodyResponseCallback<Schema$AchievementConfiguration>): void;
    get(paramsOrCallback?: Params$Resource$Achievementconfigurations$Get|
        BodyResponseCallback<Schema$AchievementConfiguration>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AchievementConfiguration>,
        callback?: BodyResponseCallback<Schema$AchievementConfiguration>):
        void|AxiosPromise<Schema$AchievementConfiguration> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Achievementconfigurations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Achievementconfigurations$Get;
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
              url: (rootUrl +
                    '/games/v1configuration/achievements/{achievementId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['achievementId'],
        pathParams: ['achievementId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AchievementConfiguration>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AchievementConfiguration>(parameters);
      }
    }


    /**
     * gamesConfiguration.achievementConfigurations.insert
     * @desc Insert a new achievement configuration in this application.
     * @alias gamesConfiguration.achievementConfigurations.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.applicationId The application ID from the Google Play developer console.
     * @param {().AchievementConfiguration} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
        params?: Params$Resource$Achievementconfigurations$Insert,
        options?: MethodOptions): AxiosPromise<Schema$AchievementConfiguration>;
    insert(
        params: Params$Resource$Achievementconfigurations$Insert,
        options: MethodOptions|
        BodyResponseCallback<Schema$AchievementConfiguration>,
        callback: BodyResponseCallback<Schema$AchievementConfiguration>): void;
    insert(
        params: Params$Resource$Achievementconfigurations$Insert,
        callback: BodyResponseCallback<Schema$AchievementConfiguration>): void;
    insert(callback: BodyResponseCallback<Schema$AchievementConfiguration>):
        void;
    insert(
        paramsOrCallback?: Params$Resource$Achievementconfigurations$Insert|
        BodyResponseCallback<Schema$AchievementConfiguration>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AchievementConfiguration>,
        callback?: BodyResponseCallback<Schema$AchievementConfiguration>):
        void|AxiosPromise<Schema$AchievementConfiguration> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Achievementconfigurations$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Achievementconfigurations$Insert;
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
              url:
                  (rootUrl +
                   '/games/v1configuration/applications/{applicationId}/achievements')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['applicationId'],
        pathParams: ['applicationId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AchievementConfiguration>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AchievementConfiguration>(parameters);
      }
    }


    /**
     * gamesConfiguration.achievementConfigurations.list
     * @desc Returns a list of the achievement configurations in this
     * application.
     * @alias gamesConfiguration.achievementConfigurations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.applicationId The application ID from the Google Play developer console.
     * @param {integer=} params.maxResults The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified maxResults.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Achievementconfigurations$List,
        options?: MethodOptions):
        AxiosPromise<Schema$AchievementConfigurationListResponse>;
    list(
        params: Params$Resource$Achievementconfigurations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$AchievementConfigurationListResponse>,
        callback:
            BodyResponseCallback<Schema$AchievementConfigurationListResponse>):
        void;
    list(
        params: Params$Resource$Achievementconfigurations$List,
        callback:
            BodyResponseCallback<Schema$AchievementConfigurationListResponse>):
        void;
    list(callback:
             BodyResponseCallback<Schema$AchievementConfigurationListResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Achievementconfigurations$List|
        BodyResponseCallback<Schema$AchievementConfigurationListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AchievementConfigurationListResponse>,
        callback?:
            BodyResponseCallback<Schema$AchievementConfigurationListResponse>):
        void|AxiosPromise<Schema$AchievementConfigurationListResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Achievementconfigurations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Achievementconfigurations$List;
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
              url:
                  (rootUrl +
                   '/games/v1configuration/applications/{applicationId}/achievements')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['applicationId'],
        pathParams: ['applicationId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AchievementConfigurationListResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$AchievementConfigurationListResponse>(
            parameters);
      }
    }


    /**
     * gamesConfiguration.achievementConfigurations.patch
     * @desc Update the metadata of the achievement configuration with the given
     * ID. This method supports patch semantics.
     * @alias gamesConfiguration.achievementConfigurations.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.achievementId The ID of the achievement used by this method.
     * @param {().AchievementConfiguration} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Achievementconfigurations$Patch,
        options?: MethodOptions): AxiosPromise<Schema$AchievementConfiguration>;
    patch(
        params: Params$Resource$Achievementconfigurations$Patch,
        options: MethodOptions|
        BodyResponseCallback<Schema$AchievementConfiguration>,
        callback: BodyResponseCallback<Schema$AchievementConfiguration>): void;
    patch(
        params: Params$Resource$Achievementconfigurations$Patch,
        callback: BodyResponseCallback<Schema$AchievementConfiguration>): void;
    patch(callback: BodyResponseCallback<Schema$AchievementConfiguration>):
        void;
    patch(
        paramsOrCallback?: Params$Resource$Achievementconfigurations$Patch|
        BodyResponseCallback<Schema$AchievementConfiguration>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AchievementConfiguration>,
        callback?: BodyResponseCallback<Schema$AchievementConfiguration>):
        void|AxiosPromise<Schema$AchievementConfiguration> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Achievementconfigurations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Achievementconfigurations$Patch;
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
              url: (rootUrl +
                    '/games/v1configuration/achievements/{achievementId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['achievementId'],
        pathParams: ['achievementId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AchievementConfiguration>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AchievementConfiguration>(parameters);
      }
    }


    /**
     * gamesConfiguration.achievementConfigurations.update
     * @desc Update the metadata of the achievement configuration with the given
     * ID.
     * @alias gamesConfiguration.achievementConfigurations.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.achievementId The ID of the achievement used by this method.
     * @param {().AchievementConfiguration} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
        params?: Params$Resource$Achievementconfigurations$Update,
        options?: MethodOptions): AxiosPromise<Schema$AchievementConfiguration>;
    update(
        params: Params$Resource$Achievementconfigurations$Update,
        options: MethodOptions|
        BodyResponseCallback<Schema$AchievementConfiguration>,
        callback: BodyResponseCallback<Schema$AchievementConfiguration>): void;
    update(
        params: Params$Resource$Achievementconfigurations$Update,
        callback: BodyResponseCallback<Schema$AchievementConfiguration>): void;
    update(callback: BodyResponseCallback<Schema$AchievementConfiguration>):
        void;
    update(
        paramsOrCallback?: Params$Resource$Achievementconfigurations$Update|
        BodyResponseCallback<Schema$AchievementConfiguration>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$AchievementConfiguration>,
        callback?: BodyResponseCallback<Schema$AchievementConfiguration>):
        void|AxiosPromise<Schema$AchievementConfiguration> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Achievementconfigurations$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Achievementconfigurations$Update;
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
              url: (rootUrl +
                    '/games/v1configuration/achievements/{achievementId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['achievementId'],
        pathParams: ['achievementId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$AchievementConfiguration>(parameters, callback);
      } else {
        return createAPIRequest<Schema$AchievementConfiguration>(parameters);
      }
    }
  }

  export interface Params$Resource$Achievementconfigurations$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the achievement used by this method.
     */
    achievementId?: string;
  }
  export interface Params$Resource$Achievementconfigurations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the achievement used by this method.
     */
    achievementId?: string;
  }
  export interface Params$Resource$Achievementconfigurations$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The application ID from the Google Play developer console.
     */
    applicationId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AchievementConfiguration;
  }
  export interface Params$Resource$Achievementconfigurations$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The application ID from the Google Play developer console.
     */
    applicationId?: string;
    /**
     * The maximum number of resource configurations to return in the response,
     * used for paging. For any response, the actual number of resources
     * returned may be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Achievementconfigurations$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the achievement used by this method.
     */
    achievementId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AchievementConfiguration;
  }
  export interface Params$Resource$Achievementconfigurations$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the achievement used by this method.
     */
    achievementId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AchievementConfiguration;
  }


  export class Resource$Imageconfigurations {
    root: Gamesconfiguration;
    constructor(root: Gamesconfiguration) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * gamesConfiguration.imageConfigurations.upload
     * @desc Uploads an image for a resource with the given ID and image type.
     * @alias gamesConfiguration.imageConfigurations.upload
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.imageType Selects which image in a resource for this method.
     * @param {string} params.resourceId The ID of the resource used by this method.
     * @param {object} params.media Media object
     * @param {string} params.media.mimeType Media mime-type
     * @param {string|object} params.media.body Media body contents
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    upload(
        params?: Params$Resource$Imageconfigurations$Upload,
        options?: MethodOptions): AxiosPromise<Schema$ImageConfiguration>;
    upload(
        params: Params$Resource$Imageconfigurations$Upload,
        options: MethodOptions|BodyResponseCallback<Schema$ImageConfiguration>,
        callback: BodyResponseCallback<Schema$ImageConfiguration>): void;
    upload(
        params: Params$Resource$Imageconfigurations$Upload,
        callback: BodyResponseCallback<Schema$ImageConfiguration>): void;
    upload(callback: BodyResponseCallback<Schema$ImageConfiguration>): void;
    upload(
        paramsOrCallback?: Params$Resource$Imageconfigurations$Upload|
        BodyResponseCallback<Schema$ImageConfiguration>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ImageConfiguration>,
        callback?: BodyResponseCallback<Schema$ImageConfiguration>):
        void|AxiosPromise<Schema$ImageConfiguration> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Imageconfigurations$Upload;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Imageconfigurations$Upload;
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
              url:
                  (rootUrl +
                   '/games/v1configuration/images/{resourceId}/imageType/{imageType}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        mediaUrl:
            (rootUrl +
             '/upload/games/v1configuration/images/{resourceId}/imageType/{imageType}')
                .replace(/([^:]\/)\/+/g, '$1'),
        requiredParams: ['resourceId', 'imageType'],
        pathParams: ['imageType', 'resourceId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ImageConfiguration>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ImageConfiguration>(parameters);
      }
    }
  }

  export interface Params$Resource$Imageconfigurations$Upload {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Selects which image in a resource for this method.
     */
    imageType?: string;
    /**
     * The ID of the resource used by this method.
     */
    resourceId?: string;


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


  export class Resource$Leaderboardconfigurations {
    root: Gamesconfiguration;
    constructor(root: Gamesconfiguration) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * gamesConfiguration.leaderboardConfigurations.delete
     * @desc Delete the leaderboard configuration with the given ID.
     * @alias gamesConfiguration.leaderboardConfigurations.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.leaderboardId The ID of the leaderboard.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Leaderboardconfigurations$Delete,
        options?: MethodOptions): AxiosPromise<void>;
    delete(
        params: Params$Resource$Leaderboardconfigurations$Delete,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    delete(
        params: Params$Resource$Leaderboardconfigurations$Delete,
        callback: BodyResponseCallback<void>): void;
    delete(callback: BodyResponseCallback<void>): void;
    delete(
        paramsOrCallback?: Params$Resource$Leaderboardconfigurations$Delete|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Leaderboardconfigurations$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Leaderboardconfigurations$Delete;
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
              url: (rootUrl +
                    '/games/v1configuration/leaderboards/{leaderboardId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['leaderboardId'],
        pathParams: ['leaderboardId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * gamesConfiguration.leaderboardConfigurations.get
     * @desc Retrieves the metadata of the leaderboard configuration with the
     * given ID.
     * @alias gamesConfiguration.leaderboardConfigurations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.leaderboardId The ID of the leaderboard.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Leaderboardconfigurations$Get,
        options?: MethodOptions): AxiosPromise<Schema$LeaderboardConfiguration>;
    get(params: Params$Resource$Leaderboardconfigurations$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$LeaderboardConfiguration>,
        callback: BodyResponseCallback<Schema$LeaderboardConfiguration>): void;
    get(params: Params$Resource$Leaderboardconfigurations$Get,
        callback: BodyResponseCallback<Schema$LeaderboardConfiguration>): void;
    get(callback: BodyResponseCallback<Schema$LeaderboardConfiguration>): void;
    get(paramsOrCallback?: Params$Resource$Leaderboardconfigurations$Get|
        BodyResponseCallback<Schema$LeaderboardConfiguration>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$LeaderboardConfiguration>,
        callback?: BodyResponseCallback<Schema$LeaderboardConfiguration>):
        void|AxiosPromise<Schema$LeaderboardConfiguration> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Leaderboardconfigurations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Leaderboardconfigurations$Get;
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
              url: (rootUrl +
                    '/games/v1configuration/leaderboards/{leaderboardId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['leaderboardId'],
        pathParams: ['leaderboardId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$LeaderboardConfiguration>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LeaderboardConfiguration>(parameters);
      }
    }


    /**
     * gamesConfiguration.leaderboardConfigurations.insert
     * @desc Insert a new leaderboard configuration in this application.
     * @alias gamesConfiguration.leaderboardConfigurations.insert
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.applicationId The application ID from the Google Play developer console.
     * @param {().LeaderboardConfiguration} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    insert(
        params?: Params$Resource$Leaderboardconfigurations$Insert,
        options?: MethodOptions): AxiosPromise<Schema$LeaderboardConfiguration>;
    insert(
        params: Params$Resource$Leaderboardconfigurations$Insert,
        options: MethodOptions|
        BodyResponseCallback<Schema$LeaderboardConfiguration>,
        callback: BodyResponseCallback<Schema$LeaderboardConfiguration>): void;
    insert(
        params: Params$Resource$Leaderboardconfigurations$Insert,
        callback: BodyResponseCallback<Schema$LeaderboardConfiguration>): void;
    insert(callback: BodyResponseCallback<Schema$LeaderboardConfiguration>):
        void;
    insert(
        paramsOrCallback?: Params$Resource$Leaderboardconfigurations$Insert|
        BodyResponseCallback<Schema$LeaderboardConfiguration>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$LeaderboardConfiguration>,
        callback?: BodyResponseCallback<Schema$LeaderboardConfiguration>):
        void|AxiosPromise<Schema$LeaderboardConfiguration> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Leaderboardconfigurations$Insert;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Leaderboardconfigurations$Insert;
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
              url:
                  (rootUrl +
                   '/games/v1configuration/applications/{applicationId}/leaderboards')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['applicationId'],
        pathParams: ['applicationId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$LeaderboardConfiguration>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LeaderboardConfiguration>(parameters);
      }
    }


    /**
     * gamesConfiguration.leaderboardConfigurations.list
     * @desc Returns a list of the leaderboard configurations in this
     * application.
     * @alias gamesConfiguration.leaderboardConfigurations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.applicationId The application ID from the Google Play developer console.
     * @param {integer=} params.maxResults The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified maxResults.
     * @param {string=} params.pageToken The token returned by the previous request.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Leaderboardconfigurations$List,
        options?: MethodOptions):
        AxiosPromise<Schema$LeaderboardConfigurationListResponse>;
    list(
        params: Params$Resource$Leaderboardconfigurations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$LeaderboardConfigurationListResponse>,
        callback:
            BodyResponseCallback<Schema$LeaderboardConfigurationListResponse>):
        void;
    list(
        params: Params$Resource$Leaderboardconfigurations$List,
        callback:
            BodyResponseCallback<Schema$LeaderboardConfigurationListResponse>):
        void;
    list(callback:
             BodyResponseCallback<Schema$LeaderboardConfigurationListResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Leaderboardconfigurations$List|
        BodyResponseCallback<Schema$LeaderboardConfigurationListResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$LeaderboardConfigurationListResponse>,
        callback?:
            BodyResponseCallback<Schema$LeaderboardConfigurationListResponse>):
        void|AxiosPromise<Schema$LeaderboardConfigurationListResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Leaderboardconfigurations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Leaderboardconfigurations$List;
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
              url:
                  (rootUrl +
                   '/games/v1configuration/applications/{applicationId}/leaderboards')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['applicationId'],
        pathParams: ['applicationId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$LeaderboardConfigurationListResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$LeaderboardConfigurationListResponse>(
            parameters);
      }
    }


    /**
     * gamesConfiguration.leaderboardConfigurations.patch
     * @desc Update the metadata of the leaderboard configuration with the given
     * ID. This method supports patch semantics.
     * @alias gamesConfiguration.leaderboardConfigurations.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.leaderboardId The ID of the leaderboard.
     * @param {().LeaderboardConfiguration} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Leaderboardconfigurations$Patch,
        options?: MethodOptions): AxiosPromise<Schema$LeaderboardConfiguration>;
    patch(
        params: Params$Resource$Leaderboardconfigurations$Patch,
        options: MethodOptions|
        BodyResponseCallback<Schema$LeaderboardConfiguration>,
        callback: BodyResponseCallback<Schema$LeaderboardConfiguration>): void;
    patch(
        params: Params$Resource$Leaderboardconfigurations$Patch,
        callback: BodyResponseCallback<Schema$LeaderboardConfiguration>): void;
    patch(callback: BodyResponseCallback<Schema$LeaderboardConfiguration>):
        void;
    patch(
        paramsOrCallback?: Params$Resource$Leaderboardconfigurations$Patch|
        BodyResponseCallback<Schema$LeaderboardConfiguration>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$LeaderboardConfiguration>,
        callback?: BodyResponseCallback<Schema$LeaderboardConfiguration>):
        void|AxiosPromise<Schema$LeaderboardConfiguration> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Leaderboardconfigurations$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Leaderboardconfigurations$Patch;
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
              url: (rootUrl +
                    '/games/v1configuration/leaderboards/{leaderboardId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['leaderboardId'],
        pathParams: ['leaderboardId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$LeaderboardConfiguration>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LeaderboardConfiguration>(parameters);
      }
    }


    /**
     * gamesConfiguration.leaderboardConfigurations.update
     * @desc Update the metadata of the leaderboard configuration with the given
     * ID.
     * @alias gamesConfiguration.leaderboardConfigurations.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.leaderboardId The ID of the leaderboard.
     * @param {().LeaderboardConfiguration} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
        params?: Params$Resource$Leaderboardconfigurations$Update,
        options?: MethodOptions): AxiosPromise<Schema$LeaderboardConfiguration>;
    update(
        params: Params$Resource$Leaderboardconfigurations$Update,
        options: MethodOptions|
        BodyResponseCallback<Schema$LeaderboardConfiguration>,
        callback: BodyResponseCallback<Schema$LeaderboardConfiguration>): void;
    update(
        params: Params$Resource$Leaderboardconfigurations$Update,
        callback: BodyResponseCallback<Schema$LeaderboardConfiguration>): void;
    update(callback: BodyResponseCallback<Schema$LeaderboardConfiguration>):
        void;
    update(
        paramsOrCallback?: Params$Resource$Leaderboardconfigurations$Update|
        BodyResponseCallback<Schema$LeaderboardConfiguration>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$LeaderboardConfiguration>,
        callback?: BodyResponseCallback<Schema$LeaderboardConfiguration>):
        void|AxiosPromise<Schema$LeaderboardConfiguration> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Leaderboardconfigurations$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Leaderboardconfigurations$Update;
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
              url: (rootUrl +
                    '/games/v1configuration/leaderboards/{leaderboardId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['leaderboardId'],
        pathParams: ['leaderboardId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$LeaderboardConfiguration>(parameters, callback);
      } else {
        return createAPIRequest<Schema$LeaderboardConfiguration>(parameters);
      }
    }
  }

  export interface Params$Resource$Leaderboardconfigurations$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the leaderboard.
     */
    leaderboardId?: string;
  }
  export interface Params$Resource$Leaderboardconfigurations$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the leaderboard.
     */
    leaderboardId?: string;
  }
  export interface Params$Resource$Leaderboardconfigurations$Insert {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The application ID from the Google Play developer console.
     */
    applicationId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LeaderboardConfiguration;
  }
  export interface Params$Resource$Leaderboardconfigurations$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The application ID from the Google Play developer console.
     */
    applicationId?: string;
    /**
     * The maximum number of resource configurations to return in the response,
     * used for paging. For any response, the actual number of resources
     * returned may be less than the specified maxResults.
     */
    maxResults?: number;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Leaderboardconfigurations$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the leaderboard.
     */
    leaderboardId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LeaderboardConfiguration;
  }
  export interface Params$Resource$Leaderboardconfigurations$Update {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the leaderboard.
     */
    leaderboardId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$LeaderboardConfiguration;
  }
}

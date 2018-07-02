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

export namespace doubleclickbidmanager_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * DoubleClick Bid Manager API
   *
   * API for viewing and managing your reports in DoubleClick Bid Manager.
   *
   * @example
   * const {google} = require('googleapis');
   * const doubleclickbidmanager = google.doubleclickbidmanager('v1');
   *
   * @namespace doubleclickbidmanager
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Doubleclickbidmanager
   */
  export class Doubleclickbidmanager {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    lineitems: Resource$Lineitems;
    queries: Resource$Queries;
    reports: Resource$Reports;
    sdf: Resource$Sdf;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.lineitems = new Resource$Lineitems(this);
      this.queries = new Resource$Queries(this);
      this.reports = new Resource$Reports(this);
      this.sdf = new Resource$Sdf(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Request to fetch stored line items.
   */
  export interface Schema$DownloadLineItemsRequest {
    /**
     * File specification (column names, types, order) in which the line items
     * will be returned. Default to EWF.
     */
    fileSpec?: string;
    /**
     * Ids of the specified filter type used to filter line items to fetch. If
     * omitted, all the line items will be returned.
     */
    filterIds?: string[];
    /**
     * Filter type used to filter line items to fetch.
     */
    filterType?: string;
    /**
     * Format in which the line items will be returned. Default to CSV.
     */
    format?: string;
  }
  /**
   * Download line items response.
   */
  export interface Schema$DownloadLineItemsResponse {
    /**
     * Retrieved line items in CSV format. For more information about file
     * formats, see  Entity Write File Format.
     */
    lineItems?: string;
  }
  /**
   * Request to fetch stored insertion orders, line items, TrueView ad groups
   * and ads.
   */
  export interface Schema$DownloadRequest {
    /**
     * File types that will be returned.
     */
    fileTypes?: string[];
    /**
     * The IDs of the specified filter type. This is used to filter entities to
     * fetch. At least one ID must be specified. Only one ID is allowed for the
     * ADVERTISER_ID filter type. For INSERTION_ORDER_ID or LINE_ITEM_ID filter
     * types, all IDs must be from the same Advertiser.
     */
    filterIds?: string[];
    /**
     * Filter type used to filter line items to fetch.
     */
    filterType?: string;
    /**
     * SDF Version (column names, types, order) in which the entities will be
     * returned. Default to 3.
     */
    version?: string;
  }
  /**
   * Download response.
   */
  export interface Schema$DownloadResponse {
    /**
     * Retrieved ad groups in SDF format.
     */
    adGroups?: string;
    /**
     * Retrieved ads in SDF format.
     */
    ads?: string;
    /**
     * Retrieved campaigns in SDF format.
     */
    campaigns?: string;
    /**
     * Retrieved insertion orders in SDF format.
     */
    insertionOrders?: string;
    /**
     * Retrieved line items in SDF format.
     */
    lineItems?: string;
  }
  /**
   * Filter used to match traffic data in your report.
   */
  export interface Schema$FilterPair {
    /**
     * Filter type.
     */
    type?: string;
    /**
     * Filter value.
     */
    value?: string;
  }
  /**
   * List queries response.
   */
  export interface Schema$ListQueriesResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;doubleclickbidmanager#listQueriesResponse&quot;.
     */
    kind?: string;
    /**
     * Retrieved queries.
     */
    queries?: Schema$Query[];
  }
  /**
   * List reports response.
   */
  export interface Schema$ListReportsResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;doubleclickbidmanager#listReportsResponse&quot;.
     */
    kind?: string;
    /**
     * Retrieved reports.
     */
    reports?: Schema$Report[];
  }
  /**
   * Parameters of a query or report.
   */
  export interface Schema$Parameters {
    /**
     * Filters used to match traffic data in your report.
     */
    filters?: Schema$FilterPair[];
    /**
     * Data is grouped by the filters listed in this field.
     */
    groupBys?: string[];
    /**
     * Whether to include data from Invite Media.
     */
    includeInviteData?: boolean;
    /**
     * Metrics to include as columns in your report.
     */
    metrics?: string[];
    /**
     * Report type.
     */
    type?: string;
  }
  /**
   * Represents a query.
   */
  export interface Schema$Query {
    /**
     * Identifies what kind of resource this is. Value: the fixed string
     * &quot;doubleclickbidmanager#query&quot;.
     */
    kind?: string;
    /**
     * Query metadata.
     */
    metadata?: Schema$QueryMetadata;
    /**
     * Query parameters.
     */
    params?: Schema$Parameters;
    /**
     * Query ID.
     */
    queryId?: string;
    /**
     * The ending time for the data that is shown in the report. Note,
     * reportDataEndTimeMs is required if metadata.dataRange is CUSTOM_DATES and
     * ignored otherwise.
     */
    reportDataEndTimeMs?: string;
    /**
     * The starting time for the data that is shown in the report. Note,
     * reportDataStartTimeMs is required if metadata.dataRange is CUSTOM_DATES
     * and ignored otherwise.
     */
    reportDataStartTimeMs?: string;
    /**
     * Information on how often and when to run a query.
     */
    schedule?: Schema$QuerySchedule;
    /**
     * Canonical timezone code for report data time. Defaults to
     * America/New_York.
     */
    timezoneCode?: string;
  }
  /**
   * Query metadata.
   */
  export interface Schema$QueryMetadata {
    /**
     * Range of report data.
     */
    dataRange?: string;
    /**
     * Format of the generated report.
     */
    format?: string;
    /**
     * The path to the location in Google Cloud Storage where the latest report
     * is stored.
     */
    googleCloudStoragePathForLatestReport?: string;
    /**
     * The path in Google Drive for the latest report.
     */
    googleDrivePathForLatestReport?: string;
    /**
     * The time when the latest report started to run.
     */
    latestReportRunTimeMs?: string;
    /**
     * Locale of the generated reports. Valid values are cs CZECH de GERMAN en
     * ENGLISH es SPANISH fr FRENCH it ITALIAN ja JAPANESE ko KOREAN pl POLISH
     * pt-BR BRAZILIAN_PORTUGUESE ru RUSSIAN tr TURKISH uk UKRAINIAN zh-CN
     * CHINA_CHINESE zh-TW TAIWAN_CHINESE  An locale string not in the list
     * above will generate reports in English.
     */
    locale?: string;
    /**
     * Number of reports that have been generated for the query.
     */
    reportCount?: number;
    /**
     * Whether the latest report is currently running.
     */
    running?: boolean;
    /**
     * Whether to send an email notification when a report is ready. Default to
     * false.
     */
    sendNotification?: boolean;
    /**
     * List of email addresses which are sent email notifications when the
     * report is finished. Separate from sendNotification.
     */
    shareEmailAddress?: string[];
    /**
     * Query title. It is used to name the reports generated from this query.
     */
    title?: string;
  }
  /**
   * Information on how frequently and when to run a query.
   */
  export interface Schema$QuerySchedule {
    /**
     * Datetime to periodically run the query until.
     */
    endTimeMs?: string;
    /**
     * How often the query is run.
     */
    frequency?: string;
    /**
     * Time of day at which a new report will be generated, represented as
     * minutes past midnight. Range is 0 to 1439. Only applies to scheduled
     * reports.
     */
    nextRunMinuteOfDay?: number;
    /**
     * Canonical timezone code for report generation time. Defaults to
     * America/New_York.
     */
    nextRunTimezoneCode?: string;
  }
  /**
   * Represents a report.
   */
  export interface Schema$Report {
    /**
     * Key used to identify a report.
     */
    key?: Schema$ReportKey;
    /**
     * Report metadata.
     */
    metadata?: Schema$ReportMetadata;
    /**
     * Report parameters.
     */
    params?: Schema$Parameters;
  }
  /**
   * An explanation of a report failure.
   */
  export interface Schema$ReportFailure {
    /**
     * Error code that shows why the report was not created.
     */
    errorCode?: string;
  }
  /**
   * Key used to identify a report.
   */
  export interface Schema$ReportKey {
    /**
     * Query ID.
     */
    queryId?: string;
    /**
     * Report ID.
     */
    reportId?: string;
  }
  /**
   * Report metadata.
   */
  export interface Schema$ReportMetadata {
    /**
     * The path to the location in Google Cloud Storage where the report is
     * stored.
     */
    googleCloudStoragePath?: string;
    /**
     * The ending time for the data that is shown in the report.
     */
    reportDataEndTimeMs?: string;
    /**
     * The starting time for the data that is shown in the report.
     */
    reportDataStartTimeMs?: string;
    /**
     * Report status.
     */
    status?: Schema$ReportStatus;
  }
  /**
   * Report status.
   */
  export interface Schema$ReportStatus {
    /**
     * If the report failed, this records the cause.
     */
    failure?: Schema$ReportFailure;
    /**
     * The time when this report either completed successfully or failed.
     */
    finishTimeMs?: string;
    /**
     * The file type of the report.
     */
    format?: string;
    /**
     * The state of the report.
     */
    state?: string;
  }
  /**
   * Represents the upload status of a row in the request.
   */
  export interface Schema$RowStatus {
    /**
     * Whether the stored entity is changed as a result of upload.
     */
    changed?: boolean;
    /**
     * Entity Id.
     */
    entityId?: string;
    /**
     * Entity name.
     */
    entityName?: string;
    /**
     * Reasons why the entity can&#39;t be uploaded.
     */
    errors?: string[];
    /**
     * Whether the entity is persisted.
     */
    persisted?: boolean;
    /**
     * Row number.
     */
    rowNumber?: number;
  }
  /**
   * Request to run a stored query to generate a report.
   */
  export interface Schema$RunQueryRequest {
    /**
     * Report data range used to generate the report.
     */
    dataRange?: string;
    /**
     * The ending time for the data that is shown in the report. Note,
     * reportDataEndTimeMs is required if dataRange is CUSTOM_DATES and ignored
     * otherwise.
     */
    reportDataEndTimeMs?: string;
    /**
     * The starting time for the data that is shown in the report. Note,
     * reportDataStartTimeMs is required if dataRange is CUSTOM_DATES and
     * ignored otherwise.
     */
    reportDataStartTimeMs?: string;
    /**
     * Canonical timezone code for report data time. Defaults to
     * America/New_York.
     */
    timezoneCode?: string;
  }
  /**
   * Request to upload line items.
   */
  export interface Schema$UploadLineItemsRequest {
    /**
     * Set to true to get upload status without actually persisting the line
     * items.
     */
    dryRun?: boolean;
    /**
     * Format the line items are in. Default to CSV.
     */
    format?: string;
    /**
     * Line items in CSV to upload. Refer to  Entity Write File Format for more
     * information on file format.
     */
    lineItems?: string;
  }
  /**
   * Upload line items response.
   */
  export interface Schema$UploadLineItemsResponse {
    /**
     * Status of upload.
     */
    uploadStatus?: Schema$UploadStatus;
  }
  /**
   * Represents the status of upload.
   */
  export interface Schema$UploadStatus {
    /**
     * Reasons why upload can&#39;t be completed.
     */
    errors?: string[];
    /**
     * Per-row upload status.
     */
    rowStatus?: Schema$RowStatus[];
  }


  export class Resource$Lineitems {
    root: Doubleclickbidmanager;
    constructor(root: Doubleclickbidmanager) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * doubleclickbidmanager.lineitems.downloadlineitems
     * @desc Retrieves line items in CSV format. TrueView line items are not
     * supported.
     * @alias doubleclickbidmanager.lineitems.downloadlineitems
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().DownloadLineItemsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    downloadlineitems(
        params?: Params$Resource$Lineitems$Downloadlineitems,
        options?: MethodOptions):
        AxiosPromise<Schema$DownloadLineItemsResponse>;
    downloadlineitems(
        params: Params$Resource$Lineitems$Downloadlineitems,
        options: MethodOptions|
        BodyResponseCallback<Schema$DownloadLineItemsResponse>,
        callback: BodyResponseCallback<Schema$DownloadLineItemsResponse>): void;
    downloadlineitems(
        params: Params$Resource$Lineitems$Downloadlineitems,
        callback: BodyResponseCallback<Schema$DownloadLineItemsResponse>): void;
    downloadlineitems(
        callback: BodyResponseCallback<Schema$DownloadLineItemsResponse>): void;
    downloadlineitems(
        paramsOrCallback?: Params$Resource$Lineitems$Downloadlineitems|
        BodyResponseCallback<Schema$DownloadLineItemsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$DownloadLineItemsResponse>,
        callback?: BodyResponseCallback<Schema$DownloadLineItemsResponse>):
        void|AxiosPromise<Schema$DownloadLineItemsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Lineitems$Downloadlineitems;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Lineitems$Downloadlineitems;
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
                    '/doubleclickbidmanager/v1/lineitems/downloadlineitems')
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
        createAPIRequest<Schema$DownloadLineItemsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$DownloadLineItemsResponse>(parameters);
      }
    }


    /**
     * doubleclickbidmanager.lineitems.uploadlineitems
     * @desc Uploads line items in CSV format. TrueView line items are not
     * supported.
     * @alias doubleclickbidmanager.lineitems.uploadlineitems
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().UploadLineItemsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    uploadlineitems(
        params?: Params$Resource$Lineitems$Uploadlineitems,
        options?: MethodOptions): AxiosPromise<Schema$UploadLineItemsResponse>;
    uploadlineitems(
        params: Params$Resource$Lineitems$Uploadlineitems,
        options: MethodOptions|
        BodyResponseCallback<Schema$UploadLineItemsResponse>,
        callback: BodyResponseCallback<Schema$UploadLineItemsResponse>): void;
    uploadlineitems(
        params: Params$Resource$Lineitems$Uploadlineitems,
        callback: BodyResponseCallback<Schema$UploadLineItemsResponse>): void;
    uploadlineitems(
        callback: BodyResponseCallback<Schema$UploadLineItemsResponse>): void;
    uploadlineitems(
        paramsOrCallback?: Params$Resource$Lineitems$Uploadlineitems|
        BodyResponseCallback<Schema$UploadLineItemsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$UploadLineItemsResponse>,
        callback?: BodyResponseCallback<Schema$UploadLineItemsResponse>):
        void|AxiosPromise<Schema$UploadLineItemsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Lineitems$Uploadlineitems;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Lineitems$Uploadlineitems;
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
                    '/doubleclickbidmanager/v1/lineitems/uploadlineitems')
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
        createAPIRequest<Schema$UploadLineItemsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$UploadLineItemsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Lineitems$Downloadlineitems {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$DownloadLineItemsRequest;
  }
  export interface Params$Resource$Lineitems$Uploadlineitems {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$UploadLineItemsRequest;
  }


  export class Resource$Queries {
    root: Doubleclickbidmanager;
    constructor(root: Doubleclickbidmanager) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * doubleclickbidmanager.queries.createquery
     * @desc Creates a query.
     * @alias doubleclickbidmanager.queries.createquery
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().Query} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    createquery(
        params?: Params$Resource$Queries$Createquery,
        options?: MethodOptions): AxiosPromise<Schema$Query>;
    createquery(
        params: Params$Resource$Queries$Createquery,
        options: MethodOptions|BodyResponseCallback<Schema$Query>,
        callback: BodyResponseCallback<Schema$Query>): void;
    createquery(
        params: Params$Resource$Queries$Createquery,
        callback: BodyResponseCallback<Schema$Query>): void;
    createquery(callback: BodyResponseCallback<Schema$Query>): void;
    createquery(
        paramsOrCallback?: Params$Resource$Queries$Createquery|
        BodyResponseCallback<Schema$Query>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Query>,
        callback?: BodyResponseCallback<Schema$Query>):
        void|AxiosPromise<Schema$Query> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Queries$Createquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Queries$Createquery;
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
              url: (rootUrl + '/doubleclickbidmanager/v1/query')
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
        createAPIRequest<Schema$Query>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Query>(parameters);
      }
    }


    /**
     * doubleclickbidmanager.queries.deletequery
     * @desc Deletes a stored query as well as the associated stored reports.
     * @alias doubleclickbidmanager.queries.deletequery
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.queryId Query ID to delete.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    deletequery(
        params?: Params$Resource$Queries$Deletequery,
        options?: MethodOptions): AxiosPromise<void>;
    deletequery(
        params: Params$Resource$Queries$Deletequery,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    deletequery(
        params: Params$Resource$Queries$Deletequery,
        callback: BodyResponseCallback<void>): void;
    deletequery(callback: BodyResponseCallback<void>): void;
    deletequery(
        paramsOrCallback?: Params$Resource$Queries$Deletequery|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Queries$Deletequery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Queries$Deletequery;
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
              url: (rootUrl + '/doubleclickbidmanager/v1/query/{queryId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['queryId'],
        pathParams: ['queryId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }


    /**
     * doubleclickbidmanager.queries.getquery
     * @desc Retrieves a stored query.
     * @alias doubleclickbidmanager.queries.getquery
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.queryId Query ID to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getquery(
        params?: Params$Resource$Queries$Getquery,
        options?: MethodOptions): AxiosPromise<Schema$Query>;
    getquery(
        params: Params$Resource$Queries$Getquery,
        options: MethodOptions|BodyResponseCallback<Schema$Query>,
        callback: BodyResponseCallback<Schema$Query>): void;
    getquery(
        params: Params$Resource$Queries$Getquery,
        callback: BodyResponseCallback<Schema$Query>): void;
    getquery(callback: BodyResponseCallback<Schema$Query>): void;
    getquery(
        paramsOrCallback?: Params$Resource$Queries$Getquery|
        BodyResponseCallback<Schema$Query>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Query>,
        callback?: BodyResponseCallback<Schema$Query>):
        void|AxiosPromise<Schema$Query> {
      let params = (paramsOrCallback || {}) as Params$Resource$Queries$Getquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Queries$Getquery;
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
              url: (rootUrl + '/doubleclickbidmanager/v1/query/{queryId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['queryId'],
        pathParams: ['queryId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Query>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Query>(parameters);
      }
    }


    /**
     * doubleclickbidmanager.queries.listqueries
     * @desc Retrieves stored queries.
     * @alias doubleclickbidmanager.queries.listqueries
     * @memberOf! ()
     *
     * @param {object=} params Parameters for request
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listqueries(
        params?: Params$Resource$Queries$Listqueries,
        options?: MethodOptions): AxiosPromise<Schema$ListQueriesResponse>;
    listqueries(
        params: Params$Resource$Queries$Listqueries,
        options: MethodOptions|BodyResponseCallback<Schema$ListQueriesResponse>,
        callback: BodyResponseCallback<Schema$ListQueriesResponse>): void;
    listqueries(
        params: Params$Resource$Queries$Listqueries,
        callback: BodyResponseCallback<Schema$ListQueriesResponse>): void;
    listqueries(callback: BodyResponseCallback<Schema$ListQueriesResponse>):
        void;
    listqueries(
        paramsOrCallback?: Params$Resource$Queries$Listqueries|
        BodyResponseCallback<Schema$ListQueriesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListQueriesResponse>,
        callback?: BodyResponseCallback<Schema$ListQueriesResponse>):
        void|AxiosPromise<Schema$ListQueriesResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Queries$Listqueries;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Queries$Listqueries;
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
              url: (rootUrl + '/doubleclickbidmanager/v1/queries')
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
        createAPIRequest<Schema$ListQueriesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListQueriesResponse>(parameters);
      }
    }


    /**
     * doubleclickbidmanager.queries.runquery
     * @desc Runs a stored query to generate a report.
     * @alias doubleclickbidmanager.queries.runquery
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.queryId Query ID to run.
     * @param {().RunQueryRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    runquery(
        params?: Params$Resource$Queries$Runquery,
        options?: MethodOptions): AxiosPromise<void>;
    runquery(
        params: Params$Resource$Queries$Runquery,
        options: MethodOptions|BodyResponseCallback<void>,
        callback: BodyResponseCallback<void>): void;
    runquery(
        params: Params$Resource$Queries$Runquery,
        callback: BodyResponseCallback<void>): void;
    runquery(callback: BodyResponseCallback<void>): void;
    runquery(
        paramsOrCallback?: Params$Resource$Queries$Runquery|
        BodyResponseCallback<void>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<void>,
        callback?: BodyResponseCallback<void>): void|AxiosPromise<void> {
      let params = (paramsOrCallback || {}) as Params$Resource$Queries$Runquery;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Queries$Runquery;
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
              url: (rootUrl + '/doubleclickbidmanager/v1/query/{queryId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['queryId'],
        pathParams: ['queryId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<void>(parameters, callback);
      } else {
        return createAPIRequest<void>(parameters);
      }
    }
  }

  export interface Params$Resource$Queries$Createquery {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$Query;
  }
  export interface Params$Resource$Queries$Deletequery {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Query ID to delete.
     */
    queryId?: string;
  }
  export interface Params$Resource$Queries$Getquery {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Query ID to retrieve.
     */
    queryId?: string;
  }
  export interface Params$Resource$Queries$Listqueries {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;
  }
  export interface Params$Resource$Queries$Runquery {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Query ID to run.
     */
    queryId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RunQueryRequest;
  }


  export class Resource$Reports {
    root: Doubleclickbidmanager;
    constructor(root: Doubleclickbidmanager) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * doubleclickbidmanager.reports.listreports
     * @desc Retrieves stored reports.
     * @alias doubleclickbidmanager.reports.listreports
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.queryId Query ID with which the reports are associated.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    listreports(
        params?: Params$Resource$Reports$Listreports,
        options?: MethodOptions): AxiosPromise<Schema$ListReportsResponse>;
    listreports(
        params: Params$Resource$Reports$Listreports,
        options: MethodOptions|BodyResponseCallback<Schema$ListReportsResponse>,
        callback: BodyResponseCallback<Schema$ListReportsResponse>): void;
    listreports(
        params: Params$Resource$Reports$Listreports,
        callback: BodyResponseCallback<Schema$ListReportsResponse>): void;
    listreports(callback: BodyResponseCallback<Schema$ListReportsResponse>):
        void;
    listreports(
        paramsOrCallback?: Params$Resource$Reports$Listreports|
        BodyResponseCallback<Schema$ListReportsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListReportsResponse>,
        callback?: BodyResponseCallback<Schema$ListReportsResponse>):
        void|AxiosPromise<Schema$ListReportsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Reports$Listreports;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Reports$Listreports;
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
                    '/doubleclickbidmanager/v1/queries/{queryId}/reports')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['queryId'],
        pathParams: ['queryId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListReportsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListReportsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Reports$Listreports {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Query ID with which the reports are associated.
     */
    queryId?: string;
  }


  export class Resource$Sdf {
    root: Doubleclickbidmanager;
    constructor(root: Doubleclickbidmanager) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * doubleclickbidmanager.sdf.download
     * @desc Retrieves entities in SDF format.
     * @alias doubleclickbidmanager.sdf.download
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {().DownloadRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    download(params?: Params$Resource$Sdf$Download, options?: MethodOptions):
        AxiosPromise<Schema$DownloadResponse>;
    download(
        params: Params$Resource$Sdf$Download,
        options: MethodOptions|BodyResponseCallback<Schema$DownloadResponse>,
        callback: BodyResponseCallback<Schema$DownloadResponse>): void;
    download(
        params: Params$Resource$Sdf$Download,
        callback: BodyResponseCallback<Schema$DownloadResponse>): void;
    download(callback: BodyResponseCallback<Schema$DownloadResponse>): void;
    download(
        paramsOrCallback?: Params$Resource$Sdf$Download|
        BodyResponseCallback<Schema$DownloadResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$DownloadResponse>,
        callback?: BodyResponseCallback<Schema$DownloadResponse>):
        void|AxiosPromise<Schema$DownloadResponse> {
      let params = (paramsOrCallback || {}) as Params$Resource$Sdf$Download;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Sdf$Download;
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
              url: (rootUrl + '/doubleclickbidmanager/v1/sdf/download')
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
        createAPIRequest<Schema$DownloadResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$DownloadResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Sdf$Download {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;


    /**
     * Request body metadata
     */
    requestBody?: Schema$DownloadRequest;
  }
}

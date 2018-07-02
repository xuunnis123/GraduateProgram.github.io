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

export namespace sourcerepo_v1 {
  export interface Options extends GlobalOptions {
    version: 'v1';
  }

  /**
   * Cloud Source Repositories API
   *
   * Access source code repositories hosted by Google.
   *
   * @example
   * const {google} = require('googleapis');
   * const sourcerepo = google.sourcerepo('v1');
   *
   * @namespace sourcerepo
   * @type {Function}
   * @version v1
   * @variation v1
   * @param {object=} options Options for Sourcerepo
   */
  export class Sourcerepo {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    projects: Resource$Projects;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.projects = new Resource$Projects(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * Specifies the audit configuration for a service. The configuration
   * determines which permission types are logged, and what identities, if any,
   * are exempted from logging. An AuditConfig must have one or more
   * AuditLogConfigs.  If there are AuditConfigs for both `allServices` and a
   * specific service, the union of the two AuditConfigs is used for that
   * service: the log_types specified in each AuditConfig are enabled, and the
   * exempted_members in each AuditLogConfig are exempted.  Example Policy with
   * multiple AuditConfigs:      {       &quot;audit_configs&quot;: [         {
   * &quot;service&quot;: &quot;allServices&quot; &quot;audit_log_configs&quot;:
   * [             {               &quot;log_type&quot;: &quot;DATA_READ&quot;,
   * &quot;exempted_members&quot;: [ &quot;user:foo@gmail.com&quot; ] }, {
   * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,             },             {
   * &quot;log_type&quot;: &quot;ADMIN_READ&quot;,             }           ] },
   * {           &quot;service&quot;: &quot;fooservice.googleapis.com&quot;
   * &quot;audit_log_configs&quot;: [             { &quot;log_type&quot;:
   * &quot;DATA_READ&quot;,             },             { &quot;log_type&quot;:
   * &quot;DATA_WRITE&quot;,               &quot;exempted_members&quot;: [
   * &quot;user:bar@gmail.com&quot;               ]             }           ] }
   * ]     }  For fooservice, this policy enables DATA_READ, DATA_WRITE and
   * ADMIN_READ logging. It also exempts foo@gmail.com from DATA_READ logging,
   * and bar@gmail.com from DATA_WRITE logging.
   */
  export interface Schema$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: Schema$AuditLogConfig[];
    /**
     * Specifies a service that will be enabled for audit logging. For example,
     * `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a
     * special value that covers all services.
     */
    service?: string;
  }
  /**
   * Provides the configuration for logging a type of permissions. Example: {
   * &quot;audit_log_configs&quot;: [         {           &quot;log_type&quot;:
   * &quot;DATA_READ&quot;,           &quot;exempted_members&quot;: [
   * &quot;user:foo@gmail.com&quot;           ]         },         {
   * &quot;log_type&quot;: &quot;DATA_WRITE&quot;,         }       ]     }  This
   * enables &#39;DATA_READ&#39; and &#39;DATA_WRITE&#39; logging, while
   * exempting foo@gmail.com from DATA_READ logging.
   */
  export interface Schema$AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of
     * permission. Follows the same format of Binding.members.
     */
    exemptedMembers?: string[];
    /**
     * The log type that this config enables.
     */
    logType?: string;
  }
  /**
   * Associates `members` with a `role`.
   */
  export interface Schema$Binding {
    /**
     * Specifies the identities requesting access for a Cloud Platform resource.
     * `members` can have the following values:  * `allUsers`: A special
     * identifier that represents anyone who is    on the internet; with or
     * without a Google account.  * `allAuthenticatedUsers`: A special
     * identifier that represents anyone    who is authenticated with a Google
     * account or a service account.  * `user:{emailid}`: An email address that
     * represents a specific Google    account. For example, `alice@gmail.com` .
     * * `serviceAccount:{emailid}`: An email address that represents a service
     * account. For example, `my-other-app@appspot.gserviceaccount.com`.  *
     * `group:{emailid}`: An email address that represents a Google group. For
     * example, `admins@example.com`.   * `domain:{domain}`: A Google Apps
     * domain name that represents all the    users of that domain. For example,
     * `google.com` or `example.com`.
     */
    members?: string[];
    /**
     * Role that is assigned to `members`. For example, `roles/viewer`,
     * `roles/editor`, or `roles/owner`. Required
     */
    role?: string;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance:      service Foo { rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
   * representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * Response for ListRepos.  The size is not set in the returned repositories.
   */
  export interface Schema$ListReposResponse {
    /**
     * If non-empty, additional repositories exist within the project. These can
     * be retrieved by including this value in the next ListReposRequest&#39;s
     * page_token field.
     */
    nextPageToken?: string;
    /**
     * The listed repos.
     */
    repos?: Schema$Repo[];
  }
  /**
   * Configuration to automatically mirror a repository from another hosting
   * service, for example GitHub or Bitbucket.
   */
  export interface Schema$MirrorConfig {
    /**
     * ID of the SSH deploy key at the other hosting service. Removing this key
     * from the other service would deauthorize Google Cloud Source Repositories
     * from mirroring.
     */
    deployKeyId?: string;
    /**
     * URL of the main repository at the other hosting service.
     */
    url?: string;
    /**
     * ID of the webhook listening to updates to trigger mirroring. Removing
     * this webhook from the other hosting service will stop Google Cloud Source
     * Repositories from receiving notifications, and thereby disabling
     * mirroring.
     */
    webhookId?: string;
  }
  /**
   * Defines an Identity and Access Management (IAM) policy. It is used to
   * specify access control policies for Cloud Platform resources.   A `Policy`
   * consists of a list of `bindings`. A `binding` binds a list of `members` to
   * a `role`, where the members can be user accounts, Google groups, Google
   * domains, and service accounts. A `role` is a named list of permissions
   * defined by IAM.  **JSON Example**      {       &quot;bindings&quot;: [ {
   * &quot;role&quot;: &quot;roles/owner&quot;,           &quot;members&quot;: [
   * &quot;user:mike@example.com&quot;, &quot;group:admins@example.com&quot;,
   * &quot;domain:google.com&quot;,
   * &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot; ] }, {
   * &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;:
   * [&quot;user:sean@example.com&quot;]         }       ]     }  **YAML
   * Example**      bindings:     - members:       - user:mike@example.com -
   * group:admins@example.com       - domain:google.com       -
   * serviceAccount:my-other-app@appspot.gserviceaccount.com       role:
   * roles/owner     - members:       - user:sean@example.com       role:
   * roles/viewer   For a description of IAM and its features, see the [IAM
   * developer&#39;s guide](https://cloud.google.com/iam/docs).
   */
  export interface Schema$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: Schema$AuditConfig[];
    /**
     * Associates a list of `members` to a `role`. `bindings` with no members
     * will result in an error.
     */
    bindings?: Schema$Binding[];
    /**
     * `etag` is used for optimistic concurrency control as a way to help
     * prevent simultaneous updates of a policy from overwriting each other. It
     * is strongly suggested that systems make use of the `etag` in the
     * read-modify-write cycle to perform policy updates in order to avoid race
     * conditions: An `etag` is returned in the response to `getIamPolicy`, and
     * systems are expected to put that etag in the request to `setIamPolicy` to
     * ensure that their change will be applied to the same version of the
     * policy.  If no `etag` is provided in the call to `setIamPolicy`, then the
     * existing policy is overwritten blindly.
     */
    etag?: string;
    /**
     * Deprecated.
     */
    version?: number;
  }
  /**
   * Cloud Source Repositories configuration of a project.
   */
  export interface Schema$ProjectConfig {
    /**
     * Reject a Git push that contains a private key.
     */
    enablePrivateKeyCheck?: boolean;
    /**
     * The name of the project. Values are of the form
     * `projects/&lt;project&gt;`.
     */
    name?: string;
    /**
     * How this project publishes a change in the repositories through Cloud
     * Pub/Sub. Keyed by the topic names.
     */
    pubsubConfigs?: any;
  }
  /**
   * Configuration to publish a Cloud Pub/Sub message.
   */
  export interface Schema$PubsubConfig {
    /**
     * The format of the Cloud Pub/Sub messages.
     */
    messageFormat?: string;
    /**
     * Email address of the service account used for publishing Cloud Pub/Sub
     * messages. This service account needs to be in the same project as the
     * PubsubConfig. When added, the caller needs to have
     * iam.serviceAccounts.actAs permission on this service account. If
     * unspecified, it defaults to the compute engine default service account.
     */
    serviceAccountEmail?: string;
    /**
     * A topic of Cloud Pub/Sub. Values are of the form
     * `projects/&lt;project&gt;/topics/&lt;topic&gt;`. The project needs to be
     * the same project as this config is in.
     */
    topic?: string;
  }
  /**
   * A repository (or repo) is a Git repository storing versioned source
   * content.
   */
  export interface Schema$Repo {
    /**
     * How this repository mirrors a repository managed by another service.
     * Read-only field.
     */
    mirrorConfig?: Schema$MirrorConfig;
    /**
     * Resource name of the repository, of the form
     * `projects/&lt;project&gt;/repos/&lt;repo&gt;`.  The repo name may contain
     * slashes. eg, `projects/myproject/repos/name/with/slash`
     */
    name?: string;
    /**
     * How this repository publishes a change in the repository through Cloud
     * Pub/Sub. Keyed by the topic names.
     */
    pubsubConfigs?: any;
    /**
     * The disk usage of the repo, in bytes. Read-only field. Size is only
     * returned by GetRepo.
     */
    size?: string;
    /**
     * URL to clone the repository from Google Cloud Source Repositories.
     * Read-only field.
     */
    url?: string;
  }
  /**
   * Request message for `SetIamPolicy` method.
   */
  export interface Schema$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size
     * of the policy is limited to a few 10s of KB. An empty policy is a valid
     * policy but certain Cloud Platform services (such as Projects) might
     * reject them.
     */
    policy?: Schema$Policy;
    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify.
     * Only the fields in the mask will be modified. If no mask is provided, the
     * following default mask is used: paths: &quot;bindings, etag&quot; This
     * field is only used by Cloud IAM.
     */
    updateMask?: string;
  }
  /**
   * Request message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with
     * wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed.
     * For more information see [IAM
     * Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[];
  }
  /**
   * Response message for `TestIamPermissions` method.
   */
  export interface Schema$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is
     * allowed.
     */
    permissions?: string[];
  }
  /**
   * Request for UpdateProjectConfig.
   */
  export interface Schema$UpdateProjectConfigRequest {
    /**
     * The new configuration for the project.
     */
    projectConfig?: Schema$ProjectConfig;
    /**
     * A FieldMask specifying which fields of the project_config to modify. Only
     * the fields in the mask will be modified. If no mask is provided, this
     * request is no-op.
     */
    updateMask?: string;
  }
  /**
   * Request for UpdateRepo.
   */
  export interface Schema$UpdateRepoRequest {
    /**
     * The new configuration for the repository.
     */
    repo?: Schema$Repo;
    /**
     * A FieldMask specifying which fields of the repo to modify. Only the
     * fields in the mask will be modified. If no mask is provided, this request
     * is no-op.
     */
    updateMask?: string;
  }


  export class Resource$Projects {
    root: Sourcerepo;
    repos: Resource$Projects$Repos;
    constructor(root: Sourcerepo) {
      this.root = root;
      this.getRoot.bind(this);
      this.repos = new Resource$Projects$Repos(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * sourcerepo.projects.getConfig
     * @desc Returns the Cloud Source Repositories configuration of the project.
     * @alias sourcerepo.projects.getConfig
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the requested project. Values are of the form `projects/<project>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getConfig(
        params?: Params$Resource$Projects$Getconfig,
        options?: MethodOptions): AxiosPromise<Schema$ProjectConfig>;
    getConfig(
        params: Params$Resource$Projects$Getconfig,
        options: MethodOptions|BodyResponseCallback<Schema$ProjectConfig>,
        callback: BodyResponseCallback<Schema$ProjectConfig>): void;
    getConfig(
        params: Params$Resource$Projects$Getconfig,
        callback: BodyResponseCallback<Schema$ProjectConfig>): void;
    getConfig(callback: BodyResponseCallback<Schema$ProjectConfig>): void;
    getConfig(
        paramsOrCallback?: Params$Resource$Projects$Getconfig|
        BodyResponseCallback<Schema$ProjectConfig>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ProjectConfig>,
        callback?: BodyResponseCallback<Schema$ProjectConfig>):
        void|AxiosPromise<Schema$ProjectConfig> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Getconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Getconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}/config')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ProjectConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ProjectConfig>(parameters);
      }
    }


    /**
     * sourcerepo.projects.updateConfig
     * @desc Updates the Cloud Source Repositories configuration of the project.
     * @alias sourcerepo.projects.updateConfig
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the requested project. Values are of the form `projects/<project>`.
     * @param {().UpdateProjectConfigRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    updateConfig(
        params?: Params$Resource$Projects$Updateconfig,
        options?: MethodOptions): AxiosPromise<Schema$ProjectConfig>;
    updateConfig(
        params: Params$Resource$Projects$Updateconfig,
        options: MethodOptions|BodyResponseCallback<Schema$ProjectConfig>,
        callback: BodyResponseCallback<Schema$ProjectConfig>): void;
    updateConfig(
        params: Params$Resource$Projects$Updateconfig,
        callback: BodyResponseCallback<Schema$ProjectConfig>): void;
    updateConfig(callback: BodyResponseCallback<Schema$ProjectConfig>): void;
    updateConfig(
        paramsOrCallback?: Params$Resource$Projects$Updateconfig|
        BodyResponseCallback<Schema$ProjectConfig>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ProjectConfig>,
        callback?: BodyResponseCallback<Schema$ProjectConfig>):
        void|AxiosPromise<Schema$ProjectConfig> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Updateconfig;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Updateconfig;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}/config')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ProjectConfig>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ProjectConfig>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Getconfig {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the requested project. Values are of the form
     * `projects/<project>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Updateconfig {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the requested project. Values are of the form
     * `projects/<project>`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateProjectConfigRequest;
  }

  export class Resource$Projects$Repos {
    root: Sourcerepo;
    constructor(root: Sourcerepo) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * sourcerepo.projects.repos.create
     * @desc Creates a repo in the given project with the given name.  If the
     * named repository already exists, `CreateRepo` returns `ALREADY_EXISTS`.
     * @alias sourcerepo.projects.repos.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.parent The project in which to create the repo. Values are of the form `projects/<project>`.
     * @param {().Repo} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Projects$Repos$Create,
        options?: MethodOptions): AxiosPromise<Schema$Repo>;
    create(
        params: Params$Resource$Projects$Repos$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Repo>,
        callback: BodyResponseCallback<Schema$Repo>): void;
    create(
        params: Params$Resource$Projects$Repos$Create,
        callback: BodyResponseCallback<Schema$Repo>): void;
    create(callback: BodyResponseCallback<Schema$Repo>): void;
    create(
        paramsOrCallback?: Params$Resource$Projects$Repos$Create|
        BodyResponseCallback<Schema$Repo>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Repo>,
        callback?: BodyResponseCallback<Schema$Repo>):
        void|AxiosPromise<Schema$Repo> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Repos$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Repos$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+parent}/repos')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['parent'],
        pathParams: ['parent'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Repo>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Repo>(parameters);
      }
    }


    /**
     * sourcerepo.projects.repos.delete
     * @desc Deletes a repo.
     * @alias sourcerepo.projects.repos.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the repo to delete. Values are of the form `projects/<project>/repos/<repo>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Projects$Repos$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Projects$Repos$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Projects$Repos$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Projects$Repos$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Repos$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Repos$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * sourcerepo.projects.repos.get
     * @desc Returns information about a repo.
     * @alias sourcerepo.projects.repos.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the requested repository. Values are of the form `projects/<project>/repos/<repo>`.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Projects$Repos$Get,
        options?: MethodOptions): AxiosPromise<Schema$Repo>;
    get(params: Params$Resource$Projects$Repos$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Repo>,
        callback: BodyResponseCallback<Schema$Repo>): void;
    get(params: Params$Resource$Projects$Repos$Get,
        callback: BodyResponseCallback<Schema$Repo>): void;
    get(callback: BodyResponseCallback<Schema$Repo>): void;
    get(paramsOrCallback?: Params$Resource$Projects$Repos$Get|
        BodyResponseCallback<Schema$Repo>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Repo>,
        callback?: BodyResponseCallback<Schema$Repo>):
        void|AxiosPromise<Schema$Repo> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Repos$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Repos$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Repo>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Repo>(parameters);
      }
    }


    /**
     * sourcerepo.projects.repos.getIamPolicy
     * @desc Gets the access control policy for a resource. Returns an empty
     * policy if the resource exists and does not have a policy set.
     * @alias sourcerepo.projects.repos.getIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    getIamPolicy(
        params?: Params$Resource$Projects$Repos$Getiampolicy,
        options?: MethodOptions): AxiosPromise<Schema$Policy>;
    getIamPolicy(
        params: Params$Resource$Projects$Repos$Getiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        params: Params$Resource$Projects$Repos$Getiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    getIamPolicy(
        paramsOrCallback?: Params$Resource$Projects$Repos$Getiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|AxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Repos$Getiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Repos$Getiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:getIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }


    /**
     * sourcerepo.projects.repos.list
     * @desc Returns all repos belonging to a project. The sizes of the repos
     * are not set by ListRepos.  To get the size of a repo, use GetRepo.
     * @alias sourcerepo.projects.repos.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The project ID whose repos should be listed. Values are of the form `projects/<project>`.
     * @param {integer=} params.pageSize Maximum number of repositories to return; between 1 and 500. If not set or zero, defaults to 100 at the server.
     * @param {string=} params.pageToken Resume listing repositories where a prior ListReposResponse left off. This is an opaque token that must be obtained from a recent, prior ListReposResponse's next_page_token field.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(params?: Params$Resource$Projects$Repos$List, options?: MethodOptions):
        AxiosPromise<Schema$ListReposResponse>;
    list(
        params: Params$Resource$Projects$Repos$List,
        options: MethodOptions|BodyResponseCallback<Schema$ListReposResponse>,
        callback: BodyResponseCallback<Schema$ListReposResponse>): void;
    list(
        params: Params$Resource$Projects$Repos$List,
        callback: BodyResponseCallback<Schema$ListReposResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListReposResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Projects$Repos$List|
        BodyResponseCallback<Schema$ListReposResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListReposResponse>,
        callback?: BodyResponseCallback<Schema$ListReposResponse>):
        void|AxiosPromise<Schema$ListReposResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Repos$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Repos$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/v1/{+name}/repos').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListReposResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListReposResponse>(parameters);
      }
    }


    /**
     * sourcerepo.projects.repos.patch
     * @desc Updates information about a repo.
     * @alias sourcerepo.projects.repos.patch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name The name of the requested repository. Values are of the form `projects/<project>/repos/<repo>`.
     * @param {().UpdateRepoRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    patch(
        params?: Params$Resource$Projects$Repos$Patch,
        options?: MethodOptions): AxiosPromise<Schema$Repo>;
    patch(
        params: Params$Resource$Projects$Repos$Patch,
        options: MethodOptions|BodyResponseCallback<Schema$Repo>,
        callback: BodyResponseCallback<Schema$Repo>): void;
    patch(
        params: Params$Resource$Projects$Repos$Patch,
        callback: BodyResponseCallback<Schema$Repo>): void;
    patch(callback: BodyResponseCallback<Schema$Repo>): void;
    patch(
        paramsOrCallback?: Params$Resource$Projects$Repos$Patch|
        BodyResponseCallback<Schema$Repo>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Repo>,
        callback?: BodyResponseCallback<Schema$Repo>):
        void|AxiosPromise<Schema$Repo> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Projects$Repos$Patch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Repos$Patch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'PATCH'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Repo>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Repo>(parameters);
      }
    }


    /**
     * sourcerepo.projects.repos.setIamPolicy
     * @desc Sets the access control policy on the specified resource. Replaces
     * any existing policy.
     * @alias sourcerepo.projects.repos.setIamPolicy
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
     * @param {().SetIamPolicyRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    setIamPolicy(
        params?: Params$Resource$Projects$Repos$Setiampolicy,
        options?: MethodOptions): AxiosPromise<Schema$Policy>;
    setIamPolicy(
        params: Params$Resource$Projects$Repos$Setiampolicy,
        options: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        params: Params$Resource$Projects$Repos$Setiampolicy,
        callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
    setIamPolicy(
        paramsOrCallback?: Params$Resource$Projects$Repos$Setiampolicy|
        BodyResponseCallback<Schema$Policy>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Policy>,
        callback?: BodyResponseCallback<Schema$Policy>):
        void|AxiosPromise<Schema$Policy> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Repos$Setiampolicy;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Repos$Setiampolicy;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:setIamPolicy')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Policy>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Policy>(parameters);
      }
    }


    /**
     * sourcerepo.projects.repos.testIamPermissions
     * @desc Returns permissions that a caller has on the specified resource. If
     * the resource does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.
     * @alias sourcerepo.projects.repos.testIamPermissions
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
     * @param {().TestIamPermissionsRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    testIamPermissions(
        params?: Params$Resource$Projects$Repos$Testiampermissions,
        options?: MethodOptions):
        AxiosPromise<Schema$TestIamPermissionsResponse>;
    testIamPermissions(
        params: Params$Resource$Projects$Repos$Testiampermissions,
        options: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        params: Params$Resource$Projects$Repos$Testiampermissions,
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void;
    testIamPermissions(
        paramsOrCallback?: Params$Resource$Projects$Repos$Testiampermissions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$TestIamPermissionsResponse>,
        callback?: BodyResponseCallback<Schema$TestIamPermissionsResponse>):
        void|AxiosPromise<Schema$TestIamPermissionsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Projects$Repos$Testiampermissions;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Projects$Repos$Testiampermissions;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl = options.rootUrl || 'https://sourcerepo.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v1/{+resource}:testIamPermissions')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['resource'],
        pathParams: ['resource'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$TestIamPermissionsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$TestIamPermissionsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Projects$Repos$Create {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project in which to create the repo. Values are of the form
     * `projects/<project>`.
     */
    parent?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Repo;
  }
  export interface Params$Resource$Projects$Repos$Delete {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the repo to delete. Values are of the form
     * `projects/<project>/repos/<repo>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Repos$Get {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the requested repository. Values are of the form
     * `projects/<project>/repos/<repo>`.
     */
    name?: string;
  }
  export interface Params$Resource$Projects$Repos$Getiampolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being requested. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;
  }
  export interface Params$Resource$Projects$Repos$List {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The project ID whose repos should be listed. Values are of the form
     * `projects/<project>`.
     */
    name?: string;
    /**
     * Maximum number of repositories to return; between 1 and 500. If not set
     * or zero, defaults to 100 at the server.
     */
    pageSize?: number;
    /**
     * Resume listing repositories where a prior ListReposResponse left off.
     * This is an opaque token that must be obtained from a recent, prior
     * ListReposResponse's next_page_token field.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Projects$Repos$Patch {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The name of the requested repository. Values are of the form
     * `projects/<project>/repos/<repo>`.
     */
    name?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$UpdateRepoRequest;
  }
  export interface Params$Resource$Projects$Repos$Setiampolicy {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy is being specified. See the
     * operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$SetIamPolicyRequest;
  }
  export interface Params$Resource$Projects$Repos$Testiampermissions {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * REQUIRED: The resource for which the policy detail is being requested.
     * See the operation documentation for the appropriate value for this field.
     */
    resource?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$TestIamPermissionsRequest;
  }
}

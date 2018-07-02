// Copyright 2018, Google, LLC.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*! THIS FILE IS AUTO-GENERATED */

import {getAPI, GoogleConfigurable} from '../../shared/src';
import {dataproc_v1} from './v1';
import {dataproc_v1beta2} from './v1beta2';

export const VERSIONS = {
  'v1': dataproc_v1.Dataproc,
  'v1beta2': dataproc_v1beta2.Dataproc,
};

export function dataproc(version: 'v1'): dataproc_v1.Dataproc;
export function dataproc(options: dataproc_v1.Options): dataproc_v1.Dataproc;
export function dataproc(version: 'v1beta2'): dataproc_v1beta2.Dataproc;
export function dataproc(options: dataproc_v1beta2.Options):
    dataproc_v1beta2.Dataproc;
export function dataproc<T = dataproc_v1.Dataproc | dataproc_v1beta2.Dataproc>(
    this: GoogleConfigurable,
    versionOrOptions: 'v1'|dataproc_v1.Options|'v1beta2'|
    dataproc_v1beta2.Options) {
  return getAPI<T>('dataproc', versionOrOptions, VERSIONS, this);
}

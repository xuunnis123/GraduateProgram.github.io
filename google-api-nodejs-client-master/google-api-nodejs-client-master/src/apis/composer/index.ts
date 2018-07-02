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
import {composer_v1beta1} from './v1beta1';

export const VERSIONS = {
  'v1beta1': composer_v1beta1.Composer,
};

export function composer(version: 'v1beta1'): composer_v1beta1.Composer;
export function composer(options: composer_v1beta1.Options):
    composer_v1beta1.Composer;
export function composer<T = composer_v1beta1.Composer>(
    this: GoogleConfigurable,
    versionOrOptions: 'v1beta1'|composer_v1beta1.Options) {
  return getAPI<T>('composer', versionOrOptions, VERSIONS, this);
}

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
import {language_v1} from './v1';
import {language_v1beta1} from './v1beta1';
import {language_v1beta2} from './v1beta2';

export const VERSIONS = {
  'v1': language_v1.Language,
  'v1beta1': language_v1beta1.Language,
  'v1beta2': language_v1beta2.Language,
};

export function language(version: 'v1'): language_v1.Language;
export function language(options: language_v1.Options): language_v1.Language;
export function language(version: 'v1beta1'): language_v1beta1.Language;
export function language(options: language_v1beta1.Options):
    language_v1beta1.Language;
export function language(version: 'v1beta2'): language_v1beta2.Language;
export function language(options: language_v1beta2.Options):
    language_v1beta2.Language;
export function language<
    T = language_v1.Language | language_v1beta1.Language |
        language_v1beta2.Language>(
    this: GoogleConfigurable,
    versionOrOptions: 'v1'|language_v1.Options|'v1beta1'|
    language_v1beta1.Options|'v1beta2'|language_v1beta2.Options) {
  return getAPI<T>('language', versionOrOptions, VERSIONS, this);
}

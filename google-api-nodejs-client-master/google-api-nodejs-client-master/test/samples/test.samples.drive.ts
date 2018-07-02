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

import assert from 'assert';
import * as fs from 'fs';
import nock from 'nock';
import * as os from 'os';
import * as path from 'path';

import {Utils} from './../utils';

nock.disableNetConnect();

// tslint:disable: no-any
const samples: any = {
  download: require('../../../samples/drive/download'),
  export: require('../../../samples/drive/export'),
  list: require('../../../samples/drive/list'),
  upload: require('../../../samples/drive/upload')
};

for (const p in samples) {
  if (samples[p]) {
    samples[p].client.credentials = {access_token: 'not-a-token'};
  }
}

const someFile = path.resolve('test/fixtures/public.pem');

describe('Drive samples', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should download the file', async () => {
    const fileId = '0B7l5uajXUzaFa0x6cjJfZEkzZVE';
    const scope = nock(Utils.baseUrl)
                      .get(`/drive/v3/files/${fileId}?alt=media`)
                      .replyWithFile(200, someFile);
    const filePath = await samples.download.runSample(fileId);
    assert(fs.existsSync(filePath));
    scope.done();
  });

  it('should download the doc', async () => {
    const fileId = '1ZdR3L3qP4Bkq8noWLJHSr_iBau0DNT4Kli4SxNc2YEo';
    const scope =
        nock(Utils.baseUrl)
            .get(`/drive/v3/files/${fileId}/export?mimeType=application%2Fpdf`)
            .replyWithFile(200, someFile);
    await samples.export.runSample();
    assert(fs.existsSync(`${os.tmpdir()}/resume.pdf`));
    scope.done();
  });

  it('should list all the docs', async () => {
    const scope =
        nock(Utils.baseUrl).get(`/drive/v3/files?pageSize=3`).reply(200, {});
    const data = await samples.list.runSample();
    assert(data);
    scope.done();
  });

  it('should upload a file', async () => {
    const scope = nock(Utils.baseUrl)
                      .post(`/upload/drive/v3/files?uploadType=multipart`)
                      .reply(200, {});
    const data = await samples.upload.runSample(someFile);
    assert(data);
    scope.done();
  });
});

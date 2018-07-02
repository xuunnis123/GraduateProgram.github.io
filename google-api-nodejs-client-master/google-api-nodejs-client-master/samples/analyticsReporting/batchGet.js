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

'use strict';

const { google } = require('googleapis');
const sampleClient = require('../sampleclient');

const analyticsreporting = google.analyticsreporting({
  version: 'v4',
  auth: sampleClient.oAuth2Client
});

async function runSample () {
  const res = await analyticsreporting.reports.batchGet({
    requestBody: {
      reportRequests: [{
        viewId: '65704806',
        dateRanges: [
          {
            startDate: '2018-03-17',
            endDate: '2018-03-24'
          }, {
            startDate: '14daysAgo',
            endDate: '7daysAgo'
          }
        ],
        metrics: [
          {
            expression: 'ga:users'
          }
        ]
      }]
    }
  });
  console.log(res.data);
  return res.data;
}

// if invoked directly (not tests), authenticate and run the samples
if (module === require.main) {
  const scopes = ['https://www.googleapis.com/auth/analytics'];
  sampleClient.authenticate(scopes)
    .then(c => runSample())
    .catch(e => console.error);
}

// export functions for testing purposes
module.exports = {
  runSample,
  client: sampleClient.oAuth2Client
};

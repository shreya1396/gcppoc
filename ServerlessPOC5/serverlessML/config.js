/*
   Copyright 2016, Google, Inc.
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

module.exports = {
  projectId: 'booklibrary-229314',
  keyFilename: './key.json',
  bucketName: 'libbucket',
  cookieSecret: '[cookie signing key]',
  oauth2: {
    clientId: '303080532565-ba3qckk7ii3cb8a6tg3ismktp8oof82e.apps.googleusercontent.com',
    clientSecret: '-xB5xlMtlxqLnDOxzttPPsxG',
    redirectUrl: process.env.REDIRECT_URL || 'https://8080-dot-6112332-dot-devshell.appspot.com/oauth2callback'
  }
};

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

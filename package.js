Package.describe({
  name: 'joadr:orion-languages',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Languages package for Orion\'s dictionary',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/joadr/orion-languages',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('ecmascript');
  api.use('session');
  api.use('orionjs:core@1.8.0');
  api.use('orionjs:dictionary@1.8.0');

  api.addFiles([
    'orion-languages-client.js',
  ], 'client');

  api.addFiles([
    'orion-languages.js',
  ]);

  api.export('orion');
});



Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('joadr:orion-languages');
  api.mainModule('orion-languages-tests.js');
});

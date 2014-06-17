Package.describe({
  summary: "Login service for Salesforce accounts",
  internal: true
});

Package.on_use(function(api) {
  api.use('oauth', ['client', 'server']);
  api.use('http', ['client', 'server']);
  api.use('service-configuration', ['client', 'server']);
  api.use('templating', 'client');

  api.add_files(
    ['salesforce_configure.html', 'salesforce_configure.js'],
    'client');

  api.add_files('salesforce_common.js', ['client', 'server']);
  api.add_files('salesforce_server.js', 'server');
  api.add_files('salesforce_client.js', 'client');

  api.export('Salesforce');
});

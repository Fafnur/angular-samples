const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,
  remotes: [
    ['redux-ngrx', 'https://ngrx.fafn.ru'],
    ['redux-ngxs', 'https://ngxs.fafn.ru'],
    ['redux-akita', 'https://akita.fafn.ru'],
    ['redux-native', 'https://native.fafn.ru'],
  ],
});

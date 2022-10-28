// const baseConfig = require('../../../module-federation.config');

module.exports = {
  // ...baseConfig,
  name: 'redux-dashboard',
  remotes: ['redux-ngrx', 'redux-ngxs', 'redux-akita'],
};

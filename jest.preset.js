const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  testEnvironment: `${__dirname}/jest.jsdom.js`,
  collectCoverage: true,
  coverageDirectory: `${process.env.NX_WORKSPACE_ROOT}/coverage/${process.env['NX_TASK_TARGET_PROJECT']}`,
};

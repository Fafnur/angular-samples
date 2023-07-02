const JSDOMEnvironment = require('jest-environment-jsdom').default;
const { TextEncoder, TextDecoder } = require('util');

class JSDOMEnvironmentExtended extends JSDOMEnvironment {
  async setup() {
    await super.setup();

    if (typeof this.global.TextEncoder === 'undefined') {
      this.global.TextEncoder = TextEncoder;
      this.global.TextDecoder = TextDecoder;
    }
  }
}

module.exports = JSDOMEnvironmentExtended;

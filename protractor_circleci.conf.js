const { onPrepare } = require('./src/OnPrepare');
const { onCleanUp } = require('./src/OnCleanUp');

exports.config = {
  framework: 'jasmine2',
  allScriptsTimeout: 30000,
  getPageTimeout: 30000,

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 80000,
  },

  baseUrl: 'http://localhost:4200',
  seleniumAddress: process.env.SELENIUM_ADDRESS || 'http://selenium.dev-blackrockng.com:4444/wd/hub',

  multiCapabilities: [
    {
      specs: ['./src/**/*.spec.js'],
      browserName: 'chrome',
      name: 'Chrome',
      enableVNC: true,
      enableVideo: false,
      shardTestFiles: true,
      maxInstances: 2,
    },
  ],
  onPrepare,
  onCleanUp,
};


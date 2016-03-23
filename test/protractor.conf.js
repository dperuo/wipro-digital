exports.config = {
  directConnect: true,
  framework: 'jasmine',
  jasmineNodeOpts: { showColors: true },
  // baseUrl: 'http://localhost:8000',
  specs: [
    './**/*.spec.js',
    '../src/js/**/*.spec.js'
  ]
};

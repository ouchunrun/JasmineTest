module.exports = function(config) {
  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: ['./practiceSpec.js', ],
    reporters: ['progress', 'junit', 'html'],
    junitReporter: {outputFile: 'test-results.xml'},
    htmlReporter: {
      outputFile: 'test-units.html',
      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: 'A sample project description',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // Start these browsers, currently available:
    // - Chrome, ChromeCanary, Firefox, Opera, Safari (only Mac), PhantomJS,
    //IE (only Windows)
    browsers : ['Chrome', 'Firefox'] ,
    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 20000,
    // Auto run tests on start (when browsers are captured) and exit
    singleRun: false,
    // report which specs are slower than 500ms
    reportSlowerThan: 500,
    // compile coffee scripts
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-junit-reporter',
      'karma-phantomjs-launcher',
      'karma-htmlfile-reporter'
    ]
  });
};
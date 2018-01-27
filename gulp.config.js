var config = {
  reportsPath: './reports',
  protractorReportPath: './reports/protractor',
  pa11yReportPath: './reports/pa11y',
  allAppJs: 'src/app/**/*.js',
  testFrameworkJs: 'src/test/**/*.js',

  /*
   * Karma and test settings
   */
  karmaConf: __dirname + '/karma.conf.js',
  karmaPlugins: ['karma-jasmine', 'karma-coverage', 'karma-phantomjs-launcher',
    'karma-chrome-launcher', 'karma-sinon', 'karma-junit-reporter', 'karma-ng-html2js-preprocessor']
};

module.exports = config;
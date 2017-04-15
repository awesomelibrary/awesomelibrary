function translation($translateProvider) {
  'ngInject';
  $translateProvider.preferredLanguage('en');
  $translateProvider.useSanitizeValueStrategy('escape');
}

module.exports = translation;

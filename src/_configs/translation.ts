export function translationConfig($translateProvider) {
  'ngInject';
  $translateProvider.preferredLanguage('en');
  $translateProvider.useSanitizeValueStrategy('escape');
}

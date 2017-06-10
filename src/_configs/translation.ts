export const translationConfig = ['$translateProvider', function($translateProvider) {
  $translateProvider.preferredLanguage('en');
  $translateProvider.useSanitizeValueStrategy('escape');
  $translateProvider.useLocalStorage();
}];

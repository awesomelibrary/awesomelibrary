function animateConfig($animateProvider) {
  'ngInject';
  $animateProvider.classNameFilter(/animate/);
}

module.exports = animateConfig;

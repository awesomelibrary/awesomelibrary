/**
 * @ngInject
 */
function animateConfig($animateProvider) {
  $animateProvider.classNameFilter(/animate/);
}

module.exports = animateConfig;

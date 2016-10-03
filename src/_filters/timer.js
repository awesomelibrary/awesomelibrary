/**
 * @ngInject
 */
function timerFilterFactory($window) {

  function timerFilter(input) {

    var output;
    var m;
    var s;

    // if it is not number, return null
    if (!$window.angular.isNumber(input)) {
      return null;
    }
    // round to 1 second
    input = Math.round(input / 1000);
    if (input < 0) {
      output = '-';
      input = -input;
    } else {
      output = '';
    }
    m = Math.floor(input / 60);
    output += (m < 10 ? '0' + m : m) + ':';
    s = input % 60;
    output += s < 10 ? '0' + s : s;

    return output;
  }

  return timerFilter;

}

module.exports = timerFilterFactory;

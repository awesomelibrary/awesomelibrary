angular.module('humanLibrary.filters', []).
filter('timer', function() {
  return function(input) {
    // if it is not number, return null
    if (!angular.isNumber) {
      return null;
    }
    // round to 1 second
    input = Math.round(input / 1000);
    var output;
    if (input < 0) {
      output = '-';
      input = -input;
    } else {
      output = '';
    }
    var m = Math.floor(input / 60);
    output += (m < 10 ? '0' + m : m) + ':';
    var s = input % 60;
    output += s < 10 ? '0' + s : s;

    return output;
  };
});

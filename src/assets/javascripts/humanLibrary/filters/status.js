'use strict';

/**
 * @returns {statusFilter}
 * @ngInject
 */
function statusFilterFactory() {

  function statusFilter(input, filters) {
    var output = [];
    for (var i = 0; i < input.length; i++) {
      if ((filters.showAvailable && input[i].status == 'available') || (filters.showRented && input[i].status == 'rented') || (filters.showOnBreak && input[i].status == 'break') || (filters.showAbsent && input[i].status == 'absent')) {
        output.push(input[i]);
      }
    }
    return output;
  }

  return statusFilter;

}

module.exports = statusFilterFactory;

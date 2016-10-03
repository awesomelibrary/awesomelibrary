/**
 * @returns {compareUnavailableHumanBooksService}
 * @ngInject
 */
function compareUnavailableHumanBooksServiceFactory() {

  function compareUnavailableHumanBooksService(a, b) {

    var now;
    var aTime;
    var bTime;

    if (a.model.available && b.model.available) {
      now = new Date();
      aTime = now - a.model.currentRental().rentedAt;
      bTime = now - b.model.currentRental().rentedAt;
      if (bTime > aTime) {
        return 1;
      }
      if (aTime > bTime) {
        return -1;
      }
      return 0;
    }

    if (!a.model.available && b.model.available) {
      return 1;
    }
    if (a.model.available && !b.model.available) {
      return -1;
    }
    return 0;

  }

  return compareUnavailableHumanBooksService;

}

module.exports = compareUnavailableHumanBooksServiceFactory;

export function compareAvailableHumanBooksServiceFactory() {

  function compareAvailableHumanBooksService(a, b) {
    if (!a.model.isRentable() && b.model.isRentable()) {
      return 1;
    }
    if (a.model.isRentable() && !b.model.isRentable()) {
      return -1;
    }
    if (!a.model.isRentable() && !b.model.isRentable()) {
      if (a.model.currentRental().rentedAt > b.model.currentRental().rentedAt) {
        return 1;
      }
      if (a.model.currentRental().rentedAt < b.model.currentRental().rentedAt) {
        return -1;
      }
    }
    if (a.model.title > b.model.title) {
      return 1;
    }
    if (b.model.title > a.model.title) {
      return -1;
    }
    return 0;
  }

  return compareAvailableHumanBooksService;

}

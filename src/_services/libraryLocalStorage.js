/**
 * @param $window
 * @param librarySerializer
 * @returns {libraryLocalStorageServiceFactory.LibraryLocalStorage}
 * @ngInject
 */
function libraryLocalStorageServiceFactory($window, librarySerializer) {

  /**
   * @private
   * @throws Local storage not available
   */
  function checkIfLocalStorageIsAvailable() {
    if ($window.angular.isUndefined($window.Storage)) {
      throw new Error('Local storage not available');
    }
  }

  /**
   * @constructor
   */
  function LibraryLocalStorage() {}

  LibraryLocalStorage.prototype.save = function(library) {
    checkIfLocalStorageIsAvailable();
    $window.localStorage.humanLibrary = librarySerializer.serialize(library);
  };

  LibraryLocalStorage.prototype.load = function() {

    checkIfLocalStorageIsAvailable();

    if ($window.angular.isUndefined($window.localStorage.humanLibrary)) {
      return;
    }

    return librarySerializer.deserialize($window.localStorage.humanLibrary);

  };

  return new LibraryLocalStorage();

}

module.exports = libraryLocalStorageServiceFactory;

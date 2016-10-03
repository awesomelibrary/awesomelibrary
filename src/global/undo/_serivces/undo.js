/**
 * @returns {undoService}
 * @ngInject
 */
function undoServiceFactory($window, $timeout) {

  var bubble = {
    dismiss: dismiss,
    hidden: true
  };
  var timeoutPromise;

  function clear() {
    bubble.hidden = true;
  }

  function done(message, undoFunction) {

    timeoutPromise = $timeout(clear, 15000);

    bubble.hidden = false;
    bubble.message = message;

    if ($window.angular.isUndefined(undoFunction)) {
      delete bubble.undo;
      return;
    }

    bubble.undo = function() {
      $timeout.cancel(timeoutPromise);
      clear();
      undoFunction();
    };

  }

  function dismiss() {
    $timeout.cancel(timeoutPromise);
    clear();
  }

  return {
    done: done,
    bubble: bubble
  };

}

module.exports = undoServiceFactory;

export function undoServiceFactory($window, $timeout) {
  'ngInject';

  var timeoutPromise;
  var bubble: {
    dismiss: Function;
    hidden: boolean;
    message?: string;
    undo?: Function;
  } = {
    dismiss: dismiss,
    hidden: true
  };

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

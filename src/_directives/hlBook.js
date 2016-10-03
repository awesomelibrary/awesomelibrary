'use strict';

/**
 * @returns {{restrict: string, link: link}}
 * @ngInject
 */
function hlBookDirective() {

  function link($scope) {
    // progress bar and timer
    var Progress = (function() {
      function Progress(book) {
        this.book = book;
        this.percent = 0;
        this.timer = 0;
        this.status = '';
        this.refresh();
      }

      Progress.prototype.refresh = function() {

        var period;
        var timer;

        if (null === this.book.currentRental()) {
          this.percent = 0;
          this.timer = 0;
          this.status = '';
        } else {
          this.timer = this.book.currentRental().period + this.book.currentRental().rentedAt - (new Date()).getTime();
          period = Math.round(this.book.currentRental().period / 1000);
          timer = Math.round(this.timer / 1000);
          this.percent = (period - timer) / (period) * 100;
          if (this.percent > 100) {
            this.percent = 100;
          }
          if (timer <= 0) {
            this.status = 'danger';
          } else if (this.percent > 80) {
            this.status = 'warning';
          } else {
            this.status = '';
          }
        }
      };

      return Progress;
    })();

    $scope.progress = new Progress($scope.book);

    $scope.$on('tick', function() {
      $scope.progress.refresh();
    });

    $scope.$watch(function() {
      return $scope.book.currentRental();
    }, function() {
      $scope.progress.refresh();
    });
  }

  return {
    restrict: 'A',
    link: link
  };

}

module.exports = hlBookDirective;

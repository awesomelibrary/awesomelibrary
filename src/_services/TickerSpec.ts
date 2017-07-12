import angular from 'angular';
import {humanLibraryModule} from '../';

describe('Given service Ticker', () => {

  beforeEach(function() {
    angular.mock.module(humanLibraryModule);
    angular.mock.inject((ticker, $interval, $rootScope) => {
      this.ticker = ticker;
      this.$interval = $interval;
      this.$rootScope = $rootScope;
      spyOn(this.$rootScope, '$broadcast').and.callThrough();
    });
  });

  describe('When started and one second passes', () => {

    beforeEach(function() {
      this.ticker.start();
      this.$interval.flush(1000);
    });

    it('Then should tick once', function() {
      expect(this.$rootScope.$broadcast).toHaveBeenCalledWith('tick');
    });

    it('and one second pass again Then should tick second time', function() {
      this.$rootScope.$broadcast.calls.reset();
      this.$interval.flush(1000);
      expect(this.$rootScope.$broadcast).toHaveBeenCalledWith('tick');
    });

  });

  it('When not started and one second passes Then should not tick', function() {
    this.$interval.flush(1000);
    expect(this.$rootScope.$broadcast).not.toHaveBeenCalledWith('tick');
  });

});

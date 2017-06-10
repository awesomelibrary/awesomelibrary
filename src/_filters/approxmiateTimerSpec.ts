import angular from 'angular';
import {humanLibraryModule} from '../index';
import * as moment from 'moment';

describe('approximateTimer filter', () => {

  function generateRental(minutes) {
    const period = 1800000;
    return {period, rentedAt: moment(moment().valueOf() - period).add(minutes, 'm').valueOf()};
  }

  beforeEach(function() {
    angular.mock.module(humanLibraryModule);
    angular.mock.inject(($filter) => {
      this.approximateTimerFilter = $filter('approximateTimer');
    });
  });

  it('when null should be null', function() {
    expect(this.approximateTimerFilter(null)).toBe(null);
  });

  it('when 5 minutes left should be 5', function() {
    expect(this.approximateTimerFilter(generateRental(5))).toEqual('5');
  });

  it('when 4 minutes left should be 5', function() {
    expect(this.approximateTimerFilter(generateRental(4))).toEqual('5');
  });

  it('when 6 minutes left should be 10', function() {
    expect(this.approximateTimerFilter(generateRental(6))).toEqual('10');
  });

  it('when 6 minutes left should be 10', function() {
    expect(this.approximateTimerFilter(generateRental(6))).toEqual('10');
  });

  it('when 1 minutes left should be 5', function() {
    expect(this.approximateTimerFilter(generateRental(1))).toEqual('5');
  });

  it('when -4 minutes left should be 2', function() {
    expect(this.approximateTimerFilter(generateRental(-4))).toEqual('2');
  });

  it('when -50 minutes left should be 2', function() {
    expect(this.approximateTimerFilter(generateRental(-50))).toEqual('2');
  });

});

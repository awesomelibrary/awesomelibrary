import {IIntervalService, IRootScope} from 'angular';

export class Ticker {

  public static $inject: string[] = [
    '$interval',
    '$rootScope'
  ];

  constructor(
    private $interval: IIntervalService,
    private $rootScope: IRootScope
  ) {}

  public start(): void {
    this.$interval(() => {
      this.$rootScope.$broadcast('tick');
    }, 1000);
  }

}

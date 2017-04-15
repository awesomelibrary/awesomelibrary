import angular from 'angular';
import { humanLibraryModule } from './';

describe('ServiceReadersMonitorWindow', function () {

  beforeEach(function () {

    var $compileMock = jasmine.createSpy('$compileMock');
    $compileMock.and.returnValue(() => {});

    this.readersMonitorWindowWindow = jasmine.createSpyObj('readersMonitorWindowWindow', ['close']);
    this.readersMonitorWindowWindow.document = {};
    this.readersMonitorWindowWindow.close.and.callFake(() => {
      this.readersMonitorWindowWindow.closed = true;
    });
    this.windowMock = jasmine.createSpyObj('windowMock', ['open']);
    this.windowMock.open.and.callFake(() => {
      this.readersMonitorWindowWindow.closed = false;
      return this.readersMonitorWindowWindow;
    });

    angular.mock.module(humanLibraryModule, {
      $window: this.windowMock,
      $compile: $compileMock
    });
    angular.mock.inject(($rootScope, readersMonitorWindow) => {
      this.readersMonitorWindow = readersMonitorWindow;
      this.$scope = $rootScope.$new();
    });

  });

  it('when page is closed should not try to close window', function () {
    this.windowMock.onbeforeunload();
    expect(this.readersMonitorWindowWindow.close).not.toHaveBeenCalled();
  });

  describe('when toggle', function () {

    beforeEach(function () {
      this.readersMonitorWindow.toggle(this.$scope);
    });

    it('should open new window', function () {
      expect(this.windowMock.open).toHaveBeenCalledWith('about:blank', '', 'menubar=no,status=no');
    });

    it('and page is closed should close window', function () {
      this.windowMock.onbeforeunload();
      expect(this.readersMonitorWindowWindow.close).toHaveBeenCalled();
    });

    describe('and toggle again', function () {

      beforeEach(function () {
        this.readersMonitorWindow.toggle(this.$scope);
      });

      it('should close window', function () {
        expect(this.readersMonitorWindowWindow.close).toHaveBeenCalled();
      });

      it('and toggle again should open window', function () {
        this.windowMock.open.calls.reset();
        this.readersMonitorWindow.toggle(this.$scope);
        expect(this.windowMock.open).toHaveBeenCalledWith('about:blank', '', 'menubar=no,status=no');
      });

    });

  });

});

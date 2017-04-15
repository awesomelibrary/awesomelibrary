import angular from 'angular';
import { undoModule } from '../';

describe('Service undo', function() {

  beforeEach(function() {

    var beforeEachThis = this;

    angular.mock.module(undoModule);
    angular.mock.inject(function($timeout, undo) {
      beforeEachThis.$timeout = $timeout;
      beforeEachThis.undo = undo;
    });

    this.someMessage = 'some message';

  });

  it('should be hidden', function() {
    expect(this.undo.bubble.hidden).toBe(true);
  });

  describe('when something is done', function() {

    beforeEach(function() {
      this.undo.done(this.someMessage);
    });

    it('should have message in bubble', function() {
      expect(this.undo.bubble.message).toEqual(this.someMessage);
      this.$timeout.flush();
    });

    it('should be visible', function() {
      expect(this.undo.bubble.hidden).toBe(false);
      this.$timeout.flush();
    });

    it('should be hidden after timeout', function() {
      this.$timeout.flush();
      expect(this.undo.bubble.hidden).toBe(true);
    });

  });

  describe('when something is done and undo function is provided', function() {

    beforeEach(function() {
      this.undoFunction = jasmine.createSpy('undoFunction');
      this.undo.done(this.someMessage, this.undoFunction);
    });

    it('should have undo in bubble', function() {
      expect(this.undo.bubble.undo).toBeDefined();
      this.$timeout.flush();
    });

    describe('and undo is called', function() {

      beforeEach(function() {
        this.undo.bubble.undo();
      });

      it('should call undo function', function() {
        expect(this.undoFunction).toHaveBeenCalled();
      });

      it('should be hidden', function() {
        expect(this.undo.bubble.hidden).toBe(true);
      });

    });

    describe('and dismiss is called', function() {

      beforeEach(function() {
        this.undo.bubble.dismiss();
      });

      it('should not call undo function', function() {
        expect(this.undoFunction).not.toHaveBeenCalled();
      });

      it('should be hidden', function() {
        expect(this.undo.bubble.hidden).toBe(true);
      });

    });

    describe('and other thing is done', function() {

      beforeEach(function() {
        this.someOtherMessage = 'some other message';
        this.undo.done(this.someOtherMessage);
      });

      it('should have message in bubble', function() {
        expect(this.undo.bubble.message).toEqual(this.someOtherMessage);
        this.$timeout.flush();
      });

      it('should not have undo in bubble', function() {
        expect(this.undo.bubble.undo).not.toBeDefined();
        this.$timeout.flush();
      });

      it('should be hidden after timeout', function() {
        this.$timeout.flush();
        expect(this.undo.bubble.hidden).toBe(true);
      });

    });

  });

});

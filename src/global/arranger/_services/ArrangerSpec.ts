import angular from 'angular';
import { arrangerModule } from '../';

describe('Service Arranger', function() {

  beforeEach(function() {

    var beforeEachThis = this;

    angular.mock.module(arrangerModule);
    angular.mock.inject(function(Arranger) {
      beforeEachThis.Arranger = Arranger;
    });

    this.elementWidth = 100;
    this.elementHeight = 100;
    this.gutter = 10;
    this.heightCallback = jasmine.createSpy('heightCallback');
    this.arranger = new this.Arranger({
      heightCallback: this.heightCallback,
      compare: function() {
        return 0;
      },
      elementWidth: this.elementWidth,
      elementHeight: this.elementHeight,
      gutter: this.gutter
    });

    this.extraSpace = 2;
    this.containerWidth = 3 * this.gutter + 2 * this.elementWidth + this.extraSpace;
    this.arranger.setContainerWidth(this.containerWidth);

  });

  it('should set height to GUTTER', function() {
    expect(this.heightCallback).toHaveBeenCalledWith(this.gutter);
  });

  describe('when registering three elements and container will fit 2 in row', function() {

    function verifyOffset(element, horizontalOffset, verticalOffset) {
      var translate = 'translate(' + horizontalOffset + 'px, ' + verticalOffset + 'px)';
      expect(element.css).toHaveBeenCalledWith({
        '-webkit-transform': translate,
        '-ms-transform': translate,
        '-o-transform': translate,
        transform: translate
      });
    }

    beforeEach(function() {

      this.element1 = jasmine.createSpyObj('element1', ['css']);
      this.element2 = jasmine.createSpyObj('element2', ['css']);
      this.element3 = jasmine.createSpyObj('element3', ['css']);

      this.arranger.registerElement(this.element1);
      this.arranger.registerElement(this.element2);
      this.arranger.registerElement(this.element3);

      this.horizontalOffset1 = this.gutter + this.extraSpace / 2;
      this.verticalOffset1 = this.gutter;
      this.horizontalOffset2 = this.gutter * 2 + this.extraSpace / 2 + this.elementWidth;
      this.verticalOffset2 = this.gutter;
      this.horizontalOffset3 = this.gutter + this.extraSpace / 2;
      this.verticalOffset3 = this.gutter * 2 + this.elementHeight;

    });

    it('should set proper css translation', function() {
      verifyOffset(this.element1, this.horizontalOffset1, this.verticalOffset1);
      verifyOffset(this.element2, this.horizontalOffset2, this.verticalOffset2);
      verifyOffset(this.element3, this.horizontalOffset3, this.verticalOffset3);
    });

    describe('and second one is removed', function() {

      beforeEach(function() {

        this.element1.css.calls.reset();
        this.element3.css.calls.reset();
        this.heightCallback.calls.reset();

        this.arranger.unregisterElement(this.element2);

      });

      it('should rearrange', function() {
        verifyOffset(this.element1, this.horizontalOffset1, this.verticalOffset1);
        verifyOffset(this.element3, this.horizontalOffset2, this.verticalOffset2);
      });

      it('should set height to one row', function() {
        var height = this.gutter * 2 + this.elementHeight;
        expect(this.heightCallback).toHaveBeenCalledWith(height);
      });

    });

    describe('and width is set', function() {

      beforeEach(function() {
        this.element1.css.calls.reset();
        this.element2.css.calls.reset();
        this.element3.css.calls.reset();
        this.heightCallback.calls.reset();
        this.arranger.setContainerWidth(this.containerWidth);
      });

      it('should rearrange', function() {
        verifyOffset(this.element1, this.horizontalOffset1, this.verticalOffset1);
        verifyOffset(this.element2, this.horizontalOffset2, this.verticalOffset2);
        verifyOffset(this.element3, this.horizontalOffset3, this.verticalOffset3);
      });

      it('should NOT set height', function() {
        expect(this.heightCallback).not.toHaveBeenCalled();
      });

    });

    it('and width and extra offset is set, should rearrange', function() {

      var extraOffset = 120;

      this.element1.css.calls.reset();
      this.element2.css.calls.reset();
      this.element3.css.calls.reset();

      this.arranger.setContainerWidth(this.containerWidth, extraOffset);

      verifyOffset(this.element1, this.horizontalOffset1 + extraOffset, this.verticalOffset1);
      verifyOffset(this.element2, this.horizontalOffset2 + extraOffset, this.verticalOffset2);
      verifyOffset(this.element3, this.horizontalOffset3 + extraOffset, this.verticalOffset3);

    });

    it('should set height to two rows', function() {
      var height = this.gutter + (this.elementHeight + this.gutter) * 2;
      expect(this.heightCallback).toHaveBeenCalledWith(height);
    });

  });

});

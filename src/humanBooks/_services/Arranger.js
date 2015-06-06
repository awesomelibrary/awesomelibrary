'use strict';

/**
 * @returns {ArrangerService}
 * @ngInject
 */
function ArrangerServiceFactory() {

  var ELEMENT_WIDTH = 170;
  var ELEMENT_HEIGHT = 250;
  var GUTTER = 16;

  function applyOffset(arranger, element, index) {
    var row = Math.floor(index / arranger.elementsInRow);
    var column = index % arranger.elementsInRow;
    var horizontalOffset = arranger.leftMargin + GUTTER + (ELEMENT_WIDTH + GUTTER) * column;
    var verticalOffset = GUTTER + (ELEMENT_HEIGHT + GUTTER) * row;
    var translate = 'translate(' + horizontalOffset + 'px, ' + verticalOffset + 'px)';
    element.css({
      '-webkit-transform': translate,
      '-ms-transform': translate,
      '-o-transform': translate,
      transform: translate
    });
  }

  function arrange(arranger) {
    arranger.elements.forEach(function(element, index) {
      applyOffset(arranger, element, index);
    });
  }

  function calculateRows(arranger) {
    var rows = Math.ceil(arranger.elements.length / arranger.elementsInRow);
    if (rows === arranger.rows) return;
    arranger.rows = rows;
    if (angular.isUndefined(arranger.heightCallback)) return;
    arranger.heightCallback(GUTTER + (ELEMENT_HEIGHT + GUTTER) * arranger.rows);
  }

  function ArrangerService(heightCallback) {
    this.elements = [];
    this.heightCallback = heightCallback;
  }

  ArrangerService.ELEMENT_WIDTH = ELEMENT_WIDTH;
  ArrangerService.ELEMENT_HEIGHT = ELEMENT_HEIGHT;
  ArrangerService.GUTTER = GUTTER;

  ArrangerService.prototype.registerElement = function(element) {
    applyOffset(this, element, this.elements.length);
    this.elements.push(element);
    calculateRows(this);
  };

  ArrangerService.prototype.unregisterElement = function(element) {
    var index = this.elements.indexOf(element);
    if (index === -1) return;
    this.elements.splice(index, 1);
    arrange(this);
    calculateRows(this);
  };

  ArrangerService.prototype.setContainerWidth = function(width, extraOffset) {

    if (angular.isUndefined(extraOffset)) {
      extraOffset = 0;
    }

    this.elementsInRow = Math.floor((width - GUTTER) / (ELEMENT_WIDTH + GUTTER));
    this.leftMargin = (width - GUTTER - (ELEMENT_WIDTH + GUTTER) * this.elementsInRow) / 2 + extraOffset;

    calculateRows(this);
    arrange(this);

  };

  return ArrangerService;

}

module.exports = ArrangerServiceFactory;

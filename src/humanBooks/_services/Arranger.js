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
    sort(arranger);
    arranger.elements.forEach(function(item, index) {
      applyOffset(arranger, item.element, index);
    });
    calculateRows(arranger);
  }

  function calculateRows(arranger) {
    var rows = Math.ceil(arranger.elements.length / arranger.elementsInRow);
    if (rows === arranger.rows) return;
    arranger.rows = rows;
    if (angular.isUndefined(arranger.heightCallback)) return;
    arranger.heightCallback(GUTTER + (ELEMENT_HEIGHT + GUTTER) * arranger.rows);
  }

  function sort(arranger) {
    arranger.elements.sort(arranger.compare);
  }

  function ArrangerService(heightCallback, compare) {
    this.elements = [];
    this.heightCallback = heightCallback;
    this.compare = compare;
  }

  ArrangerService.ELEMENT_WIDTH = ELEMENT_WIDTH;
  ArrangerService.ELEMENT_HEIGHT = ELEMENT_HEIGHT;
  ArrangerService.GUTTER = GUTTER;

  ArrangerService.prototype.registerElement = function(element, model) {
    this.elements.push({
      element: element,
      model: model
    });
    arrange(this);
  };

  ArrangerService.prototype.unregisterElement = function(element) {

    for (var i = 0; i < this.elements.length; i++) {
      if (element !== this.elements[i].element) continue;
      this.elements.splice(i, 1);
      arrange(this);
      return;
    }

  };

  ArrangerService.prototype.setContainerWidth = function(width, extraOffset) {

    if (angular.isUndefined(extraOffset)) {
      extraOffset = 0;
    }

    this.elementsInRow = Math.floor((width - GUTTER) / (ELEMENT_WIDTH + GUTTER));
    this.leftMargin = (width - GUTTER - (ELEMENT_WIDTH + GUTTER) * this.elementsInRow) / 2 + extraOffset;

    arrange(this);

  };

  return ArrangerService;

}

module.exports = ArrangerServiceFactory;

'use strict';

/**
 * @returns {ArrangerService}
 * @ngInject
 */
function ArrangerServiceFactory() {

  function applyOffset(arranger, element, index) {
    var row = Math.floor(index / arranger.elementsInRow);
    var column = index % arranger.elementsInRow;
    var horizontalOffset = arranger.leftMargin + arranger.options.gutter + (arranger.options.elementWidth + arranger.options.gutter) * column;
    var verticalOffset = arranger.options.gutter + (arranger.options.elementHeight + arranger.options.gutter) * row;
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
    if (angular.isUndefined(arranger.options.heightCallback)) return;
    arranger.options.heightCallback(arranger.options.gutter + (arranger.options.elementHeight + arranger.options.gutter) * arranger.rows);
  }

  function sort(arranger) {
    arranger.elements.sort(arranger.options.compare);
  }

  function ArrangerService(options) {
    this.elements = [];
    this.options = options;
  }

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

    this.elementsInRow = Math.floor((width - this.options.gutter) / (this.options.elementWidth + this.options.gutter));
    this.leftMargin = (width - this.options.gutter - (this.options.elementWidth + this.options.gutter) * this.elementsInRow) / 2 + extraOffset;

    arrange(this);

  };

  return ArrangerService;

}

module.exports = ArrangerServiceFactory;

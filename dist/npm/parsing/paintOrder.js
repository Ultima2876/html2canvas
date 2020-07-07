'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parsePaintOrder = exports.PAINT_LAYER = void 0;
var PAINT_LAYER = {
  STROKE: 0,
  FILL: 1,
  MARKERS: 2
};
exports.PAINT_LAYER = PAINT_LAYER;

var parsePaintOrder = function parsePaintOrder(paintOrder) {
  var order = paintOrder.split(' ');

  if (order[0] === 'normal') {
    return [PAINT_LAYER.FILL, PAINT_LAYER.STROKE, PAINT_LAYER.MARKERS];
  }

  var layers = [];
  order.forEach(function (layer) {
    switch (layer) {
      case 'stroke':
        layers.push(PAINT_LAYER.STROKE);
        break;

      case 'fill':
        layers.push(PAINT_LAYER.FILL);
        break;

      case 'markers':
        layers.push(PAINT_LAYER.MARKERS);
        break;
    }
  });
  return layers;
};

exports.parsePaintOrder = parsePaintOrder;
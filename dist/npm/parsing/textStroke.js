'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseTextStroke = void 0;

var _Color = _interopRequireDefault(require("../Color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseTextStroke = function parseTextStroke(textStrokeWidth, textStrokeColor) {
  var color = new _Color.default(textStrokeColor);
  var size = parseFloat(textStrokeWidth);

  if (size <= 0) {
    return null;
  }

  return {
    color: color,
    size: size
  };
};

exports.parseTextStroke = parseTextStroke;
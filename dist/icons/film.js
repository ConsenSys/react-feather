'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Film = function Film(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: 'feather-icon'
    }, otherProps),
    _react2.default.createElement('rect', { x: '2', y: '2', width: '20', height: '20', rx: '2.18', ry: '2.18' }),
    _react2.default.createElement('line', { x1: '7', y1: '2', x2: '7', y2: '22' }),
    _react2.default.createElement('line', { x1: '17', y1: '2', x2: '17', y2: '22' }),
    _react2.default.createElement('line', { x1: '2', y1: '12', x2: '22', y2: '12' }),
    _react2.default.createElement('line', { x1: '2', y1: '7', x2: '7', y2: '7' }),
    _react2.default.createElement('line', { x1: '2', y1: '17', x2: '7', y2: '17' }),
    _react2.default.createElement('line', { x1: '17', y1: '17', x2: '22', y2: '17' }),
    _react2.default.createElement('line', { x1: '17', y1: '7', x2: '22', y2: '7' })
  );
};

Film.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Film.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Film;
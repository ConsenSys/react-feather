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

var BellOff = function BellOff(props) {
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
    _react2.default.createElement('path', { d: 'M13.73 21a2 2 0 0 1-3.46 0' }),
    _react2.default.createElement('path', { d: 'M18.63 13A17.89 17.89 0 0 1 18 8' }),
    _react2.default.createElement('path', { d: 'M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14' }),
    _react2.default.createElement('path', { d: 'M18 8a6 6 0 0 0-9.33-5' }),
    _react2.default.createElement('line', { x1: '1', y1: '1', x2: '23', y2: '23' })
  );
};

BellOff.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

BellOff.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = BellOff;
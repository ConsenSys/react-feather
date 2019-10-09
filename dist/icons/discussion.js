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

var Discussion = function Discussion(props) {
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
      strokeWidth: '1.5',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: 'feather-icon'
    }, otherProps),
    _react2.default.createElement('path', { d: 'M3.91044 11.5407L1.33333 11.9999L2.41459 8.62215C2.07594 7.924 1.90045 7.15244 1.90241 6.3703C1.90276 5.43504 2.15316 4.51836 2.62556 3.72292C3.09796 2.92749 3.7737 2.28471 4.5771 1.8666C5.24755 1.51397 5.9885 1.33123 6.73962 1.33327H7.02416C8.21033 1.40141 9.33068 1.92276 10.1707 2.79748C10.5137 3.15468 10.8002 3.56057 11.0235 3.99992' }),
    _react2.default.createElement('path', { d: 'M6.00002 10.0926C5.99836 10.7281 6.14684 11.355 6.43335 11.9222C6.77307 12.602 7.29532 13.1737 7.94161 13.5734C8.58791 13.973 9.33271 14.1849 10.0926 14.1852C10.7281 14.1868 11.355 14.0384 11.9222 13.7519L14.6667 14.6667L13.7519 11.9222C14.0384 11.355 14.1868 10.7281 14.1852 10.0926C14.1849 9.33271 13.973 8.5879 13.5734 7.94161C13.1737 7.29532 12.602 6.77306 11.9222 6.43335C11.355 6.14683 10.7281 5.99836 10.0926 6.00001H9.85186C8.84829 6.05538 7.9004 6.47897 7.18969 7.18968C6.47898 7.9004 6.05538 8.84829 6.00002 9.85186V10.0926Z' })
  );
};

Discussion.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Discussion.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Discussion;
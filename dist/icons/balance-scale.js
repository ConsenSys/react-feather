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

var BalanceScale = function BalanceScale(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 640 512',
      fill: 'none',
      stroke: color,
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: 'feather-icon'
    }, otherProps),
    _react2.default.createElement('path', {
      fill: 'currentColor',
      d: 'M634.4 279.09L525.35 103.12C522.18 98.38 517.09 96 512 96s-10.18 2.38-13.35 7.12L389.6 279.09c-3.87 5.78-6.09 12.72-5.51 19.64C389.56 364.4 444.74 416 512 416s122.44-51.6 127.91-117.27c.58-6.92-1.64-13.86-5.51-19.64zM512 384c-41.58 0-77.55-27.13-90.78-64h181.2C589 357.23 553.28 384 512 384zm-90.27-96l90.31-145.76L602.98 288H421.73zM536 480H336V125.74c27.56-7.14 48-31.95 48-61.74h152c4.42 0 8-3.58 8-8V40c0-4.42-3.58-8-8-8H374.89c-.15-.26-4.37-11.11-19.11-21.07C345.57 4.03 333.25 0 320 0s-25.57 4.03-35.78 10.93c-14.74 9.96-18.96 20.81-19.11 21.07H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h152c0 29.79 20.44 54.6 48 61.74V480H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h432c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8zM288 64c0-17.67 14.33-32 32-32s32 14.33 32 32-14.33 32-32 32-32-14.33-32-32zm-32.09 234.73c.58-6.92-1.64-13.86-5.51-19.64L141.35 103.12C138.18 98.38 133.09 96 128 96s-10.18 2.38-13.35 7.12L5.6 279.09c-3.87 5.78-6.09 12.72-5.51 19.64C5.56 364.4 60.74 416 128 416s122.44-51.6 127.91-117.27zM128.04 142.24L218.98 288H37.73l90.31-145.76zM37.22 320h181.2C205 357.23 169.28 384 128 384c-41.58 0-77.55-27.13-90.78-64z'
    })
  );
};

BalanceScale.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

BalanceScale.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = BalanceScale;
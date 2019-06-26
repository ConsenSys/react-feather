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

var Gavel = function Gavel(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 512 512',
      fill: 'none',
      stroke: color,
      strokeWidth: '10',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: 'feather-icon'
    }, otherProps),
    _react2.default.createElement('path', {
      fill: 'currentColor',
      d: 'M500.892 186.561l-20.633-20.643c-12.912-12.912-32.416-14.337-46.732-5.448L351.53 78.474c8.888-14.315 7.465-33.82-5.448-46.731L325.44 11.108c-14.808-14.808-38.781-14.813-53.592 0L158.315 124.633c-14.774 14.775-14.774 38.815 0 53.591l20.643 20.644c12.659 12.657 32.118 14.473 46.725 5.439l29.692 29.692-58.803 58.803-8.082-8.082c-16.933-16.934-44.484-16.932-61.417 0L12.699 399.073c-16.932 16.933-16.932 44.484 0 61.417l38.81 38.811c16.931 16.932 44.482 16.933 61.417 0L227.28 384.927c16.932-16.933 16.932-44.484 0-61.417l-8.081-8.081 58.803-58.803 29.692 29.692c-9.031 14.607-7.218 34.067 5.44 46.725l20.643 20.643c14.776 14.776 38.815 14.776 53.591 0l113.525-113.533c14.808-14.809 14.811-38.781-.001-53.592zM204.653 362.3L90.3 476.652c-4.456 4.458-11.707 4.457-16.163 0v.001l-38.79-38.79c-4.456-4.456-4.456-11.707 0-16.163L149.7 307.348c4.456-4.457 11.706-4.458 16.162-.001l38.79 38.79c4.456 4.456 4.456 11.707.001 16.163zm273.62-144.776L364.74 331.058a5.896 5.896 0 0 1-8.337 0l-20.643-20.643a5.902 5.902 0 0 1-.001-8.336l16.478-16.474-125.842-125.841-16.474 16.475a5.902 5.902 0 0 1-8.336.001l-20.643-20.643a5.903 5.903 0 0 1 0-8.337L294.476 33.727a5.896 5.896 0 0 1 8.337 0l20.643 20.644a5.893 5.893 0 0 1-.001 8.336l-16.472 16.475L432.82 205.019l16.477-16.473a5.893 5.893 0 0 1 8.335 0l20.643 20.643v.001a5.893 5.893 0 0 1-.002 8.334z'
    })
  );
};

Gavel.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

Gavel.defaultProps = {
  color: 'currentColor',
  size: '24'
};

exports.default = Gavel;
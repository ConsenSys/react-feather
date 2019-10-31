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

var ThumbsupReaction = function ThumbsupReaction(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      width: size,
      height: size,
      viewBox: '0 0 15 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      className: 'feather-icon'
    }, otherProps),
    _react2.default.createElement('path', {
      d: 'M14.3261 7.9085C14.3261 7.68344 14.2724 7.47224 14.1825 7.28029C13.5825 5.34467 10.7735 5.48606 6.77782 5.39165C6.10979 5.37599 6.4919 4.58715 6.72636 2.85556C6.87894 1.72935 6.15275 0 4.93213 0C2.91955 0 4.85562 1.58752 3.07615 5.51335C2.12534 7.61095 0 6.43597 0 8.54297V13.3391C0 14.1592 0.0805392 14.9476 1.23404 15.0774C2.35219 15.2031 2.10073 16 3.71375 16H11.7874C12.6097 16 13.2787 15.3306 13.2787 14.5082C13.2787 14.1673 13.1592 13.8568 12.9664 13.6053C13.4227 13.3498 13.736 12.8675 13.736 12.3082C13.736 11.9681 13.6169 11.6576 13.4245 11.4066C13.8823 11.1515 14.1964 10.6688 14.1964 10.1086C14.1964 9.70184 14.0317 9.33315 13.7664 9.06334C14.1051 8.78996 14.3261 8.37652 14.3261 7.9085Z',
      fill: '#FFDB5E'
    }),
    _react2.default.createElement('path', {
      d: 'M8.98551 9.39996H12.8353C13.3588 9.39996 13.8501 9.11986 14.1176 8.66929C14.2277 8.4836 14.1664 8.24333 13.9803 8.13281C13.7946 8.02229 13.5543 8.08449 13.4438 8.27018C13.3172 8.4845 13.0832 8.61694 12.8348 8.61694H8.89289C8.50227 8.61694 8.18459 8.29926 8.18459 7.90865C8.18459 7.51803 8.50227 7.20035 8.89289 7.20035H11.527C11.7431 7.20035 11.9185 7.02495 11.9185 6.80884C11.9185 6.59272 11.7431 6.41733 11.527 6.41733H8.89244C8.07005 6.41733 7.40112 7.08625 7.40112 7.90865C7.40112 8.36727 7.61366 8.7731 7.94029 9.04693C7.66511 9.31763 7.49374 9.69348 7.49374 10.1087C7.49374 10.5687 7.70762 10.9758 8.03604 11.2492C7.76265 11.5195 7.59308 11.894 7.59308 12.3083C7.59308 12.8095 7.84319 13.2515 8.22352 13.5222C7.98906 13.7858 7.8423 14.129 7.8423 14.5084C7.8423 15.3308 8.51122 15.9997 9.33362 15.9997H11.7874C12.3109 15.9997 12.8026 15.72 13.0702 15.2695C13.1807 15.0838 13.1194 14.8435 12.9337 14.733C12.7476 14.6234 12.5073 14.6838 12.3972 14.8695C12.2697 15.0838 12.0357 15.2167 11.7874 15.2167H9.33362C8.943 15.2167 8.62532 14.899 8.62532 14.5084C8.62532 14.1178 8.943 13.8001 9.33362 13.8001H12.2447C12.7682 13.8001 13.2603 13.52 13.5275 13.0694C13.638 12.8833 13.5767 12.643 13.391 12.5329C13.2035 12.4206 12.9641 12.4837 12.8545 12.6694C12.7252 12.8873 12.497 13.0171 12.2447 13.0171H9.08439C8.69378 13.0171 8.37609 12.6989 8.37609 12.3083C8.37609 11.9177 8.69378 11.6 9.08439 11.6H12.7046C13.2281 11.6 13.7199 11.3204 13.9874 10.8698C14.098 10.6841 14.0367 10.4438 13.851 10.3333C13.6644 10.2233 13.4246 10.2841 13.3145 10.4698C13.1852 10.6872 12.957 10.817 12.7046 10.817H8.98551C8.59489 10.817 8.27721 10.4993 8.27721 10.1087C8.27721 9.71809 8.59445 9.39996 8.98551 9.39996Z',
      fill: '#EE9547'
    })
  );
};

ThumbsupReaction.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

ThumbsupReaction.defaultProps = {
  color: 'width=',
  size: '24'
};

exports.default = ThumbsupReaction;
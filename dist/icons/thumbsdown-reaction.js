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

var ThumbsdownReaction = function ThumbsdownReaction(props) {
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
      d: 'M14.3261 8.0915C14.3261 8.31656 14.2724 8.52776 14.1825 8.71971C13.5825 10.6553 10.7735 10.5139 6.77782 10.6084C6.10979 10.624 6.4919 11.4128 6.72636 13.1444C6.87894 14.2706 6.15275 16 4.93213 16C2.91955 16 4.85562 14.4125 3.07615 10.4866C2.12534 8.38905 0 9.56403 0 7.45703V2.66137C0 1.84121 0.0805392 1.05283 1.23404 0.923068C2.35219 0.79689 2.10073 0 3.71375 0H11.7874C12.6097 0 13.2787 0.66937 13.2787 1.49176C13.2787 1.83271 13.1592 2.14324 12.9664 2.3947C13.4227 2.65019 13.736 3.13253 13.736 3.69183C13.736 4.03188 13.6169 4.3424 13.4245 4.59342C13.8823 4.84846 14.1964 5.33125 14.1964 5.89144C14.1964 6.29816 14.0317 6.66685 13.7664 6.93666C14.1051 7.21005 14.3261 7.62348 14.3261 8.0915Z',
      fill: '#FFDB5E'
    }),
    _react2.default.createElement('path', {
      d: 'M8.98551 6.60023H12.8353C13.3588 6.60023 13.8501 6.88032 14.1176 7.3309C14.2277 7.51658 14.1664 7.75686 13.9803 7.86738C13.7946 7.97789 13.5543 7.9157 13.4438 7.73001C13.3172 7.51569 13.0832 7.38325 12.8348 7.38325H8.89289C8.50227 7.38325 8.18459 7.70093 8.18459 8.09154C8.18459 8.48216 8.50227 8.79984 8.89289 8.79984H11.527C11.7431 8.79984 11.9185 8.97524 11.9185 9.19135C11.9185 9.40746 11.7431 9.58286 11.527 9.58286H8.89244C8.07005 9.58286 7.40112 8.91394 7.40112 8.09154C7.40112 7.63292 7.61366 7.22709 7.94029 6.95326C7.66511 6.68255 7.49374 6.30671 7.49374 5.89148C7.49374 5.43151 7.70762 5.02434 8.03604 4.75096C7.76265 4.4807 7.59308 4.1062 7.59308 3.69187C7.59308 3.19073 7.84319 2.74866 8.22352 2.47796C7.98906 2.21442 7.8423 1.87123 7.8423 1.49181C7.8423 0.669411 8.51122 0.000488281 9.33362 0.000488281H11.7874C12.3109 0.000488281 12.8026 0.280138 13.0702 0.73071C13.1807 0.916398 13.1194 1.15667 12.9337 1.26719C12.7476 1.37681 12.5073 1.31641 12.3972 1.13072C12.2697 0.916398 12.0357 0.783508 11.7874 0.783508H9.33362C8.943 0.783508 8.62532 1.10119 8.62532 1.49181C8.62532 1.88242 8.943 2.2001 9.33362 2.2001H12.2447C12.7682 2.2001 13.2603 2.4802 13.5275 2.93077C13.638 3.11691 13.5767 3.35718 13.391 3.46725C13.2035 3.57956 12.9641 3.51647 12.8545 3.33078C12.7252 3.11288 12.497 2.98312 12.2447 2.98312H9.08439C8.69378 2.98312 8.37609 3.30125 8.37609 3.69187C8.37609 4.08248 8.69378 4.40016 9.08439 4.40016H12.7046C13.2281 4.40016 13.7199 4.67981 13.9874 5.13039C14.098 5.31607 14.0367 5.55635 13.851 5.66687C13.6644 5.77694 13.4246 5.71608 13.3145 5.5304C13.1852 5.31294 12.957 5.18318 12.7046 5.18318H8.98551C8.59489 5.18318 8.27721 5.50087 8.27721 5.89148C8.27721 6.2821 8.59445 6.60023 8.98551 6.60023Z',
      fill: '#EE9547'
    })
  );
};

ThumbsdownReaction.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

ThumbsdownReaction.defaultProps = {
  color: 'width=',
  size: '24'
};

exports.default = ThumbsdownReaction;
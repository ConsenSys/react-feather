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

var BlockReaction = function BlockReaction(props) {
  var color = props.color,
      size = props.size,
      otherProps = _objectWithoutProperties(props, ['color', 'size']);

  return _react2.default.createElement(
    'svg',
    _extends({
      width: size,
      height: size,
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      className: 'feather-icon'
    }, otherProps),
    _react2.default.createElement('path', {
      d: 'M16 8C16 12.4182 12.4182 16 8 16C3.58178 16 0 12.4182 0 8C0 3.58178 3.58178 0 8 0C12.4182 0 16 3.58178 16 8Z',
      fill: '#BE1931'
    }),
    _react2.default.createElement('path', {
      d: 'M14.2223 8.88883C14.2223 9.3795 13.8241 9.77772 13.3334 9.77772H2.66672C2.17605 9.77772 1.77783 9.3795 1.77783 8.88883V7.11106C1.77783 6.62039 2.17605 6.22217 2.66672 6.22217H13.3334C13.8241 6.22217 14.2223 6.62039 14.2223 7.11106V8.88883Z',
      fill: 'white'
    })
  );
};

BlockReaction.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

BlockReaction.defaultProps = {
  color: 'width=',
  size: '24'
};

exports.default = BlockReaction;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _scrollNumber = require('./scroll-number');

var _scrollNumber2 = _interopRequireDefault(_scrollNumber);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Badge = function (_React$Component) {
    _inherits(Badge, _React$Component);

    function Badge() {
        _classCallCheck(this, Badge);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Badge).apply(this, arguments));
    }

    _createClass(Badge, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props;
            var count = _props.count;
            var overflowCount = _props.overflowCount;
            var className = _props.className;
            var style = _props.style;
            var dot = _props.dot;
            var children = _props.children;

            var others = _objectWithoutProperties(_props, ['count', 'overflowCount', 'className', 'style', 'dot', 'children']);

            var countAfterCalculation = count > overflowCount ? overflowCount + '+' : count;

            // dot 不展示 count
            if (dot) {
                countAfterCalculation = '';
            }

            // null undefined "" "0" 0
            var hidden = (!countAfterCalculation || countAfterCalculation === '0') && !dot;
            var scrollNumberCls = dot ? 'dot' : 'count';

            var classes = (0, _classnames2.default)((_classNames = {
                'lib-common-badge-lib-badge': true
            }, _defineProperty(_classNames, className, className), _defineProperty(_classNames, 'not-a-wrapper', !children), _classNames));

            return _react2.default.createElement(
                'span',
                _extends({}, others, { className: classes,
                    title: countAfterCalculation }),
                children,
                _react2.default.createElement(
                    _rcAnimate2.default,
                    { showProp: 'data-show',
                        transitionName: 'zoom',
                        transitionAppear: true },
                    hidden ? null : _react2.default.createElement(_scrollNumber2.default, { 'data-show': !hidden,
                        className: scrollNumberCls,
                        count: countAfterCalculation,
                        style: style })
                )
            );
        }
    }]);

    return Badge;
}(_react2.default.Component);

exports.default = Badge;


Badge.defaultProps = {
    // @desc 展示的数字,为0时候则隐藏
    count: 0,
    // @desc 是否不展示数字,只显示小红点
    dot: false,
    // @desc 封顶数字
    overflowCount: 99
};
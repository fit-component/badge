"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var css_animation_1 = require('css-animation');
var _ = require('lodash');
var module = require('./module');
var getNumberArray = function (num) {
    return num ? num.toString().split('').reverse().map(function (i) { return Number(i); }) : [];
};
var ScrollNumber = (function (_super) {
    __extends(ScrollNumber, _super);
    function ScrollNumber(props) {
        _super.call(this, props);
        this.state = new module.State();
        this.state = {
            animateStarted: true,
            count: props.count
        };
    }
    ScrollNumber.prototype.getPositionByNum = function (num, i) {
        if (this.state.animateStarted) {
            return 10 + num;
        }
        var currentDigit = getNumberArray(this.state.count)[i];
        var lastDigit = getNumberArray(this.lastCount)[i];
        if (this.state.count > this.lastCount) {
            if (currentDigit >= lastDigit) {
                return 10 + num;
            }
            return 20 + num;
        }
        if (currentDigit <= lastDigit) {
            return 10 + num;
        }
        return num;
    };
    ScrollNumber.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if ('count' in nextProps) {
            if (this.state.count === nextProps.count) {
                return;
            }
            this.lastCount = this.state.count;
            this.setState({
                animateStarted: true
            }, function () {
                setTimeout(function () {
                    _this.setState({
                        animateStarted: false,
                        count: nextProps.count
                    }, function () {
                        _this.props.onAnimated();
                    });
                }, 5);
            });
        }
    };
    ScrollNumber.prototype.renderNumberList = function () {
        var childrenToReturn = [];
        for (var i = 0; i < 30; i++) {
            childrenToReturn.push(React.createElement("p", {key: i}, i % 10));
        }
        return childrenToReturn;
    };
    ScrollNumber.prototype.renderCurrentNumber = function (num, i) {
        var position = this.getPositionByNum(num, i);
        var height = this.props.height;
        var removeTransition = this.state.animateStarted || (getNumberArray(this.lastCount)[i] === undefined);
        return React.createElement('span', {
            className: "only",
            style: {
                transition: removeTransition && 'none',
                WebkitTransform: "translate3d(0, " + -position * height + "px, 0)",
                transform: "translate3d(0, " + -position * height + "px, 0)",
                height: height
            },
            key: i
        }, this.renderNumberList());
    };
    ScrollNumber.prototype.renderNumberElement = function () {
        var _this = this;
        if (!this.state.count || isNaN(this.state.count)) {
            return this.state.count;
        }
        return getNumberArray(this.state.count).map(function (num, i) { return _this.renderCurrentNumber(num, i); }).reverse();
    };
    ScrollNumber.prototype.render = function () {
        var props = _.assign({}, this.props, {
            className: "scroll-number " + this.props['className']
        });
        var isBrowser = (typeof document !== 'undefined' && typeof window !== 'undefined');
        if (isBrowser && css_animation_1.isCssAnimationSupported) {
            return React.createElement(this.props.component, props, this.renderNumberElement());
        }
        return React.createElement(this.props.component, props, props['count']);
    };
    ScrollNumber.defaultProps = new module.Props();
    return ScrollNumber;
}(React.Component));
exports.__esModule = true;
exports["default"] = ScrollNumber;

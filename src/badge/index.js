"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Animate = require('rc-animate');
var scroll_number_1 = require('../scroll-number');
var classNames = require('classnames');
var module = require('./module');
var src_1 = require('../../../../common/transmit-transparently/src');
require('./index.scss');
var Badge = (function (_super) {
    __extends(Badge, _super);
    function Badge() {
        _super.apply(this, arguments);
        this.state = new module.State();
    }
    Badge.prototype.render = function () {
        var countAfterCalculation = this.props.count > this.props.overflowCount ? this.props.overflowCount + "+" : this.props.count;
        if (this.props.dot) {
            countAfterCalculation = '';
        }
        var hidden = (!countAfterCalculation || countAfterCalculation === '0') && !this.props.dot;
        var scrollNumberCls = (this.props.dot ? 'dot' : 'count');
        var classes = classNames((_a = {
                '_namespace': true
            },
            _a[this.props['className']] = !!this.props['className'],
            _a["not-a-wrapper"] = !this.props.children,
            _a
        ));
        return (React.createElement("span", {className: classes, title: countAfterCalculation}, this.props.children, React.createElement(Animate, {showProp: "data-show", transitionName: "zoom", transitionAppear: true}, hidden ? null :
            React.createElement(scroll_number_1["default"], React.__spread({"data-show": !hidden, className: scrollNumberCls, count: countAfterCalculation}, src_1.others(new module.Props(), this.props))))));
        var _a;
    };
    Badge.defaultProps = new module.Props();
    return Badge;
}(React.Component));
exports.__esModule = true;
exports["default"] = Badge;

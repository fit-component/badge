"use strict";
var Props = (function () {
    function Props() {
        this.count = 0;
        this.component = 'sup';
        this.onAnimated = function () {
        };
        this.height = 18;
    }
    return Props;
}());
exports.Props = Props;
var State = (function () {
    function State() {
        this.animateStarted = false;
        this.count = 0;
    }
    return State;
}());
exports.State = State;

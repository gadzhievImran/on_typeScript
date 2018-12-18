"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var TimedInput = /** @class */ (function (_super) {
    __extends(TimedInput, _super);
    function TimedInput(props) {
        var _this = _super.call(this, props) || this;
        _this.changeParam = function (val, names) {
            var _a = _this.props, name = _a.name, onChangeTimed = _a.onChangeTimed, onChange = _a.onChange, time = _a.time;
            _this.setState(function () {
                var timer = _this.state.timer;
                clearTimeout(timer);
                var params = {
                    val: val,
                    name: name
                };
                return {
                    params: params
                };
            }, function () {
                var params = _this.state.params;
                console.log('params', params);
                onChange(params);
                if (onChangeTimed) {
                    var timer = setTimeout(function () {
                        onChangeTimed(params);
                    }, time ? time : 500);
                    _this.setState({ timer: timer });
                }
            });
        };
        _this.state = {
            params: null,
            timer: null
        };
        return _this;
    }
    TimedInput.prototype.componentWillUnmount = function () {
        var timer = this.state.timer;
        clearTimeout(timer);
    };
    TimedInput.prototype.render = function () {
        var _this = this;
        var name = this.props.name;
        return (React.createElement("div", null,
            React.createElement("div", null, "enter offer_id"),
            React.createElement("input", { placeholder: "offer_id", onChange: function (event) {
                    var val = Number(event.currentTarget.value);
                    _this.changeParam(val, name);
                } })));
    };
    TimedInput.propTypes = {
        name: PropTypes.string,
        onchange: PropTypes.func,
        onChangeTimed: PropTypes.func,
        time: PropTypes.number
    };
    TimedInput.defaultProps = {
        time: 500
    };
    return TimedInput;
}(React.Component));
exports.default = TimedInput;
//# sourceMappingURL=TimedInput.js.map
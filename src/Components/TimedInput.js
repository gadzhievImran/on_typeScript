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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var TimedInput = /** @class */ (function (_super) {
    __extends(TimedInput, _super);
    function TimedInput(props) {
        var _this = _super.call(this, props) || this;
        _this.changeParam = function (val, name) {
            var _a = _this.props, n = _a.name, onChangeTimed = _a.onChangeTimed, onChange = _a.onChange, time = _a.time;
            _this.setState(function (state) {
                clearTimeout(_this.state.timer);
                var obj = {
                    val: val,
                    name: n
                };
                return {
                    obj: obj
                };
            }, function () {
                var obj = _this.state.obj;
                onChange(obj);
                if (onChangeTimed) {
                    var timer = setTimeout(function () {
                        onChangeTimed(obj);
                    }, time ? time : 500);
                    _this.setState({ timer: timer });
                }
            });
        };
        _this.state = {
            obj: null,
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
        return (react_1.default.createElement("div", { className: "App" },
            react_1.default.createElement("input", { onChange: function (event) {
                    var val = Number(event.currentTarget.value);
                    _this.changeParam(val, name);
                } })));
    };
    return TimedInput;
}(react_1.Component));
exports.default = TimedInput;
//# sourceMappingURL=test.js.map
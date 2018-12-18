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
var TimedInput_1 = require("./TimedInput");
var config_1 = require("../config");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(TimedInput_1.default, { onChange: function (_a) {
                    var val = _a.val, name = _a.name;
                    // console.log('TI', val as number, name as string)
                }, name: "offer_id", time: 500, onChangeTimed: function (_a) {
                    var val = _a.val, name = _a.name;
                    fetch(config_1.OFFERS_URL_GET + "?" + name + "=" + val).then(function (res) {
                        return res.json();
                    }).then(function (res) {
                        // console.log('res 2', res);
                    });
                } })));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=App.js.map
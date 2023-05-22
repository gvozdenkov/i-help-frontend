"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.CloseIcon = void 0;
var utils_1 = require("./utils");
exports.CloseIcon = function (_a) {
    var color = _a.color, _b = _a.size, size = _b === void 0 ? "24" : _b, props = __rest(_a, ["color", "size"]);
    return (React.createElement("svg", __assign({ width: size, height: size, viewBox: "0 0 24 24", fill: utils_1.getColor(color), xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M17.3581 11.9518L21.7835 7.51808C22.0722 7.22892 22.0722 6.74696 21.7835 6.4578L17.5505 2.21687C17.2619 1.92771 16.7808 1.92771 16.4922 2.21687L12.0668 6.65058L7.73755 2.31323C7.44893 2.02407 6.96787 2.02407 6.67925 2.31323L2.25382 6.26507C1.9652 6.55423 1.86899 7.1325 2.25382 7.42165L6.48688 11.8554C6.48688 11.8554 6.48688 11.9518 6.48688 12.0482L2.44624 16.0964C2.15762 16.3855 2.15762 16.8675 2.44624 17.1566L6.67925 21.3976C6.96787 21.6867 7.44893 21.6867 7.73755 21.3976L11.3933 17.7349C11.682 17.4458 12.163 17.4458 12.4516 17.7349L16.4922 21.7831C16.7808 22.0723 17.2619 22.0723 17.5505 21.7831L21.6874 17.6386C21.976 17.3494 21.976 16.8674 21.6874 16.5783L17.3581 11.9518ZM21.4949 17.0602L17.2619 21.3012C17.2619 21.3012 17.1657 21.3012 17.0695 21.3012L12.644 16.8675C12.3554 16.5783 11.8744 16.5783 11.5858 16.8675L7.44894 21.0121C7.44894 21.0121 7.35272 21.0121 7.25652 21.0121L2.92727 16.5783L7.3527 12.2409C7.54511 12.0482 7.54511 11.8554 7.3527 11.6626L2.73484 7.13251C2.73484 7.03612 2.73484 7.03611 2.73484 6.93973L7.25652 2.6988C7.25652 2.6988 7.35273 2.6988 7.44894 2.6988L11.682 6.93973C11.9706 7.22888 12.4516 7.22888 12.7402 6.93973L17.1657 2.50601L21.6874 7.03615L17.2619 11.4699C16.9732 11.759 16.9732 12.241 17.2619 12.5301L21.5911 16.8675C21.5911 16.9639 21.5911 16.9638 21.4949 17.0602Z" })));
};

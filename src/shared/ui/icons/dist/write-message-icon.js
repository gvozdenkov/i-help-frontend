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
exports.WriteMessageIcon = void 0;
var utils_1 = require("./utils");
exports.WriteMessageIcon = function (_a) {
    var color = _a.color, _b = _a.size, size = _b === void 0 ? "24" : _b, props = __rest(_a, ["color", "size"]);
    return (React.createElement("svg", __assign({ width: size, height: size, viewBox: "0 0 24 24", fill: utils_1.getColor(color), xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M6.49563 22H6.40001C6.30435 22 6.20869 21.9019 6.20869 21.7058V17.9804H2.28694C2.09564 17.9804 2 17.8823 2 17.6863V4.25495C2 4.05887 2.09564 3.96078 2.28694 3.96078H19.313C19.5044 3.96078 19.6 4.05887 19.6 4.25495V4.54899L18.9304 5.62285V4.54899H2.47826V17.3922H6.40001C6.59131 17.3922 6.68695 17.4902 6.68695 17.6863V21.1176L10.513 17.4902C10.5609 17.4902 10.5848 17.4657 10.6087 17.4412C10.6326 17.4167 10.6565 17.3922 10.7044 17.3922H18.9304V13.6881V11.7197L19.6 10.6742V12.6311V17.6863C19.6 17.8823 19.5044 17.9804 19.313 17.9804H10.8956L6.68695 21.902C6.5913 21.902 6.49563 22 6.49563 22Z" }),
        React.createElement("path", { d: "M13.9241 16.7059C13.8349 16.7059 13.835 16.7059 13.7458 16.7059C13.6566 16.7059 13.6567 16.6148 13.6567 16.5237L13.4783 13.5171C13.4783 13.426 13.4783 13.4261 13.4783 13.335L20.6116 2.12883C20.7008 2.03772 20.8791 1.94664 20.9683 2.03774L23.9109 3.95096C24 3.95096 24 4.04213 24 4.13324C24 4.22434 24 4.3154 24 4.3154L16.8666 15.5215C16.8666 15.6127 16.7775 15.6126 16.7775 15.6126L13.9241 16.7059ZM14.0132 13.5171L14.1916 16.0682L16.51 15.1571L23.465 4.22432L20.9683 2.58436L14.0132 13.5171Z" })));
};

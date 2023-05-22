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
exports.ReadMessageIcon = void 0;
var utils_1 = require("./utils");
exports.ReadMessageIcon = function (_a) {
    var color = _a.color, _b = _a.size, size = _b === void 0 ? "24" : _b, props = __rest(_a, ["color", "size"]);
    return (React.createElement("svg", __assign({ width: size, height: size, viewBox: "0 0 24 24", fill: utils_1.getColor(color), xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M7.10868 22H7.00001C6.89131 22 6.7826 21.9021 6.7826 21.7065V17.9892H2.32607C2.10868 17.9892 2 17.8913 2 17.6956V4.29353C2 4.09787 2.10868 4 2.32607 4H21.6739C21.8913 4 22 4.09787 22 4.29353V17.6956C22 17.8913 21.8913 17.9892 21.6739 17.9892H12.1087L7.32608 21.9022C7.21739 21.9022 7.10868 22 7.10868 22ZM2.54348 17.4022H7.00001C7.2174 17.4022 7.32608 17.5 7.32608 17.6956V21.1195L11.6739 17.5C11.7826 17.5 11.7826 17.4022 11.8913 17.4022H21.2391V4.58693H2.54348V17.4022Z" }),
        React.createElement("path", { d: "M18.7391 8.30437H4.93476C4.71737 8.30437 4.60869 8.20649 4.60869 8.01084C4.60869 7.81519 4.71737 7.71743 4.93476 7.71743H18.7391C18.9565 7.71743 19.0652 7.81519 19.0652 8.01084C19.0652 8.20649 18.9565 8.30437 18.7391 8.30437Z" }),
        React.createElement("path", { d: "M18.7391 10.75H4.93476C4.71737 10.75 4.60869 10.6521 4.60869 10.4565C4.60869 10.2608 4.71737 10.1631 4.93476 10.1631H18.7391C18.9565 10.1631 19.0652 10.2608 19.0652 10.4565C19.0652 10.6521 18.9565 10.75 18.7391 10.75Z" }),
        React.createElement("path", { d: "M10.4783 13.2933H4.93476C4.71737 13.2933 4.60869 13.1956 4.60869 12.9999C4.60869 12.8043 4.71737 12.7064 4.93476 12.7064H10.4783C10.6956 12.7064 10.8044 12.8043 10.8044 12.9999C10.8044 13.0978 10.6956 13.2933 10.4783 13.2933Z" })));
};

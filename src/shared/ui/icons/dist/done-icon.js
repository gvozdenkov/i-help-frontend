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
exports.DoneIcon = void 0;
var utils_1 = require("./utils");
exports.DoneIcon = function (_a) {
    var color = _a.color, _b = _a.size, size = _b === void 0 ? "24" : _b, props = __rest(_a, ["color", "size"]);
    return (React.createElement("svg", __assign({ width: size, height: size, viewBox: "0 0 24 24", fill: utils_1.getColor(color), xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M5.23744 9.22558L9.15106 12.686L22.964 0.472933C23.3093 0.167607 24 0.371121 24 0.879997V7.80077C24 7.90254 23.8849 8.10606 23.7698 8.20783L9.38129 20.9297C9.15107 21.1333 8.69066 21.1333 8.46044 20.9297L0.172662 13.3984C-0.0575539 13.1949 -0.0575539 12.7877 0.172662 12.5842L4.20144 9.22558C4.66187 9.02203 5.00722 9.02203 5.23744 9.22558ZM0.633121 13.093L9.03598 20.5227L23.4245 7.80077V0.98181L9.61152 13.1948C9.3813 13.3984 8.92089 13.3984 8.69067 13.1948L4.6619 9.63271C2.93528 11.0576 1.09355 12.5842 0.633121 13.093Z" })));
};

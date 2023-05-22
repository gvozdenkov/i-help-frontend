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
exports.LocationIcon = void 0;
var utils_1 = require("./utils");
exports.LocationIcon = function (_a) {
    var color = _a.color, _b = _a.size, size = _b === void 0 ? "24" : _b, props = __rest(_a, ["color", "size"]);
    return (React.createElement("svg", __assign({ width: size, height: size, viewBox: "0 0 24 24", fill: utils_1.getColor(color), xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M11.5502 21.9294C11.4494 21.9306 11.3551 21.8344 11.2607 21.7382L6.64794 10.7016C5.86236 8.86239 6.20413 6.71851 7.42708 4.95373C8.65003 3.18895 10.5272 2.19489 12.5485 2.07466C12.75 2.07237 13.0522 2.06894 13.2537 2.06665C15.2622 2.14111 17.0055 3.19132 18.0053 4.83358C18.9988 6.57319 18.9593 8.71364 18.0322 10.5723L11.9659 21.7302C11.8524 21.9261 11.7517 21.9271 11.5502 21.9294ZM12.8188 2.55795C12.7181 2.55909 12.6174 2.56024 12.5166 2.56138C10.6968 2.67932 8.92039 3.67228 7.91168 5.24009C6.80223 6.80903 6.56761 8.85443 7.26519 10.5001L11.7083 21.0522L17.5412 10.3834C18.4555 8.71941 18.4886 6.6763 17.5832 5.13024C16.6777 3.58418 15.1296 2.62897 13.3226 2.55223C13.0203 2.55566 12.9196 2.5568 12.8188 2.55795Z" }),
        React.createElement("path", { d: "M12.1885 11.3054C10.258 11.3283 8.83109 9.87691 8.95422 8.01541C9.07734 6.1539 10.6987 4.66616 12.6291 4.64323C14.5596 4.62029 15.9865 6.07182 15.8634 7.93332C15.7402 9.79482 14.119 11.2824 12.1885 11.3054ZM12.5903 5.23105C10.9646 5.25036 9.66109 6.53856 9.56388 8.00816C9.4602 9.57575 10.7033 10.7357 12.2274 10.7176C13.8531 10.6982 15.1565 9.41017 15.2537 7.94056C15.4526 6.46975 14.216 5.21173 12.5903 5.23105Z" })));
};

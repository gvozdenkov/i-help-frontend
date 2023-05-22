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
exports.VkIcon = void 0;
var utils_1 = require("./utils");
exports.VkIcon = function (_a) {
    var color = _a.color, _b = _a.size, size = _b === void 0 ? "24" : _b, props = __rest(_a, ["color", "size"]);
    return (React.createElement("svg", __assign({ width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M20.2013 8.06944C20.3348 7.67778 20.2013 7.39306 19.6106 7.39306H17.6468C17.1514 7.39306 16.9226 7.64236 16.7891 7.90903C16.7891 7.90903 15.7789 10.1868 14.3681 11.6635C13.9106 12.0906 13.701 12.233 13.4531 12.233C13.3196 12.233 13.1479 12.0906 13.1479 11.6993V8.05104C13.1479 7.58854 12.9956 7.375 12.576 7.375H9.48751C9.18226 7.375 8.99176 7.58854 8.99176 7.80208C8.99176 8.24688 9.69713 8.35382 9.77326 9.59931V12.3056C9.77326 12.8927 9.66076 13 9.41101 13C8.74388 13 7.12351 10.7045 6.1515 8.08889C5.9625 7.57083 5.7705 7.375 5.27475 7.375H3.29213C2.72025 7.375 2.625 7.62396 2.625 7.89097C2.625 8.37153 3.29213 10.7913 5.73225 13.9941C7.35263 16.1816 9.65926 17.3573 11.7371 17.3573C12.9956 17.3573 13.1479 17.0903 13.1479 16.6455V14.9906C13.1479 14.4569 13.2623 14.3681 13.6628 14.3681C13.9485 14.3681 14.4634 14.5101 15.6263 15.5601C16.9605 16.8056 17.1893 17.375 17.9329 17.375H19.8964C20.4683 17.375 20.7353 17.108 20.5826 16.592C20.4113 16.076 19.7629 15.3288 18.924 14.4392C18.4665 13.9413 17.7803 13.3896 17.5706 13.1226C17.2849 12.7667 17.361 12.6243 17.5706 12.3042C17.5515 12.3042 19.9538 9.13681 20.2013 8.06806", stroke: utils_1.getColor(color) })));
};

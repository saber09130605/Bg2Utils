"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeMessage = exports.Code = void 0;
var Code;
(function (Code) {
    Code["SUCCESS"] = "SUCCESS";
    Code["NO_DOCUMENT"] = "NO_DOCUMENT";
    Code["COPY_ERROR"] = "COPY_ERROR";
})(Code || (exports.Code = Code = {}));
exports.CodeMessage = {
    [Code.SUCCESS]: "成功",
    [Code.NO_DOCUMENT]: "没有document",
    [Code.COPY_ERROR]: "复制失败"
};
